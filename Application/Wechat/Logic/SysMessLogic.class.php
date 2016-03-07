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
        $lastReadTime = $lastLogInfo['ctime'];
        return D('SysMess')->where("(to_user_id=0 or to_user_id=$uid) and ctime>$lastReadTime")->count(1);
    }



}