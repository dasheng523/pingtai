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

  public function login(){
    $uid = getUserId();
    $code = I('get.code');
    if($code){
      S('login_'.$code,$uid,360);
      $this->success("登录成功");
    }
    else{
      $this->error('error');
    }
  }

  public function oauthCode(){
    $code = I('post.code');
    $uid = S('login_'.$code);
    if($code && $uid){
      logic\RequestLogic::setClientServerUserMap($code,$uid);
      $shopInfo = D('Shop')->where(array('user_id'=>$uid))->find();
      $this->echoSuccessJson($shopInfo);
      return;
    }else{
      $this->echoErrorJson('error');
    }
  }


  private function echoSuccessJson($arr){
    $rs = array();
    $rs['status'] = 1;
    $rs['data'] = $arr;
    echo json_encode($rs);
  }

  private function echoErrorJson($arr){
    $rs = array();
    $rs['status'] = 0;
    $rs['data'] = $arr;
    echo json_encode($rs);
  }
}
