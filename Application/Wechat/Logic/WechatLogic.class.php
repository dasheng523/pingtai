<?php
namespace Wechat\Logic; 
use Common\Lib\Wechat;

class WechatLogic{

    public static function initDefaultWechat(){
        return self::initWechatById(1);
    }

    //初始化微信操作类
    public static function initWechatById($id){
        $info = M('wechats')->where(array('id'=>$id))->find();

        if($info){
            $weObj = new Wechat($info);
            return $weObj;
        }else{
            E('微信ID不存在');
        }
    }

}