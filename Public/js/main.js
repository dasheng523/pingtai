/************************  SM  ********************************/



/************************  core  ********************************/

//全局变量
var domain = "http://192.168.23.105/pingtai";
var pageInitEventHandles = new Array();

//初始化程序
function initApp(){
    $.each(pageInitEventHandles,function(i,handlerObj){
        $(document).on("pageInit", handlerObj.pageId, handlerObj.handler);
    });
}

/**
 * 创建通用菜单showAction
 * @param buttons
 * @returns {Function}
 */
function createShowActionHandler(buttons){
    return function (){
        var buttons1 = [
            {
                text: '请选择',
                label: true
            }
        ];
        buttons1 = buttons1.concat(buttons);
        var buttons2 = [
            {
                text: '取消',
                bg: 'danger'
            }
        ];
        var groups = [buttons1, buttons2];
        $.actions(groups);
    };
}

/**
 * 刷新页面
 */
function refleshPage(){
    $.router.reflesh = function(url, ignoreCache) {
        var context = this;

        this._saveDocumentIntoCache($(document), location.href);
        this._loadDocument(url, {
            success: function($doc) {
                try {

                    context._parseDocument(url, $doc);
                    //var $newDoc = $($('<div></div>').append($doc.find('.page-group')).html());
                    //context.$view.prepend($newDoc);
                    context._doSwitchDocument(url, false,'from-left-to-right');
                } catch (e) {
                    //console.log(e);
                    location.href = url;
                    //alert("123");
                }
            },
            error: function() {
                location.href = url;
            }
        });
    };
    $.router.reflesh(window.location.href,true);
}

/**
 * 返回重载页面
 */
function backLoadPage(url){
    $.router.back();
    $.router.load(url, true,false);
}

//创建一个页面处理器
function createPageHandler(handleObj){
    var pageId = handleObj.pageId;
    var init = false;
    var tmpHandle = function(e, pageId, $page) {
        //如果已经初始化过就不必要再次初始化了
        if(!init){
            init = true;
            //初始化目录
            if(handleObj.menu){
                var showActionHandler = createShowActionHandler(handleObj.menu);
                $(document).on('click','#'+pageId+ ' '+'#showActionBtn', showActionHandler);
            }
            //下拉刷新
            $(document).on('refresh', '.pull-to-refresh-content',function(e) {
                refleshPage();
                $.pullToRefreshDone('.pull-to-refresh-content');
            });
        }
        //执行自定义事件
        if(handleObj.handler){
            handleObj.handler(e, pageId, $page);
        }
    };
    pageInitEventHandles.push({pageId:pageId,handler:tmpHandle});
}

/************************  core end  ********************************/

/*************** 顾客 *******************/
var index = {
    pageId:""
};



/*************** 店铺 *******************/
//商品列表管理处理器
var goods = {
    pageId:"#goodslist",
    menu:[
        {
            text: '添加商品',
            onClick: function() {
                $.router.load(domain+"/index.php/Phone/Shop/goodsEdit.html");
            }
        },
        {
            text: '删除商品',
            color: 'danger',
            onClick: function() {
                $.router.load(domain+"/index.php/Phone/Shop/goodsDel.html");
            }
        }],
    handler:function(e, pageId, $page){

    }
};
createPageHandler(goods);

//商品编辑页
var goodsEdit = {
    pageId:"#goodsEdit",
    handler:function(e, pageId, $page){
        var error = false;
        $('#form').validator({
            errorCallback: function() {
                error = true;
            },
            before:function(){
                error = false;
            }
        });
        $('#form').submit(function(){
            if(!error){
                var data = $(this).serialize();
                $.showPreloader();
                $.post(domain+"/index.php/Phone/Shop/goodsEditCommit.html",data,function(res){
                    $.hidePreloader();
                    if(res.status==1){
                        $.toast(res.info);
                        if(res.url && res.url!=''){
                            backLoadPage(res.url);
                        }
                    }else{
                        $.toast(res.info);
                    }
                },'json');
            }
            return false;
        });
    }
};
createPageHandler(goodsEdit);

//商品删除页
var goodsDel = {
    pageId:"#goodsDel",
    handler:function(e, pageId, $page){
        $('#goodsDelBtn').click(function(){
            var submit = $('form').serialize();
            $.post(domain+"/index.php/Phone/Shop/goodsDoDel.html",submit,function(res){
                if(res.status==1){
                    $.toast(res.info);
                    if(res.url && res.url!=''){
                        backLoadPage(res.url);
                    }
                }else{
                    $.toast(res.info);
                }
            },'json');
        });
    }
};
createPageHandler(goodsDel);


//集合管理处理器
var collection = {
    pageId:"#collection-page",
    menu:[
        {
            text: '新增妙集',
            onClick: function() {
                $.router.load(domain+"/index.php/Phone/Shop/collectionEdit.html");
            }
        },
        {
            text: '删除妙集',
            color: 'danger',
            onClick: function() {
                $.router.load(domain+"/index.php/Phone/Shop/collectionDel.html");
            }
        }],
    handler:function(e, pageId, $page){

    }
};
createPageHandler(collection);

//集合详情
var collectionInfo = {
    pageId:"#collection-info",
    menu:[
        {
            text: '删除商品',
            color: 'danger',
            onClick: function() {
                $.router.load(domain+"/index.php/Phone/Shop/collectionDel.html");
            }
        }],
    handler:function(e, pageId, $page){

    }
};
createPageHandler(collectionInfo);







//执行初始化
initApp();


$.init();
