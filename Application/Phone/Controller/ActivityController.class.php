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
        $rannum =generateCode();
        $this->assign('rannum',$rannum);
    }

    //显示所有未结束的活动
    public function showAllActivity(){
        $now = time();
        $list = D('activity')
            ->join("shop on shop.id=activity.shop_id")
            ->field('activity.*, shop.name as shopname, shop.address, shop.phone')
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
            ->field('activity.*, shop.name as shopname, shop.address, shop.phone')
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


    //活动详情
    public function activityInfo(){
        $id = I('get.id');
        $info = D('activity')
            ->join("shop on shop.id=activity.shop_id")
            ->field('activity.*, shop.name as shopname, shop.address, shop.phone')
            ->where("activity.id=$id")
            ->find();
        $info['piclist'] = logic\ActivityLogic::getActivityFirstImgUrl($id);
        $info['lefttime'] = floor(($info['etime']-time())/3600);
        $info['isLike'] = logic\UserUseEntityLogic::isLike(getUserId(),$info['id'],C('EntityType_Activity'));
        $info['likecount'] = logic\UserUseEntityLogic::getLikeCount($info['id'],C('EntityType_Activity'));

        $goodsList = logic\ActivityLogic::getActivityGoodsList($id);

        $share['title'] = "北流重大特惠：".$info['shopname'];
        $share['intro'] = mb_substr($info['intro'], 0, 100,'utf-8');

        $this->assign('share',$share);

        $this->assign('info',$info);
        $this->assign('goodsList',$goodsList);
        $this->display();
    }

    //赞活动
    public function zanActivity(){
        $id = I('post.id');
        $uid = getUserId();
        $rs = logic\UserUseEntityLogic::like($uid,$id,C('EntityType_Activity'));
        if($rs){
            $this->success('ok');
        }else{
            $this->error('error');
        }
    }

}