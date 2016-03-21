<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>一妙集</title>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <link rel="shortcut icon" href="/favicon.ico">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

    <link rel="stylesheet" href="http://192.168.23.105/pingtai/Public/SUI-Mobile/dist/css/sm.min.css">
    <link rel="stylesheet" href="//g.alicdn.com/msui/sm/0.6.2/css/sm-extend.min.css">
    <link rel="stylesheet" href="http://192.168.23.105/pingtai/Public/css/weui.min.css">
    <link rel="stylesheet" href="http://192.168.23.105/pingtai/Public/css/main.css?v=35">

    


</head>
<body>
<div class="page-group">
    
    <div class="page page-current" id="IndexIndex">
        <?php echo ($tplBar); ?>
        <div class="content native-scroll">
            <div class="bar">
                <div class="searchbar">
                    <a class="searchbar-cancel">取消</a>
                    <div class="search-input">
                        <label class="icon icon-search" for="search"></label>
                        <input type="search" id="search" placeholder="输入关键字...">
                    </div>
                </div>
            </div>
            <div class="swiper-container adbox" data-space-between='10'>
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="http://192.168.23.105/pingtai/Public/images/banner.jpg" alt="" style='width: 100%'></div>
                    <div class="swiper-slide"><img src="http://192.168.23.105/pingtai/Public/images/banner.jpg" alt="" style='width: 100%'></div>
                    <div class="swiper-slide"><img src="http://192.168.23.105/pingtai/Public/images/banner.jpg" alt="" style='width: 100%'></div>
                </div>
            </div>
            <div class="buttons-tab fixed-tab" data-offset="0">
                <a href="#tab1" class="tab-link active button">热门商品</a>
                <a href="#tab2" class="tab-link button">人气妙集</a>
            </div>
            <div class="tabs">
                <div id="tab1" class="tab active">
                    <div class="list-block media-list" style="margin-top: 0;">
                        <ul>
                            <?php if(is_array($goodsList)): $i = 0; $__LIST__ = $goodsList;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$info): $mod = ($i % 2 );++$i;?><li>
                                    <a href="<?php echo UC('Index/goodsdetail',array('id'=>$info['goodsInfo']['id']));?>" class="item-link item-content">
                                        <div class="item-media">
                                            <div class="item-img" style="background-image: url(<?php echo ($info['goodsfirstimg']); ?>)"></div>
                                        </div>
                                        <div class="item-inner">
                                            <div class="item-text index-item-primary"><?php echo ($info['goodsInfo']['name']); ?></div>
                                            <div class="item-subtitle"><span class="index-item-grey">by <?php echo ($info['shopName']); ?></span></div>
                                            <div class="item-subtitle">
                                                <span class="green-text fr" style="font-size: 16px;vertical-align: bottom;">￥<?php echo ($info['goodsInfo']['price']); ?></span>
                                                <span class="index-item-grey">浏览：<?php echo ($info['UseType_Visit']); ?> | 喜欢：<?php echo ($info['UseType_Like']); ?> </span></div>
                                        </div>
                                    </a>
                                </li><?php endforeach; endif; else: echo "" ;endif; ?>
                        </ul>
                    </div>
                </div>


                <div id="tab2" class="tab">
                    <?php if(is_array($collectList)): $i = 0; $__LIST__ = $collectList;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$info): $mod = ($i % 2 );++$i;?><div class="card facebook-card list-block">
                            <a class="item-link" href="<?php echo UC('Index/collection',array('id'=>$info['entity_id']));?>">
                                <div class="card-header no-border">
                                    <div class="facebook-avatar">
                                        <img src="<?php echo ($info['collInfo']['userInfo']['headimgurl']); ?>" width="34" height="34">
                                    </div>
                                    <div class="facebook-name"><?php echo ($info['collInfo']['name']); ?></div>
                                    <div class="facebook-date"><?php echo (formatDate($info['collInfo']['ctime'] )); ?>
                                        <span class="a"> by <?php echo ($info['collInfo']['userInfo']['name']); ?></span>
                                        <span class="fr red-text" style="font-size: 0.5rem;">热门度 <?php echo ($info['total']); ?></span>
                                    </div>
                                </div>
                                <div class="card-content">
                                    <div class="card-text">
                                        <?php echo ($info['collInfo']['intro']); ?>
                                    </div>
                                    <div class="card-pic">
                                        <img src="<?php echo ($info['collInfo']['firstImgUrl']); ?>">
                                    </div>
                                </div>
                            </a>

                            <div class="card-footer no-border">
                                <a href="#" class="link">喜欢(<?php echo ($info['UseType_Like']); ?>)</a>
                                <a href="#" class="link">收藏(<?php echo ($info['UseType_Collection']); ?>)</a>
                            </div>
                        </div><?php endforeach; endif; else: echo "" ;endif; ?>

                    <!--
                    <div class="card facebook-card list-block">
                        <a class="item-link" href="<?php echo UC('Index/collection');?>">
                            <div class="card-header no-border">
                                <div class="facebook-avatar"><img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" width="34" height="34"></div>
                                <div class="facebook-name">美女大集合</div>
                                <div class="facebook-date">by 夜萧 <span class="fr red-text" style="font-size: 0.5rem;">热门度 80%</span></div>
                            </div>
                            <div class="card-content">
                                <div class="card-text">
                                    我们对页面的基本结构是有要求的，否则可能会出现样式错误或者无法正确加载页面等问题我们对页面的基本结构是有要求的，否则可能会出现样式错误或者无法正确加载页面等问题
                                </div>
                                <div class="card-pic">
                                    <img src="http://192.168.23.105/pingtai/Public/images/head.jpg">
                                </div>
                            </div>
                        </a>

                        <div class="card-footer no-border">
                            <a href="#" class="link">赞一个(30)</a>
                            <a href="#" class="link">想买(30)</a>
                        </div>
                    </div>
                    -->

                </div>

                <!-- footer start -->

                <!-- footer end -->

            </div>
            <div style="height: 30px;"></div>
        </div>
    </div>



</div>

<script type='text/javascript' src='//g.alicdn.com/sj/lib/zepto/zepto.min.js' charset='utf-8'></script>
<script type='text/javascript' src='//g.alicdn.com/msui/sm/0.6.2/js/sm.min.js' charset='utf-8'></script>
<script type='text/javascript' src='//g.alicdn.com/msui/sm/0.6.2/js/sm-extend.min.js' charset='utf-8'></script>
<script type='text/javascript' src="http://192.168.23.105/pingtai/Public/js/main.js?v=8" charset='utf-8'></script>


</body>
</html>