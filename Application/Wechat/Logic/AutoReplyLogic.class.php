<?php
/**
 * Created by PhpStorm.
 * User: yesheng
 * Date: 16-3-8
 * Time: 下午8:23
 */

namespace Wechat\Logic;


//制造一个文本回复
function makeText($text){
    return array('type'=>'text','content'=>$text);
}

function makeNews($news){
    return array('type'=>'news','content'=>$news);
}


//获取消息的用户ID
function getUserKey($msg){
    return $msg->getRevFrom();
    //return 1;
}

function getMsgContent($msg){
    return $msg->getRevContent();
    //return $msg['content'];
}

function getMsgType($msg){
    return $msg->getRevType();
    //return $msg['type'];
}

function getMsgPic($msg){
    $picMsg = $msg->getRevPic();
    $picUrl = $picMsg['picurl'];
    return $picUrl;
    //return $msg['pic'];
}


//获取当前的用户状态
function getCurrentHandler($useKey){
    return S('MenuHandler_'.$useKey);
}

//设置当前用户状态
function setCurrentHandler($useKey,$state){
    if($state){
        S('MenuHandler_'.$useKey,$state,1800); //缓存半小时
    }else{
        S('MenuHandler_'.$useKey,null);
    }
}

/**
 * Class AutoReplyLogic
 * @package Wechat\Logic
 * 自动回复模块
 */
class AutoReplyLogic
{
    /**
     * @param $msg
     * @return array|void
     * 入口
     */
    public function handle($msg){
        //获取消息的用户ID
        $openId = getUserKey($msg) ;
        if(!$openId){
            return makeText("非法请求");
        }

        $type = getMsgType($msg);
        switch($type) {

        }

        //获得当前处理器，如果没有处理器，就初始化一个默认处理器
        $state = getCurrentHandler($openId);
        if(!$state){
            $state = $this->createState();
            setCurrentHandler($openId,$state);
        }

        try{
            return $state->handle($msg);
        } catch(Exception $e){
            self::cancelBusiness($openId);
            return makeText("很抱歉，我们的系统似乎出现了一些故障，请过一段时间再重试");
        }
    }

    /**
     * @param $userKey
     * 取消终止业务流程
     */
    public function cancelBusiness($userKey){
        setCurrentHandler($userKey,null);
    }

    /**
     * 创建一个状态
     */
    private function createState(){
        $state = new MainState();
        return $state;
    }

}

/**
 * Class MainState
 * @package Wechat\Logic
 * 主界面
 */
class MainState{

    function __construct(){
        $this->menu = array(
            //主菜单
            array(
                "key" => array("M","菜单","帮助"),
                "resp" => makeText("欢迎访问店多多，店多多汇聚您身边的优惠！请问您需要什么帮助？\n 回复 1：免费领优惠券\n 回复 2：查看热门活动\n 回复 3：看看优惠商品\n 回复 4：随便逛逛商店\n\n 免费开店，请回复 A\n 商家入口，请回复 9\n\n 回复 M 可重现本菜单"),
            ),
            //免费领优惠券
            array(
                "key" => array("1"),
                "resp" => makeNews(array(
                    array(
                        'Title'=>'免费领取优惠券',
                        'Description'=>'店多多联合商家推出众多优惠券，大家千万不要错过。',
                        'PicUrl'=>'http://www.domain.com/1.jpg',
                        'Url'=>UC('Phone/Activity/couponList'),
                    ),
                )),
            ),
            //查看热门活动
            array(
                "key" => array("2"),
                "resp" => makeNews(array(
                    array(
                        'Title'=>'查看热门活动',
                        'Description'=>'北流街的热门活动，省钱必备，赶快过来看看。',
                        'PicUrl'=>'http://www.domain.com/1.jpg',
                        'Url'=>UC('Phone/Activity/showAllActivity'),
                    ),
                )),
            ),
            //看看优惠商品
            array(
                "key" => array("3"),
                "resp" => makeNews(array(
                    array(
                        'Title'=>'看看优惠商品',
                        'Description'=>'众多优惠商品齐聚店多多，包你有着数。',
                        'PicUrl'=>'http://www.domain.com/1.jpg',
                        'Url'=>UC('Phone/Activity/hotActivity'),
                    ),
                )),
            ),
            //随便逛逛商店
            array(
                "key" => array("4"),
                "resp" => makeNews(array(
                    array(
                        'Title'=>'随便逛逛商店',
                        'Description'=>'随便逛逛商店，万一发现什么好东西呢。',
                        'PicUrl'=>'http://www.domain.com/1.jpg',
                        'Url'=>UC('Phone/Miaoji/shopCate'),
                    ),
                )),
            ),
            //开店
            array(
                "key" => array("A","开店"),
                "handler" => new OpenShopState(),
            ),
            //商家菜单
            array(
                "key" => array("9","商家"),
                "resp" => makeText(" 回复 91：进入商家入口\n 回复 92：发布特色商品\n 回复 93：发布促销活动\n 回复 94：修改门面图片"),
            ),
            //商家入口
            array(
                "key" => array("91"),
                "resp" => makeNews(array(
                    array(
                        'Title'=>'商家入口',
                        'Description'=>'点击进入，可以管理自己店铺的信息。',
                        'PicUrl'=>'http://www.domain.com/1.jpg',
                        'Url'=>UC('Phone/Shop/index'),
                    ),
                )),
            ),
            //发布特色商品
            array(
                "key" => array("92"),
                "handler" => new PublishGoodsState(),
            ),
            //发布促销活动
            array(
                "key" => array("93"),
                "handler" => new OpenShopState(),
            ),
            //修改门面图片
            array(
                "key" => array("94"),
                "handler" => new OpenShopState(),
            ),
        );


    }

