// Compiled by ClojureScript 1.7.145 {}
goog.provide('pingtai.pagedata');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('reagent.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
pingtai.pagedata.fill_config = (function (data_url,params,__meta,__extmap,__hash){
this.data_url = data_url;
this.params = params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
pingtai.pagedata.fill_config.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__47492__auto__,k__47493__auto__){
var self__ = this;
var this__47492__auto____$1 = this;
return cljs.core._lookup.call(null,this__47492__auto____$1,k__47493__auto__,null);
});

pingtai.pagedata.fill_config.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__47494__auto__,k69421,else__47495__auto__){
var self__ = this;
var this__47494__auto____$1 = this;
var G__69423 = (((k69421 instanceof cljs.core.Keyword))?k69421.fqn:null);
switch (G__69423) {
case "data-url":
return self__.data_url;

break;
case "params":
return self__.params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k69421,else__47495__auto__);

}
});

pingtai.pagedata.fill_config.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__47506__auto__,writer__47507__auto__,opts__47508__auto__){
var self__ = this;
var this__47506__auto____$1 = this;
var pr_pair__47509__auto__ = ((function (this__47506__auto____$1){
return (function (keyval__47510__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__47507__auto__,cljs.core.pr_writer,""," ","",opts__47508__auto__,keyval__47510__auto__);
});})(this__47506__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__47507__auto__,pr_pair__47509__auto__,"#pingtai.pagedata.fill-config{",", ","}",opts__47508__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data-url","data-url",-1627669834),self__.data_url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null))], null),self__.__extmap));
});

pingtai.pagedata.fill_config.prototype.cljs$core$IIterable$ = true;

pingtai.pagedata.fill_config.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__69420){
var self__ = this;
var G__69420__$1 = this;
return (new cljs.core.RecordIter((0),G__69420__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-url","data-url",-1627669834),new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

pingtai.pagedata.fill_config.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__47490__auto__){
var self__ = this;
var this__47490__auto____$1 = this;
return self__.__meta;
});

pingtai.pagedata.fill_config.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__47486__auto__){
var self__ = this;
var this__47486__auto____$1 = this;
return (new pingtai.pagedata.fill_config(self__.data_url,self__.params,self__.__meta,self__.__extmap,self__.__hash));
});

pingtai.pagedata.fill_config.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__47496__auto__){
var self__ = this;
var this__47496__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

pingtai.pagedata.fill_config.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__47487__auto__){
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

pingtai.pagedata.fill_config.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__47488__auto__,other__47489__auto__){
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

pingtai.pagedata.fill_config.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__47501__auto__,k__47502__auto__){
var self__ = this;
var this__47501__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"data-url","data-url",-1627669834),null], null), null),k__47502__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__47501__auto____$1),self__.__meta),k__47502__auto__);
} else {
return (new pingtai.pagedata.fill_config(self__.data_url,self__.params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__47502__auto__)),null));
}
});

pingtai.pagedata.fill_config.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__47499__auto__,k__47500__auto__,G__69420){
var self__ = this;
var this__47499__auto____$1 = this;
var pred__69424 = cljs.core.keyword_identical_QMARK_;
var expr__69425 = k__47500__auto__;
if(cljs.core.truth_(pred__69424.call(null,new cljs.core.Keyword(null,"data-url","data-url",-1627669834),expr__69425))){
return (new pingtai.pagedata.fill_config(G__69420,self__.params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__69424.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__69425))){
return (new pingtai.pagedata.fill_config(self__.data_url,G__69420,self__.__meta,self__.__extmap,null));
} else {
return (new pingtai.pagedata.fill_config(self__.data_url,self__.params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__47500__auto__,G__69420),null));
}
}
});

pingtai.pagedata.fill_config.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__47504__auto__){
var self__ = this;
var this__47504__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data-url","data-url",-1627669834),self__.data_url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null))], null),self__.__extmap));
});

pingtai.pagedata.fill_config.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__47491__auto__,G__69420){
var self__ = this;
var this__47491__auto____$1 = this;
return (new pingtai.pagedata.fill_config(self__.data_url,self__.params,G__69420,self__.__extmap,self__.__hash));
});

pingtai.pagedata.fill_config.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__47497__auto__,entry__47498__auto__){
var self__ = this;
var this__47497__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__47498__auto__)){
return cljs.core._assoc.call(null,this__47497__auto____$1,cljs.core._nth.call(null,entry__47498__auto__,(0)),cljs.core._nth.call(null,entry__47498__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__47497__auto____$1,entry__47498__auto__);
}
});

pingtai.pagedata.fill_config.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data-url","data-url",12861693,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null);
});

pingtai.pagedata.fill_config.cljs$lang$type = true;

pingtai.pagedata.fill_config.cljs$lang$ctorPrSeq = (function (this__47526__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"pingtai.pagedata/fill-config");
});

pingtai.pagedata.fill_config.cljs$lang$ctorPrWriter = (function (this__47526__auto__,writer__47527__auto__){
return cljs.core._write.call(null,writer__47527__auto__,"pingtai.pagedata/fill-config");
});

