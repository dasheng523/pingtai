<?php
/**
 * Created by PhpStorm.
 * User: yesheng
 * Date: 16-3-8
 * Time: 上午10:41
 */

namespace Wechat\Logic;
use \Wechat\Logic as logic;

/**
 * Class GoodsLogic
 * @package Wechat\Logic
 * 商品模块
 */
class GoodsLogic
{

    /**
     * @param $shoper
     * @param int $page
     * @param int $size
     * @return mixed
     * 店铺后台的商品列表
     */
    public static function getShopGoodsListByShoper($shoper,$page=1,$size=0)
    {
        $shop = logic\ShopLogic::getShopInfoByUserId($shoper);
        $goodsList = self::getGoodsListByShopId($shop['id'],$page,$size);
        foreach($goodsList as &$goodsInfo){
            $goodsInfo['commentnum'] = self::getGoodsCommentCount($goodsInfo['id']);
            $goodsInfo['like'] = self::getGoodsLikeCount($goodsInfo['id']);
            $goodsInfo['goodsfirstimg'] = self::getGoodsFirstImgUrl($goodsInfo['id']);
        }
        return $goodsList;
    }

    /**
     * @param $shopId
     * @param int $size
     * @param int $page
     * @return mixed
     * 根据商店ID获取商品列表
     */
    public static function getGoodsListByShopId($shopId,$page=1,$size=0){
        if($size==0){
            $size = getSysConfig('PageSize');
        }
        $list = D('goods')
            ->where(array('user_id'=>$shopId))
            ->page($page,$size)
            ->select();
        return $list;
    }

    /**
     * @param $gid
     * @return mixed
     * 获取商品的评论数量
     */
    public static function getGoodsCommentCount($gid)
    {
        return logic\UserUseEntityLogic::getCommentCount($gid,logic\UserUseEntityLogic::EntityType_Goods);
    }

    /**
     * @param $gid
     * @return mixed
     * 获取商品的喜欢数
     */
    public static function getGoodsLikeCount($gid)
    {
        return logic\UserUseEntityLogic::getLikeCount($gid,logic\UserUseEntityLogic::EntityType_Goods);
    }


    /**
     * @param $gid
     * @return mixed
     * 获取商品的第一张媒体图
     */
    public static function getGoodsFirstImgUrl($gid)
    {
        return logic\MediaLogic::getEntityFirstImgUrl($gid,logic\MediaLogic::EntityType_Goods);
    }

    /**
     * @param $gid
     * @return mixed
     * 获取商品基本内容
     */
    public static function getGoodsDetail($gid)
    {
        return D('Goods')->where(array('id'=>$gid))->find();
    }

    /**
     * @param $id
     * @return mixed
     * 获得商品图片信息
     */
    public static function getGoodsImgInfos($id)
    {
        return logic\MediaLogic::getEntityAllMedia($id,logic\MediaLogic::EntityType_Goods,logic\MediaLogic::MediaType_Image);
    }

    /**
     * @param $info
     * @param $shopId
     * @return mixed
     * 更新商品
     */
    public static function updateGoods($info,$shopId)
    {
        $info['shop_id'] = $shopId;
        return D('Goods')->data($info)->save();
    }

    /**
     * @param $info
     * @param $shopId
     * @return mixed
     * 添加商品
     */
    public static function addGoods($info, $shopId)
    {
        $info['shop_id'] = $shopId;
        return D('Goods')->data($info)->add();
    }

    /**
     * @param $id
     * @return mixed
     * 删除商品
     */
    public static function delGoods($id){
        return D('Goods')->where(array('id'=>$id))->delete();
    }

    /**
     * @param $shopId
     * @return mixed
     * 获取店铺下所有商品的喜欢数量
     */
    public static function getGoodsLikeTotalCountByShop($shopId)
    {
        $entitySql = D('Goods')->where(array('shop_id'=>$shopId))->field('goods_id')->select(false);
        $count = logic\UserUseEntityLogic::getLikeCountByEntitySql($entitySql,logic\UserUseEntityLogic::EntityType_Goods);
        return $count;
    }

    /**
     * @param $shopId
     * @return mixed
     * 获取店铺下所有商品的评论数
     */
    public static function getGoodsCommentTotalCountByShop($shopId)
    {
        $entitySql = D('Goods')->where(array('shop_id'=>$shopId))->field('goods_id')->select(false);
        $count = logic\UserUseEntityLogic::getCommentCountByEntitySql($entitySql,logic\UserUseEntityLogic::EntityType_Goods);
        return $count;
    }

    /**
     * @param $shopId
     * @return mixed
     * 获取店铺下所有商品的喜欢列表
     */
    public static function getGoodsLikeListByShop($shopId)
    {
        $entitySql = D('Goods')->where(array('shop_id'=>$shopId))->field('goods_id')->select(false);
        $list = logic\UserUseEntityLogic::getLikeListByEntitySql($entitySql,logic\UserUseEntityLogic::EntityType_Goods);
        return self::fillMoreInfo($list);
    }

    public static function getGoodsCommentListByShop($shopId)
    {
        $entitySql = D('Goods')->where(array('shop_id'=>$shopId))->field('goods_id')->select(false);
        $list = logic\UserUseEntityLogic::getCommentListByEntitySql($entitySql,logic\UserUseEntityLogic::EntityType_Goods);
        return self::fillMoreInfo($list);
    }


}