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
        return D('Shop')->data($info)->save();
    }

    /**
     * @param $uid
     * @return mixed
     * 根据userId获取对应的店铺ID
     */
    public static function getShopIdByUserId($uid)
    {
        return D('Shop')->where(array('user_id'=>$uid))->getField('id');
    }

    /**
     * @param $list
     * @return mixed
     * 填充店铺内容列表
     */
    public static function fillShopList($list)
    {
        foreach($list as &$info){
            $shopInfo = self::getShopInfoById($info['id']);
            $info = array_merge($info,$shopInfo);
        }
        return $list;
    }

    /**
     * @param $id
     * @return mixed
     * 根据ID获取店铺信息
     */
    public static function getShopInfoById($id)
    {
        return D('Shop')
            ->where(array('id'=>$id))
            ->find();
    }

    /**
     * @param $list
     * @return mixed
     * 填充距离
     */
    public static function fillDistance($list)
    {
        foreach($list as &$info){
            $lat = $info['lat'];
            $lng = $info['lng'];
            $location = logic\RequestLogic::getLocation();
            $llat = $location['lat'];
            $llng = $location['lng'];
            $info['distance'] = distance($lat,$lng,$llat,$llng);
        }
        return $list;
    }


    /**
     * @param $shopId
     * @return mixed
     * 根据ID获取店铺名称
     */
    public static function getShopNameById($shopId)
    {
        return D('Shop')->where(array('id'=>$shopId))->getField('name');
    }

    /**
     * 获取店铺的所有者ID
     * @param $shopId
     * @return mixed
     */
    public static function getOwnUserId($shopId)
    {
        return D('Shop')->where(array('id'=>$shopId))->getField('user_id');
    }

    /**
     * @param $id
     * @return mixed
     * 获取商店图片
     */
    public static function getShopFirstImgUrl($id)
    {
        return logic\MediaLogic::getEntityFirstImgUrl($id,C('EntityType_Shop'));
    }


    public static function getShopAllImgUrl($id)
    {
        return logic\MediaLogic::getEntityAllImgUrl($id,C('EntityType_Shop'));
    }
}