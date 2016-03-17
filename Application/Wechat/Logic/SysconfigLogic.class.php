<?php
namespace Wechat\Logic;

class SysconfigLogic{

    //根据key获取具体的value
    public static function getConfig($key){
        return D('sysconfig')->where(array('ckey'=>$key))->getField('cvalue');
    }

    //创建config
    public static function createConfig($info){
        return D('sysconfig')->data($info)->add();
    }

}