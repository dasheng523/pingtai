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
            $orderId = D('order')->data($order)->add();

            $orderGoods['order_id'] = $orderId;
            $orderGoods['goods_id'] = $id;
            $orderGoods['goods_name'] = $goods['name'];
            $orderGoods['order_amount'] = $count;
            D('order_goods')->data($orderGoods)->add();

            $this->success('ok',UC('Goods/sureOrder',array('orderid'=>$orderId)));

        }else{
            $this->error('商品不存在');
        }
    }

    public function sureOrder(){
        $uid = getUserId();
        $id = I('get.orderid');
        $userInfo = D('UserInfo')->where(array('user_id'=>$uid))->find();
        if(!$userInfo['phone']){
            $this->assign('no_phone',true);
        }
        $orderGoods = D('order_goods')->where(array('order_id'=>$id))->select();
        $this->assign('order_goods',$orderGoods);
        $this->display();
    }
}