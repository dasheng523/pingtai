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
            share('testShare','testDetail',window.location.href,domain+"/Public/images/caomei.jpg");
            if(handleObj.wechatReady){
                handleObj.wechatReady();
            }
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

/**
 * 查看地图，只能在微信里面调用
 */
function openLocation(lat,lng,name,address){
    wx.openLocation({
        latitude: lat, // 纬度，浮点数，范围为90 ~ -90
        longitude: lng, // 经度，浮点数，范围为180 ~ -180。
        name: name, // 位置名
        address: address, // 地址详情说明
        scale: 18, // 地图缩放级别,整形值,范围从1~28。默认为最大
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
 * 喜欢
 * @param id 公园ID
 */
function like(){
    $('#likebtn').click(function(){
        if($(this).hasClass('hover')){
            return;
        }
        $count = $(this).find('span').html();
        var id = $(this).data('id');
        var context = this;
        $.post(domain+'/index.php/Phone/Miaoji/like',{id:id},function(rs){
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
        var open = false;
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


initApp();

$.init();