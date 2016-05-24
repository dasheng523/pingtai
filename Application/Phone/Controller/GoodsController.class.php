<?php
/**
 * Created by PhpStorm.
 * User: yesheng
 * Date: 16-2-21
 * Time: 上午10:23
 */
namespace Phone\Controller;
use \Wechat\Logic as logic;
use Think\Controller;
class GoodsController extends Controller {

    protected function _initialize(){
        //调用微信JS的配置
        $jsConfig = logic\WechatJsLogic::makeJSSignature(logic\WechatLogic::defaultWechatConfig());
        $this->assign('jsConfig',$jsConfig);
        //随机数
        //随机数
        if(APP_STATUS == 'local'){
            $rannum = generateCode();
        }else{
            $rannum = C('Version');
        }
        $this->assign('rannum',$rannum);
    }


    /**
     * 苹果醋
     */
    public function mygoods(){
        $this->display();
    }

    public function saveAddress(){
        $data = I('post.');
        $data['user_id'] = getUserId();
        $is = D('UserAddress')->where(array('user_id'=>$data['user_id']))->find();
        if($is){
            D('UserAddress')->where(array('user_id'=>$data['user_id']))->save($data);
        }else{
            D('UserAddress')->data($data)->add();
        }
        $this->success('ok');
    }

    //下单
    public function markOrder(){
        $id = I('post.id');
        $count = I('post.num');
        $goods = D('mygoods')->where(array('id'=>$id))->find();
        if($goods){
            $order['user_id'] = getUserId();
            $order['order_id'] = randomNum2();
            $order['order_time'] = time();
            $order['total_fee'] = $goods['price']*$count;
            $order['title'] = $goods['name'] . "×" . $count;
            $orderId = D('order')->data($order)->add();

            $orderGoods['order_id'] = $orderId;
            $orderGoods['goods_id'] = $id;
            $orderGoods['goods_name'] = $goods['name'];
            $orderGoods['order_amount'] = $count;
            D('order_goods')->data($orderGoods)->add();

            $this->success('ok',UC('Goods/sureOrder')."?orderid=$orderId");

        }else{
            $this->error('商品不存在');
        }
    }

    //确认下单
    public function sureOrder(){
        $uid = getUserId();
        $id = I('get.orderid');


        $userInfo = D('UserInfo')->where(array('user_id'=>$uid))->find();
        if(!$userInfo['phone']){
            $this->assign('no_phone',true);
        }
        $orderGoods = D('order_goods')->where(array('order_id'=>$id))->select();
        foreach($orderGoods as &$goods){
            $goods['price'] = D('mygoods')->where(array('id'=>$goods['goods_id']))->getField('price');
        }
        $this->assign('order_goods',$orderGoods);
        $this->assign('order_id',$id);
        $this->display();
    }

    public function prePay(){
        $orderId = I('post.orderId');
        if(!$orderId){
            echo "404商品不存在";
            return;
        }

        $order = D('order')->where(array('id'=>$orderId))->find();

        $wechatConfig = logic\WechatLogic::defaultWechatConfig();
        $wechat = logic\WechatLogic::initDefaultWechat();
        $data['appid'] = $wechatConfig['appid'];
        $data['mch_id'] = $wechatConfig['mchid'];
        $data['nonce_str'] = $wechat->generateNonceStr();
        $data['body'] = $order['title'];
        $data['detail'] = $order['title'];
        $data['out_trade_no'] = $order['order_id'];
        //$data['total_fee'] = $order['total_fee']*100;
        $data['total_fee'] = 1;
        $data['spbill_create_ip'] = get_client_ip();
        $data['notify_url'] = UC('Goods/notifyPay');
        $data['trade_type'] = "JSAPI";
        $data['openid'] = D('WechatUser')->where(array('user_id'=>getUserId()))->getField('open_id');
        \Think\Log::write("支付通知地址：".UC('Goods/notifyPay'),'DEBUG');

        $stringA = $this->sign($data,$wechatConfig['paykey']);
        $data['sign'] = $stringA;


        $dataXml = '<xml>'.$wechat->data_to_xml($data).'</xml>';

        $rs = httpPost("https://api.mch.weixin.qq.com/pay/unifiedorder",$dataXml);
        $rsData = (array)simplexml_load_string($rs, 'SimpleXMLElement', LIBXML_NOCDATA);
        $serverSign = $rsData['sign'];
        unset($rsData['sign']);
        $sign = $this->sign($rsData,$wechatConfig['paykey']);
        if($serverSign != $sign){
            echo "非法签名";
            return;
        }

        //生成支付配置
        $payConfig['appId'] = $wechatConfig['appid'];
        $payConfig['timeStamp'] = time();
        $payConfig['nonceStr'] = $wechat->generateNonceStr();
        $payConfig['package'] = "prepay_id=".$rsData['prepay_id'];
        $payConfig['signType'] = 'MD5';
        $payConfig['paySign'] = $this->sign($payConfig,$wechatConfig['paykey']);

        echo json_encode($payConfig);
    }

