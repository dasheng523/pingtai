<?php
/**
 * Created by PhpStorm.
 * User: yesheng
 * Date: 16-2-21
 * Time: 上午10:23
 */

namespace Phone\Controller;
class ShopController extends OauthController {
    //开店
    public function openShop(){
        $this->display();
    }


    //店首页
    public function index()
    {
        $this->display();
    }

    //店铺
    public function shopDetail(){
        $this->display();
    }

}