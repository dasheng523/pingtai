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



}