pingtai.pagedata.__GT_fill_config = (function pingtai$pagedata$__GT_fill_config(data_url,params){
return (new pingtai.pagedata.fill_config(data_url,params,null,null,null));
});

pingtai.pagedata.map__GT_fill_config = (function pingtai$pagedata$map__GT_fill_config(G__69422){
return (new pingtai.pagedata.fill_config(new cljs.core.Keyword(null,"data-url","data-url",-1627669834).cljs$core$IFn$_invoke$arity$1(G__69422),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__69422),null,cljs.core.dissoc.call(null,G__69422,new cljs.core.Keyword(null,"data-url","data-url",-1627669834),new cljs.core.Keyword(null,"params","params",710516235)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
pingtai.pagedata.entity_data = (function (id,data,mtime,fill_config,__meta,__extmap,__hash){
this.id = id;
this.data = data;
this.mtime = mtime;
this.fill_config = fill_config;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
pingtai.pagedata.entity_data.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__47492__auto__,k__47493__auto__){
var self__ = this;
var this__47492__auto____$1 = this;
return cljs.core._lookup.call(null,this__47492__auto____$1,k__47493__auto__,null);
});

pingtai.pagedata.entity_data.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__47494__auto__,k69429,else__47495__auto__){
var self__ = this;
var this__47494__auto____$1 = this;
var G__69431 = (((k69429 instanceof cljs.core.Keyword))?k69429.fqn:null);
switch (G__69431) {
case "id":
return self__.id;

break;
case "data":
return self__.data;

break;
case "mtime":
return self__.mtime;

break;
case "fill-config":
return self__.fill_config;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k69429,else__47495__auto__);

}
});

pingtai.pagedata.entity_data.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__47506__auto__,writer__47507__auto__,opts__47508__auto__){
var self__ = this;
var this__47506__auto____$1 = this;
var pr_pair__47509__auto__ = ((function (this__47506__auto____$1){
return (function (keyval__47510__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__47507__auto__,cljs.core.pr_writer,""," ","",opts__47508__auto__,keyval__47510__auto__);
});})(this__47506__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__47507__auto__,pr_pair__47509__auto__,"#pingtai.pagedata.entity-data{",", ","}",opts__47508__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mtime","mtime",963165087),self__.mtime],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fill-config","fill-config",-162803926),self__.fill_config],null))], null),self__.__extmap));
});

pingtai.pagedata.entity_data.prototype.cljs$core$IIterable$ = true;

pingtai.pagedata.entity_data.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__69428){
var self__ = this;
var G__69428__$1 = this;
return (new cljs.core.RecordIter((0),G__69428__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"mtime","mtime",963165087),new cljs.core.Keyword(null,"fill-config","fill-config",-162803926)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

pingtai.pagedata.entity_data.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__47490__auto__){
var self__ = this;
var this__47490__auto____$1 = this;
return self__.__meta;
});

pingtai.pagedata.entity_data.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__47486__auto__){
var self__ = this;
var this__47486__auto____$1 = this;
return (new pingtai.pagedata.entity_data(self__.id,self__.data,self__.mtime,self__.fill_config,self__.__meta,self__.__extmap,self__.__hash));
});

pingtai.pagedata.entity_data.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__47496__auto__){
var self__ = this;
var this__47496__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

pingtai.pagedata.entity_data.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__47487__auto__){
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

pingtai.pagedata.entity_data.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__47488__auto__,other__47489__auto__){
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

pingtai.pagedata.entity_data.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__47501__auto__,k__47502__auto__){
var self__ = this;
var this__47501__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fill-config","fill-config",-162803926),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"data","data",-232669377),null,new cljs.core.Keyword(null,"mtime","mtime",963165087),null], null), null),k__47502__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__47501__auto____$1),self__.__meta),k__47502__auto__);
} else {
return (new pingtai.pagedata.entity_data(self__.id,self__.data,self__.mtime,self__.fill_config,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__47502__auto__)),null));
}
});

pingtai.pagedata.entity_data.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__47499__auto__,k__47500__auto__,G__69428){
var self__ = this;
var this__47499__auto____$1 = this;
var pred__69432 = cljs.core.keyword_identical_QMARK_;
var expr__69433 = k__47500__auto__;
if(cljs.core.truth_(pred__69432.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__69433))){
return (new pingtai.pagedata.entity_data(G__69428,self__.data,self__.mtime,self__.fill_config,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__69432.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__69433))){
return (new pingtai.pagedata.entity_data(self__.id,G__69428,self__.mtime,self__.fill_config,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__69432.call(null,new cljs.core.Keyword(null,"mtime","mtime",963165087),expr__69433))){
return (new pingtai.pagedata.entity_data(self__.id,self__.data,G__69428,self__.fill_config,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__69432.call(null,new cljs.core.Keyword(null,"fill-config","fill-config",-162803926),expr__69433))){
return (new pingtai.pagedata.entity_data(self__.id,self__.data,self__.mtime,G__69428,self__.__meta,self__.__extmap,null));
} else {
return (new pingtai.pagedata.entity_data(self__.id,self__.data,self__.mtime,self__.fill_config,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__47500__auto__,G__69428),null));
}
}
}
}
});

