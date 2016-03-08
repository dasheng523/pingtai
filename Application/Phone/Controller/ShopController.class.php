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
    /**
     * 开店
     */
    public function openShop(){
        $isOpen = logic\ShopLogic::isOpenShop(getUserId());
        if($isOpen){
            $this->success(getSysConfig('Text_IsOpenShop'),"Shop/index");
            return;
        }
        $this->display();
    }

    /**
     * 开店提交
     */
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


    /**
     * 店首页
     */
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

    /**
     * 店铺
     */
    public function shopDetail(){
        $info = logic\ShopLogic::getShopInfoByUserId(getUserId());
        $bScope = logic\ScopeBusinessLogic::showAllTree();
        $shopImgs = logic\MediaLogic::getEntityAllImgUrl($info['id'],logic\MediaLogic::EntityType_SHOP);
        $this->assign('bScope',$bScope);
        $this->assign('info',$info);
        $this->assign('shopImgs',$shopImgs);
        $this->display();
    }

    /**
     * 提交店铺资料
     */
    public function shopEditCommit(){
        $info['id'] = I('post.id');
        $info['name'] = I('post.name');
        $info['address'] = I('post.address');
        $info['phone'] = I('post.phone');
        $info['lng'] = I('post.lng');
        $info['lat'] = I('post.lat');
        $info['intro'] = I('post.intro');
        $info['scope_business'] = I('post.bScope');

        $res = logic\ShopLogic::updateShop($info);
        if($res){
            $this->success('修改成功');
        }
        else{
            $this->error('修改失败');
        }
    }

    /**
     * 删除店铺图片
     */
    public function delShopImg(){
        $imgId = I('post.id');
        logic\MediaLogic::delMediaById($imgId);
    }

    /**
     * 添加店铺图片
     */
    public function addShopImg(){
        $info = logic\MediaLogic::updateMedia();
        logic\MediaLogic::addShopImg($info);
    }

    /**
     * 商品列表页
     */
    public function goods(){
        $goodsList = logic\GoodsLogic::getShopGoodsListByShoper(getUserId());
        $this->assign('list',$goodsList);
        $this->display();
    }

    /**
     * 商品编辑页
     */
    public function goodsEdit(){
        $id = I('get.id');
        if($id){
            $goodsDetail = logic\GoodsLogic::getGoodsDetail($id);
            $goodsImgInfos = logic\GoodsLogic::getGoodsImgInfos($id);
            $this->assign('goodsDetail',$goodsDetail);
            $this->assign('goodsImgInfos',$goodsImgInfos);
        }
        else{

        }
        $this->display();
    }

    /**
     * 商品编辑提交页
     */
    public function goodsEditCommit(){
        $id = I('post.id');
        $info['name'] = I('post.name');
        $info['price'] = I('post.price');
        $info['intro'] = I('post.intro');
        $shop = logic\ShopLogic::getShopInfoByUserId(getUserId());
        if($id){
            $info['id'] = $id;
            $res = logic\GoodsLogic::updateGoods($info,$shop['id']);
        }
        else{
            $res = logic\GoodsLogic::addGoods($info,$shop['id']);
        }
        if($res){
            $this->success("操作成功");
        }else{
            $this->error("操作失败");
        }
    }

    /**
     * 商品删除
     */
    public function goodsDel(){
        $id = I('post.id');
        $res = logic\GoodsLogic::delGoods($id);
        if($res){
            $this->success("操作成功");
        }else{
            $this->error("操作失败");
        }
    }

    /**
     * 妙集列表
     */
    public function collection(){
        $shopId = logic\ShopLogic::getShopIdByUserId(getUserId());
        $list = logic\CollectionLogic::getCollectionListByShopId($shopId);
        $this->assign('list',$list);
        $this->display();
    }

    /**
     * 妙集编辑
     */
    public function collectionEdit(){
        $id = I('get.id');
        if($id){
            $info = logic\CollectionLogic::getCollectionInfo($id);
            $imgInfo = logic\CollectionLogic::getCollectionFaceImgInfo($id);

            $this->assign('info',$info);
            $this->assign('imgInfo',$imgInfo);
        }

        $this->display();
    }

    /**
     * 妙集编辑提交
     */
    public function collectionEditCommit(){
        $id = I('post.id');
        $info['name'] = I('post.name');
        $info['intro'] = I('post.intro');
        if($id){
            $info['id'] = $id;
            $res = logic\CollectionLogic::updateCollectionInfo($info);
        }else{
            $res = logic\CollectionLogic::addCollectionInfo($info);
        }
        if($res){
            $this->success("操作成功");
        }else{
            $this->error("操作失败");
        }
    }

    /**
     * 妙集删除
     */
    public function delCollection(){
        $id = I('post.id');
        $res = logic\CollectionLogic::delCollectionById($id);
        if($res){
            $this->success("操作成功");
        }else{
            $this->error("操作失败");
        }
    }

    /**
     * 妙集详情
     */
    public function collectionInfo(){
        $id = I('get.id');
        $info = logic\CollectionLogic::getCollectionInfo($id);
        $imgInfo = logic\CollectionLogic::getCollectionFaceImgInfo($id);
        $goodsList = logic\CollectionLogic::getCollectionGoodsList($id);

        $this->assign('info',$info);
        $this->assign('imgInfo',$imgInfo);
        $this->assign('goodsList',$goodsList);
        $this->display();
    }

    /**
     * 删除妙集中的商品
     */
    public function delCollectionGoods(){
        $id = I('post.id');
        $res = logic\CollectionLogic::delCollectionGoodsById($id);
        if($res){
            $this->success("操作成功");
        }else{
            $this->error("操作失败");
        }
    }

}