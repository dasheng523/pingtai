<?php
namespace Phone\Behaviors;
use \Think\Behavior;
use \Wechat\Logic as logic;

/**
 * Class OauthBehavior
 * @package Phone\Behaviors
 * 权限认证切面
 */
class OauthBehavior extends Behavior{
    //行为执行入口
    public function run(&$param){
        //排除一些不需要认证的控制器
        $noAuthCtrList = C('noAuthCtrList');
        if(in_array(MODULE_NAME.'/'.CONTROLLER_NAME,$noAuthCtrList)){
            return;
        }

        //本地开发模式直接进入
        if(C('LOCAL_DEV')){
            logic\RequestLogic::setClientServerUserMap(logic\RequestLogic::getClientUserCode(),1);
            return;
        }

        $userId = getUserId();
        //如果$userId不存在就进入授权
        if(!$userId){
            logic\OauthLogic::goToAuthorize();
            return;
        }
    }
}