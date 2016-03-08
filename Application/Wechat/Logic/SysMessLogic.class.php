<?php
namespace Wechat\Logic;
use \Wechat\Logic as logic;
/**
 * Class SysMessLogic
 * @package Wechat\Logic
 * 系统内部消息模块
 */
class SysMessLogic{

    public static function getUnReadMessNum($uid)
    {
        $lastLogInfo = logic\UserOpLogLogic::getLastOpLog($uid,'readMess');
        if($lastLogInfo['ctime']){
            $lastReadTime = $lastLogInfo['ctime'];
        }
        else{
            $lastReadTime = 0;
        }
        return D('SysMess')->where("(to_user_id=0 or to_user_id=$uid) and ctime>$lastReadTime")->count(1);
    }

    /**
     * @param $userId
     * @return mixed
     * 获取用户的消息列表
     */
    public static function getMessListByUserId($userId)
    {
        return D('SysMess')->where(array('to_user_id'=>$userId))->select();
    }

    /**
     * @param $id
     * @return bool
     * 将消息改为已读状态
     */
    public static function setReadStatus($id)
    {
        return D('SysMess')->where(array('id'=>$id))->save(array('status'=>1));
    }

    /**
     * @param $id
     * @return mixed
     * 获取消息详情
     */
    public static function getMessInfo($id)
    {
        return D('SysMess')->where(array('id'=>$id))->find();
    }


}