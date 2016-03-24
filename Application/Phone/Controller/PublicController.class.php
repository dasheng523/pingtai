<?php
/**
 * Created by PhpStorm.
 * User: yesheng
 * Date: 16-2-21
 * Time: 上午10:23
 */

namespace Phone\Controller;
use Think\Controller;
use \Wechat\Logic as logic;

/**
 * Class PublicController
 * @package Phone\Controller
 * 公共模块
 */
class PublicController extends Controller {

    /**
     * 用户消息列表页
     */
    public function message(){
        $list = logic\SysMessLogic::getMessListByUserId(getUserId());
        $this->assign('list',$list);
        $this->display();
    }

    /**
     * 用户消息详情
     */
    public function messageDetail(){
        $id = I('get.id');
        logic\SysMessLogic::setReadStatus($id);
        $info = logic\SysMessLogic::getMessInfo($id);
        $this->assign('info',$info);
        $this->display();
    }

    /**
     * 微信打开
     */
    public function wechatOpen(){
        $this->display();
    }
}