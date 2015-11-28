// Compiled by ClojureScript 1.7.145 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__68103_68107 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__68104_68108 = null;
var count__68105_68109 = (0);
var i__68106_68110 = (0);
while(true){
if((i__68106_68110 < count__68105_68109)){
var k_68111 = cljs.core._nth.call(null,chunk__68104_68108,i__68106_68110);
var v_68112 = (b[k_68111]);
(a[k_68111] = v_68112);

var G__68113 = seq__68103_68107;
var G__68114 = chunk__68104_68108;
var G__68115 = count__68105_68109;
var G__68116 = (i__68106_68110 + (1));
seq__68103_68107 = G__68113;
chunk__68104_68108 = G__68114;
count__68105_68109 = G__68115;
i__68106_68110 = G__68116;
continue;
} else {
var temp__4425__auto___68117 = cljs.core.seq.call(null,seq__68103_68107);
if(temp__4425__auto___68117){
var seq__68103_68118__$1 = temp__4425__auto___68117;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68103_68118__$1)){
var c__47681__auto___68119 = cljs.core.chunk_first.call(null,seq__68103_68118__$1);
var G__68120 = cljs.core.chunk_rest.call(null,seq__68103_68118__$1);
var G__68121 = c__47681__auto___68119;
var G__68122 = cljs.core.count.call(null,c__47681__auto___68119);
var G__68123 = (0);
seq__68103_68107 = G__68120;
chunk__68104_68108 = G__68121;
count__68105_68109 = G__68122;
i__68106_68110 = G__68123;
continue;
} else {
var k_68124 = cljs.core.first.call(null,seq__68103_68118__$1);
var v_68125 = (b[k_68124]);
(a[k_68124] = v_68125);

var G__68126 = cljs.core.next.call(null,seq__68103_68118__$1);
var G__68127 = null;
var G__68128 = (0);
var G__68129 = (0);
seq__68103_68107 = G__68126;
chunk__68104_68108 = G__68127;
count__68105_68109 = G__68128;
i__68106_68110 = G__68129;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__47476__auto__,writer__47477__auto__,opt__47478__auto__){
return cljs.core._write.call(null,writer__47477__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__47476__auto__,writer__47477__auto__,opt__47478__auto__){
return cljs.core._write.call(null,writer__47477__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args68130 = [];
var len__47936__auto___68133 = arguments.length;
var i__47937__auto___68134 = (0);
while(true){
if((i__47937__auto___68134 < len__47936__auto___68133)){
args68130.push((arguments[i__47937__auto___68134]));

var G__68135 = (i__47937__auto___68134 + (1));
i__47937__auto___68134 = G__68135;
continue;
} else {
}
break;
}

var G__68132 = args68130.length;
switch (G__68132) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68130.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__68137 = (i + (2));
var G__68138 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__68137;
ret = G__68138;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__47476__auto__,writer__47477__auto__,opt__47478__auto__){
return cljs.core._write.call(null,writer__47477__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__47476__auto__,writer__47477__auto__,opt__47478__auto__){
return cljs.core._write.call(null,writer__47477__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__68139_68143 = cljs.core.seq.call(null,v);
var chunk__68140_68144 = null;
var count__68141_68145 = (0);
var i__68142_68146 = (0);
while(true){
if((i__68142_68146 < count__68141_68145)){
var x_68147 = cljs.core._nth.call(null,chunk__68140_68144,i__68142_68146);
ret.push(x_68147);

var G__68148 = seq__68139_68143;
var G__68149 = chunk__68140_68144;
var G__68150 = count__68141_68145;
var G__68151 = (i__68142_68146 + (1));
seq__68139_68143 = G__68148;
chunk__68140_68144 = G__68149;
count__68141_68145 = G__68150;
i__68142_68146 = G__68151;
continue;
} else {
var temp__4425__auto___68152 = cljs.core.seq.call(null,seq__68139_68143);
if(temp__4425__auto___68152){
var seq__68139_68153__$1 = temp__4425__auto___68152;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68139_68153__$1)){
var c__47681__auto___68154 = cljs.core.chunk_first.call(null,seq__68139_68153__$1);
var G__68155 = cljs.core.chunk_rest.call(null,seq__68139_68153__$1);
var G__68156 = c__47681__auto___68154;
var G__68157 = cljs.core.count.call(null,c__47681__auto___68154);
var G__68158 = (0);
seq__68139_68143 = G__68155;
chunk__68140_68144 = G__68156;
count__68141_68145 = G__68157;
i__68142_68146 = G__68158;
continue;
} else {
var x_68159 = cljs.core.first.call(null,seq__68139_68153__$1);
ret.push(x_68159);

var G__68160 = cljs.core.next.call(null,seq__68139_68153__$1);
var G__68161 = null;
var G__68162 = (0);
var G__68163 = (0);
seq__68139_68143 = G__68160;
chunk__68140_68144 = G__68161;
count__68141_68145 = G__68162;
i__68142_68146 = G__68163;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__47476__auto__,writer__47477__auto__,opt__47478__auto__){
return cljs.core._write.call(null,writer__47477__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__47476__auto__,writer__47477__auto__,opt__47478__auto__){
return cljs.core._write.call(null,writer__47477__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__68164_68168 = cljs.core.seq.call(null,v);
var chunk__68165_68169 = null;
var count__68166_68170 = (0);
var i__68167_68171 = (0);
while(true){
if((i__68167_68171 < count__68166_68170)){
var x_68172 = cljs.core._nth.call(null,chunk__68165_68169,i__68167_68171);
ret.push(x_68172);

var G__68173 = seq__68164_68168;
var G__68174 = chunk__68165_68169;
var G__68175 = count__68166_68170;
var G__68176 = (i__68167_68171 + (1));
seq__68164_68168 = G__68173;
chunk__68165_68169 = G__68174;
count__68166_68170 = G__68175;
i__68167_68171 = G__68176;
continue;
} else {
var temp__4425__auto___68177 = cljs.core.seq.call(null,seq__68164_68168);
if(temp__4425__auto___68177){
var seq__68164_68178__$1 = temp__4425__auto___68177;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68164_68178__$1)){
var c__47681__auto___68179 = cljs.core.chunk_first.call(null,seq__68164_68178__$1);
var G__68180 = cljs.core.chunk_rest.call(null,seq__68164_68178__$1);
var G__68181 = c__47681__auto___68179;
var G__68182 = cljs.core.count.call(null,c__47681__auto___68179);
var G__68183 = (0);
seq__68164_68168 = G__68180;
chunk__68165_68169 = G__68181;
count__68166_68170 = G__68182;
i__68167_68171 = G__68183;
continue;
} else {
var x_68184 = cljs.core.first.call(null,seq__68164_68178__$1);
ret.push(x_68184);

var G__68185 = cljs.core.next.call(null,seq__68164_68178__$1);
var G__68186 = null;
var G__68187 = (0);
var G__68188 = (0);
seq__68164_68168 = G__68185;
chunk__68165_68169 = G__68186;
count__68166_68170 = G__68187;
i__68167_68171 = G__68188;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__47476__auto__,writer__47477__auto__,opt__47478__auto__){
return cljs.core._write.call(null,writer__47477__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__68189_68193 = cljs.core.seq.call(null,v);
var chunk__68190_68194 = null;
var count__68191_68195 = (0);
var i__68192_68196 = (0);
while(true){
if((i__68192_68196 < count__68191_68195)){
var x_68197 = cljs.core._nth.call(null,chunk__68190_68194,i__68192_68196);
ret.push(x_68197);

var G__68198 = seq__68189_68193;
var G__68199 = chunk__68190_68194;
var G__68200 = count__68191_68195;
var G__68201 = (i__68192_68196 + (1));
seq__68189_68193 = G__68198;
chunk__68190_68194 = G__68199;
count__68191_68195 = G__68200;
i__68192_68196 = G__68201;
continue;
} else {
var temp__4425__auto___68202 = cljs.core.seq.call(null,seq__68189_68193);
if(temp__4425__auto___68202){
var seq__68189_68203__$1 = temp__4425__auto___68202;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68189_68203__$1)){
var c__47681__auto___68204 = cljs.core.chunk_first.call(null,seq__68189_68203__$1);
var G__68205 = cljs.core.chunk_rest.call(null,seq__68189_68203__$1);
var G__68206 = c__47681__auto___68204;
var G__68207 = cljs.core.count.call(null,c__47681__auto___68204);
var G__68208 = (0);
seq__68189_68193 = G__68205;
chunk__68190_68194 = G__68206;
count__68191_68195 = G__68207;
i__68192_68196 = G__68208;
continue;
} else {
var x_68209 = cljs.core.first.call(null,seq__68189_68203__$1);
ret.push(x_68209);

var G__68210 = cljs.core.next.call(null,seq__68189_68203__$1);
var G__68211 = null;
var G__68212 = (0);
var G__68213 = (0);
seq__68189_68193 = G__68210;
chunk__68190_68194 = G__68211;
count__68191_68195 = G__68212;
i__68192_68196 = G__68213;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__47476__auto__,writer__47477__auto__,opt__47478__auto__){
return cljs.core._write.call(null,writer__47477__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__47476__auto__,writer__47477__auto__,opt__47478__auto__){
return cljs.core._write.call(null,writer__47477__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args68214 = [];
var len__47936__auto___68225 = arguments.length;
var i__47937__auto___68226 = (0);
while(true){
if((i__47937__auto___68226 < len__47936__auto___68225)){
args68214.push((arguments[i__47937__auto___68226]));

var G__68227 = (i__47937__auto___68226 + (1));
i__47937__auto___68226 = G__68227;
continue;
} else {
}
break;
}

var G__68216 = args68214.length;
switch (G__68216) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68214.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__68217 = obj;
G__68217.push(kfn.call(null,k),vfn.call(null,v));

return G__68217;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x68218 = cljs.core.clone.call(null,handlers);
x68218.forEach = ((function (x68218,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__68219 = cljs.core.seq.call(null,coll);
var chunk__68220 = null;
var count__68221 = (0);
var i__68222 = (0);
while(true){
if((i__68222 < count__68221)){
var vec__68223 = cljs.core._nth.call(null,chunk__68220,i__68222);
var k = cljs.core.nth.call(null,vec__68223,(0),null);
var v = cljs.core.nth.call(null,vec__68223,(1),null);
f.call(null,v,k);

var G__68229 = seq__68219;
var G__68230 = chunk__68220;
var G__68231 = count__68221;
var G__68232 = (i__68222 + (1));
seq__68219 = G__68229;
chunk__68220 = G__68230;
count__68221 = G__68231;
i__68222 = G__68232;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__68219);
if(temp__4425__auto__){
var seq__68219__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68219__$1)){
var c__47681__auto__ = cljs.core.chunk_first.call(null,seq__68219__$1);
var G__68233 = cljs.core.chunk_rest.call(null,seq__68219__$1);
var G__68234 = c__47681__auto__;
var G__68235 = cljs.core.count.call(null,c__47681__auto__);
var G__68236 = (0);
seq__68219 = G__68233;
chunk__68220 = G__68234;
count__68221 = G__68235;
i__68222 = G__68236;
continue;
} else {
var vec__68224 = cljs.core.first.call(null,seq__68219__$1);
var k = cljs.core.nth.call(null,vec__68224,(0),null);
var v = cljs.core.nth.call(null,vec__68224,(1),null);
f.call(null,v,k);

var G__68237 = cljs.core.next.call(null,seq__68219__$1);
var G__68238 = null;
var G__68239 = (0);
var G__68240 = (0);
seq__68219 = G__68237;
chunk__68220 = G__68238;
count__68221 = G__68239;
i__68222 = G__68240;
continue;
}
} else {
return null;
}
}
break;
}
});})(x68218,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x68218;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args68241 = [];
var len__47936__auto___68247 = arguments.length;
var i__47937__auto___68248 = (0);
while(true){
if((i__47937__auto___68248 < len__47936__auto___68247)){
args68241.push((arguments[i__47937__auto___68248]));

var G__68249 = (i__47937__auto___68248 + (1));
i__47937__auto___68248 = G__68249;
continue;
} else {
}
break;
}

var G__68243 = args68241.length;
switch (G__68243) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68241.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit68244 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit68244 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta68245){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta68245 = meta68245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit68244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68246,meta68245__$1){
var self__ = this;
var _68246__$1 = this;
return (new cognitect.transit.t_cognitect$transit68244(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta68245__$1));
});

cognitect.transit.t_cognitect$transit68244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68246){
var self__ = this;
var _68246__$1 = this;
return self__.meta68245;
});

cognitect.transit.t_cognitect$transit68244.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit68244.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit68244.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit68244.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit68244.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta68245","meta68245",1198267627,null)], null);
});

cognitect.transit.t_cognitect$transit68244.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit68244.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit68244";

cognitect.transit.t_cognitect$transit68244.cljs$lang$ctorPrWriter = (function (this__47476__auto__,writer__47477__auto__,opt__47478__auto__){
return cljs.core._write.call(null,writer__47477__auto__,"cognitect.transit/t_cognitect$transit68244");
});

cognitect.transit.__GT_t_cognitect$transit68244 = (function cognitect$transit$__GT_t_cognitect$transit68244(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta68245){
return (new cognitect.transit.t_cognitect$transit68244(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta68245));
});

}

return (new cognitect.transit.t_cognitect$transit68244(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__46878__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});
