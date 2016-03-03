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

//创建一个页面初始化事件处理器
function createRouteHandler(pageId,eventHandle){
    var isHandle = false;
    var handler = function (e, pageId, $page) {
        if(isHandle) return;
        eventHandle(e, pageId, $page);
        isHandle = true;
    };
    return {pageId:pageId,handler:handler};
}

//创建通用showAction
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

//创建一个页面处理器
function createPageHandler(handleObj){
    var pageId = handleObj.pageId;
    var tmphandle = function(e, pageId, $page) {
        if(handleObj.menu){
            var showActionHandler = createShowActionHandler(handleObj.menu);
            $(document).on('click','#'+pageId+ ' '+'#showActionBtn', showActionHandler);
        }
        if(handleObj.handler){
            handleObj.handler(e, pageId, $page);
        }
    };
    pageInitEventHandles.push(createRouteHandler(pageId,tmphandle));
}

/************************  core end  ********************************/


/*************** 店铺 *******************/
//商品管理处理器
var goods = {
    pageId:"#goodslist",
    menu:[
        {
            text: '添加商品',
            onClick: function() {
                $.router.load(domain+"/index.php/Phone/Shop/goodsEdit");
            }
        },
        {
            text: '删除商品',
            color: 'danger',
            onClick: function() {
                $.router.load(domain+"/index.php/Phone/Shop/goodsDel");
            }
        }],
    handler:function(e, pageId, $page){

    }
};

//集合管理处理器
var collection = {
    pageId:"#collection-page",
    menu:[
        {
            text: '新增妙集',
            onClick: function() {
                $.router.load(domain+"/index.php/Phone/Shop/collectionEdit");
            }
        },
        {
            text: '删除妙集',
            color: 'danger',
            onClick: function() {
                $.router.load(domain+"/index.php/Phone/Shop/collectionDel");
            }
        }],
    handler:function(e, pageId, $page){

    }
};

//集合详情
var collectionInfo = {
    pageId:"#collection-info",
    menu:[
        {
            text: '删除商品',
            color: 'danger',
            onClick: function() {
                $.router.load(domain+"/index.php/Phone/Shop/collectionDel");
            }
        }],
    handler:function(e, pageId, $page){

    }
};


createPageHandler(goods);
createPageHandler(collection);
createPageHandler(collectionInfo);



//执行初始化
initApp();


$.init();
