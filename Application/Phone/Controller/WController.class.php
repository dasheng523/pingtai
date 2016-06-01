<?php

namespace Phone\Controller;
use Think\Controller;
use \Wechat\Logic as logic;

//授权
class WController extends Controller {

    protected function _initialize(){
        //调用微信JS的配置
        $jsConfig = logic\WechatJsLogic::makeJSSignature(logic\WechatLogic::defaultWechatConfig());
        $this->assign('jsConfig',$jsConfig);
        //随机数
        if(APP_STATUS == 'local'){
            $rannum = generateCode();
        }else{
            $rannum = C('Version');
        }
        $this->assign('rannum',$rannum);

        //加入统计分析
        logic\ElasticsearchLogic::addDoc(C("CountMsg"),array(
            'user_id' => getUserId(),
            'ctime' => time(),
            'path' => __SELF__,
            'param' => I('param.')
        ));
    }

}
