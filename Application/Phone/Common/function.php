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

