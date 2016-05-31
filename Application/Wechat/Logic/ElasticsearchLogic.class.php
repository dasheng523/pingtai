<?php

namespace Wechat\Logic;
use \Wechat\Logic as logic;

/**
 * Class ElasticsearchLogic
 * @package Wechat\Logic
 * 索引模块
 */
class ElasticsearchLogic
{
    const PATH = "http://localhost:9200";
    const INDEX = "app";

    public static function getDoc($type,$id){
        $rs = httpGet(self::PATH."/".self::INDEX."/$type/".$id);
        $rs = json_decode($rs,true);
        return $rs;
    }

    public static function getDocSource($type,$id){
        $rs = self::getDoc($type,$id);
        return self::parseData($rs);
    }

    public static function searchDoc($type,$data,$params=null){
        $url = self::PATH."/".self::INDEX."/$type/_search";
        if($params){
            $url = $url . '?' .self::parseParams($params);
        }
        $rs = httpGet($url,json_encode($data));
        $rs = json_decode($rs,true);
        $hits = $rs['hits']['hits'];
        $list = array();
        foreach($hits as $info){
            $list[] = self::parseData($info);
        }
        return $list;
    }

    public static function addDoc($type,$data){
        $rs = httpPost(self::PATH."/".self::INDEX."/$type/",json_encode($data));
        $rs = json_decode($rs,true);
        return $rs['_id'];
    }

    public static function replaceDoc($type,$id,$data){
        $rs = httpPut(self::PATH."/".self::INDEX."/$type/".$id,json_encode($data));
        $rs = json_decode($rs,true);
        return $rs;
    }

    public static function updateDoc($type,$id,$data){
        $data = array('doc'=>$data);
        $rs = httpPost(self::PATH."/".self::INDEX."/$type/".$id.'/_update',json_encode($data));
        $rs = json_decode($rs,true);
        return $rs;
    }

    private static function parseData($data){
        $res = $data['_source'];
        $res['id'] = $data['_id'];
        return $res;
    }

    private static function parseParams($params){
        $t = array();
        foreach ($params as $key => $value) {
            $t[] = $key . '=' . $value;
        }
        return implode('&',$t);
    }

}