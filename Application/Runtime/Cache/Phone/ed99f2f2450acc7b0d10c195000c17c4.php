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
        <div class="pagetitle flex-1">商品详情</div>
        <a href="#" class="rightbtn">
            <i class="iconfont">&#xe619;</i>
        </a>
    </div>


    <div class="main-container">
        <div class="bannerbox swiper-container">
            <div class="swiper-wrapper">
                <a href="#" class="swiper-slide banneritem"><img src="http://192.168.23.105/pingtai/Public/images/head.jpg"></a>
                <a href="#" class="swiper-slide banneritem"><img src="http://192.168.23.105/pingtai/Public/images/head.jpg"></a>
            </div>
            <div class="swiper-pagination"></div>
            <a href="#" class="goodszan"><i class="iconfont">&#xe623;</i>赞 20</a>
        </div>
        <div class="panel goodsdetail-box">
            <h3>北流冰淇淋专卖店</h3>
            <p class="goodstext">北流影响力：<strong>5566</strong> 分</p>
            <a href="#" class="shopdetail-address">
                <i class="iconfont margin-right">&#xe624;</i>
                北流市铜州市场后门，松须坡门口
                <i class="iconfont pull-right">&#xe61a;</i>
            </a>
        </div>

        <div class="margin-top"></div>
        <div class="box panel">
            <h3 class="title">本店促销</h3>
            <p class="content">您可以狠狠地点击这里：CSS3 blur滤镜与照片模糊

                可以看到类似文章一开始展示的模糊对比效果图。

                其他些浏览器，如FireFox到目前还没有支持CSS3 filter. 当然，要实现（比方说）FireFox 24浏览器上照片变模糊的效果，也是可以的。可以使用SVG的模糊滤镜。</p>
        </div>

        <div class="margin-top"></div>
        <div class="box panel">
            <div class="list">
                <a class="item flex flex-align-center" href="<?php echo UC('Index/goodsdetail');?>">
                    <img src="http://192.168.23.105/pingtai/Public/images/head.jpg" class="item-img">
                    <div class="item-info flex-1">
                        <h3>新春大红包</h3>
                        <p class="group-good-price"><strong>￥50元</strong></p>
                        <p class="desc">地址：广西北流市城</p>
                    </div>
                    <i class="iconfont item-icon-forward">&#xe61a;</i>
                </a>
                <a class="item flex flex-align-center" href="<?php echo UC('Index/goodsdetail');?>">
                    <img src="http://192.168.23.105/pingtai/Public/images/head.jpg" class="item-img">
                    <div class="item-info flex-1">
                        <h3>新春大红包</h3>
                        <p class="group-good-price"><strong>￥50元</strong></p>
                        <p class="desc">地址：广西北流市城西北流市城西北流市城西北流市城西北流市城</p>
                    </div>
                    <i class="iconfont item-icon-forward">&#xe61a;</i>
                </a>
            </div>
            <div class="clear"></div>
        </div>

    </div>





    <script src="http://libs.baidu.com/jquery/2.1.4/jquery.min.js"></script>
    
    <script src="http://192.168.23.105/pingtai/Public/js/swiper.min.js"></script>
    <script>

        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            autoplay: 2500
        });

        $('#commentbtn').click(function(){
            alert("456");
        });

    </script>

</body>
</html>