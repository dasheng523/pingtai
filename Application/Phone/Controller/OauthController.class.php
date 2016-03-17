<?php

/**
 * 售票模块
 * 
 */
namespace Phone\Controller;
use Think\Controller;
use \Wechat\Logic as logic;

//授权
class OauthController extends Controller {

    /**
     * 微信回调认证
     */
    public function authorize(){
        //获取tokenInfo信息
        logic\OauthLogic::wechatAuthorize();
    }
}
