<?php
namespace Wechat\Controller;
use Think\Controller;
class TestController extends Controller {
    public function testDB(){
        $data = M('shops')->select();
        print_r($data);
    }

    public function testCreateWechat(){
        $info = \Wechat\Logic\WechatLogic::initWechatById(2);
        print_r($info);
    }


    public function testsession_id(){
        print_r(session_id());
    }

    public function testsUc(){
        print_r(UC('Test/info'));
        print_r($_SERVER);
    }

    public function testCreateConfig(){
        $info['ckey'] = "PageSize";
        $info['cvalue'] = 10;
        $info['intro'] = "每页数量";
        echo \Wechat\Logic\SysconfigLogic::createConfig($info);
    }

    public function testWechatInsert(){
        $info['name'] = '一妙集';
        $info['token'] = '1907424487';
        $info['appid'] = 'wx0da9a07ff65da935';
        $info['app_secret'] = '9d514058e2abf4ac81a43f120f3e8205';
        $info['encodingaeskey'] = 'M93SYG9v0uWMOyW94ocHLakTXkSF5P0i72mSvUa0C6y';
        $info['originid'] = '';
        $info['mchid'] = '';
        $info['paykey'] = '';
        $info['ctime'] = time();
        echo \Wechat\Logic\WechatLogic::createWechat($info);
    }

    public function testcreateUser(){
        $info['openid'] = '5566';
        $info['nickname'] = '5566';
        $info['sex'] = 1;
        $info['province'] = '5566';
        $info['city'] = '5566';
        $info['country'] = '5566';
        $info['headimgurl'] = '5566';
        echo \Wechat\Logic\WechatUserLogic::createWechatUser($info);
    }

    public function testConfig(){
        echo C('CommonCustomer');
    }

    public function test(){
        getImage("http://www.sijiaomao.com/imgs/sjmedu.jpg","./Public/sdfsdf.jpg");
    }

    public function testAutoReply(){
        $reply = new \Wechat\Logic\AutoReplyLogic();
        $rs = $reply->handle(array('pic'=>"https://mp.weixin.qq.com/misc/getheadimg?fakeid=oqJLbt4_RQYlkGuGOVS8PRHJXv4o&token=1282952168&lang=zh_CN",'type'=>'image'));
        print_r($rs);
    }

    public function testImgGet(){
        $weobj = \Wechat\Logic\WechatLogic::initDefaultWechat();
        $weobj->valid();
        $msg = $weobj->getRev();

        $picMsg = $msg->getRevPic();
        $picUrl = $picMsg['picurl'];
        $pathUrl = "/Public/upload/".ysuuid().".jpg";
        $state = 0;
        if(startsWith($picUrl,"http://") || startsWith($picUrl,"https://")){
            getImage($picUrl,'.'.$pathUrl);
            $state = 55;
        }

        $weobj->text(print_r($picUrl,true))->reply();

    }

    public function testmoji(){
        echo "\ue327您准备好一个商品的信息了吗？\n\n准备好了，请回复 1\n待会再来，请回复 0";
        echo unicode2utf8("\ue327您准备好一个商品的信息了吗？\n\n准备好了，请回复 1\n待会再来，请回复 0");
    }
}