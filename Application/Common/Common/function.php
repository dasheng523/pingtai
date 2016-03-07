<?php

function UC($url='',$vars=''){
    //return __ROOT__ . U($path);
    return U($url,$vars,true,true);
}

function wechatInstance(){
    return \Wechat\Logic\WechatLogic::initDefaultWechat();
}

function getUserId(){
    return \Wechat\Logic\RequestLogic::getUserId();
}

//获得当前URL
function currentUrl(){
    $query = "";
    if($_SERVER['QUERY_STRING']){
        $query = '?'.$_SERVER['QUERY_STRING'];
    }
    return 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'].$query;
}
//获得项目根路径
function domainurl(){
    return 'http://'.$_SERVER['HTTP_HOST'];
}


//获取数据库中sysconfig的配置值
function getSysConfig($key){
    return \Wechat\Logic\SysconfigLogic::getConfig($key);
}


//返回星期几字符串
function weekarray($time){
    $weekarray=array("日","一","二","三","四","五","六");
    return "星期".$weekarray[date("w",$time)];
}


//调试日志
function slog($content){
    file_put_contents("./test.log",$content,FILE_APPEND);
}

function messSend($key,$val){
    S('array_'.$key,$val,3600);
}

function messPop($key){
    $v = S('array_'.$key);
    S('array_'.$key,null);
    return $v;
}

//判断是否是微信请求
function isWeixin(){
    if ( strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') !== false ) {
        return true;
    }
    return false;
}

//生成唯一标识
function ysuuid(){
    return md5(uniqid(rand(),true));
}
