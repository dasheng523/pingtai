/************************  core  ********************************/

//全局变量
var pageInitEventHandles = [];

//初始化程序
function initApp(){
    $.each(pageInitEventHandles,function(i,handlerObj){
        $(document).on("pageInit", handlerObj.pageId, handlerObj.handler);
    });
}

/**
 * 刷新页面
 */
function refreshPage(){
    $.router.refresh = function(ignoreCache) {
        var url = window.location.href;
        var context = this;

        this._saveDocumentIntoCache($(document), location.href);
        this._loadDocument(url, {
            success: function($doc) {
                try {
                    context._parseDocument(url, $doc);
                    context._doSwitchDocument(url, false,'from-left-to-right');
                } catch (e) {
                    location.href = url;
                }
            },
            error: function() {
                location.href = url;
            }
        });
    };
    $.router.refresh(true);
}

/**
 * 返回重载页面
 */
function backLoadPage(url){
    $.router.back();
    $.router.load(url, true);
}

/**
 * 创建一个页面处理器
 * @param handleObj
 */
function createPageHandler(handleObj){
    var pageId = handleObj.pageId;
    var tmpHandle = function(e, pageId, $page) {
        initWechatJs();
        wx.ready(function(){

            if(typeof(shareTitle)=="undefined" || !shareTitle){
                shareTitle = "店多多-汇聚本地的好玩，实用店铺";
            }
            if(typeof(shareIntro)=="undefined" || !shareIntro){
                shareIntro = "这里汇聚了北流丰富的特价活动，优惠信息，想便宜买好货就赶紧过来吧～";
            }
            share(shareTitle,shareIntro,window.location.href,domain+"/Public/images/logo.png");
            if(handleObj.wechatReady){
                handleObj.wechatReady();
            }
        });

        //下拉刷新
        $(document).on('refresh', '.pull-to-refresh-content',function(e) {
            refreshPage();
            $.pullToRefreshDone('.pull-to-refresh-content');
        });

        //延迟加载
        $(".lazy").lazyload({
            container: $(".content")
        });

        //初始化lookMap按钮
        $('.lookmap').click(function(){
            var lat = $(this).data('lat');
            var lng = $(this).data('lng');
            var name = $(this).data('name');
            var address = $(this).data('address');
            openLocation(lat,lng,name,address);
        });
        
        //初始化tellme按钮事件
        $('.telmebtn').click(function () {
            $.toast('很快将会开放此功能');
        });
        
        $('.showimglist').click(function () {
            var imglist = $(this).data('imglist');
            imglist = imglist.split(',');
            wx.previewImage({
                current: imglist[0], // 当前显示图片的http链接
                urls: imglist // 需要预览的图片http链接列表
            });
        });

        //执行自定义事件
        if(handleObj.handler){
            handleObj.handler(e, pageId, $page);
        }
    };
    pageInitEventHandles.push({pageId:pageId,handler:tmpHandle});
}

function initWechatJs(){
    if(typeof(jsConfig) == 'undefined'){
        return;
    }
    wx.config(jsConfig);
    wx.error(function(res){
        alert(JSON.stringify(res));
    });
}

/*************** Wiget *******************/

var FormUtils = {
    /**
     * 初始化表单
     * @param formId
     * @param urlHandle back,forward,default
     */
    initForm : function(formId,urlHandle){
        var isError = false;
        var form = $(formId);
        //初始化表单验证控件
        form.validator({
            errorCallback: function() {
                isError = true;
            },
            before:function(){
                isError = false;
            }
        });
        //表单提交事件
        form.submit(function(e){
            e.preventDefault();
            if(isError){
                $.toast('您填写的信息有一些错误');
                return;
            }
            var formNode = form;
            var submit = formNode.serialize();
            var postUrl = formNode.attr('action');
            $.showPreloader();
            //发送数据
            $.post(postUrl,submit,function(res){
                $.hidePreloader();
                if(res.status==1){
                    $.toast(res.info);
                    switch (urlHandle){
                        case "back":
                            backLoadPage(res.url);
                            break;
                        case "forward":
                            $.router.load(res.url, true);
                            break;
                        default:
                            break;
                    }
                }else{
                    $.toast(res.info);
                }
            },'json');
        });
    }
};

