<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>北流商业平台</title>
    <link href="http://192.168.23.105/pingtai/Public/css/normalize.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="http://192.168.23.105/pingtai/Public/css/weui.min.css">
    <link rel="stylesheet" type="text/css" href="http://192.168.23.105/pingtai/Public/css/app.css">
    
    <link rel="stylesheet" href="http://192.168.23.105/pingtai/Public/css/swiper.min.css">
    <style>
        .swiper-pagination-bullet-active{background: red;}
    </style>

</head>

<body>
    
    <div class="topnavbar">
        <a href="#" class="backbtn">
            北流
        </a>
        <a href="#" class="rightbtn">
            <i class="iconfont">&#xe619;</i>
        </a>
        <div class="pagetitle"><span class="searchbtn"><i class="iconfont">&#xe601;</i>搜索商品，找单，店铺</span></div>
    </div>

    <div class="main-container">
        <!-- 首页广告 start -->
        <div class="adbox swiper-container">
            <div class="swiper-wrapper">
                <a href="#" class="adbox-item swiper-slide"><img src="http://192.168.23.105/pingtai/Public/images/banner.jpg"/></a>
                <a href="#" class="adbox-item swiper-slide"><img src="http://192.168.23.105/pingtai/Public/images/banner.jpg"/></a>
            </div>
        </div>
        <!-- 首页广告 end -->

        <!-- 首页分类 start -->
        <div class="index-cate panel swiper-container">
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

        <!-- 推荐列表 start -->
        <div class="box panel">
            <h3><i class="iconfont">&#xe617;</i>推荐找单<a href="#" class="morebtn">更多</a></h3>
            <div class="list">
                <a class="item default-item" href="<?php echo UC('Index/groupinfo');?>">
                    <img src="http://192.168.23.105/pingtai/Public/images/head.jpg" class="item-img">
                    <div class="item-info">
                        <h3>新春大红包</h3>
                        <p class="desc">新年快到了，你的红包准备好了吗？送长辈送好友送孩子，每种红包都是不一样的，点击了解详情吧。</p>
                    </div>
                </a>
                <a class="item default-item" href="<?php echo UC('Index/groupinfo');?>">
                    <img src="http://192.168.23.105/pingtai/Public/images/head.jpg" class="item-img">
                    <div class="item-info">
                        <h3>新春大红包</h3>
                        <p class="desc">新年快到了，你的红包准备好了吗？送长辈送好友送孩子，每种红包都是不一样的，点击了解详情吧。</p>
                    </div>
                </a>
                <a class="item default-item" href="<?php echo UC('Index/groupinfo');?>">
                    <img src="http://192.168.23.105/pingtai/Public/images/head.jpg" class="item-img">
                    <div class="item-info">
                        <h3>新春大红包</h3>
                        <p class="desc">新年快到了，你的红包准备好了吗？送长辈送好友送孩子，每种红包都是不一样的，点击了解详情吧。</p>
                    </div>
                </a>
                <a class="item default-item" href="<?php echo UC('Index/groupinfo');?>">
                    <img src="http://192.168.23.105/pingtai/Public/images/head.jpg" class="item-img">
                    <div class="item-info">
                        <h3>新春大红包</h3>
                        <p class="desc">新年快到了，你的红包准备好了吗？送长辈送好友送孩子，每种红包都是不一样的，点击了解详情吧。</p>
                    </div>
                </a>
                <a class="item default-item" href="<?php echo UC('Index/groupinfo');?>">
                    <img src="http://192.168.23.105/pingtai/Public/images/head.jpg" class="item-img">
                    <div class="item-info">
                        <h3>新春大红包</h3>
                        <p class="desc">新年快到了，你的红包准备好了吗？送长辈送好友送孩子，每种红包都是不一样的，点击了解详情吧。</p>
                    </div>
                </a>
                <a class="item default-item" href="<?php echo UC('Index/groupinfo');?>">
                    <img src="http://192.168.23.105/pingtai/Public/images/head.jpg" class="item-img">
                    <div class="item-info">
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
            <a class="footer-menu-item" href="#"><i class="iconfont">&#xe60e;</i><br>个人中心</a>
        </div>
        <!-- footer end -->


        <!-- demo start -->
        <!-- demo end -->

    </div>






    <script src="http://libs.baidu.com/jquery/2.1.4/jquery.min.js"></script>
    
    <script src="http://192.168.23.105/pingtai/Public/js/swiper.min.js"></script>
    <script>
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: 2500
        });
    </script>

</body>
</html>