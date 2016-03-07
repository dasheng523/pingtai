<?php
namespace Wechat\Logic;

/**
 * Class UserLogic
 * @package Wechat\Logic
 * 用户体系模块
 */
class UserLogic{

    /**
     * @param $userId
     * @return mixed
     * 获取用户基本信息
     */
    public static function getUserInfo($userId){
        if(!$userId){
            E("userId为空");
        }
        return D('UserInfo')->where(array('user_id'=>$userId))->find();
    }

    /**
     * @return mixed
     * 创建一个普通用户,返回uid
     */
    public static function createUser(){
        $data['ctime'] = time();
        $uid = D('User')->data($data)->add();
        self::joinToRole($uid,C('CommonCustomer'));

        return $uid;
    }


    /**
     * @param $uid
     * @return bool
     * 判断是否存在用户
     */
    public static function existUser($uid){
        $id = D('User')->where(array('id'=>$uid))->getField('id');
        if($id){
            return true;
        }
        return false;
    }

    /**
     * @param $uid
     * @return bool
     * 判断是否存在用户详细信息
     */
    public static function existUserInfo($uid){
        $id = D('UserInfo')->where(array('user_id'=>$uid))->getField('id');
        if($id){
            return true;
        }
        return false;
    }

    /**
     * @param $userInfo
     * 保存用户信息，如果已经存在就更新，如果不存在就新增
     */
    public static function saveUserInfo($userInfo){
        $uid = $userInfo['user_id'];
        $isExist = self::existUserInfo($uid);

        if($isExist){
            D('UserInfo')->where(array('user_id'=>$uid))->data($userInfo)->save($userInfo);
        }
        else{
            D('UserInfo')->data($userInfo)->add();
        }
    }

    /**
     * @param $roleName
     * @return mixed
     * 创建一个角色，返回角色ID
     */
    public static function createRole($roleName){
        $data['name'] = $roleName;
        $data['ctime'] = time();
        return D('Role')->data($data)->add();
    }


    /**
     * @param $uid
     * @param $roleId
     * 将一个uid加入到一个角色里
     */
    public static function joinToRole($uid, $roleId){
        $data['user_id'] = $uid;
        $data['role_id'] = $roleId;
        $data['ctime'] = time();
        D('UserRole')->data($data)->add();
    }



}