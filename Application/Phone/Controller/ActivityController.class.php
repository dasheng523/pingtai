<?php
/**
 * Created by PhpStorm.
 * User: yesheng
 * Date: 16-2-21
 * Time: 上午10:23
 */
namespace Phone\Controller;
use \Wechat\Logic as logic;
use Think\Controller;

class ActivityController extends Controller {

    protected function _initialize(){
        //调用微信JS的配置
        $jsConfig = logic\WechatJsLogic::makeJSSignature(logic\WechatLogic::defaultWechatConfig());
        $this->assign('jsConfig',$jsConfig);
        //随机数
        //随机数
        if(APP_STATUS == 'local'){
            $rannum = generateCode();
        }else{
            $rannum = C('Version');
        }
        $this->assign('rannum',$rannum);
    }

    //显示所有未结束的活动
    public function showAllActivity(){
        $now = time();
        $list = D('activity')
            ->join("shop on shop.id=activity.shop_id")
            ->field('activity.*, shop.name as shopname, shop.address, shop.phone')
            ->order('sort desc')
            ->where("activity.etime>$now")
            ->select();

        foreach($list as &$info){
            if($info['stime'] < time() && $info['etime'] > time()){
                $info['status'] = 1;    //已经开始
                $info['status_msg'] = "已经开始";
            }
            else if($info['stime'] > time()){
                $info['status'] = 2;    //即将开始
                $info['status_msg'] = "即将开始";
            }
            else{
                $info['status'] = 0;    //已结束
                $info['status_msg'] = "已结束";
            }
            $info['piclist'] = logic\ActivityLogic::getActivityFirstImgUrl($info['id']);
            $info['isLike'] = logic\UserUseEntityLogic::isLike(getUserId(),$info['id'],C('EntityType_Activity'));
            $info['likecount'] = logic\UserUseEntityLogic::getLikeCount($info['id'],C('EntityType_Activity'));
            $info['leftTime'] = floor(($info['etime'] - time())/3600);
        }
        $this->assign('list',$list);
        $this->assign('pageTitle',"北流特惠活动");

        $share['title'] = "北流特惠活动";
        $share['intro'] = mb_substr("店多多为您收集大量街上的优惠活动信息，为您上街购物更容易找到“着数”。", 0, 500,'utf-8');
        $this->assign('share',$share);

        $this->display();
    }

    //活动详情
    public function activityInfo(){
        $id = I('get.id');
        $info = D('activity')
            ->join("shop on shop.id=activity.shop_id")
            ->field('activity.*, shop.name as shopname, shop.address, shop.phone, shop.lat, shop.lng')
            ->where("activity.id=$id")
            ->find();
        $info['piclist'] = logic\ActivityLogic::getActivityAllImgUrl($id);
        if($info['stime'] < time() && $info['etime'] > time()){
            $info['status'] = 1;    //已经开始
            $info['status_msg'] = "已经开始";
            $info['lefttime'] =  floor(($info['etime']-time())/3600);
        }
        else if($info['stime'] > time()){
            $info['status'] = 2;    //即将开始
            $info['status_msg'] = "即将开始";
        }
        else{
            $info['status'] = 0;    //已结束
            $info['status_msg'] = "已结束";
        }
        $info['isLike'] = logic\UserUseEntityLogic::isLike(getUserId(),$info['id'],C('EntityType_Activity'));
        $info['likecount'] = logic\UserUseEntityLogic::getLikeCount($info['id'],C('EntityType_Activity'));
        $goodsList = logic\ActivityLogic::getActivityGoodsList($id);
        $share['title'] = "北流特惠：".$info['shopname'];
        $share['intro'] = delLine(mb_substr($info['intro'], 0, 100,'utf-8'));
        $this->assign('share',$share);
        $this->assign('info',$info);
        $this->assign('goodsList',$goodsList);
        $this->display();
    }


