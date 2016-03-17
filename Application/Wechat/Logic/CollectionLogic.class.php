<?php
/**
 * Created by PhpStorm.
 * User: yesheng
 * Date: 16-3-8
 * Time: 下午8:23
 */

namespace Wechat\Logic;
use \Wechat\Logic as logic;

/**
 * Class CollectionLogic
 * @package Wechat\Logic
 * 妙集模块
 */
class CollectionLogic
{

    /**
     * @param $shopId
     * @return mixed
     * 获取指定店铺的妙集
     */
    public static function getCollectionListByShopId($shopId)
    {
        $userId = logic\ShopLogic::getOwnUserId($shopId);
        $list = D('Collection')->where(array('user_id'=>$userId))->select();
        $list = self::fillImgList($list);
        $list = self::fillLikeNumList($list);
        $list = self::fillCommentNumList($list);
        return $list;
    }

    /**
     * @param $id
     * @return mixed
     * 根据ID获取单个妙集
     */
    public static function getCollectionInfo($id)
    {
        return D('Collection')->where(array('id'=>$id))->find();
    }

    /**
     * @param $cid
     * @return mixed
     * 获取指定妙集的封面
     */
    public static function getCollectionFaceImgInfo($cid)
    {
        return logic\MediaLogic::getEntityFirstImg($cid,C('EntityType_Collection'));
    }

    /**
     * @param $info
     * @return bool
     * 更新妙集
     */
    public static function updateCollectionInfo($info)
    {
        return D('Collection')->data($info)->save();
    }

    /**
     * @param $info
     * @return mixed
     * 添加妙集
     */
    public static function addCollectionInfo($info)
    {
        return D('Collection')->data($info)->add();
    }

    /**
     * @param $id
     * @return mixed
     * 删除秒集
     */
    public static function delCollectionById($id)
    {
        return D('Collection')->where(array('id'=>$id))->delete();
    }

    /**
     * @param $collection_id
     * @return mixed
     * 获取妙集的商品列表
     */
    public static function getCollectionGoodsList($collection_id)
    {
        $list = D('CollectionGoods')->where(array('collection_id'=>$collection_id))->select();
        $list = logic\GoodsLogic::fillImgList($list,'goods_id');
        $list = logic\GoodsLogic::fillGoodsInfo($list,'goods_id');
        return $list;
    }

    /**
     * @param $id
     * @return mixed
     * 删除妙集的某个商品
     */
    public static function delCollectionGoodsById($id)
    {
        return D('CollectionGoods')->where(array('id'=>$id))->delete();
    }

    /**
     * @param $shopId
     * @return mixed
     * 获取某商店下所有妙集的喜欢数
     */
    public static function getCollectionLikeTotalCountByShop($shopId)
    {
        $userId = logic\ShopLogic::getOwnUserId($shopId);
        $collectSql = D('Collection')->where(array('user_id'=>$userId))->field('id')->select(false);
        $entitySql = D('CollectionGoods')->where("collection_id in ($collectSql)")->field('goods_id')->select(false);
        $count = logic\UserUseEntityLogic::getLikeCountByEntitySql($entitySql,C('EntityType_Comment'));
        return $count;
    }

    /**
     * @param $shopId
     * @return mixed
     * 获取某商店下所有妙集的评论数
     */
    public static function getCollectionCommentTotalCountByShop($shopId)
    {
        $userId = logic\ShopLogic::getOwnUserId($shopId);
        $collectSql = D('Collection')->where(array('user_id'=>$userId))->field('id')->select(false);
        $entitySql = D('CollectionGoods')->where("collection_id in ($collectSql)")->field('goods_id')->select(false);
        $count = logic\UserUseEntityLogic::getCommentCountByEntitySql($entitySql,C('EntityType_Comment'));
        return $count;
    }

    /**
     * @param $shopId
     * @return mixed
     * 获取某商店下所有妙集的喜欢列表
     */
    public static function getGoodsLikeListByShop($shopId)
    {
        $userId = logic\ShopLogic::getOwnUserId($shopId);
        $collectSql = D('Collection')->where(array('user_id'=>$userId))->field('id')->select(false);
        $entitySql = D('CollectionGoods')->where("collection_id in ($collectSql)")->field('goods_id')->select(false);
        $list = logic\UserUseEntityLogic::getLikeListByEntitySql($entitySql,C('EntityType_Comment'));
        $list = self::fillImgList($list);
        $list = self::fillLikeNumList($list);
        $list = self::fillCommentNumList($list);
        return $list;
    }

    /**
     * @param $shopId
     * @return mixed
     * 获取某商店下所有妙集的评论列表
     */
    public static function getGoodsCommentListByShop($shopId)
    {
        $userId = logic\ShopLogic::getOwnUserId($shopId);
        $collectSql = D('Collection')->where(array('user_id'=>$userId))->field('id')->select(false);
        $entitySql = D('CollectionGoods')->where("collection_id in ($collectSql)")->field('goods_id')->select(false);
        $list = logic\UserUseEntityLogic::getCommentListByEntitySql($entitySql,C('EntityType_Comment'));
        $list = self::fillImgList($list);
        $list = self::fillLikeNumList($list);
        $list = self::fillCommentNumList($list);
        return $list;
    }

    /**
     * @param $list
     * @param string $key
     * @return mixed
     * 填充图片Url
     */
    private static function fillImgList($list, $key='id')
    {
        foreach($list as &$info){
            $info['faceImgUrl'] =  logic\MediaLogic::getEntityFirstImg($info[$key],C('EntityType_Collection'));
        }
        return $list;
    }

    /**
     * @param $list
     * @param string $key
     * @return mixed
     * 填充喜欢数量
     */
    private static function fillLikeNumList($list, $key='id')
    {
        foreach($list as &$info){
            $info['likeNum'] = logic\UserUseEntityLogic::getLikeCount($info[$key],C('EntityType_Collection'));
        }
        return $list;
    }

    /**
     * @param $list
     * @param string $key
     * @return mixed
     * 填充评论数量
     */
    private static function fillCommentNumList($list, $key='id')
    {
        foreach($list as &$info){
            $info['commentNum'] = logic\UserUseEntityLogic::getCommentCount($info[$key],C('EntityType_Collection'));
        }
        return $list;
    }

    /**
     * @param $list
     * @param string $key
     * @return mixed
     * 填充集合基本数据
     */
    public static function fillColleInfo($list, $key='id')
    {
        foreach($list as &$info){
            $info['collInfo'] = self::getCollectionInfo($info[$key]);
        }
        return $list;
    }
}