var UploadUtils = function(fileId,limitCount){
    if(limitCount === undefined){
        limitCount = 6;
    }
    var i = 1;
    function createShowNode(){
        var id = "i"+(i++);
        return {
            id:id,
            node:function($imgUrl){
                return '<li id="'+id+'" class="weui_uploader_file weui_uploader_status" style="background-image:url('+$imgUrl+')"><div class="weui_uploader_status_content">0%</div></li>';
            }
        };
    }
    var showImg = function(fileNode,showNode){
        var reader = new FileReader();
        reader.onload = function (e) {
            var node = showNode.node(e.target.result);
            $('.weui_uploader_files').append(node);
        };
        reader.readAsDataURL(fileNode.files[0]);
    };
    var uploadFile = function(fileNode,showNode){
        var fileData = new FormData();
        var id = showNode.id;
        fileData.append('fileData', fileNode.files[0]);
        $.ajax({
            url: domain+'/index.php/Phone/Upload/uploadFile.html',
            type: 'POST',
            xhr: function() {
                var xhr = $.ajaxSettings.xhr();
                if (xhr.upload) {
                    xhr.upload.addEventListener('progress', function(evt) {
                        var process = Math.floor(evt.loaded / evt.total) * 100 + '%';
                        $('#'+id+' .weui_uploader_status_content').html(process);
                    }, false);
                }
                return xhr;
            },
            success: function(data) {
                var tmp = $('#'+id);
                tmp.removeClass('weui_uploader_status');
                tmp.html('<input type="hidden" name="media_ids[]" value="'+data.info[0]+'">');
            },
            error: function(xhr,errorType, error) {
                console.log(error);
                console.log(errorType);
                $.toast("上传图片似乎出现了问题");
            },
            data: fileData,
            cache: false,
            contentType: false,
            processData: false
        }, 'json');
    };
    var initUpload = function(){
        $('.weui_uploader_files').on('click', '.weui_uploader_file', function(e){
            var context = this;
            $.confirm('确定要删除这个图片吗？', function () {
                var id = $(context).find('input').val();
                $.ajax({
                    url:domain+'/index.php/Phone/Upload/delFile.html',
                    data:{id:id},
                    type:'POST',
                    success:function(){
                        $(context).remove();
                    }
                });
            },'json');
        });
        $(fileId).change(function(){
            var total = $('.weui_uploader_file').length + 1;
            if(total == limitCount){
                $('.weui_uploader_input_wrp').addClass('hide');
            }
            if (this.files && this.files[0]) {
                var showNode = createShowNode();
                showImg(this,showNode);
                uploadFile(this,showNode);
            }
        });
    };
    return {initUpload:initUpload};
};



/**
 * 查看地图，只能在微信里面调用
 */
function openLocation(lat,lng,name,address){
    wx.openLocation({
        latitude: lat, // 纬度，浮点数，范围为90 ~ -90
        longitude: lng, // 经度，浮点数，范围为180 ~ -180。
        name: name, // 位置名
        address: address, // 地址详情说明
        scale: 13, // 地图缩放级别,整形值,范围从1~28。默认为最大
        infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
    });
}

/**
 * 分享
 * @param title
 * @param desc
 * @param link
 * @param imgUrl
 * @param type
 * @param dataUrl
 * @param success
 * @param cancel
 */
