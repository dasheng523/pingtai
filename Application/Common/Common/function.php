<?php

function UC($url='',$vars=''){
    return __ROOT__ . U($url,$vars);
    //return U($url,$vars,true,true);
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

//判断字符串是否以某某开始
function startsWith($haystack, $needle) {
    return $needle === "" || strpos($haystack, $needle) === 0;
}


//获取远程图片
function getImage($url = '', $fileName = '')
{
    $ch = curl_init();
    $fp = fopen($fileName, 'wb');

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_FILE, $fp);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_TIMEOUT, 60);

    curl_exec($ch);
    curl_close($ch);
    fclose($fp);
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

/**
 * @return int
 * 随机唯一数字
 */
function randomNum(){
    return (time().rand(5,888)) * -1 % 100000000;
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

//随机数
function generateCode($length = 4) {
    return rand(pow(10,($length-1)), pow(10,$length)-1);
}

/**
 * 时间格式化
 */
function formatDate($time){
    $rtime = date ( "m-d H:i", $time );
    $htime = date ( "H:i", $time );

    $now = time();
    if($time <= $now){
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
                $str = '昨天 ' . $htime;
            else
                $str = '前天 ' . $htime;
        } else {
            $str = $rtime;
        }
    }
    else{
        $al = $time - $now;
        $ahour = $al/3600;
        if($ahour > 48){
            $ahour = floor($ahour);
            $str = floor($ahour / 24) . "天后";
        }
        else{
            if($ahour < 1){
                $mini = $ahour * 60;
                $mini = floor($mini);
                $str = $mini . "分后";
            }
            else{
                $ahour = floor($ahour);
                $str = $ahour . "小时后";
            }

        }
    }


    return $str;
}

/**
 * @param $str
 * @return mixed
 * 替换换行符为<br>
 */
function replaceLine($str){
    return str_replace("\n",'<br>',$str);
}

function delLine($str){
    return str_replace("\n",'',$str);
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

function sortDistance($a,$b){
    if ($a['distance']==$b['distance']) return 0;
    return ($a['distance']<$b['distance'])?-1:1;
}


/**
 * 百度地图坐标转化为soso地图坐标
 */
function baiduMapToSosoMap($lat,$lng){
    $key = 'QIQBZ-AKC3U-4DXVB-B2CVU-WFKJT-7DFVW';
    $url = "http://apis.map.qq.com/ws/coord/v1/translate?key=$key&type=3&locations=$lat,$lng";
    return httpGet($url);
}


function httpGet($url){
    $curl = new \Common\Lib\Curl();
    return $curl->get($url);
}

function httpPost($url, $data){
    $curl = new \Common\Lib\Curl();
    return $curl->post($url, $data);
}
