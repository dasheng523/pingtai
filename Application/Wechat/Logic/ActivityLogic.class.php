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
 * 活动模块
 */
class ActivityLogic
{
    public static function getActivityListByShopId($shopId){
        return D('Activity')->where(array('shop_id'=>$shopId))->select();
    }

    /**
     * @param $aid
     * @return mixed
     * 获取活动封面
     */
    public static function getActivityFaceImgInfo($aid){
        return logic\MediaLogic::getEntityFirstImg($aid,C('EntityType_Activity'));
    }

    public static function getActivityFirstImgUrl($aid){
        return logic\MediaLogic::getEntityFirstImgUrl($aid,C('EntityType_Activity'));
    }

    public static function getActivityAllImgUrl($aid){
        return logic\MediaLogic::getEntityAllImgUrl($aid,C('EntityType_Activity'));
    }

    /**
     * @param $id
     * @return mixed
     * 获取活动详情
     */
    public static function getActivityInfo($id){
        return D('Activity')->where(array('id'=>$id))->find();
    }

    /**
     * @param $info
     * @return bool
     * 更新数据
     */
    public static function updateActivityInfo($info)
    {
        return D('Activity')->save($info);
    }

    /**
     * @param $info
     * @return mixed
     * 插入数据
     */
    public static function addActivityInfo($info)
    {
        return D('Activity')->data($info)->add();
    }

    /**
     * @param $id
     * @return mixed
     * 获取活动喜欢人数
     */
    public static function getActivityLikeNum($id)
    {
        return logic\UserUseEntityLogic::getLikeCount($id,C('EntityType_Activity'));
    }

    /**
     * @param $id
     * @return mixed
     * 获取活动商品ID列表
     */
    public static function getActivityGoodsIdList($id)
    {
        $list = D('activity_goods')->where(array('activity_id'=>$id))->field('goods_id')->select();
        return array_column($list,'goods_id');
    }

    public static function getActivityGoodsList($id)
    {
        $list = D('activity_goods')->where(array('activity_id'=>$id))->field('goods_id')->select();
        $goodsList = null;
        foreach($list as $info){
            $goodsInfo = GoodsLogic::getGoodsDetail($info['goods_id']);
            $imgurl = GoodsLogic::getGoodsFirstImgUrl($goodsInfo['id']);
            $goodsInfo['imgurl'] = $imgurl;
            $goodsList[] = $goodsInfo;
        }
        return $goodsList;
    }

    /**
     * @param $goodsidList
     * @param $id
     * @return mixed
     * 保持活动商品
     */
    public static function saveGoodsList($goodsidList, $id)
    {
        D('activity_goods')->where(array('activity_id'=>$id))->delete();
        $res = 0;
        foreach($goodsidList as $goodsId){
            $arr = array();
            $arr['activity_id'] = $id;
            $arr['goods_id'] = $goodsId;
            $arr['ctime'] = time();
            $res = D('activity_goods')->data($arr)->add();
        }
        return $res;
    }

    /**
     * @param $id
     * @return mixed
     * 删除活动
     */
    public static function delActivityById($id)
    {
        return D('activity')->where(array('id'=>$id))->delete();
    }

}
