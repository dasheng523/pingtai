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
        $shopMessnum = logic\SysMessLogic::getUnReadMessNum(getUserId());

        $this->assign('nickName',$nickName);
        $this->assign('shopMessnum',$shopMessnum);
        $this->display();
    }

    /**
     * 店铺
     */
    public function shopDetail(){
        $uid = getUserId();
        $info = logic\ShopLogic::getShopInfoByUserId($uid);
        $bScope = logic\ScopeBusinessLogic::showAllTree();
        $shopImgs = logic\MediaLogic::getEntityAllImgInfo($info['id'],C('EntityType_SHOP'));
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

        $mediaIds = I('post.media_ids');
        foreach($mediaIds as $mediaId){
            $res = logic\MediaLogic::setEntityId($mediaId,$info['id']);
        }
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
        $res = 0;
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
            $id = logic\GoodsLogic::addGoods($info,$shop['id']);
        }
        //设置每个图片的entityID
        $mediaIds = I('post.media_ids');
        foreach($mediaIds as $mediaId){
            logic\MediaLogic::setEntityId($mediaId,$id);
        }
        if($res){
            $this->success("操作成功",UC('Shop/goods'));
        }else{
            $this->error("操作失败");
        }
    }

    /**
     * 商品删除页
     */
    public function goodsDel(){
        $goodsList = logic\GoodsLogic::getShopGoodsListByShoper(getUserId());
        $this->assign('list',$goodsList);
        $this->display();
    }

    /**
     * 商品执行删除
     */
    public function goodsDoDel(){
        $ids = I('post.ids');
        $res = 0;
        foreach($ids as $id){
            $res = logic\GoodsLogic::delGoods($id);
        }
        if($res){
            $this->success("操作成功",UC('Shop/goods'));
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
        $info['shop_id'] = logic\ShopLogic::getShopIdByUserId(getUserId());
        if($id){
            $info['id'] = $id;
            $res = logic\CollectionLogic::updateCollectionInfo($info);
        }else{
            $id = $res = logic\CollectionLogic::addCollectionInfo($info);
        }

        //设置每个图片的entityID
        $mediaIds = I('post.media_ids');
        foreach($mediaIds as $mediaId){
            $res = logic\MediaLogic::setEntityId($mediaId,$id);
        }
        if($res){
            $this->success("操作成功",UC('Shop/collection'));
        }else{
            $this->error("操作失败");
        }
    }

    /**
     * 秒及删除页面
     */
    public function collectionDel(){
        $shopId = logic\ShopLogic::getShopIdByUserId(getUserId());
        $list = logic\CollectionLogic::getCollectionListByShopId($shopId);
        $this->assign('list',$list);
        $this->display();
    }

    /**
     * 妙集执行删除
     */
    public function collectionDoDel(){
        $ids = I('post.ids');
        $res = false;
        foreach($ids as $id){
            $res = logic\CollectionLogic::delCollectionById($id);
        }
        if($res){
            $this->success("操作成功",UC('Shop/collection'));
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
     * 妙集商品删除页
     */
    public function collectionGoodsDel(){
        $id = I('get.id');
        $list = logic\CollectionLogic::getCollectionGoodsList($id);
        $this->assign('list',$list);
        $this->display();
    }

    /**
     * 删除妙集中的商品
     */
    public function collectionGoodsDoDel(){
        $id = I('post.id');
        $res = logic\CollectionLogic::delCollectionGoodsById($id);
        if($res){
            $this->success("操作成功");
        }else{
            $this->error("操作失败");
        }
    }

    /**
     * 粉丝页面
     */
    public function fans(){
        $shopId = logic\ShopLogic::getShopIdByUserId(getUserId());
        $goodsLikeNum = logic\GoodsLogic::getGoodsLikeTotalCountByShop($shopId);
        $collectionLikeNum = logic\CollectionLogic::getCollectionLikeTotalCountByShop($shopId);
        $likeTotal = $goodsLikeNum + $collectionLikeNum;
        $this->assign('likeTotal',$likeTotal);

        $goodsCommentNum = logic\GoodsLogic::getGoodsCommentTotalCountByShop($shopId);
        $collectionCommentNum = logic\CollectionLogic::getCollectionCommentTotalCountByShop($shopId);
        $commentTotal = $goodsCommentNum + $collectionCommentNum;
        $this->assign('commentTotal',$commentTotal);

        $this->display();
    }

    /**
     * 收藏列表
     */
    public function fansCollect(){
        $shopId = logic\ShopLogic::getShopIdByUserId(getUserId());
        $goodsLikeList = logic\GoodsLogic::getGoodsLikeListByShop($shopId);
        $collectionLikeList = logic\CollectionLogic::getGoodsLikeListByShop($shopId);

        $this->assign('goodsLikeList',$goodsLikeList);
        $this->assign('collectionLikeList',$collectionLikeList);
        $this->display();
    }

    /**
     * 评论列表
     */
    public function fansComment(){
        $shopId = logic\ShopLogic::getShopIdByUserId(getUserId());
        $goodsCommentList = logic\GoodsLogic::getGoodsCommentListByShop($shopId);
        $collectionCommentList = logic\CollectionLogic::getGoodsCommentListByShop($shopId);

        $this->assign('goodsCommentList',$goodsCommentList);
        $this->assign('collectionCommentList',$collectionCommentList);
        $this->display();
    }

    /**
     * 影响力页面
     */
    public function effect(){
        $shopId = logic\ShopLogic::getShopIdByUserId(getUserId());
        $totalScore = logic\ScoreLogic::totalShopScore($shopId);
        $taskList = logic\TaskLogic::getShopTaskList($shopId);
        $this->assign('totalScore',$totalScore+0);
        $this->assign('taskList',$taskList);
        $this->display();
    }

    /**
     * 排行榜
     */
    public function effectTopbar(){
        //全市
        $list1 = logic\ScoreLogic::topShopScore(1,getSysConfig('PageSize'));
        $list1 = logic\ShopLogic::fillShopList($list1);
        $list1 = logic\ShopLogic::fillDistance($list1);

        //附近
        $list2 = logic\ScoreLogic::topNearShopScore(1,getSysConfig('PageSize'));
        $list2 = logic\ShopLogic::fillShopList($list2);
        $list2 = logic\ShopLogic::fillDistance($list2);

        $this->assign('list1',$list1);
        $this->assign('list2',$list2);
        $this->display();
    }

}