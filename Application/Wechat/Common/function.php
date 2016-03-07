<?php

//生成唯一标识
function ysuuid(){
    return md5(uniqid(rand(),true));
}

//判断是否是微信请求
function isWeixin(){
    if ( strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') !== false ) {
        return true;
    }
    return false;
}