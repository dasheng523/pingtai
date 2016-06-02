<?php
namespace Wechat\Logic;

/**
 * Class PushLogic
 * @package Wechat\Logic
 * 推送逻辑
 */
class PushLogic{


    //主函数
    public static function push()
    {
        $openIds = self::getAllPushOpenId();
        $news = self::createNews();

        $weObj = WechatLogic::initDefaultWechat();
        foreach($openIds as &$openId){
            $push['touser'] = $openId;
            $push['msgtype'] = 'news';
            $push['news'] = $news;
            $weObj->sendCustomMessage($push);
        }
    }

    public static function pushOne($openId){
        $news = self::createNews();
        $weObj = WechatLogic::initDefaultWechat();
        $push['touser'] = $openId;
        $push['msgtype'] = 'news';
        $push['news'] = $news;
        $weObj->sendCustomMessage($push);
    }

    //获得所有需要推送的openId
    public static function getAllPushOpenId(){
        $data = D('wechat_user')->field('open_id')->select();
        $data = array_column($data,'open_id');
        $notPush = self::getNotPushOpenIdList();
        $list = array();
        foreach($data as $openid){
            if(!in_array($openid,$notPush)){
                $list[] = $openid;
            }
        }
        return $list;
    }

    public static function addNotPushOpenId($openId){
        $list = self::getNotPushOpenIdList();
        if(!in_array($openId,$list)){
            ElasticsearchLogic::addDoc(C('NotPush'),array('open_id'=>$openId));
        }
    }

    public static function removeNotPushOpenId($openId){
        $rs = ElasticsearchLogic::searchDoc(C('NotPush'),array(
            "filter" => array("match" => array("open_id" => $openId))
        ));
        $id = $rs[0]['id'];
        ElasticsearchLogic::delDoc(C('NotPush'),$id);
    }

    //获取不需要推送的名单
    public static function getNotPushOpenIdList(){
        $rs = ElasticsearchLogic::searchDoc(C('NotPush'));
        return array_column($rs,'open_id');
    }

    //推送内容
    public static function createNews(){
        $noticeMsg = self::getNoticeMsg();
        $starMsg = self::getStarShopMsg();
        $newShopMsg = self::getNewShopMsg();
        $activityMsg = self::getActivityMsg();
        $adMsg = self::getAdMsg();
        $helpMsg = self::getHelpMsg();
        $data['articles'] = array(
            $noticeMsg,$starMsg,$newShopMsg,$activityMsg,$adMsg,$helpMsg
        );

        return $data;
    }

    //公告消息
    public static function getNoticeMsg(){
        $date = date('Y/m/d');
        $search = array(
            "filter" => array("term" => array("date" => $date))
        );
        $list = ElasticsearchLogic::searchDoc(C('NoticeMsg'),$search);
        $info['title'] = $list[0]['title'];
        $info['description'] = $list[0]['description'];
        $info['url'] = $list[0]['url'];
        $info['picurl'] = $list[0]['picurl'];

        return $info;
    }

    //明星店
    public static function getStarShopMsg(){
        $shopId = D('famous_shop')->where('id=1')->getField('shop_id');
        $shopInfo = ShopLogic::getShopInfoById($shopId);

        $info = array(
            "title" => '本周明星店：'.$shopInfo['name'],
            "description" => '本周明星店',
            "url" => UC('Phone/Miaoji/famousShop'),
            'picurl' => 'http://media.dianduoduo.top/number/1.png'
        );

        return $info;
    }

    //新店入驻
    public static function getNewShopMsg(){
        $info = array(
            'title' => '欢迎新店入驻',
            'description'=> "欢迎新店入驻",
            'url' => UC('Phone/Miaoji/newShop'),
            'picurl' => 'http://media.dianduoduo.top/number/2.png'
        );
        return $info;
    }

    //活动
    public static function getActivityMsg(){
        $info = array(
            'title' => '每日商家活动，不容错过',
            'description'=> "不容错过",
            'url' => UC('Phone/Activity/showAllActivity'),
            'picurl' => 'http://media.dianduoduo.top/number/3.png'
        );
        return $info;
    }

    //广告
    public static function getAdMsg(){
        $info = array(
            'title' => '便民广告',
            'description'=> "便民广告",
            'url' => UC('Phone/Miaoji/zhaoPin'),
            'picurl' => 'http://media.dianduoduo.top/number/4.png'
        );
        return $info;
    }

    //帮助页面
    public static function getHelpMsg(){
        $info = array(
            'title' => '操作指南（回复Q可退订此推送）',
            'description'=> "操作指南",
            'url' => UC('Phone/User/help'),
            'picurl' => 'http://media.dianduoduo.top/number/5.png'
        );
        return $info;
    }



}
