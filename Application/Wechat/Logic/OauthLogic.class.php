<?php
namespace Wechat\Logic;
use \Wechat\Logic as logic;

/**
 * Class OauthLogic
 * @package Wechat\Logic
 * 认证授权模块
 */
class OauthLogic{


    /**
     * 进入授权逻辑
     */
    public static function goToAuthorize(){
        //如果是微信就进入微信的授权流程
        if(isWeixin()){
            $weObj = logic\WechatLogic::initDefaultWechat();
            $url = $weObj->getOauthRedirect(UC('Oauth/authorize',array('redirect'=>currentUrl())));
            redirect($url);
        }
        //如果是别的就进入app授权流程
        else{
            self::appAuthorize();
        }
    }


    /**
     * app认证
     */
    public static function appAuthorize()
    {
        $clientUser = logic\RequestLogic::getClientUserCode();
        $uid = logic\UserLogic::createUser();
        logic\RequestLogic::setClientServerUserMap($clientUser,$uid);
    }

    /**
     * 微信回调认证
     */
    public static function wechatAuthorize(){
        //获取tokenInfo信息
        $weObj = logic\WechatLogic::initDefaultWechat();
        $tokenInfo = $weObj->getOauthAccessToken();

        $uid = 0;
        $isExist = logic\WechatUserLogic::isExistOpenId($tokenInfo['openid']);  //判断是否存在openId

        //snsapi授权
        if($tokenInfo['scope'] == 'snsapi_userinfo'){
            $wechatUserInfo = $weObj->getOauthUserinfo($tokenInfo['access_token'],$tokenInfo['openid']);    //获得微信用户的资料
        }
        //普通授权
        else{
            $wechatUserInfo['open_id'] = $tokenInfo['openid'];
        }

        //如果不存在就要保存用户信息
        if(!$isExist){
            $uid = logic\WechatUserLogic::createWechatUser($wechatUserInfo);
        }

        //设置sessionId对应UserId的键值map
        if($uid != 0){
            $clientUser = logic\RequestLogic::getClientUserCode();
            logic\RequestLogic::setClientServerUserMap($clientUser,$uid);
        }

        //跳回原来的地址
        redirect(I('get.redirect'));
    }

}