    //显示某集合下的活动
    public function showCateActivity(){
        $id = I('get.id');
        if(!$id){
            $id = 26;
        }
        $now = time();
        $list = D('activity')
            ->join("shop on shop.id=activity.shop_id")
            ->field('activity.*, shop.name as shopname, shop.address, shop.phone, shop.lat, shop.lng')
            ->where("activity.etime>$now and activity.coll_id=$id")
            ->select();
        foreach($list as &$info){
            if($info['stime'] < time() && $info['etime'] > time()){
                $info['status'] = 1;    //已经开始
                $info['status_msg'] = "已经开始";
            }
            else if($info['stime'] > time()){
                $info['status'] = 2;    //即将开始
                $info['status_msg'] = "即将开始";
            }
            else{
                $info['status'] = 0;    //已结束
                $info['status_msg'] = "已结束";
            }
            $info['piclist'] = logic\ActivityLogic::getActivityFirstImgUrl($info['id']);
            $info['isLike'] = logic\UserUseEntityLogic::isLike(getUserId(),$info['id'],C('EntityType_Activity'));
            $info['likecount'] = logic\UserUseEntityLogic::getLikeCount($info['id'],C('EntityType_Activity'));
            $info['leftTime'] = floor(($info['etime'] - time())/3600);
        }
        $cateInfo = D('collection')->where(array('id'=>$id))->find();
        $this->assign('list',$list);
        $this->assign('pageTitle',"北流".$cateInfo['name']);
        $this->display('showAllActivity');
    }

    //赞活动
    public function zanActivity(){
        $id = I('post.id');
        $uid = getUserId();
        $rs = logic\UserUseEntityLogic::like($uid,$id,C('EntityType_Activity'));
        if($rs){
            $this->success('ok');
        }else{
            $this->error('您已点击过');
        }
    }



    public function hotActivity(){
        $shopIdList = D('goods')->group('shop_id')->field('shop_id')->select(false);
        $rs = D('shop')->where("id in ($shopIdList)")->group('coll_id')->field('coll_id')->select(false);
        $list = D('Collection')->where("id in ($rs)")->order('ctime desc')->select();
        $this->assign('list',$list);

        $share['title'] = "北流店铺";
        $share['intro'] = mb_substr("店多多为您更方便找到需要的店铺", 0, 500,'utf-8');
        $this->assign('share',$share);

        $this->display();
    }

    public function hotActivityGoodsList(){
        $id = I('get.id');
        $page = I('get.page');
        if(!$page){
            $page = 1;
        }

        $entyp = C('EntityType_Goods');
        $useType = C('UseType_Like');

        $shopSql = D('shop')->where(array('coll_id'=>$id))->field('id')->select(false);
        $likeSql = D('user_use_entity')
            ->where(array("entity_type=$entyp and use_type=$useType"))
            ->group("entity_id")
            ->field("entity_id,count(1) as likea")
            ->select(false);
        $list = D('goods')
            ->join("left join($likeSql) likeCount on (likeCount.entity_id=goods.id)")
            ->where("shop_id in ($shopSql) and (isnull(is_hide) or is_hide=0)")
            ->page($page,10)
            ->order('likeCount.likea desc,id desc')
            ->select();


        foreach($list as &$info){
            $info['imgUrl'] = logic\GoodsLogic::getGoodsFirstImgUrl($info['id']);
            $info['shopName'] = logic\ShopLogic::getShopNameById($info['shop_id']);
            $info['likecount'] = logic\UserUseEntityLogic::getLikeCount($info['id'],C('EntityType_Goods'));
        }
        if($page!=1){
            echo json_encode($list);
            return;
        }
        $pageTitle = D('Collection')->where(array('id'=>$id))->getField('name');
        $this->assign('pageTitle',$pageTitle);
        $this->assign('list',$list);
        $this->display();
    }

    public function hot2(){
        $this->hotActivityGoodsList();
    }


