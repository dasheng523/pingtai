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
        .swiper-pagination-bullet-active{background: red;}
    </style>

</head>

<body>
    
    <div class="topnavbar flex flex-align-center">
        <a href="javascript:" class="backbtn" onclick="window.history.back();">
            <i class="iconfont">&#xe612;</i>
        </a>
        <div class="pagetitle flex-1"><input type="text" class="searchtextbox" placeholder="搜索商品，找单，店铺"></div>
        <a href="#" class="rightbtn">
            搜索
        </a>
    </div>

    <div class="main-container">
        <div class="hotsearchbox box">
            <h3 class="title">热门搜索</h3>
            <div class="hotsearchlist">
                <a href="#" class="hotsearchitem">烤鱼</a>
                <a href="#" class="hotsearchitem">烤鱼</a>
                <a href="#" class="hotsearchitem">烤鱼</a>
                <a href="#" class="hotsearchitem">烤鱼</a>
                <a href="#" class="hotsearchitem">烤鱼</a>
                <a href="#" class="hotsearchitem">烤鱼</a>
                <a href="#" class="hotsearchitem">烤鱼</a>
                <a href="#" class="hotsearchitem">烤鱼</a>
                <a href="#" class="hotsearchitem">烤鱼</a>


            </div>
        </div>

        <div class="margin-top"></div>
        <!-- 搜索记录 start -->
        <div class="panel box">
            <h3 class="title">搜索记录</h3>
            <div class="list commonlist">
                <a class="item" href="#">推拿</a>
                <a class="item" href="#">推拿</a>
                <a class="item" href="#">推拿</a>
                <a class="item" href="#">推拿</a>
                <a class="item" href="#">推拿</a>
            </div>
        </div>
        <!-- 搜索记录 end -->

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