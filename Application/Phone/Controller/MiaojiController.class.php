<?php
namespace Phone\Controller;
use Think\Controller;
use Wechat\Logic as logic;

class MiaojiController extends Controller {

    /**
     * 妙集展示
     */
    public function showcase(){
        $this->display();
    }

    /**
     * 展示里面的内容
     */
    public function showcaseDetail(){
        $this->display();
    }
}