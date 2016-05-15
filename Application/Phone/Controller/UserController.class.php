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


    protected function _initialize(){
        //初始化菜单
        $currentMenu = logic\PageMenuLogic::current();
        if($currentMenu){
            $this->assign('current',$currentMenu);
            $tplBar = $this->fetch('Index:tplBar');
            $this->assign('tplBar',$tplBar);
        }
    }


    /**
     * 意见反馈
     */
    public function objection(){
        if(IS_POST){
            $info['ncontent'] = I('post.ncontent');
            if($info['ncontent']){
                $info['uid'] = getUserId();
                $info['ctime'] = time();
                $res = D('objection')->data($info)->add();
                if($res){
                    $this->success('感谢您的意见反馈');
                }else{
                    $this->error('服务器似乎遇到一些问题');
                }
            }else{
                $this->error('你需要填写意见内容');
            }

            return;
        }
        $this->display();
    }

    /**
     * 首页
     */
    public function index(){
        $totalScore = logic\ScoreLogic::totalUserScore(getUserId());
        $taskList = logic\TaskLogic::getUserTaskList(getUserId());

        $this->assign('totalScore',$totalScore);
        $this->assign('taskList',$taskList);
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
     * 删除我收藏的商品
     */
    public function delGoods(){
        $goodsId = I('post.id');
        $res = logic\UserUseEntityLogic::delUserCollectionGoods(getUserId(),$goodsId);
        if($res){
            $this->success('操作成功');
        }else{
            $this->error("操作失败");
        }
    }

    /**
     * 删除我收藏的妙集
     */
    public function delCollection(){
        $collId = I('post.id');
        $res = logic\UserUseEntityLogic::delUserCollectionColl(getUserId(),$collId);
        if($res){
            $this->success('操作成功');
        }else{
            $this->error("操作失败");
        }
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