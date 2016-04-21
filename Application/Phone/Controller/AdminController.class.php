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


    //商店列表
    public function shopList(){
        $list = D('shop')->order('ctime desc')->select();
        $this->assign('list',$list);
        $this->display();
    }

    public function operateDetail(){
        $shopId = I('get.id');
        $realUser = logic\RequestLogic::getRealUserId();
        logic\RequestLogic::cancelAsUser($realUser);
        logic\RequestLogic::asUser($realUser,logic\ShopLogic::getOwnUserId($shopId));
        $this->display();
    }

    public function shopGoods(){
        $shopId = I('get.shopId');
        $goodsList = logic\GoodsLogic::getShopGoodsListByShopId($shopId);
        $this->assign('list',$goodsList);
        $this->display('Shop/goods');
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


    public function addActivity(){
        //活动内容
        $act['name'] = '大特惠超市';
        $act['shop_id'] = 2;
        $act['coll_id'] = 26;
        $act['stime'] = strtotime('2013-01-14 09:09:09');
        $act['etime'] = strtotime('2013-01-14 09:09:07');
        $act['intro'] = "优惠大酬宾，本超市全场5折大优惠，欢迎广大顾客前来购买。";
        $act['piclist'] = "http://media.dianduoduo.top/activity/20120312134858418.jpg";
        $act['ctime'] = time();
        $act['zan'] = 0;
        $actId = D('Activity')->data($act)->add();

        //活动商品
        $goodsList = array(
            array(
                "name" => "萝卜",
                "price" => "1元/斤",
                "intro" => "1元/斤",
                "piclist" => "http://media.dianduoduo.top/activity/timg.jpg"
            ),
            array(
                "name" => "萝卜",
                "price" => "1元/斤",
                "intro" => "1元/斤",
                "piclist" => "http://media.dianduoduo.top/activity/timg.jpg"
            ),
        );

        foreach($goodsList as $goodsInfo){
            $goodsInfo['ctime'] = time();
            $goodsInfo['activity_id'] = $actId;
            D('ActivityGoods')->data($goodsInfo)->add();
        }

        print_r($act);
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