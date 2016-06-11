<?php
/**
 * Created by PhpStorm.
 * User: yesheng
 * Date: 16-2-21
 * Time: 上午10:23
 */

namespace Phone\Controller;
use Think\Controller;
use \Wechat\Logic as logic;

/**
 * Class UserController
 * @package Phone\Controller
 * 顾客模块
 */
class UserController extends WController {

    /**
     * 意见反馈
     */
    public function objection(){
        if(IS_POST){
            $info['ncontent'] = I('post.ncontent');
            if($info['ncontent']){
                $info['uid'] = getUserId();
                $info['ctime'] = time();
                $res = D('objection')->data($info)->add();
                if($res){
                    $this->success('感谢您的意见反馈');
                }else{
                    $this->error('服务器似乎遇到一些问题');
                }
            }else{
                $this->error('你需要填写意见内容');
            }

            return;
        }
        $this->display();
    }

    /**
     * 首页
     */
    public function index(){
        $totalScore = logic\ScoreLogic::totalUserScore(getUserId());
        $taskList = logic\TaskLogic::getUserTaskList(getUserId());

        $this->assign('totalScore',$totalScore);
        $this->assign('taskList',$taskList);
        $this->display();
    }

    /**
     * 我的优惠券
     */
    public function couponUser(){
        $uid = getUserId();
        $list = D('coupon_user')->where(array('user_id'=>$uid))->select();
        foreach($list as &$info){
            $coupon = D('coupon')->where(array('id'=>$info['coupon_id']))->find();
            $info['name'] = $coupon['name'];
            $info['amount'] = $coupon['amount'];
        }
        $this->assign('list',$list);
        $this->display();
    }

    /**
     * 优惠券详情
     */
    public function couponUserDetail(){
        $id = I('get.id');
        $cu = D('coupon_user')->where(array('id'=>$id))->find();
        $coupon = D('coupon')->where(array('id'=>$cu['coupon_id']))->find();
        $shopInfo = D('Shop')->where(array('id'=>$coupon['shop_id']))->find();

        $url = UC('Activity/useCoupon',array('id'=>$id));

        $this->assign('url',urlencode($url));
        $this->assign('cu',$cu);
        $this->assign('coupon',$coupon);
        $this->assign('shopInfo',$shopInfo);
        $this->display();
    }


    /**
     * 我喜欢的商品
     */
    public function myGoods(){
        $goods = logic\UserUseEntityLogic::getUserLikeGoods(getUserId());
        foreach($goods as &$info){
            $info['goodsInfo'] = logic\GoodsLogic::getGoodsDetail($info['entity_id']);
            $info['goodsImg'] = logic\GoodsLogic::getGoodsFirstImgUrl($info['entity_id']);
            $info['shopName'] = logic\ShopLogic::getShopNameById($info['goodsInfo']['shop_id']);
            $info['likecount'] = logic\UserUseEntityLogic::getLikeCount($info['entity_id'],C('EntityType_Goods'));
        }
        //print_r($goods);
        $this->assign('goods',$goods);
        $this->display();
    }

    /**
     * 删除我喜欢的商品
     */
    public function delGoods(){
        $goods = logic\UserUseEntityLogic::getUserLikeGoods(getUserId());
        foreach($goods as &$info){
            $info['goodsInfo'] = logic\GoodsLogic::getGoodsDetail($info['entity_id']);
        }
        $this->assign('goods',$goods);
        $this->display();
    }

    /**
     * 删除我喜欢的商品(执行)
     */
    public function delDoGoods(){
        $goodsIds = I('post.ids');
        $res = false;
        foreach($goodsIds as $goodsId){
            $res = logic\UserUseEntityLogic::delItemById($goodsId);
        }
        if($res){
            $this->success('操作成功',UC('User/index'));
        }else{
            $this->error("操作失败");
        }
    }

