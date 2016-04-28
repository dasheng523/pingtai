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
            $goodsInfo['likenum'] = self::getGoodsLikeCount($goodsInfo['id']);
            $goodsInfo['goodsfirstimg'] = self::getGoodsFirstImgUrl($goodsInfo['id']);
        }
        return $goodsList;
    }

    public static function getShopGoodsListByShopId($shopId,$page=1,$size=0)
    {
        $goodsList = self::getGoodsListByShopId($shopId,$page,$size);
        foreach($goodsList as &$goodsInfo){
            $goodsInfo['commentnum'] = self::getGoodsCommentCount($goodsInfo['id']);
            $goodsInfo['likenum'] = self::getGoodsLikeCount($goodsInfo['id']);
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
            ->where(array('shop_id'=>$shopId))
            ->page($page,$size)
            ->order('mtime desc')
            ->select();
        return $list;
    }


    public static function getPublicGoodsListByShopId($shopId,$page=1,$size=0)
    {
        if($size==0){
            $size = getSysConfig('PageSize');
        }
        $list = D('goods')
            ->where("shop_id=$shopId and (isnull(is_hide) or is_hide=0)")
            ->page($page,$size)
            ->order('mtime desc')
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
        return logic\UserUseEntityLogic::getCommentCount($gid,C('EntityType_Goods'));
    }

    /**
     * @param $gid
     * @return mixed
     * 获取商品的喜欢数
     */
    public static function getGoodsLikeCount($gid)
    {
        return logic\UserUseEntityLogic::getLikeCount($gid,C('EntityType_Goods'));
    }


    /**
     * @param $gid
     * @return mixed
     * 获取商品的第一张媒体图
     */
    public static function getGoodsFirstImgUrl($gid)
    {
        return logic\MediaLogic::getEntityFirstImgUrl($gid,C('EntityType_Goods'));
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
        return logic\MediaLogic::getEntityAllMedia($id,C('EntityType_Goods'),C('MediaType_Image'));
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
        $info['mtime'] = time();
        return D('Goods')->save($info);
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
        $info['ctime'] = time();
        $info['mtime'] = time();
        D('Goods')->create($info,1);
        return D('Goods')->add();
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
        $entitySql = D('Goods')->where(array('shop_id'=>$shopId))->field('id')->select(false);
        $count = logic\UserUseEntityLogic::getLikeCountByEntitySql($entitySql,C('EntityType_Goods'));
        return $count;
    }

    /**
     * @param $shopId
     * @return mixed
     * 获取店铺下所有商品的评论数
     */
    public static function getGoodsCommentTotalCountByShop($shopId)
    {
        $entitySql = D('Goods')->where(array('shop_id'=>$shopId))->field('id')->select(false);
        $count = logic\UserUseEntityLogic::getCommentCountByEntitySql($entitySql,C('EntityType_Goods'));
        return $count;
    }

    /**
     * @param $shopId
     * @return mixed
     * 获取店铺下所有商品的喜欢列表
     */
    public static function getGoodsLikeListByShop($shopId)
    {
        $entitySql = D('Goods')->where(array('shop_id'=>$shopId))->field('id')->select(false);
        $list = logic\UserUseEntityLogic::getLikeListByEntitySql($entitySql,C('EntityType_Goods'));
        $list = self::fillImgList($list);
        $list = self::fillLikeNumList($list);
        $list = self::fillCommentNumList($list);
        return $list;
    }

    /**
     * @param $shopId
     * @return mixed
     * 获取店铺下所有商品的评论列表
     */
    public static function getGoodsCommentListByShop($shopId)
    {
        $entitySql = D('Goods')->where(array('shop_id'=>$shopId))->field('id')->select(false);
        $list = logic\UserUseEntityLogic::getCommentListByEntitySql($entitySql,C('EntityType_Goods'));
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
    public static function fillImgList($list,$key='id')
    {
        foreach($list as &$goodsInfo){
            $goodsInfo['goodsfirstimg'] = self::getGoodsFirstImgUrl($goodsInfo[$key]);
        }
        return $list;
    }

    /**
     * @param $list
     * @param string $key
     * @return mixed
     * 填充喜欢数量
     */
    public static function fillLikeNumList($list,$key='id')
    {
        foreach($list as &$goodsInfo){
            $goodsInfo['like'] = self::getGoodsLikeCount($goodsInfo[$key]);
        }
        return $list;
    }

    /**
     * @param $list
     * @param string $key
     * @return mixed
     * 填充评论数量
     */
    public static function fillCommentNumList($list,$key='id')
    {
        foreach($list as &$goodsInfo){
            $goodsInfo['commentnum'] = self::getGoodsCommentCount($goodsInfo[$key]);
        }
        return $list;
    }

    /**
     * @param $list
     * @param string $key
     * @return mixed
     * 填充商品基本信息
     */
    public static function fillGoodsInfo($list, $key='id')
    {
        foreach($list as &$goodsInfo){
            $goodsInfo['goodsInfo'] = self::getGoodsDetail($goodsInfo[$key]);
        }
        return $list;
    }

    /**
     * @param $list
     * @param string $key
     * @return mixed
     * 填充店铺名称
     */
    public static function fillShopName($list, $key='id')
    {
        foreach($list as &$goodsInfo){
            $goodsInfo['shopName'] = self::getShopName($goodsInfo[$key]);
        }
        return $list;
    }

    /**
     * @param $goods_id
     * @return mixed
     * 根据商品ID获得店铺名称
     */
    public static function getShopName($goods_id)
    {
        $shopId = D('Goods')->where(array('id'=>$goods_id))->getField('shop_id');
        return logic\ShopLogic::getShopNameById($shopId);
    }

    /**
     * @param $page
     * @return array
     * 商品和集合的最新内容
     */
    public static function getLastGoodsAndCollection($page){
      $page = $page - 1;
      $bufferList = self::getBufferGoodsAndCollectionList();//获取缓存数据
      $pageSize = getSysConfig('PageSize') + 0;
      $pageBegin = $page*$pageSize;
      return array_slice($bufferList,$pageBegin,$pageSize);
    }

    /**
     * @return mixed
     * 获取缓存的商品和集合资料
     */
    public static function getBufferGoodsAndCollectionList(){
      $bufferList = S('bufferGoodsAndColloction');
      if(!$bufferList){
            //获取最新商品
            $goodsLatest = self::getLatestGoods(1000);
            //获取最新集合
            $collectionLatest = logic\CollectionLogic::getLatestCollection(1000);
            //融合排序
            $bufferList = array_merge($goodsLatest,$collectionLatest);
            usort($bufferList,'sortTime');
            //保存缓存
            //S('bufferGoodsAndColloction',$list,3600);
      }
      return $bufferList;
    }

    /**
     * @param $limitNum
     * @return mixed
     * 获取最新的商品信息
     */
    public static function getLatestGoods($limitNum){
      $goodsList = D('Goods')->order('mtime desc')->page(1,$limitNum)->select();
      $list = logic\UserLogic::fillUserInfoByShopId($goodsList,'shop_id');
      $list = self::fillLikeNumList($list,'id');
      $list = self::fillCommentNumList($list,'id');
      $list = self::fillImgList($list,'id');
      return $list;
    }

    /**
     * @param $id
     * @return array
     * 获得商品所有的图片地址
     */
    public static function getGoodsAllImgUrl($id)
    {
        return logic\MediaLogic::getEntityAllImgUrl($id,C('EntityType_Goods'));
    }



}
