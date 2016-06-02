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
        echo date('Y/m/d');
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

    public function testHaojue(){
        $goods = array(
            array(
                "name" => "悦星HJ125T-9C/9D（手刹）",
                "original_price" => 5980,
                "price" => 5680,
                "unit" => "架",
                "img" => "2.png",
            ),
            array(
                "name" => "喜之星HJ100T-7M（手刹/无尾箱护杠）",
                "original_price" => 5980,
                "price" => 5680,
                "unit" => "架",
                "img" => "3.png",
            ),
            array(
                "name" => "锐爽EN125-2F（园灯/运动版）",
                "original_price" => 7280,
                "price" => 6780,
                "unit" => "架",
                "img" => "10.png",
            ),
            array(
                "name" => "钻豹HJ125K-2A（鼓刹/电启）",
                "original_price" => 6780,
                "price" => 5980,
                "unit" => "架",
                "img" => "4.png",
            ),
            array(
                "name" => "银豹HJ125-7M/7D/7E（鼓刹/小货架）",
                "original_price" => 5280,
                "price" => 4980,
                "unit" => "架",
                "img" => "5.png",
            ),
            array(
                "name" => "HJ125-8M（双启/货架）",
                "original_price" => 5280,
                "price" => 4980,
                "unit" => "架",
                "img" => "6.png",
            ),
            array(
                "name" => "喜运HJ110-2C（压轮/鼓刹）",
                "original_price" => 5580,
                "price" => 5180,
                "unit" => "架",
                "img" => "7.png",
            ),
            array(
                "name" => "HJ110-A/E（条轮）",
                "original_price" => 4580,
                "price" => 3980,
                "unit" => "架",
                "img" => "8.png",
            ),
        );

        foreach($goods as &$info){
            $info['intro'] = '豪爵摩托五一特惠';
            $info['original_price'] = $info['original_price'] . '元/' . $info['unit'];
            $info['price'] = $info['price'] . '元/' . $info['unit'];
            $info['ctime'] = time();
            $info['mtime'] = time();
            $info['shop_id'] = 223;
            $id = D('Goods')->data($info)->add();


            $media['name'] = 'c';
            $media['url'] = 'http://media.dianduoduo.top/haojue/'.$info['img'];
            $media['path'] = '';
            $media['media_type'] = 1;
            $media['entity_id'] = $id;
            $media['entity_type'] = 2;
            D('Media')->data($media)->add();

        }

        print_r($goods);
    }


    public function testAiYing(){
        $goods = D('tempdata')
            ->field('name,original_price,price,unit,type,img')
            ->where('type=2')
            ->select();

        foreach($goods as &$info){
            $info['intro'] = '爱婴超市五一特惠';
            $info['original_price'] = $info['original_price'] . '元/' . $info['unit'];
            $info['price'] = $info['price'] . '元/' . $info['unit'];
            $info['ctime'] = time();
            $info['mtime'] = time();
            $info['shop_id'] = 219;
            $id = D('Goods')->data($info)->add();


            $media['name'] = 'c';
            $media['url'] = 'http://media.dianduoduo.top/aiying/'.$info['img'];
            $media['path'] = '';
            $media['media_type'] = 1;
            $media['entity_id'] = $id;
            $media['entity_type'] = 2;
            D('Media')->data($media)->add();

        }

        print_r($goods);
    }


    public function testbaihui(){
        $goods = D('tempdata')
            ->field('name,original_price,price,unit,type,img')
            ->where('type=3')
            ->select();

        foreach($goods as &$info){
            $info['intro'] = '百汇超市五一大特惠';

            if($info['original_price']){
                $info['original_price'] = $info['original_price'] . '元/' . $info['unit'];
            }else{
                $info['original_price'] = '';
            }

            $info['price'] = $info['price'] . '元/' . $info['unit'];
            $info['ctime'] = time();
            $info['mtime'] = time();
            $info['shop_id'] = 224;
            $id = D('Goods')->data($info)->add();

            $media['name'] = 'b';
            $media['url'] = 'http://media.dianduoduo.top/baihui/'.$info['img'];
            $media['path'] = '';
            $media['media_type'] = 1;
            $media['entity_id'] = $id;
            $media['entity_type'] = 2;
            D('Media')->data($media)->add();

            $info2['activity_id'] = 9;
            $info2['goods_id'] = $id;
            $info2['ctime'] = time();
            //echo D('activity_goods')->data($info2)->add();
        }
    }


    public function testUploadGoods(){
        $goods = D('tempdata')
            ->field('name,original_price,price,unit,type')
            ->where('type=1')
            ->select();

        foreach($goods as &$info){
            $info['intro'] = '佳用超市五一副食大特惠';

            $info['original_price'] = $info['original_price'] . '元/' . $info['unit'];
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


    public function testAddTongzhouwangData(){
        $list = D('tongzhouwangdian')->select();
        foreach($list as &$info){
            $data['user_id'] = randomNum();
            $data['name'] = $info['name'];
            $data['intro'] = $info['intro'];
            $data['phone'] = $info['phone'];
            $data['address'] = $info['address'];
            $data['ctime'] = time();

            $id = D('Shop')->data($data)->add();
            $imgList = explode(',',$info['img']);
            foreach($imgList as $imgUrl){
                if($imgUrl && $imgUrl!=''){
                    $media['name'] = 'g';
                    $media['url'] = 'http://media.dianduoduo.top/'. $imgUrl;
                    $media['path'] = '';
                    $media['media_type'] = 1;
                    $media['entity_id'] = $id;
                    $media['entity_type'] = 1;
                    D('Media')->data($media)->add();
                }
            }

        }
        print_r('ok');
    }

    public function testReplaceLine(){
     echo replaceLine("sdfsdf\ndfgdfhfghgh");
    }


    public function testShare(){
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


        $share['title'] = "邀请您入群的店多多";
        $share['intro'] = mb_substr("店多多客服邀请您加入本地优惠活动群，请查看，惊喜不断", 0, 500,'utf-8');
        $share['shareImg'] = "http://media.dianduoduo.top/UploadFile/jietu.png";
        $share['url'] = UC('Activity/hotActivity');
        $this->assign('share',$share);
        $this->display();
    }

    public function testRandom(){
        echo randomNum2();
    }


    public function testSearchAdd(){
        $rs = httpPost("http://localhost:9200/app/NoticeMsg/",json_encode(array(
            "title" => "测试公告",
            "description" => "Is Really A Happy Day",
            "url" => "http://www.baidu.com",
            "picurl" => "http://media.dianduoduo.top/Public/images/caomei.jpg",
            'date' => '2016/06/02'
        )));
        print_r($rs);
    }

    public function testSearchGet(){
        $rs = httpGet("http://localhost:9200/mytest/employee/_search",json_encode(array(
            "query" => array(
                "match" => array(
                    "_all" => "群"
                )
            )
        )));
        print_r(json_decode($rs,true));
    }

    public function testSearchDel(){
        $rs = httpDel("http://localhost:9200/mytest/employee/AVUBnXpZT2LDaY3Xyv3C");
        print_r(json_decode($rs,true));
    }

    public function testSearchUpdate(){
        $rs = httpPut("http://localhost:9200/mytest/employee/AVUBnYFjT2LDaY3Xyv3D",json_encode(array(
            "name" => "夜声",
            "about" => "会所有编程语言",
            "job" => "高级工程师"
        )));
        print_r($rs);
    }

    public function testgetNoticeMsg(){
        logic\PushLogic::pushOne('oqJLbt3QtHgzE7Thtrig8YNOhhVw');
        //print_r($rs);
    }

    public function testAddPushNot(){
        logic\PushLogic::addNotPushOpenId("oqJLbtz9rrCqCj3tQR4rBxlfomuw");
    }

    public function testPushNot(){
        $rs = logic\PushLogic::getAllPushOpenId();
        print_r($rs);
    }

    public function testDelPushNot(){
        logic\PushLogic::removeNotPushOpenId("oqJLbtz9rrCqCj3tQR4rBxlfomuw");
    }

}