    public function myLikeShop(){
        $shops = logic\UserUseEntityLogic::getUserLikeShop(getUserId());
        foreach($shops as &$info){
            $info['shopInfo'] = logic\ShopLogic::getShopInfoById($info['entity_id']);
            $info['shopImg'] = logic\ShopLogic::getShopFirstImgUrl($info['entity_id']);
            $info['likecount'] = logic\UserUseEntityLogic::getLikeCount($info['entity_id'],C('EntityType_Shop'));
            $info['isLike'] = 1;
        }
        print_r($shops);
        $this->assign('shops',$shops);
        $this->display();
    }

    public function unLike(){
        $id = I('post.id');
        $res = logic\UserUseEntityLogic::delItemById($id);
        if($res){
            $this->success('操作成功',UC('User/index'));
        }else{
            $this->error("操作失败");
        }
    }

    //我收藏的广告信息
    public function myCollectAd(){
        $uid = getUserId();
        $adList = logic\UserUseEntityLogic::getUserLikeAdMsg($uid);

        $list = array();
        foreach($adList as $adInfo){
            $eid = $adInfo['entity_id'];
            $list[] = logic\ElasticsearchLogic::getDoc(C('AdMsg'),$eid);
        }


        $this->assign('list',$list);
        $this->display();
    }

    public function unCollectMsg(){
        $id = I('post.id');
        logic\UserUseEntityLogic::delItem(getUserId(),$id,C('EntityType_AdMsg'),C('UseType_Like'));
        $this->success("操作成功");
    }

    //广告列表
    public function publishAd(){
        $uid = getUserId();
        $data1 = array(
            "filter" => array("term" => array("user_id" => $uid)),
            "sort" => array("mtime" => array('order'=>'desc'))
        );
        $list = logic\ElasticsearchLogic::searchDoc(C('AdMsg'),$data1,array('size'=>100));
        $this->assign('list',$list);
        $this->display();
    }

    //发布广告页面
    public function addAdMsg(){
        if(IS_POST){
            $id = I('post.id');
            $data['phone'] = I('post.phone');
            $data['mcontent'] = I('post.mcontent');
            $data['title'] = I('post.title');
            if($id){
                $data['mtime'] = time();
                logic\ElasticsearchLogic::updateDoc(C('AdMsg'),$id,$data);
            }else{
                $data['user_id'] = getUserId();
                $data['ctime'] = time();
                $data['mtime'] = time();
                $id = logic\ElasticsearchLogic::addDoc(C('AdMsg'),$data);
            }
            $mediaIds = I('post.media_ids');
            foreach($mediaIds as $mediaId){
                logic\MediaLogic::setEntityId($mediaId,$id);
            }
            $this->success('操作成功',UC('User/publishAd'));
            return ;
        }else{
            $id = I('get.id');
            if($id){
                $info = logic\ElasticsearchLogic::getDocSource(C('AdMsg'),$id);
                $this->assign('info',$info);
                $goodsImgInfos = logic\MediaLogic::getEntityAllMedia($id,C('EntityType_AdMsg'),C('MediaType_Image'));
                $this->assign('goodsImgInfos',$goodsImgInfos);
            }
            $this->display();
        }
    }


    /**
     * 刷新广告页面
     */
    public function freshMsg(){
        $id = I('post.id');
        if($id){
            $data['mtime'] = time();
            logic\ElasticsearchLogic::updateDoc(C('AdMsg'),$id,$data);
            $this->success('操作成功');
        }else{
            $this->error('404商品找不到');
        }
    }


    //帮助页面
    public function help(){
        $this->display();
    }


    /**
     * 删除我收藏的妙集
     */
    public function delCollection(){
        $collId = I('post.id');
        $res = logic\UserUseEntityLogic::delUserCollectionColl(getUserId(),$collId);
        if($res){
            $this->success('操作成功');
        }else{
            $this->error("操作失败");
        }
    }

    /**
     * 我的评论
     */
    public function myComment(){
        $list = logic\UserUseEntityLogic::getUserComment(getUserId());
        $this->assign('list',$list);
        $this->display();
    }

    /**
     * 我的信息
     */
    public function myInfo(){
        $info = logic\UserLogic::getUserInfo(getUserId());
        $this->assign('info',$info);
        $this->display();
    }




}