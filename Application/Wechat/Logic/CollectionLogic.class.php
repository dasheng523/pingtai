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
        $list = D('Collection')->where(array('shop_id'=>$shopId))->select();
        foreach($list as &$info){
            $info['faceImgUrl'] =  logic\MediaLogic::getEntityFirstImg($info['id'],logic\MediaLogic::EntityType_Collection);
            $info['likeNum'] = logic\UserUseEntityLogic::getLikeCount($info['id'],logic\UserUseEntityLogic::EntityType_Collection);
            $info['commentNum'] = logic\UserUseEntityLogic::getCommentCount($info['id'],logic\UserUseEntityLogic::EntityType_Collection);
        }
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
        return logic\MediaLogic::getEntityFirstImg($cid,logic\MediaLogic::MediaType_Image);
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
        foreach($list as &$info){
            $info['faceImg'] = logic\MediaLogic::getEntityFirstImg($info['id'],logic\MediaLogic::EntityType_Goods);
        }
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
}