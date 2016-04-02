<?php
/**
 * Created by PhpStorm.
 * User: yesheng
 * Date: 16-4-2
 * Time: 上午10:32
 */

namespace Wechat\Logic;

/**
 * Class LocationLogic
 * @package Wechat\Logic
 * 地理定位模块
 */
class LocationLogic
{

    public static function setLocation($openId, $geo)
    {
        S('location_'.$openId,$geo,3600);
    }

    public static function getLocation($openId){
        return S('location_'.$openId);
    }
}