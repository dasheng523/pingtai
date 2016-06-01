<?php
namespace Phone\Controller;
use Think\Controller;
use Common\Lib\Wechat;

class WechatController extends Controller {
    public function index(){
        $weobj = \Wechat\Logic\WechatLogic::initDefaultWechat();
        $notContinue = $this->defaultHandle($weobj);
        if($notContinue){
            return;
        }
        $this->autoReplyHandle($weobj);
    }

    public function autoReplyHandle($weobj){
        $reply = new \Wechat\Logic\AutoReplyLogic();
        $rs = $reply->handle($weobj);
        if($rs['type'] == 'text'){
            $weobj->text($rs['content'])->reply();
        }else if($rs['type'] == 'news'){
            $weobj->news($rs['content'])->reply();
        }
    }

    public function defaultHandle($weobj){
        //验证微信请求
        $weobj->valid();

        if(IS_POST){
            \Think\Log::write('微信客户端请求：','DEBUG');
            \Think\Log::write(json_encode($weobj->getRev()->getRevData(),true),'DEBUG');

            $type = $weobj->getRev()->getRevType();
            switch($type) {
                case Wechat::MSGTYPE_TEXT:
                    \Think\Log::write('文本消息','DEBUG');
                    $msg = $weobj->getRevContent();
                    if($msg == 'test'){
                        $weobj->text('test')->reply();
                    }
                    //转换URL
                    if(strstr($msg,'dianduoduo.top')){
                        $weobj->text('<a href="'.$msg.'">点击链接</a>')->reply();
                    }
                    break;
                case Wechat::MSGTYPE_EVENT:
                    \Think\Log::write('事件消息','DEBUG');

                    $event = $weobj->getRevEvent();
                    $openId = $weobj->getRevFrom();
                    //上报定位模块
                    if($event['event'] == Wechat::EVENT_LOCATION){
                        $geoObj = $weobj->getRevEventGeo();
                        $geo['lat'] = $geoObj['x'];
                        $geo['lng'] = $geoObj['y'];
                        $userId = \Wechat\Logic\WechatUserLogic::getUserIdByOpenId($openId);
                        \Wechat\Logic\LocationLogic::setLocation($userId,$geo);
                    }
                    //订阅模块
                    else if($event['event'] == Wechat::EVENT_SUBSCRIBE){
                        //如果不存在，就保存用户数据
                        $isExist = \Wechat\Logic\WechatUserLogic::isExistOpenId($openId);
                        if(!$isExist){
                            $wechatUserInfo = $weobj->getUserInfo($openId);
                            if($wechatUserInfo){
                                \Wechat\Logic\WechatUserLogic::createWechatUser($wechatUserInfo);
                            }
                        }
                        return 0;
                    }
                    else if($event['event'] == Wechat::EVENT_UNSUBSCRIBE){
                        \Think\Log::write('取消关注','DEBUG');
                        \Wechat\Logic\WechatUserLogic::unSubscribe($openId);
                    }
                    //其他内容
                    else{
                        return 0;
                    }
                    return 1;
                case Wechat::MSGTYPE_IMAGE:
                    \Think\Log::write('图片消息','DEBUG');
                    break;
                default:
                    \Think\Log::write('其他','DEBUG');
                    $weobj->text(">_<你这是要干嘛")->reply();
            }
        }
    }

    public function createMenu(){
        $weobj = \Wechat\Logic\WechatLogic::initDefaultWechat();
        $menu = array('button' => array(
            array('name'=>"特色",'sub_button'=>array(
                array('type'=>'view','name'=>'明星好店','url'=>UC('Miaoji/famousShop')),
                array('type'=>'view','name'=>'特色商品','url'=>UC('Miaoji/popularGoods')),
            )),
            array('name'=>"优质生活",'sub_button'=>array(
                array('type'=>'view','name'=>'便民广告','url'=>UC('Miaoji/zhaoPin')),
                array('type'=>'view','name'=>'商家活动','url'=>UC('Activity/showAllActivity')),
                array('type'=>'view','name'=>'本地店铺','url'=>UC('Miaoji/shopCate')),
                array('type'=>'view','name'=>'优惠商品','url'=>UC('Activity/hotActivity')),
            )),
            array('name'=>"店多多",'sub_button'=>array(
                array('type'=>'view','name'=>'领优惠券','url'=>UC('Activity/couponList')),
                array('type'=>'click','name'=>'智能帮助','key'=>"M"),
                array('type'=>'view','name'=>'个人中心','url'=>UC('User/index')),
                array('type'=>'view','name'=>'商家入口','url'=>UC('shop/index')),
                array('type'=>'view','name'=>'关于我们','url'=>UC('Public/h5show')),
            ))
        ));
        echo $weobj->createMenu($menu);
    }

}
