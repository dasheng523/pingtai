<?php
namespace Phone\Controller;
use Think\Controller;
use Wechat\Logic as logic;

class AdminController extends Controller {

    protected function _initialize(){
        //调用微信JS的配置
        $jsConfig = logic\WechatJsLogic::makeJSSignature(logic\WechatLogic::defaultWechatConfig());
        $this->assign('jsConfig',$jsConfig);
        //随机数
        $rannum =generateCode();
        $this->assign('rannum',$rannum);
    }

    /**
     * 输入页面
     */
    public function uploadForm(){
        if(IS_POST){
            print_r($_POST);
        }
        $this->display();
    }



}