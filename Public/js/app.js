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
            if(!shareTitle){
                shareTitle = "店多多-汇聚本地的好玩，实用店铺";
            }
            if(!shareIntro){
                shareIntro = "这里汇聚了北流所有的好玩的，有趣的玩意哦～";
            }
            share(shareTitle,shareIntro,window.location.href,domain+"/Public/images/iconfont-dianpuguanli.png");
            if(handleObj.wechatReady){
                handleObj.wechatReady();
            }
        });

        //下拉刷新
        $(document).on('refresh', '.pull-to-refresh-content',function(e) {
            refreshPage();
            $.pullToRefreshDone('.pull-to-refresh-content');
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
                        var process = parseInt(evt.loaded / evt.total) * 100 + '%';
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
        $('.weui_uploader_file').live('click',function(){
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
 *
 * @param url
 */
function like(url){
    if(!url){
        url = "/index.php/Phone/Miaoji/like";
    }
    $('.likebtn').click(function(){
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

        like();
    },
    wechatReady : function(){

    }
};
createPageHandler(detail);

var showcaseDetail = {
    pageId:"#showcaseDetail",
    handler: function (e, pageId, $page) {
        like();
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
        like('/index.php/Phone/Activity/zanActivity');
        var changeTime = function (sen) {
            var hour = Math.floor(sen / 3600);
            var minu = Math.floor((sen % 3600)/60);
            var send = Math.floor(((sen % 3600)%60));
            return hour+"小时"+minu+"分"+send+"秒";
        };
        var time = 0;
        var sen = 0;
        setInterval(function(){
            time++;
            $(".countdown").each(function(){
                var node = $(this);
                sen = node.data('lefttime') - time;
                if(sen<=0){
                    node.html("该活动已结束，欢迎关注下次活动");
                    node.removeClass('countdown');
                }
                node.html(changeTime(sen));
            });
        },1000);
    }
};
createPageHandler(activityList);


var activityInfo = {
    pageId:"#activityInfo",
    handler: function (e, pageId, $page) {
        like('/index.php/Phone/Activity/zanActivity');
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
    }
};
createPageHandler(activityInfo);


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