<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        $weobj = \Wechat\Logic\WechatLogic::initDefaultWechat();
        //验证微信请求
        if ( isset($_GET["echostr"])){
            $weobj->valid();
            return;
        }

        if(IS_POST){
            $type = $weObj->getRev()->getRevType();
            switch($type) {
                case Wechat::MSGTYPE_TEXT:
                    $weObj->text(getSysConfig('wechat_welcome'))->reply();
                    exit;
                    break;
                case Wechat::MSGTYPE_EVENT:
                    break;
                case Wechat::MSGTYPE_IMAGE:
                    break;
                default:
                    $weObj->text("help info")->reply();
            }
        }
    }
}