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
    
    <div class="topnavbar flex flex-align-center">
        <a href="javascript:" class="backbtn" onclick="window.history.back();">
            <i class="iconfont">&#xe612;</i>
        </a>
        <div class="pagetitle flex-1">个人中心</div>
        <a href="#" class="rightbtn">
            <i class="iconfont">&#xe619;</i>
        </a>
    </div>

    <div class="main-container">
        <div class="userinfobox">
            <img src="http://192.168.23.105/pingtai/Public/images/head.jpg" class="userinfobox-img">
            <div class="userinfobox-scorebox ">
                <small>影响力:55664分</small>
            </div>
            <div class="userinfobox-btns flex">
                <a href="#" class="userinfobox-btnitem flex-1"><i class="iconfont">&#xe61b;</i>50<br>我的收藏</a>
                <a href="#" class="userinfobox-btnitem flex-1"><i class="iconfont">&#xe61c;</i>500<br>我的粉丝</a>
                <a href="#" class="userinfobox-btnitem flex-1"><i class="iconfont">&#xe625;</i>65<br>我的评价</a>
            </div>
        </div>

        <div class="margin-top"></div>
        <div class="panel box">
            <h3 class="title">每日影响</h3>
            <div class="list task-list">
                <a class="item flex" href="#">
                    <span class="text-score">+10</span>
                    <span class="task-content flex-1">每天访问 1/5</span>
                    <span class="text-status">未完成</span>
                </a>
                <a class="item flex" href="#">
                    <span class="text-score">+10</span>
                    <span class="task-content flex-1">每天访问 1/5</span>
                    <span class="text-status disable">已完成</span>
                </a>
            </div>
        </div>

        <div class="margin-top"></div>
        <div class="panel box">
            <h3 class="title">我的制作组单</h3>
            <div class="list">
                <a class="item flex flex-align-center" href="<?php echo UC('Index/goodsdetail');?>">
                    <img src="http://192.168.23.105/pingtai/Public/images/head.jpg" class="item-img">
                    <div class="item-info flex-1">
                        <h3>新春大红包</h3>
                        <p class="group-good-price">参考市场价：<strong>￥50元</strong></p>
                        <p class="desc">喜欢：50 | 人气度：40</p>
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