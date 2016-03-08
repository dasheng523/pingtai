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

    public static function getGoodsDetail($gid)
    {
        return D('Goods')->where(array('id'=>$gid))->find();
    }


}