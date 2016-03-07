<?php
namespace Wechat\Logic;
use \Wechat\Logic as logic;

/**
 * Class WechatUserLogic
 * @package Wechat\Logic
 * 此模块为微信用户模块，跟微信用户有关的模块放在这里
 */
class WechatUserLogic{

    //用户权限标识
    public static function createUserCode($userId){
        if($userId){
            $code = ysuuid();
            S('userCode'.$code,$userId,C('UserCodeExpires'));
            return $code;
        }
        E("无法生成UserCode,userId为空");
        return 0;
    }

    /**
     * @param $info
     * @return int
     * $info 这是微信给来的用户信息
     * 返回 用户ID
     */
    public static function createWechatUser($info){
        $uid = logic\UserLogic::createUser();

        $weUser['wechat_id'] = C('DefaultWechatID');
        $weUser['user_id'] = $uid;
        $weUser['open_id'] = $info['openid'];
        $weUser['subscribe'] = $info['subscribe'];
        $weUser['subscribe_time'] = $info['subscribe_time'];
        $weUser['unionid'] = $info['unionid'];
        $weUser['remark'] = $info['remark'];
        $weUser['groupid'] = $info['groupid'];

        M('WechatUser')->add($weUser);
        return $uid;
    }

    /**
     * @param $openid
     * @return bool
     * 是否已经存在了某个openid
     */
    public static function isExistOpenId($openid){
        $info = M('WechatUser')->where(array('open_id'=>$openid))->find();
        if($info){
            return true;
        }
        return false;
    }


}