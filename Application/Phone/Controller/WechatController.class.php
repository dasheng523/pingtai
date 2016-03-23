<?php
namespace Phone\Controller;
use Think\Controller;
use Common\Lib\Wechat;

class WechatController extends Controller {
    public function index(){
        $weobj = \Wechat\Logic\WechatLogic::initDefaultWechat();
        //验证微信请求
        if ( isset($_GET["echostr"])){
            $weobj->valid();
            return;
        }

        if(IS_POST){
            $type = $weobj->getRev()->getRevType();
            switch($type) {
                case Wechat::MSGTYPE_TEXT:
                    \Think\Log::write('文本消息','DEBUG');
                    $weobj->text(getSysConfig('wechat_welcome'))->reply();
                    exit;
                    break;
                case Wechat::MSGTYPE_EVENT:
                    \Think\Log::write('事件消息','DEBUG');
                    break;
                case Wechat::MSGTYPE_IMAGE:
                    \Think\Log::write('图片消息','DEBUG');
                    break;
                default:
                    \Think\Log::write('其他','DEBUG');
                    $weobj->text("help info")->reply();
            }
        }
    }
}
