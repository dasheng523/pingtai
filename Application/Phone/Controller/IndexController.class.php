<?php
namespace Phone\Controller;
class IndexController extends OauthController {
    //首页
    public function index(){
        $this->display();
    }

    //组合详情
    public function groupinfo(){
        $this->display();
    }

    //商品详情
    public function goodsdetail(){
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