    /**
     * @param $msg
     * @return null
     * 处理消息，返回下一个状态；如果返回null，则结束。
     */
    public function handle($msg){
        $menuKey = strtoupper(getMsgContent($msg));
        $userKey = getUserKey($msg);
        //获取对应的菜单,暂不考虑子菜单
        $menuInfo = $this->findItem($menuKey);
        if(!$menuInfo){
            $menuInfo = $this->findItem('M');
        }
        //先看是否有处理器，如果有就使用处理器处理数据，如果没有就直接返回resp数据
        $menuHandler = $menuInfo['handler'];
        if($menuHandler){
            setCurrentHandler($userKey,$menuHandler);
            return $menuHandler->handle($msg);
        }
        else{
            return $menuInfo['resp'];
        }

    }

    private function findItem($menuKey){
        foreach($this->menu as $item){
            if(in_array($menuKey,$item['key'])){
                return $item;
            }
        }
        return null;
    }

}

/**
 * Class OpenShopState
 * @package Wechat\Logic
 * 开店流程
 */
class OpenShopState{
    public function handle($msg){
        $userKey = getUserKey($msg);

        $userId = D('wechat_user')->where(array('open_id'=>$userKey))->getField('user_id');
        if(!$userId){
            return makeText('数据异常，需要您重新关注店多多');
        }
        $shopId = D('shop')->where(array('user_id'=>$userId))->getField('id');
        if($shopId){
            $pad = UC('Phone/Shop/index');
            return makeText('点击<a href="'. $pad .'">商家入口</a>'."\n".'即可管理您的店铺');
        }

        $steps = $this->step();
        $currentStep = $this->currentStep($userKey);
        return $steps[$currentStep]($msg);
    }