function share(title,desc,link,imgUrl,type,dataUrl,success,cancel){
    var info = {
        title:title,
        desc:desc,
        link:link,
        imgUrl:imgUrl
    };
    if(type){
        info.type = type;
    }
    if(dataUrl){
        info.dataUrl = dataUrl;
    }
    if(success){
        info.success = success;
    }
    if(cancel){
        info.cancel = cancel;
    }
    wx.onMenuShareTimeline(info);
    wx.onMenuShareAppMessage(info);
    wx.onMenuShareQQ(info);
    wx.onMenuShareWeibo(info);
    wx.onMenuShareQZone(info);
}

/**
 * 喜欢按钮
 * @param url
 * @param btn
 */
function like(url,btn){
    if(!url){
        url = "/index.php/Phone/Miaoji/like";
    }
    if(!btn){
        btn = '.likebtn';
    }
    $(document).on("click", btn, function(){
        if($(this).hasClass('hover')){
            return;
        }
        $count = $(this).find('span').html();
        var id = $(this).data('id');
        var context = this;
        $.post(domain+url,{id:id},function(rs){
            if(rs.status){
                $count ++;
                $(context).find('span').html($count);
                $(context).addClass('hover');
            }else{
                $.toast(rs.info);
            }
        });
    });
}

/*************** Bussiness *******************/
var detail = {
    pageId:"#detail",
    handler: function (e, pageId, $page) {
        $('#shareBtn').click(function () {
            $('.mask').removeClass('hide');
        });
        $('.mask').click(function(){
            $(this).addClass('hide');
        });
        
        $('.showMenu').click(function () {
            var buttons1 = [
                {
                    text: '返回首页',
                    onClick: function() {
                        $.router.load(domain+"/index.php/Phone/Miaoji/showcase", true);
                    }
                },
                {
                    text: '关注我们',
                    onClick: function() {
                        $.router.load(domain+"/index.php/Phone/Public/showMa", true);
                    }
                }
            ];
            var buttons2 = [
                {
                    text: '取消',
                    bg: 'danger'
                }
            ];
            var groups = [buttons1, buttons2];
            $.actions(groups);
        });

        like(null,'#detail .likebtn');
    },
    wechatReady : function(){

    }
};
createPageHandler(detail);

var showcaseDetail = {
    pageId:"#showcaseDetail",
    handler: function (e, pageId, $page) {
        like(null,"#showcaseDetail .likebtn");
    }
};
createPageHandler(showcaseDetail);

var showcase = {
    pageId:"#showcase",
    handler: function (e, pageId, $page) {

    }
};
createPageHandler(showcase);


var activityList = {
    pageId:"#activityList",
    handler: function (e, pageId, $page) {
    }
};
createPageHandler(activityList);



var couponDetail = {
    pageId:"#couponDetail",
    handler: function (e, pageId, $page) {
        var lefttime = $('#coupon_begin').val();
        if(lefttime){
            setInterval(function(){
                lefttime = lefttime - 1;
                if(lefttime<=0){
                    refreshPage();
                }
            },5000);
        }

        $('#coupon_action').click(function () {
            var id = $(this).data('id');
            $.post(domain+"/index.php/Phone/Activity/receiveCoupon",{id:id},function(res){
                if(res.status==1){
                    $.toast(res.info);
                    setTimeout(function(){
                        $.router.load(domain+"/index.php/Phone/Activity/couponUser", true);
                    },2000);
                }else{
                    $.toast(res.info);
                }
            });
        });
    }
};
createPageHandler(couponDetail);


