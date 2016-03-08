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
    const EntityType_Collection = 4;

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

    /**
     * @param $entitySql
     * @param $entityType
     * @param $useType
     * @return mixed
     * 根据实体的sql获取记录数
     */
    public static function getCountByEntitySql($entitySql, $entityType,$useType){
        return D('UserUseEntity')
            ->where("entity_id in $entitySql and entity_type=$entityType and use_type=$useType")
            ->count(1);
    }

    /**
     * @param $entitySql
     * @param $entityType
     * @param $useType
     * @return mixed
     * 根据实体的sql获取记录列表
     */
    public static function getListByEntitySql($entitySql, $entityType,$useType){
        return D('UserUseEntity')
            ->where("entity_id in $entitySql and entity_type=$entityType and use_type=$useType")
            ->select();
    }

    /**
     * @param $entitySql
     * @param $entityType
     * @return mixed
     * 获取实体SQL的喜欢数量
     */
    public static function getLikeCountByEntitySql($entitySql, $entityType)
    {
        return self::getCountByEntitySql($entitySql,$entityType,self::UseType_Like);
    }

    /**
     * @param $entitySql
     * @param $entityType
     * @return mixed
     * 获取实体SQL的评论数量
     */
    public static function getCommentCountByEntitySql($entitySql, $entityType)
    {
        return self::getCountByEntitySql($entitySql,$entityType,self::UseType_Comment);
    }

    /**
     * @param $entitySql
     * @param $entityType
     * @return mixed
     * 获取实体SQL的喜欢列表
     */
    public static function getLikeListByEntitySql($entitySql, $entityType)
    {
        return self::getListByEntitySql($entitySql,$entityType,self::UseType_Like);
    }

    /**
     * @param $entitySql
     * @param $entityType
     * @return mixed
     * 获取实体SQL的评论列表
     */
    public static function getCommentListByEntitySql($entitySql, $entityType)
    {
        return self::getListByEntitySql($entitySql,$entityType,self::UseType_Comment);
    }

}