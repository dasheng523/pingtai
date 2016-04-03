<?php
/**
 * Created by PhpStorm.
 * User: yesheng
 * Date: 2016/2/6
 * Time: 18:10
 */
namespace Phone\Controller;
use Think\Controller;
class TestController extends Controller {

    //测试滤镜
    public function test(){
        $this->error('失败');
    }

    public function test2(){
        $this->success('修改成功',UC('Index/index'));
    }

    public function testWebhook(){
        echo "test4";
    }

    public function testLocation(){
        \Wechat\Logic\LocationLogic::setLocation('ddd',array('lng'=>0.554,'lat'=>5565));

        $ff = \Wechat\Logic\LocationLogic::getLocation('ddd');
        print_r($ff);
    }

    public function testAddUser(){
        $openId = '123';
        $weobj = \Wechat\Logic\WechatLogic::initDefaultWechat();
        $isExist = \Wechat\logic\WechatUserLogic::isExistOpenId($openId);
        if(!$isExist){
            $wechatUserInfo = $weobj->getUserInfo($openId);
            if($wechatUserInfo){
                \Wechat\logic\WechatUserLogic::createWechatUser($wechatUserInfo);
            }
        }
    }

    public function testChangeLoc(){
        $list = D('park')->where('ctime<>5')->select();
        foreach($list as &$info){
            $lat = $info['lat'];
            $lng = $info['lng'];
            $data = json_decode(baiduMapToSosoMap($lat,$lng),true);
            if($data['locations'][0]['lat'] && $data['locations'][0]['lng']){
                $info['lat'] = $data['locations'][0]['lat'];
                $info['lng'] = $data['locations'][0]['lng'];
                $info['ctime'] = 5;
                D('park')->save($info);
            }else{
                print_r($info);
            }

        }
        //$data = baiduMapToSosoMap(22.6992070,110.3750580);
        echo "ok";
    }

}