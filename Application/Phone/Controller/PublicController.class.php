<?php
/**
 * Created by PhpStorm.
 * User: yesheng
 * Date: 16-2-21
 * Time: 上午10:23
 */

namespace Phone\Controller;
use Think\Controller;
use \Wechat\Logic as logic;

/**
 * Class PublicController
 * @package Phone\Controller
 * 公共模块
 */
class PublicController extends Controller {

    /**
     * 用户消息列表页
     */
    public function message(){
        $list = logic\SysMessLogic::getMessListByUserId(getUserId());
        $this->assign('list',$list);
        $this->display();
    }

    /**
     * 用户消息详情
     */
    public function messageDetail(){
        $id = I('get.id');
        logic\SysMessLogic::setReadStatus($id);
        $info = logic\SysMessLogic::getMessInfo($id);
        $this->assign('info',$info);
        $this->display();
    }

    /**
     * 微信打开
     */
    public function wechatOpen(){
        $this->display();
    }

    public function about(){
        $this->display();
    }

    public function h5show(){
        header("Location: http://h5.eqxiu.com/s/p9hascla");
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
        $sign = sign($rsData,$wechatConfig['paykey']);
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
            $respData['return_msg'] = 'OK';
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
            $respData['return_msg'] = 'OK';
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

        //修改订单状态
        $uid = $orderInfo['user_id'];
        $addressInfo = D('user_address')->where(array('user_id'=>$uid))->find();
        //\Think\Log::write(json_encode($addressInfo),'DEBUG');
        $orderInfo['wechat_order'] = $rsData['transaction_id'];
        $orderInfo['pay_time'] = time();
        $orderInfo['real_fee'] = $rsData['cash_fee'] / 100;
        $orderInfo['address'] = $addressInfo['detailInfo'];
        $orderInfo['phone'] = $addressInfo['telNumber'];
        \Think\Log::write(json_encode($orderInfo),'DEBUG');
        D('order')->where(array('id'=>$orderInfo['id']))->save($orderInfo);

        //反馈给微信服务器
        \Think\Log::write("支付成功",'DEBUG');
        $respData['return_code'] = 'SUCCESS';
        $respData['return_msg'] = 'OK';
        echo '<xml>'.$wechat->data_to_xml($respData).'</xml>';

        //通知客户
        /*
        $customer['touser'] = $rsData['openid'];
        $customer['template_id'] = $rsData['openid'];
        $customer['url'] = UC('Goods/orderdetail',array('id'=>$orderId));
        $customer['topcolor'] = '#FF0000';
        $customer['data'] = array(
            "参数名1" => array(
                "value" => "",
                "color" => "",
            ),
        );
        $wechat->sendTemplateMessage($customer);
        */



    }
}