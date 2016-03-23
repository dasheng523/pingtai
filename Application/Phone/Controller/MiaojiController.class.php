<?php
namespace Phone\Controller;
use Think\Controller;
use Wechat\Logic as logic;

class MiaojiController extends Controller {

    /**
     * 妙集展示
     */
    public function showcase(){
        $list = D('collection')->select();
        foreach($list as &$info){
            $info['imglist'] = $this->getFirstImg($info['imglist']);
        }

        $this->assign('list',$list);
        $this->display();
    }

    /**
     * 展示妙集里面的内容
     */
    public function showcaseDetail(){
        $id = I('get.id');
        $list = D('park')
            ->where(array('collection_id'=>$id))
            ->field('id,name,short_intro,price,address,phone,imglist')
            ->select();
        foreach($list as &$info){
            $info['imglist'] = $this->getFirstImg($info['imglist']);
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
        //print_r($info);
        $this->assign('info',$info);
        $this->display();
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