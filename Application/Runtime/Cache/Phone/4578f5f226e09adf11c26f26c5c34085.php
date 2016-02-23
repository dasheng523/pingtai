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
    
    <div class="topnavbar flex flex-align-center">
        <a href="javascript:" class="backbtn" onclick="window.history.back();">
            北流
        </a>
        <div class="pagetitle flex-1"><a class="searchbtn" href="<?php echo UC('Index/search');?>"><i class="iconfont">&#xe601;</i>搜索商品，找单，店铺</a></div>
        <a href="#" class="rightbtn">
            <i class="iconfont">&#xe619;</i>
        </a>
    </div>

    <div class="main-container">
        <!-- 首页广告 start -->
        <div class="adbox swiper-container" id="adbox">
            <div class="swiper-wrapper">
                <a href="#" class="adbox-item swiper-slide"><img src="http://192.168.23.105/pingtai/Public/images/banner.jpg"/></a>
                <a href="#" class="adbox-item swiper-slide"><img src="http://192.168.23.105/pingtai/Public/images/banner.jpg"/></a>
            </div>
        </div>
        <!-- 首页广告 end -->

        <!-- 首页分类 start -->
        <div class="index-cate panel swiper-container" id="cate">
            <div class="swiper-wrapper">
                <div class="swiper-slide index-cate-page">
                    <a class="index-cate-item" href="#">
                        <i class="iconfont">&#xe601;</i><br>
                        逛街
                    </a>
                    <a class="index-cate-item" href="#">
                        <i class="iconfont">&#xe601;</i><br>
                        逛街
                    </a>
                    <a class="index-cate-item" href="#">
                        <i class="iconfont">&#xe601;</i><br>
                        逛街
                    </a>
                    <a class="index-cate-item" href="#">
                        <i class="iconfont">&#xe601;</i><br>
                        逛街
                    </a>
                    <a class="index-cate-item" href="#">
                        <i class="iconfont">&#xe601;</i><br>
                        逛街
                    </a>
                    <a class="index-cate-item" href="#">
                        <i class="iconfont">&#xe601;</i><br>
                        逛街
                    </a>
                    <a class="index-cate-item" href="#">
                        <i class="iconfont">&#xe601;</i><br>
                        逛街
                    </a>
                    <a class="index-cate-item" href="#">
                        <i class="iconfont">&#xe601;</i><br>
                        逛街
                    </a>
                </div>
                <div class="swiper-slide index-cate-page">
                    <a class="index-cate-item" href="#">
                        <i class="iconfont">&#xe601;</i><br>
                        逛街
                    </a>
                    <a class="index-cate-item" href="#">
                        <i class="iconfont">&#xe601;</i><br>
                        逛街
                    </a>
                    <a class="index-cate-item" href="#">
                        <i class="iconfont">&#xe601;</i><br>
                        逛街
                    </a>
                    <a class="index-cate-item" href="#">
                        <i class="iconfont">&#xe601;</i><br>
                        逛街
                    </a>
                    <a class="index-cate-item" href="#">
                        <i class="iconfont">&#xe601;</i><br>
                        逛街
                    </a>
                    <a class="index-cate-item" href="#">
                        <i class="iconfont">&#xe601;</i><br>
                        逛街
                    </a>
                    <a class="index-cate-item" href="#">
                        <i class="iconfont">&#xe601;</i><br>
                        逛街
                    </a>
                    <a class="index-cate-item" href="#">
                        <i class="iconfont">&#xe601;</i><br>
                        逛街
                    </a>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <!-- 首页分类 end -->

        <div class="margin-top"></div>
        <!-- 推荐列表 start -->
        <div class="box panel">
            <h3><i class="iconfont">&#xe617;</i>推荐找单<a href="#" class="morebtn">更多</a></h3>
            <div class="list">
                <a class="item flex flex-align-center" href="<?php echo UC('Index/groupinfo');?>">
                    <img src="http://192.168.23.105/pingtai/Public/images/head.jpg" class="item-img">
                    <div class="item-info flex-1">
                        <h3>新春大红包</h3>
                        <p class="desc">新年快到了，你的红包准备好了吗？送长辈送好友送孩子，每种红包都是不一样的，点击了解详情吧。</p>
                    </div>
                </a>
                <a class="item flex flex-align-center" href="<?php echo UC('Index/groupinfo');?>">
                    <img src="http://192.168.23.105/pingtai/Public/images/head.jpg" class="item-img">
                    <div class="item-info flex-1">
                        <h3>新春大红包</h3>
                        <p class="desc">新年快到了，你的红包准备好了吗？送长辈送好友送孩子，每种红包都是不一样的，点击了解详情吧。</p>
                    </div>
                </a>
                <a class="item flex flex-align-center" href="<?php echo UC('Index/groupinfo');?>">
                    <img src="http://192.168.23.105/pingtai/Public/images/head.jpg" class="item-img">
                    <div class="item-info flex-1">
                        <h3>新春大红包</h3>
                        <p class="desc">新年快到了，你的红包准备好了吗？送长辈送好友送孩子，每种红包都是不一样的，点击了解详情吧。</p>
                    </div>
                </a>
                <a class="item flex flex-align-center" href="<?php echo UC('Index/groupinfo');?>">
                    <img src="http://192.168.23.105/pingtai/Public/images/head.jpg" class="item-img">
                    <div class="item-info flex-1">
                        <h3>新春大红包</h3>
                        <p class="desc">新年快到了，你的红包准备好了吗？送长辈送好友送孩子，每种红包都是不一样的，点击了解详情吧。</p>
                    </div>
                </a>
                <a class="item flex flex-align-center" href="<?php echo UC('Index/groupinfo');?>">
                    <img src="http://192.168.23.105/pingtai/Public/images/head.jpg" class="item-img">
                    <div class="item-info flex-1">
                        <h3>新春大红包</h3>
                        <p class="desc">新年快到了，你的红包准备好了吗？送长辈送好友送孩子，每种红包都是不一样的，点击了解详情吧。</p>
                    </div>
                </a>

            </div>

        </div>

        <!-- 推荐列表 end -->


        <!-- footer start -->
        <div class="footer footer-menu">
            <a class="footer-menu-item hover" href="#"><i class="iconfont">&#xe609;</i><br>首页</a>
            <a class="footer-menu-item" href="#"><i class="iconfont">&#xe611;</i><br>排行榜</a>
            <a class="footer-menu-item" href="#"><i class="iconfont">&#xe600;</i><br>发布</a>
            <a class="footer-menu-item" href="<?php echo UC('User/index');?>"><i class="iconfont">&#xe60e;</i><br>个人中心</a>
        </div>
        <!-- footer end -->


        <!-- demo start -->
        <!-- demo end -->

    </div>



    <script src="http://libs.baidu.com/jquery/2.1.4/jquery.min.js"></script>
    
    <script src="http://192.168.23.105/pingtai/Public/js/swiper.min.js"></script>
    <script>
        var ad = new Swiper('#adbox', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: 2500
        });
        var cate = new Swiper('#cate', {
            pagination: '.swiper-pagination',
            paginationClickable: true
        });
    </script>

</body>
</html>