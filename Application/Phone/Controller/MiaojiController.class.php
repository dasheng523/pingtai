<?php
namespace Phone\Controller;
use Think\Controller;
use Wechat\Logic as logic;

class MiaojiController extends Controller {

    protected function _initialize(){
        //调用微信JS的配置
        $jsConfig = logic\WechatJsLogic::makeJSSignature(logic\WechatLogic::defaultWechatConfig());
        $this->assign('jsConfig',$jsConfig);
        //随机数
        if(APP_STATUS == 'local'){
            $rannum = generateCode();
        }else{
            $rannum = C('Version');
        }
        $this->assign('rannum',$rannum);
    }

    /**
     * 罗列所有叶子妙集
     */
    public function showcase(){
        $id = I('get.id');
        if(!$id){
            $id = 20;
        }
        $coid = getLeafCollectionId($id);
        $list = D('collection')->where(array('id'=>array('in',$coid)))->select();
        foreach($list as &$info){
            $info['imglist'] = getFirstImg($info['imglist']);
        }

        $this->assign('list',$list);
        $this->display();
    }



    /**
     * 判断妙集下是否还有子妙集，有的话继续显示叶子妙集，没有就显示妙集里面的内容
     */
    public function showcaseDispatch(){
        $id = I('get.id');
        if(!$id){
            $id = 0;
        }
        $isHasChild = D('collection')->where(array('parent_id'=>$id))->find();
        if($isHasChild){
            $this->redirect('Miaoji/showcase',array('id'=>$id));
        }else{
            $this->redirect('Miaoji/showcaseDetail',array('id'=>$id));
        }
    }

    /**
     * 展示妙集里面的内容
     */
    public function showcaseDetail(){
        $id = I('get.id');
        $list = D('Shop')
            ->where(array('coll_id'=>$id))
            ->select();
        foreach($list as &$info){
            $info['imglist'] = logic\ShopLogic::getShopFirstImgUrl($info['id']);
            $info['likecount'] = logic\UserUseEntityLogic::getLikeCount($info['id'],C('EntityType_Shop'));
            $info['isLike'] = logic\UserUseEntityLogic::isLike(getUserId(),$info['id'],C('EntityType_Shop'));
        }

        $this->assign('list',$list);
        $this->display();
    }

    /**
     * 更里面的内容
     */
    public function detail(){
        $id = I('get.id');

        $info = D('Shop')->where(array('id'=>$id))->find();
        $info['imglist'] = logic\ShopLogic::getShopAllImgUrl($id);
        $info['likecount'] = logic\UserUseEntityLogic::getLikeCount($id,C('EntityType_Shop'));
        $info['isLike'] = logic\UserUseEntityLogic::isLike(getUserId(),$id,C('EntityType_Shop'));
        $this->assign('info',$info);

        $list = D('goods')
            ->where("shop_id = $id")
            ->select();

        foreach($list as &$info2){
            $info2['imgUrl'] = logic\GoodsLogic::getGoodsFirstImgUrl($info2['id']);
            $info2['shopName'] = logic\ShopLogic::getShopNameById($info2['shop_id']);
            $info2['likecount'] = logic\UserUseEntityLogic::getLikeCount($info2['id'],C('EntityType_Goods'));
        }
        $this->assign('list',$list);

        $share['title'] = "大家快来看看我的店铺".$info['shopname'] . "---店多多";
        $share['intro'] = mb_substr($info['intro'], 0, 500,'utf-8');
        $this->assign('share',$share);

        $this->display();
    }

    /**
     * 喜欢
     */
    public function like(){
        $id = I('post.id');
        $uid = getUserId();
        $rs = logic\UserUseEntityLogic::like($uid,$id,C('EntityType_Shop'));
        if($rs){
            $this->success('ok');
        }else{
            $this->error('您已点赞过了');
        }
    }

    /**
     * 电话列表
     */
    public function phoneList(){
        $list = D('collection')->where(array('parent_id'=>9))->select();
        $this->assign('list',$list);
        $this->display();
    }

    public function phoneCate(){
        $id = I('get.id');
        $list = D('park')->where(array('collection_id'=>$id))->select();
        $myLocation = logic\LocationLogic::getLocation(getUserId());
        foreach($list as &$info){
            $dis = distance($myLocation['lat'],$myLocation['lng'],$info['lat'],$info['lng']);
            $info['distance'] = $dis;
        }
        usort($list,'sortDistance');
        $this->assign('list',$list);
        $this->display();
    }

    /**
     * 商店分类
     */
    public function shopCate(){
        $coid = getLeafCollectionId(20);
        $list = D('collection')
            ->where(array('id'=>array('in',$coid)))
            ->order('ctime desc')
            ->select();
        $this->assign('list',$list);
        $this->display();
    }



    /**
     * 提交修改请求
     */
    public function editSuggest(){
        $this->display();
    }

    public function editSuggestCommit(){
        $name = I('post.name');
        $priceIntro = I('post.priceIntro');
        $intro = I('post.intro');
        $address = I('post.address');
        $phone = I('post.phone');
        $latlngInput = I('post.latlngInput');
        $media_ids = I('post.media_ids');

        if(!$name || !$address){
            $this->error('您没有填写店铺的名称或者地址哦～');
            return;
        }
        $data['name'] = $name;
        $data['extra'] = $priceIntro;
        $data['intro'] = $intro;
        $data['address'] = $address;
        $data['phone'] = $phone;
        $data['latlng'] = $latlngInput;
        $data['media_ids'] = json_encode($media_ids);
        $data['imglist'] = implode(';',$this->getImgUrlList($media_ids));
        $data['ctime'] = time();
        $data['from_user_id'] = getUserId();

        $rs = D('logform')->data($data)->add();
        if($rs){
            $this->success('提交成功,我们将尽快审核');
        }else{
            $this->error('抱歉，服务器似乎出现BUG了');
        }
    }




    private function getImgUrlList($ids){
        $rs = array();
        foreach($ids as $id){
            $rs[] = D('Media')->where(array('id'=>$id))->getField('url');
        }
        return $rs;
    }


    /**
     * @param $otherInfo
     * @return mixed
     * 解析更多数据
     */
    private function parseOtherInfo($otherInfo){
        return json_decode($otherInfo,true);
    }
}