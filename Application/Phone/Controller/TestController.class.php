<?php
/**
 * Created by PhpStorm.
 * User: yesheng
 * Date: 2016/2/6
 * Time: 18:10
 */
namespace Phone\Controller;
use Think\Controller;
use Common\Lib\Curl;
use \Wechat\Logic as logic;
class TestController extends Controller {

    protected $dfsdfs = __ROOT__;


    public function testPost(){
      $curl = new Curl();
      $rs = $curl->post(UC('Shop/isLogin'),array('code'=>55));
      echo $rs;
    }


    public function sdfsdf(){
        echo $this->dfsdfs;
    }

    //测试滤镜
    public function test(){
        $this->error('失败');
    }

    public function test2(){
        $this->success('修改成功',UC('Index/index'));
    }

    public function testWebhook(){
        echo "test4";
    }

    public function testLocation(){
        \Wechat\Logic\LocationLogic::setLocation('ddd',array('lng'=>0.554,'lat'=>5565));

        $ff = \Wechat\Logic\LocationLogic::getLocation('ddd');
        print_r($ff);
    }

    public function testAddUser(){
        $openId = '123';
        $weobj = \Wechat\Logic\WechatLogic::initDefaultWechat();
        $isExist = \Wechat\logic\WechatUserLogic::isExistOpenId($openId);
        if(!$isExist){
            $wechatUserInfo = $weobj->getUserInfo($openId);
            if($wechatUserInfo){
                \Wechat\logic\WechatUserLogic::createWechatUser($wechatUserInfo);
            }
        }
    }

    public function testChangeLoc(){
        $list = D('park')->where('ctime<>5')->select();
        foreach($list as &$info){
            $lat = $info['lat'];
            $lng = $info['lng'];
            $data = json_decode(baiduMapToSosoMap($lat,$lng),true);
            if($data['locations'][0]['lat'] && $data['locations'][0]['lng']){
                $info['lat'] = $data['locations'][0]['lat'];
                $info['lng'] = $data['locations'][0]['lng'];
                $info['ctime'] = 5;
                D('park')->save($info);
            }else{
                print_r($info);
            }

        }
        //$data = baiduMapToSosoMap(22.6992070,110.3750580);
        echo "ok";
    }

    public function testWechat (){
        $weobj = \Wechat\Logic\WechatLogic::initDefaultWechat();
        $openId = "oqJLbt9C3-NwSSTPVUO9hhF7BPKA";
        $isExist = \Wechat\Logic\WechatUserLogic::isExistOpenId($openId);
        if(!$isExist){
            $wechatUserInfo = $weobj->getUserInfo($openId);
            if($wechatUserInfo){
                \Wechat\Logic\WechatUserLogic::createWechatUser($wechatUserInfo);
            }
        }
    }

    public function testUpload(){
        echo json_encode(array('status'=>'ok'));
    }

    public function testResize(){
        $inFile = "./Public/images/yuan5.png";
        $outFile = "./Public/images/test5.png";
        \Wechat\Logic\MediaLogic::resizePic($inFile,$outFile);
    }

    public function testMoveData(){
        $list = D('park')->where("collection_id<>10 or collection_id<>11")->select();
        foreach($list as $info){
            $info['id'] = "";
            reset($info['id']);
            $info['user_id'] = 0;
            $info['coll_id'] = $info['collection_id'];
            $info['ctime'] = time();
            $shopId = D('Shop')->data($info)->add();

            $file = array();
            $file['media_type'] = C('MediaType_Image');
            $file['entity_type'] = C('EntityType_Shop');
            $file['entity_id'] =$shopId;
            $file['name'] = 'A';

            $uss = explode(';',$info['imglist']);
            $file['url'] = $uss[0];
            $file['path'] = '';
            D('media')->data($file)->add();
        }
    }


    public function testUploadGoods(){
        $goods = D('tempdata')
            ->field('name,original_price,price,unit,type')
            ->where('type=1')
            ->select();

        foreach($goods as &$info){
            $info['intro'] = '佳用超市五一副食大特惠';

            $info['original_price'] = $info['original_price'] . '/' . $info['unit'];
            $info['price'] = $info['price'] . '元/' . $info['unit'];
            $info['ctime'] = time();
            $info['mtime'] = time();
            $info['shop_id'] = 183;
            $id = D('Goods')->data($info)->add();

            $media['name'] = 'b';
            $media['url'] = 'http://media.dianduoduo.top/chaoshi/'.$info['img'];
            $media['path'] = '';
            $media['media_type'] = 1;
            $media['entity_id'] = $id;
            $media['entity_type'] = 2;
            //D('Media')->data($media)->add();

            $info2['activity_id'] = 9;
            $info2['goods_id'] = $id;
            $info2['ctime'] = time();
            echo D('activity_goods')->data($info2)->add();
        }
    }

}
