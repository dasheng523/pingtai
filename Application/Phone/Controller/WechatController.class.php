<?php
namespace Phone\Controller;
use Think\Controller;
use Common\Lib\Wechat;

class WechatController extends Controller {
    public function index(){
        $weobj = \Wechat\Logic\WechatLogic::initDefaultWechat();
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
                        $welcomeMsg = "终于等到您来啦！\n\n我们这里收集有北流最新鲜最实用的店铺，欢迎大家收藏和分享。\n
                        如果你也知道新鲜实用的店铺，加入我们的行列吧。";
                        $weobj->text($welcomeMsg)->reply();
                        //如果不存在，就保存用户数据
                        $isExist = \Wechat\Logic\WechatUserLogic::isExistOpenId($openId);
                        if(!$isExist){
                            $wechatUserInfo = $weobj->getUserInfo($openId);
                            if($wechatUserInfo){
                                \Wechat\Logic\WechatUserLogic::createWechatUser($wechatUserInfo);
                            }
                        }
                    }
                    else if($event['event'] == Wechat::EVENT_UNSUBSCRIBE){
                        \Think\Log::write('取消关注','DEBUG');
                        \Wechat\Logic\WechatUserLogic::unSubscribe($openId);
                    }
                    //其他内容
                    else{
                        $weobj->text(getSysConfig('wechat_welcome'))->reply();
                    }
                    break;
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
            array('name'=>"聚好玩",'sub_button'=>array(
                array('type'=>'view','name'=>'KTV','url'=>UC('Miaoji/showcaseDispatch',array('id'=>4))),
                array('type'=>'view','name'=>'酒吧','url'=>UC('Miaoji/showcaseDispatch',array('id'=>15))),
                array('type'=>'view','name'=>'美食','url'=>UC('Miaoji/showcaseDispatch',array('id'=>14))),
                array('type'=>'view','name'=>'所有集合','url'=>UC('Miaoji/showcaseDispatch',array('id'=>0))),
            )),
            array('name'=>"男女部落",'sub_button'=>array(
                array('type'=>'view','name'=>'男人领地','url'=>UC('Miaoji/showcaseDispatch',array('id'=>23))),
                array('type'=>'view','name'=>'女人专属','url'=>UC('Miaoji/showcaseDispatch',array('id'=>22)))
            )),
            array('name'=>"家居生活",'sub_button'=>array(
                array('type'=>'view','name'=>'婚庆','url'=>UC('Miaoji/showcaseDispatch',array('id'=>8))),
                array('type'=>'view','name'=>'家具','url'=>UC('Miaoji/showcaseDispatch',array('id'=>18))),
                array('type'=>'view','name'=>'电器','url'=>UC('Miaoji/showcaseDispatch',array('id'=>12))),
                array('type'=>'view','name'=>'装修','url'=>UC('Miaoji/showcaseDispatch',array('id'=>19))),
                array('type'=>'view','name'=>'便民电话','url'=>UC('Miaoji/phoneList')),
            ))
        ));
        echo $weobj->createMenu($menu);
    }
}
