<?php
/**
 * Created by PhpStorm.
 * User: yesheng
 * Date: 16-3-8
 * Time: 上午11:35
 */

namespace Wechat\Logic;
use Think\Model;
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
        $rs = D('UserUseEntity')
            ->where(array('entity_id'=>$entityId,'entity_type'=>$entityType,'use_type'=>$useType))
            ->count(1);
        return $rs;
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
     * @param $entityType
     * @param $entityId
     * @return mixed
     * 获取评论列表
     */
    public static function getCommentList($entityId,$entityType)
    {
        return D('UserUseEntity')
            ->where(array('entity_type'=>$entityType,'entity_id'=>$entityId,'use_type'=>C('UseType_Comment')))
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

    /**
     * @param $userId
     * @param $entityId
     * @param $entityType
     * @return mixed
     * 访问一个对象
     */
    public static function visit($userId, $entityId, $entityType)
    {
        $exist = D('UserUseEntity')->where(array('user_id'=>$userId,'entity_id'=>$entityId,'entity_type'=>$entityType,'use_type'=>C('UseType_Visit')))->find();
        if($exist){
            return 0;
        }
        return self::createCommonInfo($userId,C('UseType_Visit'),$entityId,$entityType);
    }

    /**
     * @param $userId
     * @param $entityId
     * @param $entityType
     * @return mixed
     * 喜欢一个对象
     */
    public static function like($userId, $entityId, $entityType){
        $exist = D('UserUseEntity')->where(array('user_id'=>$userId,'entity_id'=>$entityId,'entity_type'=>$entityType,'use_type'=>C('UseType_Like')))->find();
        if($exist){
            return 0;
        }
        return self::createCommonInfo($userId,C('UseType_Like'),$entityId,$entityType);
    }



    public static function isLike($userId, $entityId, $entityType)
    {
        $exist = D('UserUseEntity')->where(array('user_id'=>$userId,'entity_id'=>$entityId,'entity_type'=>$entityType,'use_type'=>C('UseType_Like')))->find();
        if($exist){
            return true;
        }
        return false;
    }



    public static function comment($userId, $entityId, $entityType, $content)
    {
        $exist = D('UserUseEntity')->where(array(
            'user_id'=>$userId,
            'entity_id'=>$entityId,
            'entity_type'=>$entityType,
            'use_type'=>C('UseType_Comment')))
            ->order('id desc')
            ->find();
        if($exist['ctime']>time()-3600*24){
            return 0;
        }
        return self::createCommonInfo($userId,C('UseType_Comment'),$entityId,$entityType,$content);
    }


    /**
     * @param $userId
     * @param $useType
     * @param $entityId
     * @param $entityType
     * @return mixed
     * 常规的添加记录
     */
    private static function createCommonInfo($userId, $useType, $entityId, $entityType,$content='')
    {
        $info['user_id'] = $userId;
        $info['use_type'] = $useType;
        $info['entity_id'] = $entityId;
        $info['entity_type'] = $entityType;
        $info['ccontent'] = $content;
        $info['ctime'] = time();
        return D('UserUseEntity')->data($info)->add();
    }

    /**
     * @param $page
     * @return mixed
     * 获取热门商品列表
     */
    public static function getHotGoodsList($page)
    {
        $pageSize = getSysConfig('PageSize');
        $startReco = $pageSize * ($page-1);

        $visitSql = self::countUseTimeSql(C('EntityType_Goods'),'UseType_Visit');
        $commentSql = self::countUseTimeSql(C('EntityType_Goods'),'UseType_Comment');
        $likeSql = self::countUseTimeSql(C('EntityType_Goods'),'UseType_Like');
        $collectSql = self::countUseTimeSql(C('EntityType_Goods'),'UseType_Collection');

        $sql = "select vs.entity_id,
                      vs.UseType_Visit,
                      cm.UseType_Comment,
                      lk.UseType_Like,
                      vs.UseType_Visit+cm.UseType_Comment*50+lk.UseType_Like*50 as total
                from ($visitSql) vs
                INNER join ($commentSql) cm on cm.entity_id=vs.entity_id
                INNER join ($likeSql) lk on lk.entity_id=vs.entity_id
                ORDER BY total
                limit $startReco,$pageSize";
        //print_r($sql);

        return M()->query($sql);
    }

    /**
     * @param $page
     * @return mixed
     * 获取热门妙集
     */
    public static function getHotCollectList($page)
    {
        $pageSize = getSysConfig('PageSize');
        $startReco = $pageSize * ($page-1);

        $visitSql = self::countUseTimeSql(C('EntityType_Collection'),'UseType_Visit');
        $commentSql = self::countUseTimeSql(C('EntityType_Collection'),'UseType_Comment');
        $likeSql = self::countUseTimeSql(C('EntityType_Collection'),'UseType_Like');

        $sql = "select vs.entity_id,
                      vs.UseType_Visit,
                      cm.UseType_Comment,
                      lk.UseType_Like,
                      vs.UseType_Visit+cm.UseType_Comment*50+lk.UseType_Like*50 as total
                from ($visitSql) vs
                left join ($commentSql) cm on cm.entity_id=vs.entity_id
                left join ($likeSql) lk on lk.entity_id=vs.entity_id
                ORDER BY total
                limit $startReco,$pageSize";
        //print_r($sql);
        return M()->query($sql);
    }

    /**
     * @param $entityType
     * @param $useType
     * @return mixed
     * 统计最近七天实体的使用情况的SQL
     */
    private static function countUseTimeSql($entityType,$useType){
        $beforeTime = time() - 3600*24*7;
        return D('UserUseEntity')
            ->where("entity_type=".$entityType." and use_type=".C($useType)." and ctime>$beforeTime")
            ->group('entity_id')
            ->field("entity_id,count(1) as $useType")
            ->select(false);
    }


}