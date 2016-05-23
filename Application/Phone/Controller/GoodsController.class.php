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
            $order['order_id'] = randomNum();
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
        $orderId = 14;

        $order = D('order')->where(array('id'=>$orderId))->find();

        $wechatConfig = logic\WechatLogic::defaultWechatConfig();
        $wechat = logic\WechatLogic::initDefaultWechat();
        $data['appid'] = $wechatConfig['appid'];
        $data['mch_id'] = $wechatConfig['mchid'];
        $data['nonce_str'] = $wechat->generateNonceStr();
        $data['body'] = $order['title'];
        $data['detail'] = $order['title'];
        $data['out_trade_no'] = $order['order_id'];
        $data['total_fee'] = $order['total_fee']*100;
        $data['spbill_create_ip'] = get_client_ip();
        $data['notify_url'] = UC('Goods/notifyPay');
        $data['trade_type'] = "JSAPI";
        $data['openid'] = D('WechatUser')->where(array('user_id'=>getUserId()))->getField('open_id');
        //print_r($data);

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