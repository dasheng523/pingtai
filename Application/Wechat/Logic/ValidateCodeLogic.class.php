<?php
/**
 * Created by PhpStorm.
 * User: yesheng
 * Date: 16-3-7
 * Time: 下午7:45
 *
 * 验证码模块
 */
namespace Wechat\Logic;

class ValidateCodeLogic{

    /**
     * @param $phone
     * @return bool
     * 发送验证码
     */
    public static function sendCode($phone){
        $code = '123456';
        // TODO 发送验证码
        S('validateCode_'.$phone,$code,getSysConfig('Num_validateCodeExpires'));
        return true;
    }

    /**
     * @param $phone
     * @param $code
     * @return bool
     * 验证手机验证码
     */
    public static function verifyCode($phone,$code){
        $memCode = S('validateCode_'.$phone);
        if($memCode == $code){
            S('validateCode_'.$phone,null);
            return true;
        }
        return false;
    }

}