var hotActivityGoodsList = {
    pageId:"#hotActivityGoodsList",
    handler: function (e, pageId, $page) {
        like('/index.php/Phone/Activity/zanGoods','#hotActivityGoodsList .likebtn');
        $('.showMenu').click(function () {
            var buttons1 = [
                {
                    text: '关注我们',
                    onClick: function() {
                        $.router.load(domain+"/index.php/Phone/Public/showMa", true);
                    }
                }
            ];
            var buttons2 = [
                {
                    text: '取消',
                    bg: 'danger'
                }
            ];
            var groups = [buttons1, buttons2];
            $.actions(groups);
        });
        if($('.no-goods').html()){
            $.detachInfiniteScroll($('.infinite-scroll'));
            $('.infinite-scroll-preloader').remove();
        }

        var loading = false;
        // 最多可加载的条目
        var page = 2;
        function addItems(data) {
            var node ;
            if(data.imgUrl){
                node = $('.glistImg').last().clone();
                node.find('.im').attr('src',data.imgUrl);
            }else{
                node = $('.glist').last().clone();
            }
            var url = node.find('.lk').first().attr('href').split("?")[0];
            node.find('.lk').attr('href',url+"?id="+data.id);
            node.find('.nn').html(data.name);
            node.find('.pp').html(data.price);
            node.find('.op').html(data.original_price);
            node.find('.sn').html(data.shopName);
            node.find('.lb').attr('data-id',data.id);
            node.find('.lb span').html(data.likecount);
            $('.infinite-scroll .hot-activity-box').append(node);
        }
        //var data = {id:"1155",name:"测试测试",original_price:"50元/斤",price:"20元/斤",shopName:"皆用店多多",likecount:50,imgUrl:5656};

        $(document).on('infinite', '.infinite-scroll',function() {
            if (loading) return;
            loading = true;
            var current = window.location.href;
            $.get(current,{"page":page},function(res){
                page = page + 1;
                loading = false;
                if(res.length<=0){
                    $.detachInfiniteScroll($('.infinite-scroll'));
                    $('.infinite-scroll-preloader').remove();
                }else{
                    var i = 0;
                    for(i=0;i<res.length;i++){
                        var data = res[i];
                        addItems(data);
                    }
                }
                $.refreshScroller();
            },'json');
        });
    }
};
createPageHandler(hotActivityGoodsList);


var hotActivityGoodsInfo = {
    pageId:"#hotActivityGoodsInfo",
    handler: function (e, pageId, $page) {
        like('/index.php/Phone/Activity/zanGoods','#hotActivityGoodsInfo .likebtn');
        $('.showMenu').click(function () {
            var buttons1 = [
                {
                    text: '关注我们',
                    onClick: function() {
                        $.router.load(domain+"/index.php/Phone/Public/showMa", true);
                    }
                }
            ];
            var buttons2 = [
                {
                    text: '取消',
                    bg: 'danger'
                }
            ];
            var groups = [buttons1, buttons2];
            $.actions(groups);
        });
    }
};
createPageHandler(hotActivityGoodsInfo);


var wechatOpen = {
    pageId:"#wechatOpen",
    handler: function (e, pageId, $page) {
        $('#showMaskBtn').click(function () {
            $('.mask').removeClass('hide');
        });
        $('.mask').click(function(){
            $(this).addClass('hide');
        });
    }
};
createPageHandler(wechatOpen);


var uploadForm = {
    pageId:"#uploadForm",
    handler: function (e, pageId, $page) {
        $('#getLocationBtn').click(function(){
            wx.getLocation({
                success: function (res) {
                    var val = res.latitude + ','+res.longitude;
                    $('#latlngInput').val(val);
                }
            });
        });

        $('#resetBtn').click(function () {
            $('form')[0].reset();
        });
        $('#submitBtn').click(function(){
            $('form').submit();
        });
    }
};
createPageHandler(uploadForm);


var editSuggest = {
    pageId:"#editSuggest",
    handler: function(e, pageId, $page){
        $('#getLocationBtn').click(function(){
            wx.getLocation({
                success: function (res) {
                    var val = res.latitude + ','+res.longitude;
                    $('#latlngInput').val(val);
                    $('.latlngshow').html(val);
                }
            });
        });
        FormUtils.initForm('form','back');
        UploadUtils('#uploadFile').initUpload();
    }
};
createPageHandler(editSuggest);

initApp();

$.init();

