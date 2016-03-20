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
    
    <div class="page page-current" id="goodsDetail">
        <div class="content">
            <?php if($imgList): ?><div class="swiper-container swiper-container-horizontal" data-space-between="10">
                    <div class="swiper-wrapper">
                        <?php if(is_array($imgList)): $i = 0; $__LIST__ = $imgList;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$imgInfo): $mod = ($i % 2 );++$i;?><div class="swiper-slide swiper-slide-active">
                                <img src="<?php echo ($imgInfo['url']); ?>" alt="" style="width: 100%">
                            </div><?php endforeach; endif; else: echo "" ;endif; ?>
                    </div>
                    <div class="swiper-pagination"><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span></div>
                </div><?php endif; ?>


            <div class="card">
                <div class="card-content">
                    <div class="list-block">
                        <ul>
                            <li class="item-content">
                                <div class="item-inner">
                                    <div class="item-title text-center" style="width: 100%;"><?php echo ($goodsInfo['name']); ?></div>
                                </div>
                            </li>
                            <li class="item-content">
                                <div class="item-inner">
                                    <div class="green-text big-text">
                                        <small class="gray-text small-text">市面价：</small>
                                        ￥<?php echo ($goodsInfo['price']); ?>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="card-footer no-border">
                        <a href="javascript:;" class="button button-warning open-comment">评论(<?php echo ($commentCount); ?>)</a>
                        <a href="javascript:;" class="button button-warning" id="likeBtn" data-id="<?php echo ($goodsInfo['id']); ?>">喜欢(<span><?php echo ($likeCount); ?></span>)</a>
                    </div>
                </div>
            </div>

            <input type="hidden" name="id" value="<?php echo ($_GET['id']); ?>" id="goodsIdInput">

            <div class="content-block-title">描述</div>
            <div class="card">
                <div class="card-content">
                    <div class="card-content-inner"><?php echo ($goodsInfo['intro']); ?></div>
                </div>
            </div>

            <div class="content-block-title">商家信息</div>
            <div class="card">
                <div class="card-content">
                    <div class="list-block media-list inset">
                        <ul>
                            <li>
                                <a href="<?php echo UC('Index/shopDetail');?>" class="item-link item-content">
                                    <div class="item-media">
                                        <img src="<?php echo ($shopInfo['imgurl']); ?>" width="44">
                                    </div>
                                    <div class="item-inner">
                                        <div class="item-title-row">
                                            <div class="item-title"><?php echo ($shopInfo['name']); ?></div>
                                        </div>
                                        <div class="item-subtitle"><?php echo ($shopInfo['address']); ?></div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card-footer"><a href="<?php echo UC('Index/shopMap');?>" class="link">点击查看地图</a></div>
            </div>


            <div class="content-block-title">评论(<?php echo ($commentCount); ?>)<a href="#" class="fr open-comment">写评论</a></div>
            <?php if(empty($commentList)): ?><p class="gray-text center-text">暂无评论</p>
                <?php else: ?>
                <?php if(is_array($commentList)): $i = 0; $__LIST__ = $commentList;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$commentInfo): $mod = ($i % 2 );++$i;?><div class="card facebook-card list-block">
                        <div class="card-header no-border">
                            <div class="facebook-avatar">
                                <img src="<?php echo ($commentInfo['userInfo']['headimgurl']); ?>" width="34" height="34">
                            </div>
                            <div class="facebook-name"><?php echo ($commentInfo['userInfo']['nickname']); ?></div>
                            <div class="facebook-date"><?php echo (formatDate($commentInfo['ctime'])); ?></div>
                        </div>
                        <div class="card-content" style="margin-top: -15px;">
                            <div class="card-content-inner">
                                <?php echo ($commentInfo['ccontent']); ?>
                            </div>
                        </div>
                    </div><?php endforeach; endif; else: echo "" ;endif; endif; ?>


            <div style="height: 50px;"></div>
            <div class="fix-bottom row no-gutter">
                <div class="col-100">
                    <a href="tel:<?php echo ($shopInfo['phone']); ?>" class="button button-big button-fill button-warning">联系店主</a>
                </div>
            </div>

        </div>

    </div>

    <div class="popup popup-comment">
        <div class="content-block">
            <div class="commentBox">
                <div class="weui_cells weui_cells_form">
                    <div class="weui_cell">
                        <div class="weui_cell_bd weui_cell_primary">
                        <textarea class="weui_textarea" placeholder="请输入评论" rows="3" id="commentInput"
                                  name="ccontent" required maxlength="200"><?php echo ($goodsDetail['intro']); ?></textarea>
                            <div class="weui_textarea_counter">限200字</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-block">
                <div class="row">
                    <div class="col-50"><a href="#" class="button button-light close-popup">返回</a></div>
                    <div class="col-50"><a href="#" class="button button-fill button-success" id="submitCommentBtn">提交</a></div>
                </div>
            </div>
        </div>
    </div>


</div>

<script type='text/javascript' src='//g.alicdn.com/sj/lib/zepto/zepto.min.js' charset='utf-8'></script>
<script type='text/javascript' src='//g.alicdn.com/msui/sm/0.6.2/js/sm.min.js' charset='utf-8'></script>
<script type='text/javascript' src='//g.alicdn.com/msui/sm/0.6.2/js/sm-extend.min.js' charset='utf-8'></script>
<script type='text/javascript' src="http://192.168.23.105/pingtai/Public/js/main.js?v=8" charset='utf-8'></script>


</body>
</html>