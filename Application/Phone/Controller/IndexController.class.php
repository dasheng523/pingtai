<?php
namespace Phone\Controller;
use Think\Controller;
use Wechat\Logic as logic;

class IndexController extends Controller {

    protected function _initialize(){
        //初始化菜单
        $currentMenu = logic\PageMenuLogic::current();
        if($currentMenu){
            $this->assign('current',$currentMenu);
            $tplBar = $this->fetch('Index:tplBar');
            $this->assign('tplBar',$tplBar);
        }
    }

    /**
     * 首页
     */
    public function index(){
        $page = 1;
        $goodsList = logic\UserUseEntityLogic::getHotGoodsList($page);
        $goodsList = logic\GoodsLogic::fillGoodsInfo($goodsList,'entity_id');
        $goodsList = logic\GoodsLogic::fillShopName($goodsList,'entity_id');
        $goodsList = logic\GoodsLogic::fillImgList($goodsList,'entity_id');
        $this->assign('goodsList',$goodsList);

        $collectList = logic\UserUseEntityLogic::getHotCollectList($page);
        $collectList = logic\CollectionLogic::fillColleInfo($collectList,'entity_id');
        $collectList = logic\UserLogic::fillUserInfo($collectList['collInfo'],'user_id');
        $collectList = logic\MediaLogic::fillCollectFirstImgUrl($collectList['collInfo'],'id');
        $this->assign('collectList',$collectList);
        $this->display();
    }

    /**
     * 最新宝贝页面
     */
    public function publishGoodsList()
    {
        $page = 1;
        $list = logic\GoodsLogic::getLastGoodsAndCollection($page);
        $this->assign('list',$list);
        $this->display();
    }

    //组合详情
    public function collection(){
        $id = I('get.id');
        logic\UserUseEntityLogic::visit(getUserId(),$id,C('EntityType_Collection'));
        $collectionInfo = logic\CollectionLogic::getCollectionInfo($id);
        $faceUrl = logic\MediaLogic::getEntityFirstImgUrl($id,C('EntityType_Collection'));
        $commentList = logic\UserUseEntityLogic::getCommentList($id,C('EntityType_Collection'));
        $commentList = logic\UserLogic::fillUserInfo($commentList,'user_id');
        $commentCount = count($commentList);
        $likeCount = logic\UserUseEntityLogic::getLikeCount($id,C('EntityType_Collection'));
        $userInfo = logic\UserLogic::getUserInfo($collectionInfo['user_id']);
        $goodsList = logic\CollectionLogic::getCollectionGoodsList($id);
        $totalPrice = 0;
        foreach($goodsList as $goodsInfo){
            $totalPrice += $goodsInfo['goodsInfo']['price'];
        }

        $this->assign('totalPrice',$totalPrice);
        $this->assign('userInfo',$userInfo);
        $this->assign('commentCount',$commentCount);
        $this->assign('commentList',$commentList);
        $this->assign('likeCount',$likeCount);
        $this->assign('collectionInfo',$collectionInfo);
        $this->assign('faceUrl',$faceUrl);
        $this->assign('goodsList',$goodsList);
        $this->display();
    }

    //商品详情
    public function goodsdetail(){
        $id = I('get.id');
        logic\UserUseEntityLogic::visit(getUserId(),$id,C('EntityType_Goods'));
        $goodsInfo = logic\GoodsLogic::getGoodsDetail($id);
        $imgList = logic\MediaLogic::getEntityAllImgInfo($goodsInfo['id'],C('EntityType_Goods'));
        $commentList = logic\UserUseEntityLogic::getCommentList($goodsInfo['id'],C('EntityType_Goods'));
        $commentList = logic\UserLogic::fillUserInfo($commentList,'user_id');
        $commentCount = count($commentList);
        $likeCount = logic\UserUseEntityLogic::getLikeCount($goodsInfo['id'],C('EntityType_Goods'));
        $shopInfo = logic\ShopLogic::getShopInfoById($goodsInfo['shop_id']);
        $shopInfo['imgurl'] = logic\MediaLogic::getEntityFirstImgUrl($shopInfo['id'],C('EntityType_Shop'));

        //print_r($commentList);
        $this->assign('goodsInfo',$goodsInfo);
        $this->assign('imgList',$imgList);
        $this->assign('commentCount',$commentCount);
        $this->assign('commentList',$commentList);
        $this->assign('likeCount',$likeCount);
        $this->assign('shopInfo',$shopInfo);
        $this->display();
    }

    /**
     * 喜欢商品
     */
    public function likeGoods(){
        $id = I('post.id');
        $res = logic\UserUseEntityLogic::like(getUserId(),$id,C('EntityType_Goods'));
        if($res){
            $this->success('ok');
        }else{
            $this->error('error');
        }
    }

    /**
     *
     * 喜欢集合
     */
    public function likeCollection(){
        $id = I('post.id');
        $res = logic\UserUseEntityLogic::like(getUserId(),$id,C('EntityType_Collection'));
        if($res){
            $this->success('ok');
        }else{
            $this->error('error');
        }
    }

    /**
     * 评论商品
     */
    public function submitComment(){
        $id = I('post.id');
        $content = I('post.content');
        $res = logic\UserUseEntityLogic::comment(getUserId(),$id,C('EntityType_Goods'),$content);
        if($res){
            $this->success('评论成功');
        }else{
            $this->error('一天只能评论一次');
        }
    }

    /**
     * 评论集合
     */
    public function submitCollectionComment()
    {
        $id = I('post.id');
        $content = I('post.content');
        $res = logic\UserUseEntityLogic::comment(getUserId(),$id,C('EntityType_Collection'),$content);
        if($res){
            $this->success('评论成功');
        }else{
            $this->error('一天只能评论一次');
        }
    }

    //店铺详情
    public function shopdetail(){
        $this->display();
    }

    //搜索
    public function search(){
        $this->display();
    }

    //用户中心
    public function usercenter(){
        $this->display();
    }


}
