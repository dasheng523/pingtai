<?php
namespace Wechat\Logic;

class WechatJsLogic{

    //生成JS认证配置
    public static function makeJSSignature($weConfig){
        $weobj = \Wechat\Logic\WechatLogic::initWechatByConfig($weConfig);
        $signature = $weobj->getJsSign(currentUrl(),time(),md5(rand(1,9999)),$weConfig['appid']);
        $signature['jsApiList'] = [
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'onMenuShareQZone',
            'closeWindow',
            'hideAllNonBaseMenuItem',
            'previewImage',];
        return json_encode($signature);
    }

}