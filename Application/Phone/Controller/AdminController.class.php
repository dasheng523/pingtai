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

    /**
     * 加入dian到park里面去
     */
    public function addToPark(){
        $cid = I('get.cid');
        $dian = I('get.dian');
        $info = D('tongzhouwangdian')->where(array('id'=>$dian))->find();
        $data = array();

        $data['name'] = $info['name'];
        $data['address'] = $info['address'];
        $data['intro'] = "<p>".$info['intro']."</p>";
        $data['imglist'] = self::changeImglist($info['img']);
        $data['phone'] = $info['phone'];
        $data['ctime'] = time();
        $data['collection_id'] = $cid;
        //print_r($data);
        echo D('park')->data($data)->add();
    }

    public function puAddToPark(){
        $cid = I('get.cid');
        $dian = I('get.dian');
        $info = D('pu12dian')->where(array('id'=>$dian))->find();
        $data = array();

        $data['name'] = $info['name'];
        $data['address'] = $info['address'];
        $data['intro'] = "<p>".$info['intro']."</p>";
        $data['phone'] = $info['phone'];
        $data['lat'] = $info['lat'];
        $data['lng'] = $info['lng'];
        $data['ctime'] = time();
        $data['collection_id'] = $cid;
        //print_r($data);
        echo D('park')->data($data)->add();
    }

    public function phoneAddToPark(){
        $cid = 11;
        $dianlist = range(43,64);
        foreach($dianlist as $dian){
            $info = D('tongzhouwangshop')->where(array('id'=>$dian))->find();
            $data = array();
            $data['name'] = $info['name'];
            $data['phone'] = $info['phone'];
            $data['lat'] = $info['lat'];
            $data['lng'] = $info['lng'];
            $data['ctime'] = time();
            $data['collection_id'] = $cid;
            //print_r($data);
            echo D('park')->data($data)->add();
        }
    }

    private static function changeImglist($imgstr){
        if(!$imgstr){
            return "";
        }
        $imglist = explode(',',$imgstr);
        foreach($imglist as &$info){
            $info = 'http://media.dianduoduo.top/'.$info;
        }
        return implode(';',$imglist);
    }

}