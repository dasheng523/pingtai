<?php
/**
 * Created by PhpStorm.
 * User: yesheng
 * Date: 16-3-7
 * Time: 下午4:46
 */

namespace Wechat\Logic;

class RequestLogic{


    /**
     * @param $clientUserCode
     * @param $uid
     * 客户端和服务端的用户关联
     */
    public static function setClientServerUserMap($clientUserCode, $uid)
    {
        S('client_server_user_'.$clientUserCode,$uid,C('UserCodeExpires'));
    }

    /**
     * 获取客户端的用户code
     */
    public static function getClientUserCode()
    {
        if(isWeixin()){
            return session_id();
        }
        else{
          return I('post.code');
        }
        //redirect(UC('Public/wechatOpen'));
        //E('目前仅支持在微信里浏览');
    }

    /**
     * 获取当前的用户ID
     */
    public static function getUserId(){
        $dd = self::getRealUserId();
        $asUserId = self::getAsUser($dd);
        if($asUserId){
            return $asUserId;
        }else{
            return $dd;
        }
    }

    public static function getRealUserId(){
        if(C('LOCAL_DEV')){
            $dd = 1;
        }else{
            $clientUserCode = self::getClientUserCode();
            $dd = S('client_server_user_'.$clientUserCode);
        }
        return $dd;
    }

    /**
     * 当作某个用户
     */
    public static function asUser($userId,$asUserId){
        S('as_user_'.$userId,$asUserId,3600);
    }

    public static function getAsUser($userId){
        return S('as_user_'.$userId);
    }

    /**
     * 取消被当作某个用户
     */
    public static function cancelAsUser($userId){
        S('as_user_'.$userId,null);
    }

    /**
     * @return array
     * 获取经纬度
     */
    public static function getLocation(){
        // TODO 经纬度
        return array();
    }

}
