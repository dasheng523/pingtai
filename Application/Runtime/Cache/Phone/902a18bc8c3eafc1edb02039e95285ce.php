<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>我的生活</title>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <link rel="shortcut icon" href="/favicon.ico">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

    <link rel="stylesheet" href="http://192.168.23.105/pingtai/Public/SUI-Mobile/dist/css/sm.min.css">
    <link rel="stylesheet" href="//g.alicdn.com/msui/sm/0.6.2/css/sm-extend.min.css">
    <link rel="stylesheet" href="http://192.168.23.105/pingtai/Public/css/weui.min.css">
    <link rel="stylesheet" href="http://192.168.23.105/pingtai/Public/css/main.css?v=19">

    


</head>
<body>
<div class="page-group">
    <div class="page page-current" id="collection-info">
        
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

    </div>



        <nav class="bar bar-tab">
            <a class="tab-item external active" href="<?php echo UC('Index/index');?>">
                <span class="icon"><i class="iconfont">&#xe602;</i></span>
                <span class="tab-label">首页</span>
            </a>
            <a class="tab-item external" href="<?php echo UC('Index/publishNeed');?>">
                <span class="icon"><i class="iconfont">&#xe604;</i></span>
                <span class="tab-label">发布</span>
            </a>
            <a class="tab-item external" href="<?php echo UC('Index/topbar');?>">
                <span class="icon"><i class="iconfont">&#xe605;</i></span>
                <span class="tab-label">排行榜</span>
            </a>
            <a class="tab-item external" href="<?php echo UC('User/index');?>">
                <span class="icon"><i class="iconfont">&#xe603;</i></span>
                <span class="tab-label">个人中心</span>
                <span class="badge">2</span>
            </a>
        </nav>
    </div>
</div>

<script type='text/javascript' src='//g.alicdn.com/sj/lib/zepto/zepto.min.js' charset='utf-8'></script>
<script type='text/javascript' src='//g.alicdn.com/msui/sm/0.6.2/js/sm.min.js' charset='utf-8'></script>
<script type='text/javascript' src='//g.alicdn.com/msui/sm/0.6.2/js/sm-extend.min.js' charset='utf-8'></script>
<script type='text/javascript' src="http://192.168.23.105/pingtai/Public/js/main.js" charset='utf-8'></script>


</body>
</html>