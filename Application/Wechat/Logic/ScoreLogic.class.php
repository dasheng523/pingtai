<?php
namespace Wechat\Logic;
use \Wechat\Logic as logic;
/**
 * Class ScoreLogic
 * @package Wechat\Logic
 * 影响力模块
 */
class ScoreLogic{


    /**
     * @param $shopId
     * @return mixed
     * 统计店铺总分
     */
    public static function totalShopScore($shopId)
    {
        return D('ShopScore')->where(array('shop_id'=>$shopId))->sum('op_score');
    }

    /**
     * @param $userId
     * @return mixed
     * 统计用户总分
     */
    public static function totalUserScore($userId)
    {
        return D('UserScore')->where(array('user_id'=>$userId))->sum('op_score');
    }

    /**
     * @param $page
     * @param $pageSize
     * 获取店铺排行榜
     */
    public static function topShopScore($page, $pageSize)
    {
        return D('ShopScore')
            ->group('shop_id')
            ->order('sum(score) desc')
            ->field('shop_id,sum(score) as totalScore')
            ->page($page,$pageSize)
            ->select();
    }

    /**
     * @param $page
     * @param $pageSize
     * @return mixed
     * 获取用户排行榜
     */
    public static function topUserScore($page,$pageSize){
        return D('UserScore')
            ->group('shop_id')
            ->order('sum(score) desc')
            ->field('shop_id,sum(score) as totalScore')
            ->page($page,$pageSize)
            ->select();
    }

    /**
     * @param $page
     * @param $pageSize
     * @return mixed
     * 获取最佳妙集榜
     */
    public static function topCollectionScore($page,$pageSize){
        $list = logic\UserUseEntityLogic::getTopLikeCollection($page,$pageSize);
        return $list;
    }

}