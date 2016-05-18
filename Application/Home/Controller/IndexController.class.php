<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        //header("Location:".UC('Phone/Activity/hotActivity'));
        redirect('Phone/Activity/hotActivity', 0, '页面跳转中...');
    }
}