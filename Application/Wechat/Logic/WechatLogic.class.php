<?php
namespace Wechat\Logic; 
use Common\Lib\Wechat;

class WechatLogic{

    //初始化默认的微信操作类
    public static function initDefaultWechat(){
        return self::initWechatById(1);
    }


    //获取默认微信的配置
    public static function defaultWechatConfig(){
        $info = D('wechat')->where(array('id'=>C('DefaultWechatID')))->find();
        return $info;
    }

    //根据微信初始化微信操作类
    public static function initWechatByConfig($config){
        $weObj = new Wechat($config);
        return $weObj;
    }

    //初始化微信操作类
    public static function initWechatById($id){
        $info = D('wechat')->where(array('id'=>$id))->find();
print_r($info);
        if($info){
            $weObj = new Wechat($info);
            return $weObj;
        }else{
            E('微信ID不存在');
        }
    }

    public static function createWechat($info){
        return D('Wechat')->data($info)->add();
    }



}