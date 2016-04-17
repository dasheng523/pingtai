/************************  SM  ********************************/



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

//创建一个页面处理器
function createPageHandler(handleObj){
    var pageId = handleObj.pageId;
    var init = false;
    var tmpHandle = function(e, pageId, $page) {
        //如果已经初始化过就不必要再次初始化了
        initWechatJs();
        if(!init){
            init = true;
            //初始化目录
            if(handleObj.menu){
                var showActionHandler = createShowActionHandler(handleObj.menu);
                $(document).on('click','#'+pageId+ ' '+'#showActionBtn', showActionHandler);
            }
            //下拉刷新
            $(document).on('refresh', '.pull-to-refresh-content',function(e) {
                refreshPage();
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

function initWechatJs(){
    if(typeof(jsConfig) == 'undefined'){
        return;
    }
    wx.config(jsConfig);
    wx.error(function(res){
        alert(JSON.stringify(res));
    });
}

var UploadUtils = function(fileId,limitCount){
    if(limitCount === undefined){
        limitCount = 6;
    }
    var i = 1;
    var mediaType = $(fileId).data('mediatype') ? $(fileId).data('mediatype') : 0;
    var entityType = $(fileId).data('entitytype') ? $(fileId).data('entitytype') : 0;
    var entityId = $(fileId).data('entityid') ? $(fileId).data('entityid') : 0;

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
        fileData.append('mediaType',mediaType);
        fileData.append('entityType',entityType);
        fileData.append('entityId',entityId);
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
                alert(error);
                alert(errorType);
                $.toast("您的手机似乎不支持上传功能");
            },
            data: fileData,
            cache: false,
            contentType: false,
            processData: false
        }, 'json');
    };
    var initUpload = function(){
        $(document).on('click', fileId+' .weui_uploader_file', function(e){
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
            var total = $(fileId+' .weui_uploader_file').length + 1;
            if(total == limitCount){
                $('.weui_uploader_input_wrp').addClass('hide');
            }else if(total > limitCount){
                $.toast("活动封面只能上传一张");
                $('.weui_uploader_input_wrp').addClass('hide');
                return;
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
                $.toast('有些信息没有填写正确');
                return;
            }
            var formNode = form;
            var submit = formNode.serialize();
            var postUrl = formNode.attr('action');
            $.showPreloader();
            //发送数据
            $.ajax({
                type:'post',
                url:postUrl,
                data:submit,
                dataType: "json",
                success:function(res){
                    $.hidePreloader();
                    if(res.status==1){
                        $.toast(res.info);
                        if(res.url && res.url!==''){
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
                        }
                    }else{
                        $.toast(res.info);
                    }
                },
                error:function(XMLHttpRequest, textStatus, errorThrown){
                    $.hidePreloader();
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(textStatus);
                }
            });
        });
    }
};

/*************** 顾客 *******************/
var index = {
    pageId:""
};

var publishGoodsList = {
    pageId: "#PublishGoodsList",
    handler:function(e, pageId, $page){
        $('#likeBtn').click(function(){
            alert(123);
        });
    }
};
createPageHandler(publishGoodsList);


var openShop = {
    pageId: "#openShop",
    handler:function(e, pageId, $page){
        FormUtils.initForm('form','forward');
    }
};
createPageHandler(openShop);



var goodsDetail = {
    pageId: "#goodsDetail",
    handler:function(e, pageId, $page){
        $('#likeBtn').click(function(){
            var id = $(this).data('id');
            $.post(domain+'/Phone/Index/likeGoods',{id:id},function(res){
                if(res.status==1){
                    var count = $('#likeBtn span').html();
                    count++;
                    $('#likeBtn span').html(count);
                }
            },'json');
        });

        $('.open-comment').click(function(){
            $.popup('.popup-comment');
        });

        $('#submitCommentBtn').click(function(){
            var content = $('#commentInput').val();
            var id = $('#goodsIdInput').val();
            $.post(domain+'/Phone/Index/submitComment',{content:content,id:id},function(res){
                $.toast(res.info);
                $.closeModal('.popup-comment');
                setTimeout(function(){
                    refreshPage();
                },500);
            },'json');
        });
    }
};
createPageHandler(goodsDetail);

var collectionInfo = {
    pageId: "#collectionInfo",
    handler:function(e, pageId, $page){
        $('#showdetail').click(function(){
            $('.groupshowbox').removeClass('hide');
            $(".swiper-container2").swiper();
        });
        $('.groupshow-close').click(function(){
            $('.groupshowbox').addClass('hide');
        });

        $('#likeBtn').click(function(){
            var id = $(this).data('id');
            $.post(domain+'/Phone/Index/likeCollection',{id:id},function(res){
                if(res.status==1){
                    var count = $('#likeBtn > div').html();
                    count++;
                    $('#likeBtn > div').html(count);
                }
            },'json');
        });

        $('.open-comment').click(function(){
            $.popup('.popup-comment');
        });

        $('#submitCommentBtn').click(function(){
            var content = $('#commentInput').val();
            var id = $('#idInput').val();
            $.post(domain+'/Phone/Index/submitCollectionComment',{content:content,id:id},function(res){
                $.toast(res.info);
                $.closeModal('.popup-comment');
                setTimeout(function(){
                    refreshPage();
                },500);
            },'json');
        });
    }
};
createPageHandler(collectionInfo);


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
                $.router.load(domain+"/index.php/Phone/Shop/goodsDel.html",true);
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
        FormUtils.initForm('form','back');
        var ddd = UploadUtils('#uploadFile');
        ddd.initUpload();
    }
};
createPageHandler(goodsEdit);

