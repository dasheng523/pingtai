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
            <h3>冰淇淋</h3>
            <p class="goodstext">价格：<strong>￥5</strong></p>
        </div>

        <div class="margin-top"></div>
        <div class="box panel">
            <h3 class="title">商品说明</h3>
            <p>您可以狠狠地点击这里：CSS3 blur滤镜与照片模糊

                可以看到类似文章一开始展示的模糊对比效果图。

                其他些浏览器，如FireFox到目前还没有支持CSS3 filter. 当然，要实现（比方说）FireFox 24浏览器上照片变模糊的效果，也是可以的。可以使用SVG的模糊滤镜。</p>
        </div>

        <div class="margin-top"></div>
        <div class="box panel">
            <h3 class="title">商家信息</h3>
            <a class="goodsdetail-shop flex" href="<?php echo UC('Index/shopdetail');?>">
                <div class="goodsdetail-shopdetail flex-1">
                    <h3>相聚时光（北流店）</h3>
                    <p>北流市凯达商厦4楼</p>
                    <p>
                        <i class="iconfont star">&#xe628;</i>
                        <i class="iconfont star">&#xe628;</i>
                        <i class="iconfont star">&#xe628;</i>
                        <i class="iconfont star">&#xe628;</i>
                        <i class="iconfont star">&#xe627;</i>
                    </p>
                </div>
                <div class="goodsdetail-icon"><i class="iconfont">&#xe61a;</i></div>
            </a>
            <div class="clear"></div>
        </div>

        <div class="margin-top"></div>
        <div class="box panel">
            <h3 class="title">评价</h3>
            <div class="list"></div>
            <div class="commentbox item">
                <div class="comment-author">
                    <img src="http://192.168.23.105/pingtai/Public/images/head.jpg" class="comment-author-head">
                    <div class="comment-author-info">
                        <p>夜声</p>
                        <p class="date">2016-02-15 19:56</p>
                    </div>
                </div>
                <p class="commentbox-content">
                    如FireFox到目前还没有支持CSS3如FireFox到目前还没有支持CSS3如FireFox到目前还没有支持CSS3如FireFox到目前还没有支持CSS3如FireFox到目前还没有支持CSS3如FireFox到目前还没有支持CSS3
                </p>
            </div>
            <div class="commentbox item">
                <div class="comment-author">
                    <img src="http://192.168.23.105/pingtai/Public/images/head.jpg" class="comment-author-head">
                    <div class="comment-author-info">
                        <p>夜声</p>
                        <p class="date">2016-02-15 19:56</p>
                    </div>
                </div>
                <p class="commentbox-content">
                    如FireFox到目前还没有支持CSS3如FireFox到目前还没有支持CSS3如FireFox到目前还没有支持CSS3如FireFox到目前还没有支持CSS3如FireFox到目前还没有支持CSS3如FireFox到目前还没有支持CSS3
                </p>
            </div>
        </div>
    </div>

    <div class="footer goodsfooter">
        <div>
            <div class="goodsfooter-owner">联系人:<br><strong>黄先生</strong></div>
            <a href="#" class="goodsfooter-item"><i class="iconfont">&#xe621;</i><br>电话</a>
            <a href="#" class="goodsfooter-item"><i class="iconfont">&#xe620;</i><br>地图</a>
            <a href="javascript:" class="goodsfooter-item" id="commentbtn"><i class="iconfont">&#xe61c;</i><br>点评</a>
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