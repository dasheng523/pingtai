<?php
/**
 * Created by PhpStorm.
 * User: yesheng
 * Date: 16-3-7
 * Time: 下午4:46
 */

namespace Wechat\Logic;
use \Wechat\Logic as logic;

class ShopLogic{


    /**
     * @param $uid
     * @return bool
     * 是否已经开过店
     */
    public static function isOpenShop($uid)
    {
        $isExist = D('Shop')->where(array('user_id'=>$uid))->getField('id');
        if($isExist){
            return true;
        }
        return false;
    }


    /**
     * @param $shopInfo
     * @return mixed
     * 开店逻辑
     */
    public static function createShop($shopInfo)
    {
        return D('Shop')->data($shopInfo)->add();
    }

    /**
     * @param $uid
     * @return mixed
     * 根据用户ID获取店铺基本信息
     */
    public static function getShopInfoByUserId($uid)
    {
        return D('Shop')->where(array('user_id'=>$uid))->find();
    }

    /**
     * @param $info
     * @return bool
     * 更新店铺信息
     */
    public static function updateShop($info)
    {
        return D('Shop')->save($info);
    }


}