pingtai.pagedata.entity_data.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__47504__auto__){
var self__ = this;
var this__47504__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mtime","mtime",963165087),self__.mtime],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fill-config","fill-config",-162803926),self__.fill_config],null))], null),self__.__extmap));
});

pingtai.pagedata.entity_data.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__47491__auto__,G__69428){
var self__ = this;
var this__47491__auto____$1 = this;
return (new pingtai.pagedata.entity_data(self__.id,self__.data,self__.mtime,self__.fill_config,G__69428,self__.__extmap,self__.__hash));
});

pingtai.pagedata.entity_data.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__47497__auto__,entry__47498__auto__){
var self__ = this;
var this__47497__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__47498__auto__)){
return cljs.core._assoc.call(null,this__47497__auto____$1,cljs.core._nth.call(null,entry__47498__auto__,(0)),cljs.core._nth.call(null,entry__47498__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__47497__auto____$1,entry__47498__auto__);
}
});

pingtai.pagedata.entity_data.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"mtime","mtime",-1691270682,null),new cljs.core.Symbol(null,"fill-config","fill-config",1477727601,null)], null);
});

pingtai.pagedata.entity_data.cljs$lang$type = true;

pingtai.pagedata.entity_data.cljs$lang$ctorPrSeq = (function (this__47526__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"pingtai.pagedata/entity-data");
});

pingtai.pagedata.entity_data.cljs$lang$ctorPrWriter = (function (this__47526__auto__,writer__47527__auto__){
return cljs.core._write.call(null,writer__47527__auto__,"pingtai.pagedata/entity-data");
});

pingtai.pagedata.__GT_entity_data = (function pingtai$pagedata$__GT_entity_data(id,data,mtime,fill_config){
return (new pingtai.pagedata.entity_data(id,data,mtime,fill_config,null,null,null));
});

pingtai.pagedata.map__GT_entity_data = (function pingtai$pagedata$map__GT_entity_data(G__69430){
return (new pingtai.pagedata.entity_data(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__69430),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__69430),new cljs.core.Keyword(null,"mtime","mtime",963165087).cljs$core$IFn$_invoke$arity$1(G__69430),new cljs.core.Keyword(null,"fill-config","fill-config",-162803926).cljs$core$IFn$_invoke$arity$1(G__69430),null,cljs.core.dissoc.call(null,G__69430,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"mtime","mtime",963165087),new cljs.core.Keyword(null,"fill-config","fill-config",-162803926)),null));
});

pingtai.pagedata.top_shop_entity = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"topshop-entity","topshop-entity",10288058),new cljs.core.Keyword(null,"data-url","data-url",-1627669834),"http://localhost:3000/getshop"], null));
pingtai.pagedata.shopinfo = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"shopinfo","shopinfo",274632989),new cljs.core.Keyword(null,"data-url","data-url",-1627669834),"http://localhost:3000/shopinfo"], null));
pingtai.pagedata.timeout = (((20) * (60)) * (1000));
pingtai.pagedata.success_handle = (function pingtai$pagedata$success_handle(entity_data){
return (function (resp){
cljs.core.swap_BANG_.call(null,entity_data,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),resp);

return cljs.core.swap_BANG_.call(null,entity_data,cljs.core.assoc,new cljs.core.Keyword(null,"mtime","mtime",963165087),(new Date()).getTime());
});
});
pingtai.pagedata.error_handler = (function pingtai$pagedata$error_handler(entity_data){
return (function (p__69439){
var map__69440 = p__69439;
var map__69440__$1 = ((((!((map__69440 == null)))?((((map__69440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69440):map__69440);
var status = cljs.core.get.call(null,map__69440__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__69440__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text),cljs.core.str(" in entity-data:"),cljs.core.str(cljs.core.deref.call(null,entity_data))].join(''));
});
});
pingtai.pagedata.update_BANG_ = (function pingtai$pagedata$update_BANG_(entity_data){
var dataurl = new cljs.core.Keyword(null,"data-url","data-url",-1627669834).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,entity_data));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,entity_data));
return ajax.core.GET.call(null,dataurl,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"handler","handler",-195596612),pingtai.pagedata.success_handle.call(null,entity_data),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),pingtai.pagedata.error_handler.call(null,entity_data),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570)], null));
});
pingtai.pagedata.get_page_params = (function pingtai$pagedata$get_page_params(page_datas,params){
return cljs.core.reduce.call(null,(function (m,entity_data){
var data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,entity_data));
var k = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,entity_data));
cljs.core.swap_BANG_.call(null,entity_data,cljs.core.assoc,new cljs.core.Keyword(null,"params","params",710516235),params);

if(((data == null)) || ((((new Date()).getTime() - new cljs.core.Keyword(null,"mtime","mtime",963165087).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,entity_data))) >= pingtai.pagedata.timeout))){
pingtai.pagedata.update_BANG_.call(null,entity_data);
} else {
}

return cljs.core.assoc.call(null,m,k,data);
}),cljs.core.PersistentArrayMap.EMPTY,page_datas);
});
