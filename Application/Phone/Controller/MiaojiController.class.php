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
        $rannum =generateCode();
        $this->assign('rannum',$rannum);
    }

    /**
     * 妙集展示
     */
    public function showcase(){
        $id = I('get.id');
        if(!$id){
            $id = 0;
        }
        $list = D('collection')->where(array('parent_id'=>$id))->select();
        foreach($list as &$info){
            $info['imglist'] = $this->getFirstImg($info['imglist']);
        }

        $this->assign('list',$list);
        $this->display();
    }

    /**
     * 判断妙集下是否还有子妙集，有的话继续显示子妙集，没有就显示妙集里面的内容
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
        $list = D('park')
            ->where(array('collection_id'=>$id))
            ->field('id,name,short_intro,price,address,phone,imglist,lat,lng')
            ->select();
        foreach($list as &$info){
            $info['imglist'] = $this->getFirstImg($info['imglist']);
            $info['likecount'] = logic\UserUseEntityLogic::getLikeCount($info['id'],C('EntityType_Park'));
            $info['isLike'] = logic\UserUseEntityLogic::isLike(getUserId(),$info['id'],C('EntityType_Park'));
        }

        $this->assign('list',$list);
        $this->display();
    }

    /**
     * 更里面的内容
     */
    public function detail(){
        $id = I('get.id');
        $info = D('park')
            ->where(array('id'=>$id))
            ->find();
        $info['imglist'] = $this->parseImgList($info['imglist']);
        $info['other_info'] = $this->parseOtherInfo($info['other_info']);
        $info['likecount'] = logic\UserUseEntityLogic::getLikeCount($id,C('EntityType_Park'));
        $info['isLike'] = logic\UserUseEntityLogic::isLike(getUserId(),$id,C('EntityType_Park'));
        $this->assign('info',$info);
        $this->display();
    }

    /**
     * 喜欢
     */
    public function like(){
        $id = I('post.id');
        $uid = getUserId();
        $rs = logic\UserUseEntityLogic::like($uid,$id,C('EntityType_Park'));
        if($rs){
            $this->success('ok');
        }else{
            $this->error('error');
        }
    }

    /**
     * @param $imglist
     * 获取字符串中的第一个图片
     */
    private function getFirstImg($imglist){
        $temp = explode(';',$imglist);
        return $temp[0];
    }

    /**
     * @param $imglist
     * @return array
     * 将字符串转换成数组
     */
    private function parseImgList($imglist){
        return explode(';',$imglist);
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