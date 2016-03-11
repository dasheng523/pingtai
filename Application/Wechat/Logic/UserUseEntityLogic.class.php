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
        return self::count($entityId,$entityType,C('UseType_Comment'));
    }


    /**
     * @param $entityId
     * @param $entityType
     * @return mixed
     * 获取某实体的喜欢数量
     */
    public static function getLikeCount($entityId, $entityType)
    {
        return self::count($entityId,$entityType,C('UseType_Like'));
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
            ->where("entity_id in ($entitySql) and entity_type=$entityType and use_type=$useType")
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
            ->where("entity_id in ($entitySql) and entity_type=$entityType and use_type=$useType")
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
        return self::getCountByEntitySql($entitySql,$entityType,C('UseType_Like'));
    }

    /**
     * @param $entitySql
     * @param $entityType
     * @return mixed
     * 获取实体SQL的评论数量
     */
    public static function getCommentCountByEntitySql($entitySql, $entityType)
    {
        return self::getCountByEntitySql($entitySql,$entityType,C('UseType_Comment'));
    }

    /**
     * @param $entitySql
     * @param $entityType
     * @return mixed
     * 获取实体SQL的喜欢列表
     */
    public static function getLikeListByEntitySql($entitySql, $entityType)
    {
        return self::getListByEntitySql($entitySql,$entityType,C('UseType_Like'));
    }

    /**
     * @param $entitySql
     * @param $entityType
     * @return mixed
     * 获取实体SQL的评论列表
     */
    public static function getCommentListByEntitySql($entitySql, $entityType)
    {
        return self::getListByEntitySql($entitySql,$entityType,C('UseType_Comment'));
    }

    /**
     * @param $page
     * @param $pageSize
     * @return mixed
     * 获取最多喜欢的集合
     */
    public static function getTopLikeCollection($page, $pageSize)
    {
        return self::getTopList(C('EntityType_Collection'),C('UseType_Like'),$page,$pageSize);
    }

    /**
     * @param $entityType
     * @param $useType
     * @param $page
     * @param $pageSize
     * @return mixed
     * 获取排前的列表
     */
    public static function getTopList($entityType, $useType, $page, $pageSize)
    {
        return D('UserUseEntity')
            ->group('entity_id')
            ->where(array('entity_type'=>$entityType,'use_type'=>$useType))
            ->order("count(1) desc")
            ->page($page,$pageSize)
            ->field("entity_id,count(1)")
            ->select();
    }

    /**
     * @param $userId
     * @return mixed
     * 获取用户收藏妙集
     */
    public static function getUserCollection($userId)
    {
        return D('UserUseEntity')
            ->where(array("user_id=$userId",
                'entity_type'=>C('EntityType_Collection'),
                'use_type'=>C('UseType_Collection')))
            ->select();
    }

    /**
     * @param $userId
     * @return mixed
     * 获取用户收藏商品
     */
    public static function getUserGoods($userId)
    {
        return D('UserUseEntity')
            ->where(array("user_id=$userId",
                'entity_type'=>C('EntityType_Goods'),
                'use_type'=>C('UseType_Collection')))
            ->select();
    }

    /**
     * @param $userId
     * @return mixed
     * 获取用户的评论
     */
    public static function getUserComment($userId)
    {
        return D('UserUseEntity')
            ->where(array("user_id=$userId",
                'entity_type'=>C('EntityType_Comment'),
                'use_type'=>C('UseType_Comment')))
            ->select();
    }

    /**
     * @param $userId
     * @param $goodsId
     * @return mixed
     * 删除用户收藏的商品
     */
    public static function delUserCollectionGoods($userId, $goodsId)
    {
        return self::delItem($userId,$goodsId,C('EntityType_Goods'),C('UseType_Collection'));
    }

    /**
     * @param $userId
     * @param $collId
     * @return mixed
     * 删除用户收藏的妙集
     */
    public static function delUserCollectionColl($userId, $collId)
    {
        return self::delItem($userId,$collId,C('EntityType_Collection'),C('UseType_Collection'));
    }

    /**
     * @param $id
     * @return mixed
     * 删除指定ID的记录
     */
    public static function delItemById($id){
        return D('UserUseEntity')
            ->where(array('id'=>$id))
            ->delete();
    }

    /**
     * @param $userId
     * @param $entityID
     * @param $entityType
     * @param $useType
     * @return mixed
     * 删除一些项
     */
    public static function delItem($userId, $entityID, $entityType, $useType)
    {
        return D('UserUseEntity')
            ->where(array(
                "user_id"=>$userId,
                "entity_type"=>$entityType,
                "entity_id" =>$entityID,
                "use_type"=>$useType
            ))
            ->delete();
    }


}