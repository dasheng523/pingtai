<?php
namespace Wechat\Logic;

/**
 * Class ScoreBusinessLogic
 * @package Wechat\Logic
 * 经营范围模块
 */
class ScopeBusinessLogic{

    /**
     * @return mixed
     * 返回一个列表，但是在名字前面加上一些标识
     */
    public static function showAllTree(){
        $list = self::getSubTree(0,0);
        return $list;
    }


    /**
     * @param $parentId
     * @param $level
     * @return array
     * 递归获取一棵树
     */
    private static function getSubTree($parentId,$level){
        $list = D('ScopeBusiness')->where(array('parent_id'=>$parentId))->select();
        $prefix = "";
        $resList = array();
        for($i=0;$i<$level;$i++){
            $prefix = $prefix . "--";
        }
        foreach($list as &$info){
            $info['name'] = $prefix . $info['name'];
            $resList[] = $info;
            array_merge($resList,self::getSubTree($parentId,$level++));
        }
        return $resList;
    }
}