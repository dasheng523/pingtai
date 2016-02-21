<?php
/**
 * Created by PhpStorm.
 * User: yesheng
 * Date: 16-2-21
 * Time: 上午10:23
 */

namespace Phone\Controller;
class UserController extends OauthController {
    //首页
    public function index(){
        $this->display();
    }

}