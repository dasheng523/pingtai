<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>北流商业平台</title>
    <link href="/Public/css/normalize.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="/Public/css/app.css">
    
    <link rel="stylesheet" href="/Public/css/swiper.min.css">
    <style>
        .swiper-pagination-bullet-active{background: red;}
    </style>

</head>

<body>
    
    <div class="topnavbar">
        <a href="#" class="backbtn">
            <i class="iconfont">&#xe612;</i>
        </a>
        <a href="#" class="rightbtn">
            <i class="iconfont">&#xe619;</i>
        </a>
        <div class="pagetitle">找单详情信息</div>
    </div>






    <script src="http://libs.baidu.com/jquery/2.1.4/jquery.min.js"></script>
    
    <script src="/Public/js/swiper.min.js"></script>
    <script>
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'
        });
    </script>

</body>
</html>