    public function hotActivityGoodsInfo(){
        $id = I('get.id');
        $info = D('goods')->where(array('id'=>$id))->find();
        $piclist = logic\GoodsLogic::getGoodsAllImgUrl($id);

        $shopInfo = logic\ShopLogic::getShopInfoById($info['shop_id']);
        $info['shopName'] = $shopInfo['name'];
        $info['address'] = $shopInfo['address'];
        $info['phone'] = $shopInfo['phone'];
        $info['lat'] = $shopInfo['lat'];
        $info['lng'] = $shopInfo['lng'];
        $info['likecount'] = logic\UserUseEntityLogic::getLikeCount($id,C('EntityType_Goods'));
        $info['isLike'] = logic\UserUseEntityLogic::isLike(getUserId(),$id,C('EntityType_Activity'));
        $info['intro'] = replaceLine($info['intro']);

        $info['piclist'] = $piclist;
        $this->assign('info',$info);

        $share['title'] = "特惠来咯：".$info['name']."---".$shopInfo;
        $share['intro'] = delLine(mb_substr($info['intro'], 0, 500,'utf-8'));
        $this->assign('share',$share);

        $this->display();
    }

    public function zanGoods(){
        $id = I('post.id');
        $uid = getUserId();
        $rs = logic\UserUseEntityLogic::like($uid,$id,C('EntityType_Goods'));
        if($rs){
            $this->success('ok');
        }else{
            $this->error('您已点击过');
        }
    }


    /**
     * 优惠券列表
     */
    public function couponList(){
        $list = D('coupon')->where(array('status'=>1))->select();
        foreach($list as &$info){
            $info['readyCount'] = D('coupon_user')->where(array('coupon_id'=>$info['id']))->count(1);
            $info['leftCount'] = $info['max_limit'] - $info['readyCount'];
        }
        $share['title'] = "北流商家优惠券";
        $share['intro'] = mb_substr("点击这里，您可以领取到北流各类商家的优惠券，先到先得，别错过。", 0, 500,'utf-8');
        $this->assign('share',$share);


        $this->assign('list',$list);
        $this->display();
    }

    public function couponDetail(){
        $id = I('get.id');
        $info = D('coupon')->where(array('id'=>$id))->find();
        $now = time();
        if($now<$info['stime']){
            $info['time_status'] = 0;
            $info['leftTime'] = $info['stime'] - $now;
        }else if($now>$info['stime'] && $now<$info['etime']){
            $info['time_status'] = 1;
        }else{
            $info['time_status'] = 2;
        }
        $info['isGetCoupon'] = $this->isGetCoupon(getUserId(),$info['id']);


        $this->assign('info',$info);
        $this->display();
    }

    /**
     * 领取优惠券
     */
    public function receiveCoupon(){
        $id = I('post.id');
        $uid = getUserId();
        $isget = $this->isGetCoupon($uid,$id);
        if($isget){
            $this->error('您已领取该优惠券，不能重复领取');
        }else{
            $info = D('coupon')->where(array('id'=>$id))->find();
            $info['readyCount'] = D('coupon_user')->where(array('coupon_id'=>$id))->count(1);
            $leftCount = $info['max_limit'] - $info['readyCount'];
            if($leftCount>0){
                $data['coupon_id'] = $id;
                $data['user_id'] = $uid;
                $data['stime'] = $info['stime'];
                $data['etime'] = $info['etime'];
                $data['ctime'] = $info['ctime'];
                $data['status'] = 0;
                D('coupon_user')->data($data)->add();
                $this->success('恭喜您领取成功');
            }else{
                $this->error('本期优惠券已经被领完，欢迎下次再来');
            }
        }
    }

    /**
     * 使用优惠券
     */
    public function useCoupon(){

        $this->display();
    }

    private function isGetCoupon($uid,$coupon_id){
        $cu = D('coupon_user')->where(array('coupon_id'=>$coupon_id,'user_id'=>$uid))->find();
        if($cu){
            return true;
        }
        return false;
    }

}
