<?php
namespace Wechat\Logic;
use Common\Lib\Wechat;

class UserLogic{

    //获得UserId
    public static function getUserId(){
        $sid = session_id();
        $userId = S('userId'.$sid);
        return $userId;
    }

    //用户权限标识
    //主要是为了防止userid暴露出去，权限标识有有效期。每调用此函数都会重置code
    public static function getUserCode(){
        $userId = 0;
        if($userId){
            $code = ysuuid();
            S('userCode'.$code,$userId,C('UserCodeExpires'));
            return $code;
        }
        E("无法生成UserCode,userId为空");
        return 0;
    }

    //转化userCode为userId
    public static function toUserId($userCode){
        if(!$userCode){
            E("userCode为空");
        }
        return S('userCode'.$userCode);
    }

    //获取用户基本信息
    public static function getUserInfo($userId){
        if(!$userId){
            E("userId为空");
        }
        return M('UserInfo')->where(array('user_id'=>$userId))->find();
    }

    //创建一个用户
    public static function createUser(){
        $data['ctime'] = time();
        return M('User')->add($data);
    }


}