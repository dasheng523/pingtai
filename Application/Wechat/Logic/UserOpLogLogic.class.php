<?php
namespace Wechat\Logic;
use \Wechat\Logic as logic;

/**
 * Class UserOpLogLogic
 * @package Wechat\Logic
 * 用户操作日子模块
 */
class UserOpLogLogic{

    /**
     * @param $uid
     * @param $op
     * @return mixed
     * 获取制定用户，指定操作的最后记录
     */
    public static function getLastOpLog($uid, $op)
    {
        return D('UserOpLog')->where(array('user_id'=>$uid,'op'=>$op))->order('id desc')->find();
    }


}