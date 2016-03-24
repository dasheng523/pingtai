<?php
namespace Phone\Controller;
use Think\Controller;
use Wechat\Logic as logic;

class AdminController extends Controller {

    protected function _initialize(){
        //调用微信JS的配置
        $jsConfig = logic\WechatJsLogic::makeJSSignature(logic\WechatLogic::defaultWechatConfig());
        $this->assign('jsConfig',$jsConfig);
        //随机数
        $rannum =generateCode();
        $this->assign('rannum',$rannum);
    }

    /**
     * 输入页面
     */
    public function uploadForm(){
        if(IS_POST){
            $id = I('post.id');
            $_POST['ctime'] = time();
            if($id){
                $rs = D('logform')->data($_POST)->save();
            }else{
                $rs = D('logform')->data($_POST)->add();
            }
            
            if($rs){
                $this->success('成功',UC('Admin/formlist'));
            }
            else{
                $this->error('提交失败了');
            }
            return;
        }
        $id = I('get.id');
        if($id){
            $info = D('logform')->where(array('id'=>$id))->find();
            $this->assign('info',$info);
        }
        $this->display();
    }

    /**
     * 列表
     */
    public function formlist(){
        $list = D('logform')->order('id desc')->select();
        $this->assign('list',$list);
        $this->display();
    }

}