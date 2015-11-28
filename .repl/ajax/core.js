// Compiled by ClojureScript 1.7.145 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('ajax.xml_http_request');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
goog.require('clojure.string');
goog.require('goog.json.Serializer');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
ajax.core.process_response = (function ajax$core$process_response(response,interceptor){

return ajax.protocols._process_response.call(null,interceptor,response);
});
ajax.core.process_request = (function ajax$core$process_request(request,interceptor){

return ajax.protocols._process_request.call(null,interceptor,request);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__47492__auto__,k__47493__auto__){
var self__ = this;
var this__47492__auto____$1 = this;
return cljs.core._lookup.call(null,this__47492__auto____$1,k__47493__auto__,null);
});

ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__47494__auto__,k67775,else__47495__auto__){
var self__ = this;
var this__47494__auto____$1 = this;
var G__67777 = (((k67775 instanceof cljs.core.Keyword))?k67775.fqn:null);
switch (G__67777) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67775,else__47495__auto__);

}
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__67778,opts){
var self__ = this;
var map__67779 = p__67778;
var map__67779__$1 = ((((!((map__67779 == null)))?((((map__67779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67779):map__67779);
var request__$1 = cljs.core.get.call(null,map__67779__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__67781 = this;
var map__67781__$1 = ((((!((map__67781 == null)))?((((map__67781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67781):map__67781);
var request__$2 = cljs.core.get.call(null,map__67781__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__67783,xhrio){
var self__ = this;
var map__67784 = p__67783;
var map__67784__$1 = ((((!((map__67784 == null)))?((((map__67784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67784):map__67784);
var response__$1 = cljs.core.get.call(null,map__67784__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__67786 = this;
var map__67786__$1 = ((((!((map__67786 == null)))?((((map__67786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67786):map__67786);
var response__$2 = cljs.core.get.call(null,map__67786__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.core.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__47506__auto__,writer__47507__auto__,opts__47508__auto__){
var self__ = this;
var this__47506__auto____$1 = this;
var pr_pair__47509__auto__ = ((function (this__47506__auto____$1){
return (function (keyval__47510__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__47507__auto__,cljs.core.pr_writer,""," ","",opts__47508__auto__,keyval__47510__auto__);
});})(this__47506__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__47507__auto__,pr_pair__47509__auto__,"#ajax.core.StandardInterceptor{",", ","}",opts__47508__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$ = true;

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67774){
var self__ = this;
var G__67774__$1 = this;
return (new cljs.core.RecordIter((0),G__67774__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__47490__auto__){
var self__ = this;
var this__47490__auto____$1 = this;
return self__.__meta;
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__47486__auto__){
var self__ = this;
var this__47486__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__47496__auto__){
var self__ = this;
var this__47496__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__47487__auto__){
var self__ = this;
var this__47487__auto____$1 = this;
var h__47313__auto__ = self__.__hash;
if(!((h__47313__auto__ == null))){
return h__47313__auto__;
} else {
var h__47313__auto____$1 = cljs.core.hash_imap.call(null,this__47487__auto____$1);
self__.__hash = h__47313__auto____$1;

return h__47313__auto____$1;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__47488__auto__,other__47489__auto__){
var self__ = this;
var this__47488__auto____$1 = this;
if(cljs.core.truth_((function (){var and__46866__auto__ = other__47489__auto__;
if(cljs.core.truth_(and__46866__auto__)){
var and__46866__auto____$1 = (this__47488__auto____$1.constructor === other__47489__auto__.constructor);
if(and__46866__auto____$1){
return cljs.core.equiv_map.call(null,this__47488__auto____$1,other__47489__auto__);
} else {
return and__46866__auto____$1;
}
} else {
return and__46866__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__47501__auto__,k__47502__auto__){
var self__ = this;
var this__47501__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__47502__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__47501__auto____$1),self__.__meta),k__47502__auto__);
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__47502__auto__)),null));
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__47499__auto__,k__47500__auto__,G__67774){
var self__ = this;
var this__47499__auto____$1 = this;
var pred__67788 = cljs.core.keyword_identical_QMARK_;
var expr__67789 = k__47500__auto__;
if(cljs.core.truth_(pred__67788.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__67789))){
return (new ajax.core.StandardInterceptor(G__67774,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67788.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__67789))){
return (new ajax.core.StandardInterceptor(self__.name,G__67774,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67788.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__67789))){
return (new ajax.core.StandardInterceptor(self__.name,self__.request,G__67774,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__47500__auto__,G__67774),null));
}
}
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__47504__auto__){
var self__ = this;
var this__47504__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__47491__auto__,G__67774){
var self__ = this;
var this__47491__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,G__67774,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__47497__auto__,entry__47498__auto__){
var self__ = this;
var this__47497__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__47498__auto__)){
return cljs.core._assoc.call(null,this__47497__auto____$1,cljs.core._nth.call(null,entry__47498__auto__,(0)),cljs.core._nth.call(null,entry__47498__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__47497__auto____$1,entry__47498__auto__);
}
});

ajax.core.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.core.StandardInterceptor.cljs$lang$type = true;

ajax.core.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__47526__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/StandardInterceptor");
});

ajax.core.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__47526__auto__,writer__47527__auto__){
return cljs.core._write.call(null,writer__47527__auto__,"ajax.core/StandardInterceptor");
});

ajax.core.__GT_StandardInterceptor = (function ajax$core$__GT_StandardInterceptor(name,request,response){
return (new ajax.core.StandardInterceptor(name,request,response,null,null,null));
});

ajax.core.map__GT_StandardInterceptor = (function ajax$core$map__GT_StandardInterceptor(G__67776){
return (new ajax.core.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__67776),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__67776),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__67776),null,cljs.core.dissoc.call(null,G__67776,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)),null));
});

ajax.core.to_interceptor = (function ajax$core$to_interceptor(m){
return ajax.core.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.core.get_content_type = (function ajax$core$get_content_type(response){
var or__46878__auto__ = ajax.protocols._get_response_header.call(null,response,"Content-Type");
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
return "";
}
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.protocols._abort.call(null,this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.exception_message = (function ajax$core$exception_message(e){
return e.message;
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__67792,xhrio){
var map__67795 = p__67792;
var map__67795__$1 = ((((!((map__67795 == null)))?((((map__67795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67795):map__67795);
var description = cljs.core.get.call(null,map__67795__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str(ajax.core.exception_message.call(null,e)),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.core.fail = (function ajax$core$fail(var_args){
var args__47943__auto__ = [];
var len__47936__auto___67801 = arguments.length;
var i__47937__auto___67802 = (0);
while(true){
if((i__47937__auto___67802 < len__47936__auto___67801)){
args__47943__auto__.push((arguments[i__47937__auto___67802]));

var G__67803 = (i__47937__auto___67802 + (1));
i__47937__auto___67802 = G__67803;
continue;
} else {
}
break;
}

var argseq__47944__auto__ = ((((3) < args__47943__auto__.length))?(new cljs.core.IndexedSeq(args__47943__auto__.slice((3)),(0))):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__47944__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq67797){
var G__67798 = cljs.core.first.call(null,seq67797);
var seq67797__$1 = cljs.core.next.call(null,seq67797);
var G__67799 = cljs.core.first.call(null,seq67797__$1);
var seq67797__$2 = cljs.core.next.call(null,seq67797__$1);
var G__67800 = cljs.core.first.call(null,seq67797__$2);
var seq67797__$3 = cljs.core.next.call(null,seq67797__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__67798,G__67799,G__67800,seq67797__$3);
});
ajax.core.content_type_to_request_header = (function ajax$core$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",cljs.core.map.call(null,(function (p1__67804_SHARP_){
return [cljs.core.str(p1__67804_SHARP_),cljs.core.str("; charset=utf-8")].join('');
}),((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__47492__auto__,k__47493__auto__){
var self__ = this;
var this__47492__auto____$1 = this;
return cljs.core._lookup.call(null,this__47492__auto____$1,k__47493__auto__,null);
});

ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__47494__auto__,k67807,else__47495__auto__){
var self__ = this;
var this__47494__auto____$1 = this;
var G__67809 = (((k67807 instanceof cljs.core.Keyword))?k67807.fqn:null);
switch (G__67809) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67807,else__47495__auto__);

}
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__67810,request){
var self__ = this;
var map__67811 = p__67810;
var map__67811__$1 = ((((!((map__67811 == null)))?((((map__67811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67811):map__67811);
var content_type__$1 = cljs.core.get.call(null,map__67811__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__67813 = this;
var map__67813__$1 = ((((!((map__67813 == null)))?((((map__67813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67813):map__67813);
var content_type__$2 = cljs.core.get.call(null,map__67813__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__67813,map__67813__$1,content_type__$2,map__67811,map__67811__$1,content_type__$1){
return (function (p1__67805_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.core.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__46878__auto__ = p1__67805_SHARP_;
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__67813,map__67813__$1,content_type__$2,map__67811,map__67811__$1,content_type__$1))
);
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__67815,xhrio){
var self__ = this;
var map__67816 = p__67815;
var map__67816__$1 = ((((!((map__67816 == null)))?((((map__67816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67816):map__67816);
var format = map__67816__$1;
var read__$1 = cljs.core.get.call(null,map__67816__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__67818 = this;
var map__67818__$1 = ((((!((map__67818 == null)))?((((map__67818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67818):map__67818);
var format__$1 = map__67818__$1;
var read__$2 = cljs.core.get.call(null,map__67818__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.core.fail,status);
var G__67821 = status;
switch (G__67821) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e67822){if((e67822 instanceof Object)){
var e = e67822;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e67822;

}
}
}
}catch (e67820){if((e67820 instanceof Object)){
var e = e67820;
var message = e.message;
return ajax.core.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e67820;

}
}});

ajax.core.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__47506__auto__,writer__47507__auto__,opts__47508__auto__){
var self__ = this;
var this__47506__auto____$1 = this;
var pr_pair__47509__auto__ = ((function (this__47506__auto____$1){
return (function (keyval__47510__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__47507__auto__,cljs.core.pr_writer,""," ","",opts__47508__auto__,keyval__47510__auto__);
});})(this__47506__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__47507__auto__,pr_pair__47509__auto__,"#ajax.core.ResponseFormat{",", ","}",opts__47508__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67806){
var self__ = this;
var G__67806__$1 = this;
return (new cljs.core.RecordIter((0),G__67806__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__47490__auto__){
var self__ = this;
var this__47490__auto____$1 = this;
return self__.__meta;
});

ajax.core.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__47486__auto__){
var self__ = this;
var this__47486__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__47496__auto__){
var self__ = this;
var this__47496__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__47487__auto__){
var self__ = this;
var this__47487__auto____$1 = this;
var h__47313__auto__ = self__.__hash;
if(!((h__47313__auto__ == null))){
return h__47313__auto__;
} else {
var h__47313__auto____$1 = cljs.core.hash_imap.call(null,this__47487__auto____$1);
self__.__hash = h__47313__auto____$1;

return h__47313__auto____$1;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__47488__auto__,other__47489__auto__){
var self__ = this;
var this__47488__auto____$1 = this;
if(cljs.core.truth_((function (){var and__46866__auto__ = other__47489__auto__;
if(cljs.core.truth_(and__46866__auto__)){
var and__46866__auto____$1 = (this__47488__auto____$1.constructor === other__47489__auto__.constructor);
if(and__46866__auto____$1){
return cljs.core.equiv_map.call(null,this__47488__auto____$1,other__47489__auto__);
} else {
return and__46866__auto____$1;
}
} else {
return and__46866__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__47501__auto__,k__47502__auto__){
var self__ = this;
var this__47501__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__47502__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__47501__auto____$1),self__.__meta),k__47502__auto__);
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__47502__auto__)),null));
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__47499__auto__,k__47500__auto__,G__67806){
var self__ = this;
var this__47499__auto____$1 = this;
var pred__67823 = cljs.core.keyword_identical_QMARK_;
var expr__67824 = k__47500__auto__;
if(cljs.core.truth_(pred__67823.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__67824))){
return (new ajax.core.ResponseFormat(G__67806,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67823.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__67824))){
return (new ajax.core.ResponseFormat(self__.read,G__67806,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67823.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__67824))){
return (new ajax.core.ResponseFormat(self__.read,self__.description,G__67806,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__47500__auto__,G__67806),null));
}
}
}
});

ajax.core.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__47504__auto__){
var self__ = this;
var this__47504__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__47491__auto__,G__67806){
var self__ = this;
var this__47491__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,G__67806,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__47497__auto__,entry__47498__auto__){
var self__ = this;
var this__47497__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__47498__auto__)){
return cljs.core._assoc.call(null,this__47497__auto____$1,cljs.core._nth.call(null,entry__47498__auto__,(0)),cljs.core._nth.call(null,entry__47498__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__47497__auto____$1,entry__47498__auto__);
}
});

ajax.core.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.core.ResponseFormat.cljs$lang$type = true;

ajax.core.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__47526__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ResponseFormat");
});

ajax.core.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__47526__auto__,writer__47527__auto__){
return cljs.core._write.call(null,writer__47527__auto__,"ajax.core/ResponseFormat");
});

ajax.core.__GT_ResponseFormat = (function ajax$core$__GT_ResponseFormat(read,description,content_type){
return (new ajax.core.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.core.map__GT_ResponseFormat = (function ajax$core$map__GT_ResponseFormat(G__67808){
return (new ajax.core.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__67808),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__67808),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__67808),null,cljs.core.dissoc.call(null,G__67808,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)),null));
});

ajax.core.params_to_str_old = (function ajax$core$params_to_str_old(params){
if(cljs.core.truth_(params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
ajax.core.param_to_str;
ajax.core.vec_param_to_str = (function ajax$core$vec_param_to_str(var_args){
var args67828 = [];
var len__47936__auto___67831 = arguments.length;
var i__47937__auto___67832 = (0);
while(true){
if((i__47937__auto___67832 < len__47936__auto___67831)){
args67828.push((arguments[i__47937__auto___67832]));

var G__67833 = (i__47937__auto___67832 + (1));
i__47937__auto___67832 = G__67833;
continue;
} else {
}
break;
}

var G__67830 = args67828.length;
switch (G__67830) {
case 3:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67828.length)].join('')));

}
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3 = (function (prefix,key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,key){
return (function (value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$lang$maxFixedArity = 3;
ajax.core.param_to_str = (function ajax$core$param_to_str(var_args){
var args67835 = [];
var len__47936__auto___67842 = arguments.length;
var i__47937__auto___67843 = (0);
while(true){
if((i__47937__auto___67843 < len__47936__auto___67842)){
args67835.push((arguments[i__47937__auto___67843]));

var G__67844 = (i__47937__auto___67843 + (1));
i__47937__auto___67843 = G__67844;
continue;
} else {
}
break;
}

var G__67837 = args67835.length;
switch (G__67837) {
case 2:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67835.length)].join('')));

}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,p__67838){
var vec__67839 = p__67838;
var key = cljs.core.nth.call(null,vec__67839,(0),null);
var value = cljs.core.nth.call(null,vec__67839,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (p__67840){
var vec__67841 = p__67840;
var key = cljs.core.nth.call(null,vec__67841,(0),null);
var value = cljs.core.nth.call(null,vec__67841,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});
});

ajax.core.param_to_str.cljs$lang$maxFixedArity = 2;
ajax.core.to_utf8_writer = (function ajax$core$to_utf8_writer(to_str){
return to_str;
});
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__67848){
var vec__67849 = p__67848;
var k = cljs.core.nth.call(null,vec__67849,(0),null);
var v = cljs.core.nth.call(null,vec__67849,(1),null);
return [cljs.core.str(k),cljs.core.str("="),cljs.core.str(v)].join('');
}),cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,null),cljs.core.seq.call(null,params))));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(uri,params){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(ajax.core.params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ProcessGet = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__47492__auto__,k__47493__auto__){
var self__ = this;
var this__47492__auto____$1 = this;
return cljs.core._lookup.call(null,this__47492__auto____$1,k__47493__auto__,null);
});

ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__47494__auto__,k67852,else__47495__auto__){
var self__ = this;
var this__47494__auto____$1 = this;
var G__67854 = k67852;
switch (G__67854) {
default:
return cljs.core.get.call(null,self__.__extmap,k67852,else__47495__auto__);

}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__67855){
var self__ = this;
var map__67856 = p__67855;
var map__67856__$1 = ((((!((map__67856 == null)))?((((map__67856.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67856.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67856):map__67856);
var request = map__67856__$1;
var method = cljs.core.get.call(null,map__67856__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),((function (___$1,map__67856,map__67856__$1,request,method){
return (function (p1__67850_SHARP_){
return ajax.core.uri_with_params.call(null,p1__67850_SHARP_,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(request));
});})(___$1,map__67856,map__67856__$1,request,method))
));
} else {
return request;
}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__47506__auto__,writer__47507__auto__,opts__47508__auto__){
var self__ = this;
var this__47506__auto____$1 = this;
var pr_pair__47509__auto__ = ((function (this__47506__auto____$1){
return (function (keyval__47510__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__47507__auto__,cljs.core.pr_writer,""," ","",opts__47508__auto__,keyval__47510__auto__);
});})(this__47506__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__47507__auto__,pr_pair__47509__auto__,"#ajax.core.ProcessGet{",", ","}",opts__47508__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IIterable$ = true;

ajax.core.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67851){
var self__ = this;
var G__67851__$1 = this;
return (new cljs.core.RecordIter((0),G__67851__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__47490__auto__){
var self__ = this;
var this__47490__auto____$1 = this;
return self__.__meta;
});

ajax.core.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__47486__auto__){
var self__ = this;
var this__47486__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__47496__auto__){
var self__ = this;
var this__47496__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__47487__auto__){
var self__ = this;
var this__47487__auto____$1 = this;
var h__47313__auto__ = self__.__hash;
if(!((h__47313__auto__ == null))){
return h__47313__auto__;
} else {
var h__47313__auto____$1 = cljs.core.hash_imap.call(null,this__47487__auto____$1);
self__.__hash = h__47313__auto____$1;

return h__47313__auto____$1;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__47488__auto__,other__47489__auto__){
var self__ = this;
var this__47488__auto____$1 = this;
if(cljs.core.truth_((function (){var and__46866__auto__ = other__47489__auto__;
if(cljs.core.truth_(and__46866__auto__)){
var and__46866__auto____$1 = (this__47488__auto____$1.constructor === other__47489__auto__.constructor);
if(and__46866__auto____$1){
return cljs.core.equiv_map.call(null,this__47488__auto____$1,other__47489__auto__);
} else {
return and__46866__auto____$1;
}
} else {
return and__46866__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__47501__auto__,k__47502__auto__){
var self__ = this;
var this__47501__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__47502__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__47501__auto____$1),self__.__meta),k__47502__auto__);
} else {
return (new ajax.core.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__47502__auto__)),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__47499__auto__,k__47500__auto__,G__67851){
var self__ = this;
var this__47499__auto____$1 = this;
var pred__67858 = cljs.core.keyword_identical_QMARK_;
var expr__67859 = k__47500__auto__;
return (new ajax.core.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__47500__auto__,G__67851),null));
});

ajax.core.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__47504__auto__){
var self__ = this;
var this__47504__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__47491__auto__,G__67851){
var self__ = this;
var this__47491__auto____$1 = this;
return (new ajax.core.ProcessGet(G__67851,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__47497__auto__,entry__47498__auto__){
var self__ = this;
var this__47497__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__47498__auto__)){
return cljs.core._assoc.call(null,this__47497__auto____$1,cljs.core._nth.call(null,entry__47498__auto__,(0)),cljs.core._nth.call(null,entry__47498__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__47497__auto____$1,entry__47498__auto__);
}
});

ajax.core.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ProcessGet.cljs$lang$type = true;

ajax.core.ProcessGet.cljs$lang$ctorPrSeq = (function (this__47526__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ProcessGet");
});

ajax.core.ProcessGet.cljs$lang$ctorPrWriter = (function (this__47526__auto__,writer__47527__auto__){
return cljs.core._write.call(null,writer__47527__auto__,"ajax.core/ProcessGet");
});

ajax.core.__GT_ProcessGet = (function ajax$core$__GT_ProcessGet(){
return (new ajax.core.ProcessGet(null,null,null));
});

ajax.core.map__GT_ProcessGet = (function ajax$core$map__GT_ProcessGet(G__67853){
return (new ajax.core.ProcessGet(null,cljs.core.dissoc.call(null,G__67853),null));
});

ajax.core.throw_error = (function ajax$core$throw_error(args){
throw (new Error([cljs.core.str(args)].join('')));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__47492__auto__,k__47493__auto__){
var self__ = this;
var this__47492__auto____$1 = this;
return cljs.core._lookup.call(null,this__47492__auto____$1,k__47493__auto__,null);
});

ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__47494__auto__,k67863,else__47495__auto__){
var self__ = this;
var this__47494__auto____$1 = this;
var G__67865 = k67863;
switch (G__67865) {
default:
return cljs.core.get.call(null,self__.__extmap,k67863,else__47495__auto__);

}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__67866){
var self__ = this;
var map__67867 = p__67866;
var map__67867__$1 = ((((!((map__67867 == null)))?((((map__67867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67867):map__67867);
var request = map__67867__$1;
var body = cljs.core.get.call(null,map__67867__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var params = cljs.core.get.call(null,map__67867__$1,new cljs.core.Keyword(null,"params","params",710516235));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__47506__auto__,writer__47507__auto__,opts__47508__auto__){
var self__ = this;
var this__47506__auto____$1 = this;
var pr_pair__47509__auto__ = ((function (this__47506__auto____$1){
return (function (keyval__47510__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__47507__auto__,cljs.core.pr_writer,""," ","",opts__47508__auto__,keyval__47510__auto__);
});})(this__47506__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__47507__auto__,pr_pair__47509__auto__,"#ajax.core.DirectSubmission{",", ","}",opts__47508__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$ = true;

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67862){
var self__ = this;
var G__67862__$1 = this;
return (new cljs.core.RecordIter((0),G__67862__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__47490__auto__){
var self__ = this;
var this__47490__auto____$1 = this;
return self__.__meta;
});

ajax.core.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__47486__auto__){
var self__ = this;
var this__47486__auto____$1 = this;
return (new ajax.core.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__47496__auto__){
var self__ = this;
var this__47496__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__47487__auto__){
var self__ = this;
var this__47487__auto____$1 = this;
var h__47313__auto__ = self__.__hash;
if(!((h__47313__auto__ == null))){
return h__47313__auto__;
} else {
var h__47313__auto____$1 = cljs.core.hash_imap.call(null,this__47487__auto____$1);
self__.__hash = h__47313__auto____$1;

return h__47313__auto____$1;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__47488__auto__,other__47489__auto__){
var self__ = this;
var this__47488__auto____$1 = this;
if(cljs.core.truth_((function (){var and__46866__auto__ = other__47489__auto__;
if(cljs.core.truth_(and__46866__auto__)){
var and__46866__auto____$1 = (this__47488__auto____$1.constructor === other__47489__auto__.constructor);
if(and__46866__auto____$1){
return cljs.core.equiv_map.call(null,this__47488__auto____$1,other__47489__auto__);
} else {
return and__46866__auto____$1;
}
} else {
return and__46866__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__47501__auto__,k__47502__auto__){
var self__ = this;
var this__47501__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__47502__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__47501__auto____$1),self__.__meta),k__47502__auto__);
} else {
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__47502__auto__)),null));
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__47499__auto__,k__47500__auto__,G__67862){
var self__ = this;
var this__47499__auto____$1 = this;
var pred__67869 = cljs.core.keyword_identical_QMARK_;
var expr__67870 = k__47500__auto__;
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__47500__auto__,G__67862),null));
});

ajax.core.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__47504__auto__){
var self__ = this;
var this__47504__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__47491__auto__,G__67862){
var self__ = this;
var this__47491__auto____$1 = this;
return (new ajax.core.DirectSubmission(G__67862,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__47497__auto__,entry__47498__auto__){
var self__ = this;
var this__47497__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__47498__auto__)){
return cljs.core._assoc.call(null,this__47497__auto____$1,cljs.core._nth.call(null,entry__47498__auto__,(0)),cljs.core._nth.call(null,entry__47498__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__47497__auto____$1,entry__47498__auto__);
}
});

ajax.core.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.DirectSubmission.cljs$lang$type = true;

ajax.core.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__47526__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/DirectSubmission");
});

ajax.core.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__47526__auto__,writer__47527__auto__){
return cljs.core._write.call(null,writer__47527__auto__,"ajax.core/DirectSubmission");
});

ajax.core.__GT_DirectSubmission = (function ajax$core$__GT_DirectSubmission(){
return (new ajax.core.DirectSubmission(null,null,null));
});

ajax.core.map__GT_DirectSubmission = (function ajax$core$map__GT_DirectSubmission(G__67864){
return (new ajax.core.DirectSubmission(null,cljs.core.dissoc.call(null,G__67864),null));
});

ajax.core.apply_request_format = (function ajax$core$apply_request_format(write,params){
return write.call(null,params);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__47492__auto__,k__47493__auto__){
var self__ = this;
var this__47492__auto____$1 = this;
return cljs.core._lookup.call(null,this__47492__auto____$1,k__47493__auto__,null);
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__47494__auto__,k67874,else__47495__auto__){
var self__ = this;
var this__47494__auto____$1 = this;
var G__67876 = k67874;
switch (G__67876) {
default:
return cljs.core.get.call(null,self__.__extmap,k67874,else__47495__auto__);

}
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__67877){
var self__ = this;
var map__67878 = p__67877;
var map__67878__$1 = ((((!((map__67878 == null)))?((((map__67878.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67878.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67878):map__67878);
var request = map__67878__$1;
var uri = cljs.core.get.call(null,map__67878__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__67878__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__67878__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__67878__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__67878__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__67880 = ajax.core.get_request_format.call(null,format);
var map__67880__$1 = ((((!((map__67880 == null)))?((((map__67880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67880):map__67880);
var write = cljs.core.get.call(null,map__67880__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__67880__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.core.apply_request_format.call(null,write,params):ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__46878__auto__ = headers;
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.core.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__47506__auto__,writer__47507__auto__,opts__47508__auto__){
var self__ = this;
var this__47506__auto____$1 = this;
var pr_pair__47509__auto__ = ((function (this__47506__auto____$1){
return (function (keyval__47510__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__47507__auto__,cljs.core.pr_writer,""," ","",opts__47508__auto__,keyval__47510__auto__);
});})(this__47506__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__47507__auto__,pr_pair__47509__auto__,"#ajax.core.ApplyRequestFormat{",", ","}",opts__47508__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67873){
var self__ = this;
var G__67873__$1 = this;
return (new cljs.core.RecordIter((0),G__67873__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__47490__auto__){
var self__ = this;
var this__47490__auto____$1 = this;
return self__.__meta;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__47486__auto__){
var self__ = this;
var this__47486__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__47496__auto__){
var self__ = this;
var this__47496__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__47487__auto__){
var self__ = this;
var this__47487__auto____$1 = this;
var h__47313__auto__ = self__.__hash;
if(!((h__47313__auto__ == null))){
return h__47313__auto__;
} else {
var h__47313__auto____$1 = cljs.core.hash_imap.call(null,this__47487__auto____$1);
self__.__hash = h__47313__auto____$1;

return h__47313__auto____$1;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__47488__auto__,other__47489__auto__){
var self__ = this;
var this__47488__auto____$1 = this;
if(cljs.core.truth_((function (){var and__46866__auto__ = other__47489__auto__;
if(cljs.core.truth_(and__46866__auto__)){
var and__46866__auto____$1 = (this__47488__auto____$1.constructor === other__47489__auto__.constructor);
if(and__46866__auto____$1){
return cljs.core.equiv_map.call(null,this__47488__auto____$1,other__47489__auto__);
} else {
return and__46866__auto____$1;
}
} else {
return and__46866__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__47501__auto__,k__47502__auto__){
var self__ = this;
var this__47501__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__47502__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__47501__auto____$1),self__.__meta),k__47502__auto__);
} else {
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__47502__auto__)),null));
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__47499__auto__,k__47500__auto__,G__67873){
var self__ = this;
var this__47499__auto____$1 = this;
var pred__67882 = cljs.core.keyword_identical_QMARK_;
var expr__67883 = k__47500__auto__;
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__47500__auto__,G__67873),null));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__47504__auto__){
var self__ = this;
var this__47504__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__47491__auto__,G__67873){
var self__ = this;
var this__47491__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(G__67873,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__47497__auto__,entry__47498__auto__){
var self__ = this;
var this__47497__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__47498__auto__)){
return cljs.core._assoc.call(null,this__47497__auto____$1,cljs.core._nth.call(null,entry__47498__auto__,(0)),cljs.core._nth.call(null,entry__47498__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__47497__auto____$1,entry__47498__auto__);
}
});

ajax.core.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ApplyRequestFormat.cljs$lang$type = true;

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__47526__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ApplyRequestFormat");
});

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__47526__auto__,writer__47527__auto__){
return cljs.core._write.call(null,writer__47527__auto__,"ajax.core/ApplyRequestFormat");
});

ajax.core.__GT_ApplyRequestFormat = (function ajax$core$__GT_ApplyRequestFormat(){
return (new ajax.core.ApplyRequestFormat(null,null,null));
});

ajax.core.map__GT_ApplyRequestFormat = (function ajax$core$map__GT_ApplyRequestFormat(G__67875){
return (new ajax.core.ApplyRequestFormat(null,cljs.core.dissoc.call(null,G__67875),null));
});

ajax.core.transit_type = (function ajax$core$transit_type(p__67886){
var map__67889 = p__67886;
var map__67889__$1 = ((((!((map__67889 == null)))?((((map__67889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67889):map__67889);
var type = cljs.core.get.call(null,map__67889__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var or__46878__auto__ = type;
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
});
ajax.core.transit_write_fn = (function ajax$core$transit_write_fn(type,request){
var writer = (function (){var or__46878__auto__ = new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
return cognitect.transit.writer.call(null,type,request);
}
})();
return ((function (writer){
return (function ajax$core$transit_write_fn_$_transit_write_params(params){
return cognitect.transit.write.call(null,writer,params);
});
;})(writer))
});
ajax.core.transit_request_format = (function ajax$core$transit_request_format(var_args){
var args67891 = [];
var len__47936__auto___67894 = arguments.length;
var i__47937__auto___67895 = (0);
while(true){
if((i__47937__auto___67895 < len__47936__auto___67894)){
args67891.push((arguments[i__47937__auto___67895]));

var G__67896 = (i__47937__auto___67895 + (1));
i__47937__auto___67895 = G__67896;
continue;
} else {
}
break;
}

var G__67893 = args67891.length;
switch (G__67893) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67891.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
var type = ajax.core.transit_type.call(null,request);
var mime_type = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"json","json",1279968570)))?"json":"msgpack");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.transit_write_fn.call(null,type,request),new cljs.core.Keyword(null,"content-type","content-type",-508222634),[cljs.core.str("application/transit+"),cljs.core.str(mime_type)].join('')], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;
ajax.core.transit_read_fn = (function ajax$core$transit_read_fn(request){
var reader = (function (){var or__46878__auto__ = new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
return cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),request);
}
})();
return ((function (reader){
return (function ajax$core$transit_read_fn_$_transit_read_response(response){
var data = cognitect.transit.read.call(null,reader,ajax.protocols._body.call(null,response));
if(cljs.core.truth_(new cljs.core.Keyword(null,"raw","raw",1604651272).cljs$core$IFn$_invoke$arity$1(request))){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
;})(reader))
});
ajax.core.transit_response_format = (function ajax$core$transit_response_format(var_args){
var args67898 = [];
var len__47936__auto___67901 = arguments.length;
var i__47937__auto___67902 = (0);
while(true){
if((i__47937__auto___67902 < len__47936__auto___67901)){
args67898.push((arguments[i__47937__auto___67902]));

var G__67903 = (i__47937__auto___67902 + (1));
i__47937__auto___67902 = G__67903;
continue;
} else {
}
break;
}

var G__67900 = args67898.length;
switch (G__67900) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67898.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return ajax.core.transit_response_format.call(null,ajax.core.transit_type.call(null,request),request);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2 = (function (type,request){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.transit_read_fn.call(null,request),new cljs.core.Keyword(null,"description","description",-1428560544),"Transit",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json"], null)], null));
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 2;
ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,ajax.core.params_to_str),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(var_args){
var args67905 = [];
var len__47936__auto___67908 = arguments.length;
var i__47937__auto___67909 = (0);
while(true){
if((i__47937__auto___67909 < len__47936__auto___67908)){
args67905.push((arguments[i__47937__auto___67909]));

var G__67910 = (i__47937__auto___67909 + (1));
i__47937__auto___67909 = G__67910;
continue;
} else {
}
break;
}

var G__67907 = args67905.length;
switch (G__67907) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67905.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.protocols._body,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null)], null));
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.core.raw_response_format.call(null);
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.text_request_format = (function ajax$core$text_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,cljs.core.identity),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
});
ajax.core.text_response_format = ajax.core.raw_response_format;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
ajax.core.strip_prefix = (function ajax$core$strip_prefix(prefix,text){
if(cljs.core.truth_((function (){var and__46866__auto__ = prefix;
if(cljs.core.truth_(and__46866__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__46866__auto__;
}
})())){
return text.substring(prefix.length);
} else {
return text;
}
});
ajax.core.json_read = (function ajax$core$json_read(var_args){
var args67912 = [];
var len__47936__auto___67915 = arguments.length;
var i__47937__auto___67916 = (0);
while(true){
if((i__47937__auto___67916 < len__47936__auto___67915)){
args67912.push((arguments[i__47937__auto___67916]));

var G__67917 = (i__47937__auto___67916 + (1));
i__47937__auto___67916 = G__67917;
continue;
} else {
}
break;
}

var G__67914 = args67912.length;
switch (G__67914) {
case 4:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67912.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$lang$maxFixedArity = 4;
/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(var_args){
var args67919 = [];
var len__47936__auto___67925 = arguments.length;
var i__47937__auto___67926 = (0);
while(true){
if((i__47937__auto___67926 < len__47936__auto___67925)){
args67919.push((arguments[i__47937__auto___67926]));

var G__67927 = (i__47937__auto___67926 + (1));
i__47937__auto___67926 = G__67927;
continue;
} else {
}
break;
}

var G__67921 = args67919.length;
switch (G__67921) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67919.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__67922){
var map__67923 = p__67922;
var map__67923__$1 = ((((!((map__67923 == null)))?((((map__67923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67923):map__67923);
var prefix = cljs.core.get.call(null,map__67923__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var keywords_QMARK_ = cljs.core.get.call(null,map__67923__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
var raw = cljs.core.get.call(null,map__67923__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.json_read.call(null,prefix,raw,keywords_QMARK_),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json"], null)], null));
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.core.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+transit",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*",ajax.core.raw_response_format], null)], null);
ajax.core.get_format = (function ajax$core$get_format(var_args){
var args67929 = [];
var len__47936__auto___67932 = arguments.length;
var i__47937__auto___67933 = (0);
while(true){
if((i__47937__auto___67933 < len__47936__auto___67932)){
args67929.push((arguments[i__47937__auto___67933]));

var G__67934 = (i__47937__auto___67933 + (1));
i__47937__auto___67933 = G__67934;
continue;
} else {
}
break;
}

var G__67931 = args67929.length;
switch (G__67931) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67929.length)].join('')));

}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = 2;
ajax.core.get_accept_entries = (function ajax$core$get_accept_entries(var_args){
var args67936 = [];
var len__47936__auto___67939 = arguments.length;
var i__47937__auto___67940 = (0);
while(true){
if((i__47937__auto___67940 < len__47936__auto___67939)){
args67936.push((arguments[i__47937__auto___67940]));

var G__67941 = (i__47937__auto___67940 + (1));
i__47937__auto___67940 = G__67941;
continue;
} else {
}
break;
}

var G__67938 = args67936.length;
switch (G__67938) {
case 2:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67936.length)].join('')));

}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});
});

ajax.core.get_accept_entries.cljs$lang$maxFixedArity = 2;
ajax.core.content_type_matches = (function ajax$core$content_type_matches(var_args){
var args67943 = [];
var len__47936__auto___67946 = arguments.length;
var i__47937__auto___67947 = (0);
while(true){
if((i__47937__auto___67947 < len__47936__auto___67946)){
args67943.push((arguments[i__47937__auto___67947]));

var G__67948 = (i__47937__auto___67947 + (1));
i__47937__auto___67947 = G__67948;
continue;
} else {
}
break;
}

var G__67945 = args67943.length;
switch (G__67945) {
case 2:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67943.length)].join('')));

}
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2 = (function (content_type,accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.content_type_matches.cljs$lang$maxFixedArity = 2;
ajax.core.detect_content_type = (function ajax$core$detect_content_type(var_args){
var args67950 = [];
var len__47936__auto___67953 = arguments.length;
var i__47937__auto___67954 = (0);
while(true){
if((i__47937__auto___67954 < len__47936__auto___67953)){
args67950.push((arguments[i__47937__auto___67954]));

var G__67955 = (i__47937__auto___67954 + (1));
i__47937__auto___67954 = G__67955;
continue;
} else {
}
break;
}

var G__67952 = args67950.length;
switch (G__67952) {
case 3:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67950.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,request){
return (function (format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 3;
ajax.core.get_default_format = (function ajax$core$get_default_format(response,p__67957){
var map__67960 = p__67957;
var map__67960__$1 = ((((!((map__67960 == null)))?((((map__67960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67960):map__67960);
var request = map__67960__$1;
var response_format = cljs.core.get.call(null,map__67960__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var f = ajax.core.detect_content_type.call(null,ajax.core.get_content_type.call(null,response),request);
return ajax.core.get_format.call(null,request,cljs.core.first.call(null,cljs.core.filter.call(null,f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(var_args){
var args67962 = [];
var len__47936__auto___67965 = arguments.length;
var i__47937__auto___67966 = (0);
while(true){
if((i__47937__auto___67966 < len__47936__auto___67965)){
args67962.push((arguments[i__47937__auto___67966]));

var G__67967 = (i__47937__auto___67966 + (1));
i__47937__auto___67966 = G__67967;
continue;
} else {
}
break;
}

var G__67964 = args67962.length;
switch (G__67964) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67962.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (request,response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;
ajax.core.accept_header = (function ajax$core$accept_header(p__67969){
var map__67972 = p__67969;
var map__67972__$1 = ((((!((map__67972 == null)))?((((map__67972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67972):map__67972);
var request = map__67972__$1;
var response_format = cljs.core.get.call(null,map__67972__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return cljs.core.mapcat.call(null,ajax.core.get_accept_entries.call(null,request),response_format);
} else {
return ajax.core.get_accept_entries.call(null,request,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(var_args){
var args67974 = [];
var len__47936__auto___67977 = arguments.length;
var i__47937__auto___67978 = (0);
while(true){
if((i__47937__auto___67978 < len__47936__auto___67977)){
args67974.push((arguments[i__47937__auto___67978]));

var G__67979 = (i__47937__auto___67978 + (1));
i__47937__auto___67978 = G__67979;
continue;
} else {
}
break;
}

var G__67976 = args67974.length;
switch (G__67976) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67974.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header.call(null,opts);
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.detect_response_format_read.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),accept], null));
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.get_response_format = (function ajax$core$get_response_format(p__67981){
var map__67984 = p__67981;
var map__67984__$1 = ((((!((map__67984 == null)))?((((map__67984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67984):map__67984);
var opts = map__67984__$1;
var response_format = cljs.core.get.call(null,map__67984__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if((response_format instanceof ajax.core.ResponseFormat)){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return ajax.core.detect_response_format.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,response_format);
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
});
ajax.core.js_handler = (function ajax$core$js_handler(var_args){
var args67986 = [];
var len__47936__auto___67989 = arguments.length;
var i__47937__auto___67990 = (0);
while(true){
if((i__47937__auto___67990 < len__47936__auto___67989)){
args67986.push((arguments[i__47937__auto___67990]));

var G__67991 = (i__47937__auto___67990 + (1));
i__47937__auto___67990 = G__67991;
continue;
} else {
}
break;
}

var G__67988 = args67986.length;
switch (G__67988) {
case 3:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67986.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (handler,interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (handler,interceptors){
return (function (response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return (function (interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;
ajax.core.base_handler = (function ajax$core$base_handler(interceptors,p__67993){
var map__67996 = p__67993;
var map__67996__$1 = ((((!((map__67996 == null)))?((((map__67996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67996):map__67996);
var handler = cljs.core.get.call(null,map__67996__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.call(null,handler,interceptors);
} else {
return ajax.core.throw_error.call(null,"No ajax handler provided.");
}
});
ajax.core.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.core.ProcessGet(null,null,null)),(new ajax.core.DirectSubmission(null,null,null)),(new ajax.core.ApplyRequestFormat(null,null,null))], null);
ajax.core.default_interceptors = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
ajax.core.normalize_request = (function ajax$core$normalize_request(request){
var response_format = ajax.core.get_response_format.call(null,request);
return cljs.core.update.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"method","method",55703592),ajax.core.normalize_method),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),((function (response_format){
return (function (p1__67998_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null),(function (){var or__46878__auto__ = p1__67998_SHARP_;
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
return cljs.core.deref.call(null,ajax.core.default_interceptors);
}
})(),ajax.core.request_interceptors);
});})(response_format))
);
});
ajax.core.new_default_api = (function ajax$core$new_default_api(){
return (new goog.net.XhrIo());
});
ajax.core.raw_ajax_request = (function ajax$core$raw_ajax_request(p__67999){
var map__68002 = p__67999;
var map__68002__$1 = ((((!((map__68002 == null)))?((((map__68002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68002):map__68002);
var request = map__68002__$1;
var interceptors = cljs.core.get.call(null,map__68002__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var request__$1 = cljs.core.reduce.call(null,ajax.core.process_request,request,interceptors);
var handler = ajax.core.base_handler.call(null,cljs.core.reverse.call(null,interceptors),request__$1);
var api = (function (){var or__46878__auto__ = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
return ajax.core.new_default_api.call(null);
}
})();
return ajax.protocols._js_ajax_request.call(null,api,request__$1,handler);
});
ajax.core.ajax_request = (function ajax$core$ajax_request(request){
return ajax.core.raw_ajax_request.call(null,ajax.core.normalize_request.call(null,request));
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",-1857649168),format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.call(null,format_params);
} else {
var G__68005 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__68005) {
case "transit":
return ajax.core.transit_request_format.call(null,format_params);

break;
case "json":
return ajax.core.json_request_format.call(null);

break;
case "text":
return ajax.core.text_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "url":
return ajax.core.url_request_format.call(null);

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_element = (function ajax$core$keyword_response_format_element(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,format),ajax$core$keyword_response_format_element.call(null,cljs.core.second.call(null,format),format_params)], null);
} else {
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.call(null);
} else {
var G__68008 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__68008) {
case "transit":
return ajax.core.transit_response_format.call(null,format_params);

break;
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
case "text":
return ajax.core.text_response_format.call(null);

break;
case "raw":
return ajax.core.raw_response_format.call(null);

break;
case "detect":
return ajax.core.detect_response_format.call(null);

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__68010_SHARP_){
return ajax.core.keyword_response_format_element.call(null,p1__68010_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_element.call(null,format,format_params);
}
});
ajax.core.transform_handler = (function ajax$core$transform_handler(var_args){
var args68011 = [];
var len__47936__auto___68024 = arguments.length;
var i__47937__auto___68025 = (0);
while(true){
if((i__47937__auto___68025 < len__47936__auto___68024)){
args68011.push((arguments[i__47937__auto___68025]));

var G__68026 = (i__47937__auto___68025 + (1));
i__47937__auto___68025 = G__68026;
continue;
} else {
}
break;
}

var G__68013 = args68011.length;
switch (G__68013) {
case 2:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68011.length)].join('')));

}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2 = (function (p__68014,p__68015){
var map__68016 = p__68014;
var map__68016__$1 = ((((!((map__68016 == null)))?((((map__68016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68016):map__68016);
var handler = cljs.core.get.call(null,map__68016__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__68016__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__68016__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var vec__68017 = p__68015;
var ok = cljs.core.nth.call(null,vec__68017,(0),null);
var result = cljs.core.nth.call(null,vec__68017,(1),null);
var temp__4423__auto___68028 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___68028)){
var h_68029 = temp__4423__auto___68028;
h_68029.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1 = (function (p__68019){
var map__68020 = p__68019;
var map__68020__$1 = ((((!((map__68020 == null)))?((((map__68020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68020):map__68020);
var handler = cljs.core.get.call(null,map__68020__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__68020__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__68020__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
return ((function (map__68020,map__68020__$1,handler,error_handler,finally$){
return (function (p__68022){
var vec__68023 = p__68022;
var ok = cljs.core.nth.call(null,vec__68023,(0),null);
var result = cljs.core.nth.call(null,vec__68023,(1),null);
var temp__4423__auto___68030 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___68030)){
var h_68031 = temp__4423__auto___68030;
h_68031.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(map__68020,map__68020__$1,handler,error_handler,finally$))
});

ajax.core.transform_handler.cljs$lang$maxFixedArity = 2;
ajax.core.transform_opts = (function ajax$core$transform_opts(p__68032){
var map__68035 = p__68032;
var map__68035__$1 = ((((!((map__68035 == null)))?((((map__68035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68035):map__68035);
var opts = map__68035__$1;
var method = cljs.core.get.call(null,map__68035__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__68035__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var response_format = cljs.core.get.call(null,map__68035__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var params = cljs.core.get.call(null,map__68035__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.call(null,map__68035__$1,new cljs.core.Keyword(null,"body","body",-2049205669));

var needs_format = ((body == null)) && (cljs.core.not_EQ_.call(null,method,"GET"));
var rf = (cljs.core.truth_((function (){var or__46878__auto__ = format;
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format.call(null,format,opts):null);
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),rf,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.keyword_response_format.call(null,response_format,opts));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request.call(null,ajax.core.transform_opts.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method)));
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__47943__auto__ = [];
var len__47936__auto___68039 = arguments.length;
var i__47937__auto___68040 = (0);
while(true){
if((i__47937__auto___68040 < len__47936__auto___68039)){
args__47943__auto__.push((arguments[i__47937__auto___68040]));

var G__68041 = (i__47937__auto___68040 + (1));
i__47937__auto___68040 = G__68041;
continue;
} else {
}
break;
}

var argseq__47944__auto__ = ((((1) < args__47943__auto__.length))?(new cljs.core.IndexedSeq(args__47943__auto__.slice((1)),(0))):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47944__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__49375__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"GET",(((f__49375__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__49375__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq68037){
var G__68038 = cljs.core.first.call(null,seq68037);
var seq68037__$1 = cljs.core.next.call(null,seq68037);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__68038,seq68037__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__47943__auto__ = [];
var len__47936__auto___68044 = arguments.length;
var i__47937__auto___68045 = (0);
while(true){
if((i__47937__auto___68045 < len__47936__auto___68044)){
args__47943__auto__.push((arguments[i__47937__auto___68045]));

var G__68046 = (i__47937__auto___68045 + (1));
i__47937__auto___68045 = G__68046;
continue;
} else {
}
break;
}

var argseq__47944__auto__ = ((((1) < args__47943__auto__.length))?(new cljs.core.IndexedSeq(args__47943__auto__.slice((1)),(0))):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47944__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__49375__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"HEAD",(((f__49375__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__49375__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq68042){
var G__68043 = cljs.core.first.call(null,seq68042);
var seq68042__$1 = cljs.core.next.call(null,seq68042);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__68043,seq68042__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__47943__auto__ = [];
var len__47936__auto___68049 = arguments.length;
var i__47937__auto___68050 = (0);
while(true){
if((i__47937__auto___68050 < len__47936__auto___68049)){
args__47943__auto__.push((arguments[i__47937__auto___68050]));

var G__68051 = (i__47937__auto___68050 + (1));
i__47937__auto___68050 = G__68051;
continue;
} else {
}
break;
}

var argseq__47944__auto__ = ((((1) < args__47943__auto__.length))?(new cljs.core.IndexedSeq(args__47943__auto__.slice((1)),(0))):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47944__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__49375__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"POST",(((f__49375__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__49375__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq68047){
var G__68048 = cljs.core.first.call(null,seq68047);
var seq68047__$1 = cljs.core.next.call(null,seq68047);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__68048,seq68047__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__47943__auto__ = [];
var len__47936__auto___68054 = arguments.length;
var i__47937__auto___68055 = (0);
while(true){
if((i__47937__auto___68055 < len__47936__auto___68054)){
args__47943__auto__.push((arguments[i__47937__auto___68055]));

var G__68056 = (i__47937__auto___68055 + (1));
i__47937__auto___68055 = G__68056;
continue;
} else {
}
break;
}

var argseq__47944__auto__ = ((((1) < args__47943__auto__.length))?(new cljs.core.IndexedSeq(args__47943__auto__.slice((1)),(0))):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47944__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__49375__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PUT",(((f__49375__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__49375__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq68052){
var G__68053 = cljs.core.first.call(null,seq68052);
var seq68052__$1 = cljs.core.next.call(null,seq68052);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__68053,seq68052__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__47943__auto__ = [];
var len__47936__auto___68059 = arguments.length;
var i__47937__auto___68060 = (0);
while(true){
if((i__47937__auto___68060 < len__47936__auto___68059)){
args__47943__auto__.push((arguments[i__47937__auto___68060]));

var G__68061 = (i__47937__auto___68060 + (1));
i__47937__auto___68060 = G__68061;
continue;
} else {
}
break;
}

var argseq__47944__auto__ = ((((1) < args__47943__auto__.length))?(new cljs.core.IndexedSeq(args__47943__auto__.slice((1)),(0))):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47944__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__49375__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"DELETE",(((f__49375__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__49375__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq68057){
var G__68058 = cljs.core.first.call(null,seq68057);
var seq68057__$1 = cljs.core.next.call(null,seq68057);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__68058,seq68057__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__47943__auto__ = [];
var len__47936__auto___68064 = arguments.length;
var i__47937__auto___68065 = (0);
while(true){
if((i__47937__auto___68065 < len__47936__auto___68064)){
args__47943__auto__.push((arguments[i__47937__auto___68065]));

var G__68066 = (i__47937__auto___68065 + (1));
i__47937__auto___68065 = G__68066;
continue;
} else {
}
break;
}

var argseq__47944__auto__ = ((((1) < args__47943__auto__.length))?(new cljs.core.IndexedSeq(args__47943__auto__.slice((1)),(0))):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47944__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__49375__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"OPTIONS",(((f__49375__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__49375__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq68062){
var G__68063 = cljs.core.first.call(null,seq68062);
var seq68062__$1 = cljs.core.next.call(null,seq68062);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__68063,seq68062__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__47943__auto__ = [];
var len__47936__auto___68069 = arguments.length;
var i__47937__auto___68070 = (0);
while(true){
if((i__47937__auto___68070 < len__47936__auto___68069)){
args__47943__auto__.push((arguments[i__47937__auto___68070]));

var G__68071 = (i__47937__auto___68070 + (1));
i__47937__auto___68070 = G__68071;
continue;
} else {
}
break;
}

var argseq__47944__auto__ = ((((1) < args__47943__auto__.length))?(new cljs.core.IndexedSeq(args__47943__auto__.slice((1)),(0))):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47944__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__49375__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"TRACE",(((f__49375__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__49375__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq68067){
var G__68068 = cljs.core.first.call(null,seq68067);
var seq68067__$1 = cljs.core.next.call(null,seq68067);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__68068,seq68067__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__47943__auto__ = [];
var len__47936__auto___68074 = arguments.length;
var i__47937__auto___68075 = (0);
while(true){
if((i__47937__auto___68075 < len__47936__auto___68074)){
args__47943__auto__.push((arguments[i__47937__auto___68075]));

var G__68076 = (i__47937__auto___68075 + (1));
i__47937__auto___68075 = G__68076;
continue;
} else {
}
break;
}

var argseq__47944__auto__ = ((((1) < args__47943__auto__.length))?(new cljs.core.IndexedSeq(args__47943__auto__.slice((1)),(0))):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47944__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__49375__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PATCH",(((f__49375__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__49375__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq68072){
var G__68073 = cljs.core.first.call(null,seq68072);
var seq68072__$1 = cljs.core.next.call(null,seq68072);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__68073,seq68072__$1);
});
