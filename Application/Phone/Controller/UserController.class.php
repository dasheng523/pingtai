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
 * Class UserController
 * @package Phone\Controller
 * 顾客模块
 */
class UserController extends Controller {
    /**
     * 首页
     */
    public function index(){
        $totalScore = logic\ScoreLogic::totalUserScore(getUserId());
        $taskList = logic\TaskLogic::getUserTaskList(getUserId());

        $this->assign('totalScore',$totalScore);
        $this->display();
    }


    /**
     * 我的收藏
     */
    public function myGoods(){
        $cll = logic\UserUseEntityLogic::getUserCollection(getUserId());
        $this->assign('cll',$cll);

        $goods = logic\UserUseEntityLogic::getUserGoods(getUserId());
        $this->assign('goods',$goods);
        $this->display();
    }

    /**
     * 我的评论
     */
    public function myComment(){
        $list = logic\UserUseEntityLogic::getUserComment(getUserId());
        $this->assign('list',$list);
        $this->display();
    }

    /**
     * 我的信息
     */
    public function myInfo(){
        $info = logic\UserLogic::getUserInfo(getUserId());
        $this->assign('info',$info);
        $this->display();
    }

}