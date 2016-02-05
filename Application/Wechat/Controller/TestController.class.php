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
}