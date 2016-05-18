<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        header("Location:".UC('Activity/hotActivity'));
    }
}