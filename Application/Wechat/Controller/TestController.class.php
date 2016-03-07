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
}