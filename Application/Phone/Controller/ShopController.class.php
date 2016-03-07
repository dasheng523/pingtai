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

class ShopController extends Controller {
    //开店
    public function openShop(){
        $isOpen = logic\ShopLogic::isOpenShop(getUserId());
        if($isOpen){
            $this->success(getSysConfig('Text_IsOpenShop'),"Shop/index");
            return;
        }
        $this->display();
    }

    //开店提交
    public function openShopCommit(){
        $name = I('post.name');
        $address = I('post.address');
        $phone = I('post.phone');
        $validateCode = I('post.validateCode');

        $isTrue = logic\ValidateCodeLogic::verifyCode($phone,$validateCode);
        if($isTrue){
            $shopInfo['user_id'] = getUserId();
            $shopInfo['name'] = $name;
            $shopInfo['address'] = $address;
            // TODO 该不该在开店的时候定位呢？
            $id = logic\ShopLogic::createShop($shopInfo);
            if($id){
                $this->success(getSysConfig('Text_OpenShopSuccess'),"Shop/index");
            }
        }
        else{
            $this->error(getSysConfig('Text_VerifyCodeError'));
        }
    }


    //店首页
    public function index()
    {
        $nickName = logic\UserLogic::getNickName(getUserId());
        $shopInfo = logic\ShopLogic::getShopInfoByUserId(getUserId());
        $shopMessnum = logic\SysMessLogic::getUnReadMessNum(getUserId());

        $this->assign('nickName',$nickName);
        $this->assign('shopInfo',$shopInfo);
        $this->assign('shopMessnum',$shopMessnum);
        $this->display();
    }

    //店铺
    public function shopDetail(){
        $this->display();
    }

}