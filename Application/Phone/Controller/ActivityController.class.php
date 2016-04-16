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
            ->field('activity.*, shop.name as shopname')
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
            $info['isLike'] = logic\UserUseEntityLogic::isLike(getUserId(),$info['id'],C('EntityType_Activity'));
            $info['likecount'] = logic\UserUseEntityLogic::getLikeCount($info['id'],C('EntityType_Activity'));
            $info['leftTime'] = $info['etime'] - time();
        }
        //print_r($list);return;
        $this->assign('list',$list);
        $this->display();
    }


    //显示某集合下的活动
    public function showCateActivity(){
        $id = I('get.id');
        $now = time();
        $list = D('activity')
            ->join("shop on shop.id=activity.shop_id")
            ->field('activity.*, shop.name as shopname')
            ->where("activity.etime>$now and activity.coll_id=$id")
            ->select();
        print_r($list);

    }


    //活动详情
    public function activityInfo(){
        $id = I('get.id');
        $info = D('activity')
            ->join("shop on shop.id=activity.shop_id")
            ->field('activity.*, shop.name as shopname')
            ->where("activity.id=$id")
            ->find();
        $goodsList = D('activity_goods')
            ->where(array('activity_id'=>$id))
            ->select();

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
