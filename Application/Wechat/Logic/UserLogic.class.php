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

    //openId换取userId
    public static function getUserIdByOpenId($openId){
        return D('wechat_user')->where(array('open_id'=>$openId))->getField('user_id');
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

    /**
     * @param $uid
     * @return mixed
     * 获取用户昵称
     */
    public static function getNickName($uid)
    {
        return D('UserInfo')->where(array('user_id'=>$uid))->getField('nickname');
    }

    /**
     * @param $list
     * @param string $key
     * @return mixed
     * 填充用户数据
     */
    public static function fillUserInfo($list, $key='id')
    {
        foreach($list as &$info){
            $info['userInfo'] = self::getUserInfo($info[$key]);
        }
        return $list;
    }

    /**
     * 根据ShopId填充用户数据
     * @param  [type] $list [description]
     * @param  string $key  [description]
     * @return [type]       [description]
     */
    public static function fillUserInfoByShopId($list, $key='shop_id'){
        foreach($list as &$info){
            $userId = ShopLogic::getOwnUserId($info[$key]);
            if($userId){
                $info['userInfo'] = self::getUserInfo($userId);
            }
        }
        return $list;
    }
}
