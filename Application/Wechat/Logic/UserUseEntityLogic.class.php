<?php
/**
 * Created by PhpStorm.
 * User: yesheng
 * Date: 16-3-8
 * Time: 上午11:35
 */

namespace Wechat\Logic;
use \Wechat\Logic as logic;

/**
 * Class UserEntityLogic
 * @package Wechat\Logic
 * 用户-使用-实体模块
 */
class UserUseEntityLogic
{

    const EntityType_Shop = 1;
    const EntityType_Goods = 2;
    const EntityType_Comment = 3;

    const UseType_Comment = 1;
    const UseType_Like = 2;

    /**
     * @param $entityId
     * @param $entityType
     * @param $useType
     * @return mixed
     * 计算某个实体的使用情况
     */
    public static function count($entityId,$entityType,$useType){
        return D('UserUseEntity')
            ->where(array('entity_id'=>$entityId,'entity_type'=>$entityType,'use_type'=>$useType))
            ->count(1);
    }

    /**
     * @param $entityId
     * @param $entityType
     * @return mixed
     * 获取某实体的评论数量
     */
    public static function getCommentCount($entityId, $entityType)
    {
        return self::count($entityId,$entityType,self::UseType_Comment);
    }


    /**
     * @param $entityId
     * @param $entityType
     * @return mixed
     * 获取某实体的喜欢数量
     */
    public static function getLikeCount($entityId, $entityType)
    {
        return self::count($entityId,$entityType,self::UseType_Like);
    }

}