    public function step(){
        $steps = array(
            0 => function($msg){
                $userKey = getUserKey($msg);
                $this->nextStep($userKey);
                return makeText("店多多服务号免费开店，您准备好开店了吗？（开店过程中，如果超30分钟不回复，需要回复 A 才能继续开店）\n准备好了，请回复 1\n待会再来，请回复 0");
            },
            1 => function ($msg){
                $text = getMsgContent($msg);
                $userKey = getUserKey($msg);
                if($text == 1){
                    $this->nextStep($userKey);
                    return makeText("请回复您的店铺名称：");
                }else if($text == 0){
                    setCurrentHandler($userKey,null);
                    $this->resetStep($userKey);
                    return makeText("已成功取消开店！如果您准备好了，回复 A 即可继续开店");
                }
                else{
                    return makeText("请按照提示回复 1 或 0");
                }
            },
            2 => function ($msg){
                $type = getMsgType($msg);
                if($type != "text"){
                    return makeText("请按提示回复输入您的店铺名称");
                }
                else{
                    $text = getMsgContent($msg);
                    $userKey = getUserKey($msg);
                    $this->setInput($userKey,'name',$text);

                    $this->nextStep($userKey);
                    return makeText("请回复您的店铺手机号码：");
                }
            },
            3 => function($msg){
                $type = getMsgType($msg);
                if($type != "text"){
                    return makeText("请按提示回复输入您的店铺手机号码");
                }
                else{
                    $text = getMsgContent($msg);
                    $userKey = getUserKey($msg);
                    $this->setInput($userKey,'phone',$text);

                    $this->nextStep($userKey);
                    return makeText("请回复您的店铺地址：");
                }
            },
            4 => function($msg){
                $type = getMsgType($msg);
                if($type != "text"){
                    return makeText("请按提示回复输入您的店铺地址");
                }
                else{
                    $text = getMsgContent($msg);
                    $userKey = getUserKey($msg);
                    $this->setInput($userKey,'address',$text);

                    //获取分类
                    $coid = getLeafCollectionId(C('ShopCateId'));
                    $list = D('collection')->where(array('id'=>array('in',$coid)))->select();
                    $replyText = "";
                    foreach($list as $info){
                        $replyText .= $info['name'] . " 请回复 " .$info['id'] . "\n";
                    }

                    $this->nextStep($userKey);
                    return makeText("请回复您的店铺分类：\n" .$replyText);
                }
            },
            5 => function($msg){
                $type = getMsgType($msg);
                if($type != "text"){
                    return makeText("请按提示回复数字");
                }
                else{
                    $text = getMsgContent($msg);
                    $userKey = getUserKey($msg);
                    $is = D('collection')->where(array('id'=>$text))->find();
                    if(!$is){
                        return makeText("该店铺分类不存在，请重新输入");
                    }
                    else{
                        $this->setInput($userKey,'coll_id',$text);
                        $this->nextStep($userKey);
                        return makeText("请回复您的店铺介绍：");
                    }
                }
            },
            6 => function($msg){
                $type = getMsgType($msg);
                if($type != "text"){
                    return makeText("请按提示回复您的店铺介绍");
                }
                else{
                    $text = getMsgContent($msg);
                    $userKey = getUserKey($msg);

                    $this->setInput($userKey,'intro',$text);

                    $this->nextStep($userKey);
                    return makeText("请发送您一张店铺图片，建议横图片");
                }
            },
            7 => function($msg){
                $type = getMsgType($msg);
                if($type != "image"){
                    return makeText("请按提示回复店铺图片");
                }
                else{
                    $userKey = getUserKey($msg);
                    $picUrl = getMsgPic($msg);
                    $pathUrl = "/Public/upload/".ysuuid().".jpg";
                    if(startsWith($picUrl,"http://") || startsWith($picUrl,"https://")){
                        getImage($picUrl,'.'.$pathUrl);
                        $this->setInput($userKey,'path',$pathUrl);
                    }

                    $data = $this->getInput($userKey);
                    $shopInfo['user_id'] = D('wechat_user')->where(array('open_id'=>$userKey))->getField('user_id');
                    $shopInfo['name'] = $data['name'];
                    $shopInfo['address'] = $data['address'];
                    $shopInfo['phone'] = $data['phone'];
                    $shopInfo['coll_id'] = $data['coll_id'];
                    $shopInfo['intro'] = $data['intro'];
                    $shopInfo['ctime'] = time();
                    $id = ShopLogic::createShop($shopInfo);

                    $media['name'] = 's';
                    $media['path'] = $data['path'];
                    $media['url'] = __ROOT__ . $data['path'];
                    $media['media_type'] = C('MediaType_Image');
                    $media['entity_id'] = $id;
                    $media['entity_type'] = C('EntityType_Shop');
                    MediaLogic::addMediaInfo($media);

                    $this->resetStep($userKey);
                    setCurrentHandler($userKey,null);

                    $shopUrl = UC('Phone/Miaoji/detail',array('id'=>$id));
                    return makeText('开店成功'."\n\n".'点击<a href="'.$shopUrl.'">查看店铺</a>'."\n\n".'将您的店铺分享到朋友圈，可以快速提高人气。'."\n".'回复 92 ，可免费发布商品。');
                }
            }

        );
        return $steps;
    }


    private function setInput($userKey,$key,$value){
        $input = S('OpenShop_'.$userKey);
        $input[$key] = $value;
        S('OpenShop_'.$userKey,$input,1800);
    }

    private function getInput($userKey){
        return S('OpenShop_'.$userKey);
    }

    private function nextStep($userKey){
        $step = S('OpenShopStep_'.$userKey);
        if(!$step){
            $step = 0;
        }
        $step ++ ;
        S('OpenShopStep_'.$userKey,$step,1800);
    }

    private function resetStep($userKey){
        S('OpenShopStep_'.$userKey,null);
    }

    private function currentStep($userKey){
        $step = S('OpenShopStep_'.$userKey);
        if(!$step){
            $step = 0;
        }
        return $step;
    }
}


/**
 * Class OpenShopState
 * @package Wechat\Logic
 * 发布商品流程
 */
class PublishGoodsState{
    public function handle($msg){
        $userKey = getUserKey($msg);

        $userId = D('wechat_user')->where(array('open_id'=>$userKey))->getField('user_id');
        if(!$userId){
            return makeText('数据异常，需要您重新关注店多多');
        }
        $shopId = D('shop')->where(array('user_id'=>$userId))->getField('id');
        if(!$shopId){
            setCurrentHandler($userKey,null);
            $pad = UC('Phone/Shop/index');
            return makeText('您还未开店。您可以：'."\n\n".'1. 点击<a href="'. $pad .'">立即开店</a>进入页面开店'."\n".'2. 回复 A 直接申请开店');
        }

        $steps = $this->step();
        $currentStep = $this->currentStep($userKey);
        return $steps[$currentStep]($msg);
    }

