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

    public function _initialize() {
        $userId = logic\RequestLogic::getUserId();
        //如果$userId不存在就进入授权
        if(!$userId){
            self::goToAuthorize();
            return;
        }
    }

    //进入授权逻辑
    public static function goToAuthorize(){
        //如果是微信就进入微信的授权流程
        if(isWeixin()){
            $weobj = logic\WechatLogic::initDefaultWechat();
            $url = $weobj->getOauthRedirect(UC('Oauth/wechatAuthorize',array('redirect'=>currentUrl())));
            redirect($url);
        }
        //如果是别的就进入别的授权流程
        else{

        }
    }

    //微信回调
    public function wechatAuthorize(){
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
