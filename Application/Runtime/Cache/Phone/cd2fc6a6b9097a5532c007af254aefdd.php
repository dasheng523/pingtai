<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>北流商业平台</title>
    <link href="http://192.168.23.105/pingtai/Public/css/normalize.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="http://192.168.23.105/pingtai/Public/css/weui.min.css">
    <link rel="stylesheet" type="text/css" href="http://192.168.23.105/pingtai/Public/css/app.css?v=15">
    
    <link rel="stylesheet" href="http://192.168.23.105/pingtai/Public/css/swiper.min.css">
    <style>
        .swiper-pagination-bullet-active{background: #04be02;}
    </style>

</head>

<body>
    
    <div class="groupshowbox hide">
        <a class="groupshow-close" href="javascript:"><i class="iconfont">&#xe61f;</i></a>
        <div class="swiper-container groupshowcontainer">
            <div class="swiper-wrapper">
                <div class="swiper-slide groupshow-item">
                    <img src="http://192.168.23.105/pingtai/Public/images/share2.jpg" class="groupshowpic">
                    <h3 class="groupshow-title">
                        拖把
                    </h3>
                    <p class="groupshow-text">
                        一般家庭的拖把是很难刷掉水的，也很难使得地板变得干净。所以必须要用一般家庭的拖把是很难刷掉水的，也很难使得地板变得干净。所以必须要用一般家庭的拖把是很难刷掉水的，也很难使得地板变得干净。所以必须要用。
                    </p>
                </div>
                <div class="swiper-slide groupshow-item">
                    <img src="http://192.168.23.105/pingtai/Public/images/share2.jpg" class="groupshowpic">
                    <h3 class="groupshow-title">
                        拖把
                    </h3>
                    <p class="groupshow-text">
                        一般家庭的拖把是很难刷掉水的，也很难使得地板变得干净。所以必须要用一般家庭的拖把是很难刷掉水的，也很难使得地板变得干净。所以必须要用一般家庭的拖把是很难刷掉水的，也很难使得地板变得干净。所以必须要用。
                    </p>
                </div>
                <div class="swiper-slide groupshow-item">
                    <img src="http://192.168.23.105/pingtai/Public/images/share2.jpg" class="groupshowpic">
                    <h3 class="groupshow-title">
                        拖把
                    </h3>
                    <p class="groupshow-text">
                        一般家庭的拖把是很难刷掉水的，也很难使得地板变得干净。所以必须要用一般家庭的拖把是很难刷掉水的，也很难使得地板变得干净。所以必须要用一般家庭的拖把是很难刷掉水的，也很难使得地板变得干净。所以必须要用。
                    </p>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
    <div class="topnavbar flex flex-align-center">
        <a href="javascript:" class="backbtn" onclick="window.history.back();">
            <i class="iconfont">&#xe612;</i>
        </a>
        <div class="pagetitle flex-1">找单详情信息</div>
        <a href="#" class="rightbtn">
            <i class="iconfont">&#xe619;</i>
        </a>
    </div>

    <div class="main-container">
        <div class="detail-bannerbox">
            <div class="detail-bannerbox-content">
                <img src="http://192.168.23.105/pingtai/Public/images/head.jpg" class="detail-bannerbox-img">
                <div class="detail-bannerbox-info">
                    <h3>新春大红包新春大红包</h3>
                    <a href="<?php echo UC('Index/usercenter');?>" class="detail-bannerbox-author">
                        <img src="http://192.168.23.105/pingtai/Public/images/head.jpg">夜声<i class="iconfont">&#xe61a;</i>
                    </a>
                </div>
            </div>
            <div class="detail-bannerbox-btns">
                <a href="#" class="detail-bannerbox-btn"><i class="iconfont">&#xe61b;</i><br>喜欢</a>
                <a href="#" class="detail-bannerbox-btn"><i class="iconfont">&#xe61c;</i><br>评论</a>
                <a href="#" class="detail-bannerbox-btn"><i class="iconfont">&#xe61d;</i><br>分享</a>
            </div>
            <div class="clear"></div>
        </div>

        <div class="margin-top"></div>
        <!-- detail btn start -->
        <div class="boxcontent">
            <button class="weui_btn weui_btn_primary" id="showdetail">查看详情</button>
        </div>
        <!-- detail btn end -->

        <div class="margin-top"></div>
        <!-- 说明 start -->
        <div class="panel box">
            <h3 class="title">描述</h3>
            <div class="foldbox list">
                <div class="list">
                    <p class="item">123415465456新春大红包新春大红包新春大红包新春大红包新春大红包新春大红包新春大红包新春大红包新春大红包新春大红包新春大红包新春大红包</p>
                </div>
                <a class="foldbox-morebtn" href="#"><i class="iconfont">&#xe61e;</i></a>
            </div>
        </div>
        <!-- 说明 end -->

        <div class="margin-top"></div>
        <div class="panel box">
            <h3 class="title">包含商品</h3>
            <div class="list">
                <a class="item flex flex-align-center" href="<?php echo UC('Index/goodsdetail');?>">
                    <img src="http://192.168.23.105/pingtai/Public/images/head.jpg" class="item-img">
                    <div class="item-info flex-1">
                        <h3>新春大红包</h3>
                        <p class="group-good-price">参考市场价：<strong>￥50元</strong></p>
                        <p class="desc">地址：广西北流市城北路花果山0241号</p>
                    </div>
                </a>
                <a class="item flex flex-align-center" href="<?php echo UC('Index/goodsdetail');?>">
                    <img src="http://192.168.23.105/pingtai/Public/images/head.jpg" class="item-img">
                    <div class="item-info flex-1">
                        <h3>新春大红包</h3>
                        <p class="group-good-price">参考市场价：<strong>￥50元</strong></p>
                        <p class="desc">地址：广西北流市城北路花果山0241号</p>
                    </div>
                </a>
                <a class="item flex flex-align-center" href="<?php echo UC('Index/goodsdetail');?>">
                    <img src="http://192.168.23.105/pingtai/Public/images/head.jpg" class="item-img">
                    <div class="item-info flex-1">
                        <h3>新春大红包</h3>
                        <p class="group-good-price">参考市场价：<strong>￥50元</strong></p>
                        <p class="desc">地址：广西北流市城北路花果山0241号</p>
                    </div>
                </a>
                <a class="item flex flex-align-center" href="<?php echo UC('Index/goodsdetail');?>">
                    <img src="http://192.168.23.105/pingtai/Public/images/head.jpg" class="item-img">
                    <div class="item-info flex-1">
                        <h3>新春大红包</h3>
                        <p class="group-good-price">参考市场价：<strong>￥50元</strong></p>
                        <p class="desc">地址：广西北流市城北路花果山0241号</p>
                    </div>
                </a>
            </div>
        </div>


        <div class="footer detail-pricebox">
            <span class="group-good-price">总价：<strong>￥50元</strong></span>
            <a href="#" class="weui_btn weui_btn_mini weui_btn_primary text-align">联系制单人</a>
        </div>
    </div>

    <script src="http://libs.baidu.com/jquery/2.1.4/jquery.min.js"></script>
    
    <script src="http://192.168.23.105/pingtai/Public/js/swiper.min.js"></script>
    <script>
        $('#showdetail').click(function(){
            $('.groupshowbox').removeClass('hide');
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true
            });
        });

        $('.groupshow-close').click(function(){
            $('.groupshowbox').addClass('hide');
        });

    </script>

</body>
</html>