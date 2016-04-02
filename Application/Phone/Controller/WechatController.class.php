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
            \Think\Log::write(print_r($weobj->getRev()->getRevData(),true),'DEBUG');
            
            $type = $weobj->getRev()->getRevType();
            switch($type) {
                case Wechat::MSGTYPE_TEXT:
                    \Think\Log::write('文本消息','DEBUG');
                    $msg = $weobj->getRev()->getRevContent();
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

                    $event = $weobj->getRev()->getRevEvent();
                    $openId = $weobj->getRev()->getRevFrom();
                    //上报定位模块
                    if($event['event'] == Wechat::EVENT_LOCATION){
                        $geoObj = $weobj->getRev()->getRevEventGeo();
                        $geo['lat'] = $geoObj['x'];
                        $geo['lng'] = $geoObj['y'];
                        $userId = \Wechat\Logic\WechatUserLogic::getUserIdByOpenId($openId);
                        \Wechat\Logic\LocationLogic::setLocation($userId,$geo);
                    }
                    //订阅模块
                    else if($event['event'] == Wechat::EVENT_SUBSCRIBE){
                        //如果不存在，就保存用户数据
                        $isExist = \Wechat\logic\WechatUserLogic::isExistOpenId($openId);
                        if(!$isExist){
                            $wechatUserInfo = $weobj->getUserInfo($openId);
                            if($wechatUserInfo){
                                \Wechat\logic\WechatUserLogic::createWechatUser($wechatUserInfo);
                            }
                        }
                        $welcomeMsg = array(
                            array(
                                'Title'=>'终于等到您来啦！',
                                'Description'=>'我们正收集北流最新鲜最好玩的，最新鲜的事情，欢迎加入我们的行列吧。',
                                'PicUrl'=>'http://media.dianduoduo.top/collect/6355.jpg_wh300.jpg',
                                'Url'=>UC('Miaoji/showcaseDispatch')
                            )
                        );
                        $weobj->news($welcomeMsg)->reply();
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
            array('name'=>"首页",'type'=>'view','url'=>UC('Miaoji/showcaseDispatch')),
            array('name'=>"便民电话",'sub_button'=>array(
                array('type'=>'view','name'=>'医院电话','url'=>UC('Miaoji/phoneCate',array('id'=>11))),
                array('type'=>'view','name'=>'学校电话','url'=>UC('Miaoji/phoneCate',array('id'=>10))),
            ))
        ));
        echo $weobj->createMenu($menu);
    }
}
