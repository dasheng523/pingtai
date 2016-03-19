<?php

function UC($url='',$vars=''){
    //return __ROOT__ . U($path);
    return U($url,$vars,true,true);
}

function wechatInstance(){
    return \Wechat\Logic\WechatLogic::initDefaultWechat();
}

function getUserId(){
    $rs = \Wechat\Logic\RequestLogic::getUserId();

    return $rs;
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
    return 'http://'.$_SERVER['HTTP_HOST'].'/pingtai';
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

/**
 * 时间格式化
 */
function formatDate($time){
    $rtime = date ( "m-d H:i", $time );
    $htime = date ( "H:i", $time );

    $time = time () - $time;

    if ($time < 60) {
        $str = '刚刚';
    } elseif ($time < 60 * 60) {
        $min = floor ( $time / 60 );
        $str = $min . '分钟前';
    } elseif ($time < 60 * 60 * 24) {
        $h = floor ( $time / (60 * 60) );
        $str = $h . '小时前 ' . $htime;
    } elseif ($time < 60 * 60 * 24 * 3) {
        $d = floor ( $time / (60 * 60 * 24) );
        if ($d == 1)
            $str = '昨天 ' . $rtime;
        else
            $str = '前天 ' . $rtime;
    } else {
        $str = $rtime;
    }
    return $str;
}

/**
 * array_column
 */
if( ! function_exists('array_column'))
{
    function array_column($input, $columnKey, $indexKey = NULL)
    {
        $columnKeyIsNumber = (is_numeric($columnKey)) ? TRUE : FALSE;
        $indexKeyIsNull = (is_null($indexKey)) ? TRUE : FALSE;
        $indexKeyIsNumber = (is_numeric($indexKey)) ? TRUE : FALSE;
        $result = array();

        foreach ((array)$input AS $key => $row)
        {
            if ($columnKeyIsNumber)
            {
                $tmp = array_slice($row, $columnKey, 1);
                $tmp = (is_array($tmp) && !empty($tmp)) ? current($tmp) : NULL;
            }
            else
            {
                $tmp = isset($row[$columnKey]) ? $row[$columnKey] : NULL;
            }
            if ( ! $indexKeyIsNull)
            {
                if ($indexKeyIsNumber)
                {
                    $key = array_slice($row, $indexKey, 1);
                    $key = (is_array($key) && ! empty($key)) ? current($key) : NULL;
                    $key = is_null($key) ? 0 : $key;
                }
                else
                {
                    $key = isset($row[$indexKey]) ? $row[$indexKey] : 0;
                }
            }

            $result[$key] = $tmp;
        }

        return $result;
    }
}

/**
 * @param $lat1
 * @param $lng1
 * @param $lat2
 * @param $lng2
 * @return float|int
 * 计算俩坐标距离（米）
 */
function distance($lat1, $lng1, $lat2, $lng2){
    $EARTH_RADIUS = 6378.137;//地球半径
    $radLat1 = rad($lat1);
    $radLat2 = rad($lat2);
    $a = $radLat1 - $radLat2;
    $b = rad($lng1) - rad($lng2);

    $s = 2 * asin(sqrt(pow(sin($a/2),2) +
                cos($radLat1)*cos($radLat2)*pow(sin($b/2),2)));
    $s = $s * $EARTH_RADIUS;
    $s = round($s * 10000) / 10000;
    return $s;
}

function rad($d){
    return $d * pi() / 180.0;
}

function sortTime($a,$b){
  if ($a['mtime']==$b['mtime']) return 0;
  return ($a['mtime']>$b['mtime'])?-1:1;
}
