<?php
namespace Wechat\Logic;

class SysconfigLogic{

    public static function getConfig($key){
        return D('sysconfig')->where(array('ckey'=>$key))->getField('cvalue');
    }

}