//商品删除页
var goodsDel = {
    pageId:"#goodsDel",
    handler:function(e, pageId, $page){
        FormUtils.initForm('form','back');
    }
};
createPageHandler(goodsDel);

//商店编辑页
var shopDetail = {
    pageId:"#shopDetail",
    handler:function(e, pageId, $page){
        FormUtils.initForm('form');
        var ddd = UploadUtils('#uploadFile');
        ddd.initUpload();

        $('#dignweiBtn').click(function () {
            wx.getLocation({
                success: function (res) {
                    $('#lat').val(res.latitude);
                    $('#lng').val(res.longitude);
                    $('#latlngInput').html("（完成）");
                }
            });
        });
    }
};
createPageHandler(shopDetail);

var activity = {
    pageId:"#activity",
    menu:[
        {
            text: '新增活动',
            onClick: function() {
                $.router.load(domain+"/index.php/Phone/Shop/activityEdit.html",true);
            }
        },
        {
            text: '删除活动',
            color: 'danger',
            onClick: function() {
                $.router.load(domain+"/index.php/Phone/Shop/activityDel.html",true);
            }
        }],
    handler:function(e, pageId, $page){

    }
};

/**
 * 编辑活动基本内容
 * @type {{pageId: string, handler: collectionEdit.handler}}
 */
var activityEdit = {
    pageId:"#activityEdit",
    handler:function(e, pageId, $page){
        FormUtils.initForm('#mainform','back');
        var ddd = UploadUtils('#uploadFile',1);
        ddd.initUpload();

        $('#showActivityGoodsBtn').click(function () {
            $.popup('.popup-goodsList');
            $('.popup-overlay').removeClass('popup-overlay');

        });
        $('#closePublish').click(function () {
            $.closeModal('.popup-goodsList');
        });

        $('#goodsPublishBtn').click(function () {
            var godsformval = $('#selectGoods').serializeArray();
            var values = godsformval.map(function(n){
                return n.value;
            });
            $("input[name^='goodslistids']").val(values.join(","));
            $('#totalGoods').html(values.length);
            $.closeModal('.popup-goodsList');
        });


        var selectGoodsStr = $("input[name^='goodslistids']").val();
        if(selectGoodsStr!=""){
            var selectGoodsList = selectGoodsStr.split(',');
            $('#totalGoods').html(selectGoodsList.length);
            $("input[id^='goodsV_']").each(function(){
                if(selectGoodsList.indexOf($(this).val())>=0){
                    $(this).attr('checked','true');
                }
            });
        }


    }
};
createPageHandler(activityEdit);

createPageHandler(activity);

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
                $.router.load(domain+"/index.php/Phone/Shop/collectionDel.html",true);
            }
        }],
    handler:function(e, pageId, $page){

    }
};
createPageHandler(collection);

/**
 * 集合详情
 * @type {{pageId: string, menu: *[], handler: collectionInfo.handler}}
 */
var collectionInfoCustomer = {
    pageId:"#collection-info",
    menu:[
        {
            text: '删除商品',
            color: 'danger',
            onClick: function() {
                $.router.load(domain+"/index.php/Phone/Shop/collectionGoodsDel.html",true);
            }
        }],
    handler:function(e, pageId, $page){

    }
};
createPageHandler(collectionInfoCustomer);

/**
 * 集合商品删除页
 * @type {{pageId: string, menu: *[], handler: collectionGoodsDel.handler}}
 */
var collectionGoodsDel = {
    pageId:"#collectionGoodsDel",
    handler:function(e, pageId, $page){
        FormUtils.initForm('form','back');
    }
};
createPageHandler(collectionGoodsDel);



/**
 * 编辑集合基本内容
 * @type {{pageId: string, handler: collectionEdit.handler}}
 */
var collectionEdit = {
    pageId:"#collectionEdit",
    handler:function(e, pageId, $page){
        FormUtils.initForm('form','back');

        var ddd = UploadUtils('#uploadFile',1);
        ddd.initUpload();
    }
};
createPageHandler(collectionEdit);


/**
 * 集合删除页面
 * @type {{pageId: string, handler: goodsDel.handler}}
 */
var collectionDel = {
    pageId:"#collectionDel",
    handler:function(e, pageId, $page){
        FormUtils.initForm('form','back');
    }
};
createPageHandler(collectionDel);

/**
 * 影响力页面
 * @type {{pageId: string, handler: effect.handler}}
 */
var effect = {
    pageId:"#effect",
    handler:function(e, pageId, $page){
    }
};
createPageHandler(effect);



//执行初始化
initApp();


$.init();
