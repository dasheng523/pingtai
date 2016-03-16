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
        echo getUserId();
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
        print_r($info);
        $this->assign('info',$info);
        $this->display();
    }
}