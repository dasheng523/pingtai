<?php
namespace Wechat\Logic;

class WechatJsLogic{

    //生成JS认证配置
    public static function makeJSSignature($weConfig){
        $weobj = \Wechat\Logic\WechatLogic::initWechatByConfig($weConfig);
        $signature = $weobj->getJsSign(currentUrl(),time(),md5(rand(1,9999)),$weConfig['appid']);
        //$signature['debug'] = true;
        $signature['jsApiList'] = [
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'onMenuShareQZone',
            'startRecord',
            'stopRecord',
            'onVoiceRecordEnd',
            'playVoice',
            'pauseVoice',
            'stopVoice',
            'onVoicePlayEnd',
            'uploadVoice',
            'downloadVoice',
            'chooseImage',
            'previewImage',
            'uploadImage',
            'downloadImage',
            'translateVoice',
            'getNetworkType',
            'openLocation',
            'getLocation',
            'hideOptionMenu',
            'showOptionMenu',
            'hideMenuItems',
            'showMenuItems',
            'hideAllNonBaseMenuItem',
            'showAllNonBaseMenuItem',
            'closeWindow',
            'scanQRCode',
            'chooseWXPay',
            'openProductSpecificView',
            'addCard',
            'chooseCard',
            'openCard'];
        return json_encode($signature);
    }

}