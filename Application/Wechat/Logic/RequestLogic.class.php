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
        return session_id();
    }

    /**
     * 获取当前的用户ID
     */
    public static function getUserId(){
        $clientUserCode = self::getClientUserCode();
        $dd = S('client_server_user_'.$clientUserCode);
        return $dd;
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