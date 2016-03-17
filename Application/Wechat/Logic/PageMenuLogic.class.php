<?php
namespace Wechat\Logic;

/**
 * Class PageMenuLogic
 * @package Wechat\Logic
 * 页面菜单模块，主要是控制和设置页面上的菜单。
 * $pageMenu用来配置页面和菜单的关联关系
 * current函数用来获得当前页面所属的菜单
 * 用法：
 * 比如菜单有三个选项：gym,course,card
 * 先编写好菜单的HTML代码，在html代码中加入一些判断逻辑，比如：如果current函数返回的是gym，就设置第一个选项为当前。
 */
class PageMenuLogic{


    static $pageMenu  = array(
        "home" => array(
            'Phone/Index/index',
        ),
        "publish" => array(
            'Phone/Index/publishNeed',
            'Phone/Index/publishGoodsList'
        ),
        "bang" => array(
            'Phone/Index/topbar',
            'Phone/Index/topbarDetail'
        ),
        "user" => array(
            'Phone/User/index'
        ),
    );

    //返回地址当前属于哪个菜单
    public static function current(){
        $pathinfo = $_SERVER['REQUEST_URI'];
        foreach(self::$pageMenu as $key => $urls){
            foreach($urls as $url){
                if(strstr($pathinfo,$url)){
                    return $key;
                }
            }
        }
        return 0;
    }

}