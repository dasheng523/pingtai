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

    //首页
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

    //组合详情
    public function groupinfo(){
        $this->display();
    }

    //商品详情
    public function goodsdetail(){
        $id = I('get.id');
        logic\UserUseEntityLogic::visit(getUserId(),$id,C('EntityType_Goods'));
        $this->display();
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