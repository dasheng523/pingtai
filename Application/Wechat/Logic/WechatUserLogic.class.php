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
        //创建一个用户
        $uid = logic\UserLogic::createUser();

        //保持用户信息
        $info['user_id'] = $uid;
        logic\UserLogic::saveUserInfo($info);

        //创建微信资料
        $weUser = $info;
        $weUser['wechat_id'] = C('DefaultWechatID');
        $weUser['user_id'] = $uid;
        $weUser['open_id'] = $info['openid'];
        D('WechatUser')->add($weUser);

        return $uid;
    }

    /**
     * @param $openid
     * @return bool
     * 是否已经存在了某个openid
     */
    public static function isExistOpenId($openid){
        $info = D('WechatUser')->where(array('open_id'=>$openid))->find();
        if($info){
            return true;
        }
        return false;
    }

    /**
     * @param $openid
     * @return mixed
     * 根据openid获得userId
     */
    public static function getUserIdByOpenId($openid)
    {
        $userId = D('WechatUser')->where(array('open_id'=>$openid))->getField('user_id');
        return $userId;
    }


    /**
     * @param $openId
     * 取消关注
     */
    public static function unSubscribe($openId)
    {
        D('WechatUser')->where(array('open_id'=>$openId))->save(array('subscribe'=>0));
    }
}