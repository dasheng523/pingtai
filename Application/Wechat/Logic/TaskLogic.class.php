<?php
/**
 * Created by PhpStorm.
 * User: yesheng
 * Date: 16-3-9
 * Time: 上午9:04
 */

namespace Wechat\Logic;

/**
 * Class TaskLogic
 * @package Wechat\Logic
 * 任务模块
 */
class TaskLogic
{

    /**
     * @param $shopId
     * @return mixed
     * 店铺任务列表
     */
    public static function getShopTaskList($shopId)
    {
        $entityType = C('EntityType_Shop');
        $now = time();
        return D('Task')
            ->where("entity_id=$shopId and entity_type=$entityType and out_time>$now")
            ->select();
    }

    /**
     * @param $userId
     * @return mixed
     * 用户任务列表
     */
    public static function getUserTaskList($userId)
    {
        $entityType = C('EntityType_User');
        $now = time();
        return D('Task')
            ->where("entity_id=$userId and entity_type=$entityType and out_time>$now")
            ->select();
    }
}