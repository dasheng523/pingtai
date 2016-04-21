<?php


/**
 * @param $imglist
 * 获取字符串中的第一个图片
 */
function getFirstImg($imglist){
    $temp = explode(';',$imglist);
    return $temp[0];
}

/**
 * @param $imglist
 * @return array
 * 将字符串转换成数组
 */
function parseImgList($imglist){
    return explode(';',$imglist);
}


/**
 * 获取叶子妙集
 */
function getLeafCollectionId($rootId){
    $rs = array();
    $list = D('collection')->field('id')->where(array('parent_id'=>$rootId))->select();
    if($list){
        foreach($list as $info){
            $leafs = getLeafCollectionId($info['id']);
            $rs = array_merge($rs,$leafs);
        }
    }
    else{
        $rs[] = $rootId;
    }
    return $rs;
}