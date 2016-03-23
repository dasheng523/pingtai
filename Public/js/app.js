/************************  core  ********************************/

//全局变量
var domain = "http://192.168.23.105/pingtai";
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
        //执行自定义事件
        if(handleObj.handler){
            handleObj.handler(e, pageId, $page);
        }
    };
    pageInitEventHandles.push({pageId:pageId,handler:tmpHandle});
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
    }
};
createPageHandler(detail);




initApp();

$.init();