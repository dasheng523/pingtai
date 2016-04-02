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

    public static function setLocation($userId, $geo)
    {
        S('location_'.$userId,$geo,3600);
    }

    public static function getLocation($userId){
        return S('location_'.$userId);
    }
}