    public function notifyPay(){
        $postStr = file_get_contents("php://input");
        $rsData = (array)simplexml_load_string($postStr, 'SimpleXMLElement', LIBXML_NOCDATA);
        $wechatConfig = logic\WechatLogic::defaultWechatConfig();
        $wechat = logic\WechatLogic::initDefaultWechat();

        if(!$rsData){
            \Think\Log::write("请求空数据",'DEBUG');
            $respData['return_code'] = 'FAIL';
            $respData['return_msg'] = '没数据？？？';
            echo '<xml>'.$wechat->data_to_xml($respData).'</xml>';
            return;
        }

        $serverSign = $rsData['sign'];
        unset($rsData['sign']);
        $sign = $this->sign($rsData,$wechatConfig['paykey']);
        if($sign != $serverSign){
            \Think\Log::write("签名错误",'DEBUG');
            $respData['return_code'] = 'FAIL';
            $respData['return_msg'] = '签名错误';
            echo '<xml>'.$wechat->data_to_xml($respData).'</xml>';
            return;
        }
        if($rsData['return_code'] != 'SUCCESS'){
            \Think\Log::write('返回错误：'.$rsData['return_msg'],'DEBUG');
            $respData['return_code'] = 'SUCCESS';
            echo '<xml>'.$wechat->data_to_xml($respData).'</xml>';
            return;
        }
        if($rsData['result_code'] != 'SUCCESS'){
            \Think\Log::write('支付异常:'.$rsData['err_code_des'],'DEBUG');
            $errorData['order_id'] = $rsData['out_trade_no'];
            $errorData['wechat_order'] = $rsData['transaction_id'];
            $errorData['error_code'] = $rsData['err_code'];
            $errorData['error_msg'] = $rsData['err_code_des'];
            $errorData['time_end'] = $rsData['time_end'];
            $errorData['open_id'] = $rsData['openid'];
            $errorData['is_subscribe'] = $rsData['is_subscribe'];
            D('order_error')->data($errorData)->add();

            $respData['return_code'] = 'SUCCESS';
            echo '<xml>'.$wechat->data_to_xml($respData).'</xml>';
            return;
        }

        $orderId = $rsData['out_trade_no'];
        $orderInfo = D('order')->where(array('order_id'=>$orderId))->find();
        if(!$orderInfo){
            \Think\Log::write("订单不存在",'DEBUG');
            $respData['return_code'] = 'FAIL';
            $respData['return_msg'] = '订单不存在';
            echo '<xml>'.$wechat->data_to_xml($respData).'</xml>';
            return;
        }

        $orderInfo['wechat_order'] = $rsData['transaction_id'];
        $orderInfo['pay_time'] = $rsData['time_end'];
        $orderInfo['real_fee'] = $rsData['cash_fee'] / 100;
        D('order')->save($orderInfo);
        \Think\Log::write("支付成功",'DEBUG');
        $respData['return_code'] = 'SUCCESS';
        echo '<xml>'.$wechat->data_to_xml($respData).'</xml>';

    }

    public function orderList(){

    }


    private function sign($arrdata,$paykey){
        ksort($arrdata);
        $paramstring = "";
        foreach($arrdata as $key => $value)
        {
            if(strlen($paramstring) == 0)
                $paramstring .= $key . "=" . $value;
            else
                $paramstring .= "&" . $key . "=" . $value;
        }
        $stringSignTemp="$paramstring&key=$paykey";
        return strtoupper(md5($stringSignTemp));
    }
}