    public function step(){
        $steps = array(
            0 => function($msg){
                $userKey = getUserKey($msg);
                $this->nextStep($userKey);
                return makeText("\ue327您准备好一个商品的信息了吗？\n\n准备好了，请回复 1\n待会再来，请回复 0");
            },
            1 => function ($msg){
                $text = getMsgContent($msg);
                $userKey = getUserKey($msg);
                if($text == 1){
                    $this->nextStep($userKey);
                    return makeText("请回复一个商品名称：");
                }else if($text == 0){
                    setCurrentHandler($userKey,null);
                    $this->resetStep($userKey);
                    return makeText("已成功取消发布商品！如果您准备好了，回复 A 即可继续发布商品");
                }
                else{
                    return makeText("请按照提示回复 1 或 0");
                }
            },
            2 => function ($msg){
                $type = getMsgType($msg);
                if($type != "text"){
                    return makeText("请按提示回复输入一个商品名称");
                }
                else{
                    $text = getMsgContent($msg);
                    $userKey = getUserKey($msg);
                    $this->setInput($userKey,'name',$text);

                    $this->nextStep($userKey);
                    return makeText("请回复该商品的价格：");
                }
            },
            3 => function($msg){
                $type = getMsgType($msg);
                if($type != "text"){
                    return makeText("请按提示回复输入该商品的价格");
                }
                else{
                    $text = getMsgContent($msg);
                    $userKey = getUserKey($msg);
                    $this->setInput($userKey,'price',$text);

                    $this->nextStep($userKey);
                    return makeText("请回复该商品的描述：");
                }
            },
            4 => function($msg){
                $type = getMsgType($msg);
                if($type != "text"){
                    return makeText("请按提示回复该商品的描述");
                }
                else{
                    $text = getMsgContent($msg);
                    $userKey = getUserKey($msg);
                    $this->setInput($userKey,'intro',$text);

                    $this->nextStep($userKey);
                    return makeText("请回复该商品的一张图片，目前还不支持小视频哦");
                }
            },
            5 => function($msg){
                $type = getMsgType($msg);
                if($type != "image"){
                    return makeText("请按提示回复商品图片，目前还不支持小视频哦");
                }
                else{
                    $userKey = getUserKey($msg);
                    $picUrl = getMsgPic($msg);
                    $pathUrl = "/Public/upload/".ysuuid().".jpg";
                    if(startsWith($picUrl,"http://") || startsWith($picUrl,"https://")){
                        getImage($picUrl,'.'.$pathUrl);
                        $this->setInput($userKey,'path',$pathUrl);
                    }

                    $data = $this->getInput($userKey);
                    $userId = D('wechat_user')->where(array('open_id'=>$userKey))->getField('user_id');

                    $info['name'] = $data['name'];
                    $info['price'] = $data['price'];
                    $info['intro'] = $data['intro'];
                    $info['is_hide'] = 0;
                    $info['original_price'] = $info['price'] * 1.2;
                    $shop = ShopLogic::getShopInfoByUserId($userId);
                    $id = GoodsLogic::addGoods($info,$shop['id']);

                    $media['name'] = 's';
                    $media['path'] = $data['path'];
                    $media['url'] = __ROOT__ . $data['path'];
                    $media['media_type'] = C('MediaType_Image');
                    $media['entity_id'] = $id;
                    $media['entity_type'] = C('EntityType_Goods');
                    MediaLogic::addMediaInfo($media);

                    $this->resetStep($userKey);
                    setCurrentHandler($userKey,null);

                    $shopUrl = UC('Phone/Miaoji/detail',array('id'=>$id));
                    return makeText('发布成功!'."\n\n".'点击<a href="'.$shopUrl.'">查看商品</a>即可看到您的商品。'."\n\n".'将您的商品分享到朋友圈，可以快速提高人气。'."\n\n".'如需修改，可点击微信菜单中的“店多多”->"商家入口"进行管理。');
                }
            }

        );
        return $steps;
    }


    private function setInput($userKey,$key,$value){
        $input = S('PublicGoods_'.$userKey);
        $input[$key] = $value;
        S('PublicGoods_'.$userKey,$input,1800);
    }

    private function getInput($userKey){
        return S('PublicGoods_'.$userKey);
    }

    private function nextStep($userKey){
        $step = S('PublicGoodsStep_'.$userKey);
        if(!$step){
            $step = 0;
        }
        $step ++ ;
        S('PublicGoodsStep_'.$userKey,$step,1800);
    }

    private function resetStep($userKey){
        S('PublicGoodsStep_'.$userKey,null);
    }

    private function currentStep($userKey){
        $step = S('PublicGoodsStep_'.$userKey);
        if(!$step){
            $step = 0;
        }
        return $step;
    }
}


