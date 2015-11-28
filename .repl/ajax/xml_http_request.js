// Compiled by ClojureScript 1.7.145 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__68254,handler){
var map__68255 = p__68254;
var map__68255__$1 = ((((!((map__68255 == null)))?((((map__68255.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68255.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68255):map__68255);
var uri = cljs.core.get.call(null,map__68255__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__68255__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__68255__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__68255__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__68255__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__68255__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__68255__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__68255,map__68255__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__68253_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__68253_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__68255,map__68255__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___68263 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___68263)){
var response_type_68264 = temp__4425__auto___68263;
this$__$1.responseType = cljs.core.name.call(null,response_type_68264);
} else {
}

var seq__68257_68265 = cljs.core.seq.call(null,headers);
var chunk__68258_68266 = null;
var count__68259_68267 = (0);
var i__68260_68268 = (0);
while(true){
if((i__68260_68268 < count__68259_68267)){
var vec__68261_68269 = cljs.core._nth.call(null,chunk__68258_68266,i__68260_68268);
var k_68270 = cljs.core.nth.call(null,vec__68261_68269,(0),null);
var v_68271 = cljs.core.nth.call(null,vec__68261_68269,(1),null);
this$__$1.setRequestHeader(k_68270,v_68271);

var G__68272 = seq__68257_68265;
var G__68273 = chunk__68258_68266;
var G__68274 = count__68259_68267;
var G__68275 = (i__68260_68268 + (1));
seq__68257_68265 = G__68272;
chunk__68258_68266 = G__68273;
count__68259_68267 = G__68274;
i__68260_68268 = G__68275;
continue;
} else {
var temp__4425__auto___68276 = cljs.core.seq.call(null,seq__68257_68265);
if(temp__4425__auto___68276){
var seq__68257_68277__$1 = temp__4425__auto___68276;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68257_68277__$1)){
var c__47681__auto___68278 = cljs.core.chunk_first.call(null,seq__68257_68277__$1);
var G__68279 = cljs.core.chunk_rest.call(null,seq__68257_68277__$1);
var G__68280 = c__47681__auto___68278;
var G__68281 = cljs.core.count.call(null,c__47681__auto___68278);
var G__68282 = (0);
seq__68257_68265 = G__68279;
chunk__68258_68266 = G__68280;
count__68259_68267 = G__68281;
i__68260_68268 = G__68282;
continue;
} else {
var vec__68262_68283 = cljs.core.first.call(null,seq__68257_68277__$1);
var k_68284 = cljs.core.nth.call(null,vec__68262_68283,(0),null);
var v_68285 = cljs.core.nth.call(null,vec__68262_68283,(1),null);
this$__$1.setRequestHeader(k_68284,v_68285);

var G__68286 = cljs.core.next.call(null,seq__68257_68277__$1);
var G__68287 = null;
var G__68288 = (0);
var G__68289 = (0);
seq__68257_68265 = G__68286;
chunk__68258_68266 = G__68287;
count__68259_68267 = G__68288;
i__68260_68268 = G__68289;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__46878__auto__ = body;
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});
