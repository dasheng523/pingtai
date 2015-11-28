// Compiled by ClojureScript 1.7.145 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__67105){
var map__67112 = p__67105;
var map__67112__$1 = ((((!((map__67112 == null)))?((((map__67112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67112):map__67112);
var replacement_transformers = cljs.core.get.call(null,map__67112__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__67112__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
return ((function (map__67112,map__67112__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_67114 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__67115 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_67114,map__67112,map__67112__$1,replacement_transformers,custom_transformers){
return (function (p__67116,transformer){
var vec__67117 = p__67116;
var text = cljs.core.nth.call(null,vec__67117,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__67117,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_67114,map__67112,map__67112__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__46878__auto__ = replacement_transformers;
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__67115,(0),null);
var new_state = cljs.core.nth.call(null,vec__67115,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_67114;
}});
;})(map__67112,map__67112__$1,replacement_transformers,custom_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__47943__auto__ = [];
var len__47936__auto___67120 = arguments.length;
var i__47937__auto___67121 = (0);
while(true){
if((i__47937__auto___67121 < len__47936__auto___67120)){
args__47943__auto__.push((arguments[i__47937__auto___67121]));

var G__67122 = (i__47937__auto___67121 + (1));
i__47937__auto___67121 = G__67122;
continue;
} else {
}
break;
}

var argseq__47944__auto__ = ((((1) < args__47943__auto__.length))?(new cljs.core.IndexedSeq(args__47943__auto__.slice((1)),(0))):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47944__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq67118){
var G__67119 = cljs.core.first.call(null,seq67118);
var seq67118__$1 = cljs.core.next.call(null,seq67118);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__67119,seq67118__$1);
});
markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__67127_67131 = cljs.core.seq.call(null,lines);
var chunk__67128_67132 = null;
var count__67129_67133 = (0);
var i__67130_67134 = (0);
while(true){
if((i__67130_67134 < count__67129_67133)){
var line_67135 = cljs.core._nth.call(null,chunk__67128_67132,i__67130_67134);
markdown.transformers.parse_reference_link.call(null,line_67135,references);

var G__67136 = seq__67127_67131;
var G__67137 = chunk__67128_67132;
var G__67138 = count__67129_67133;
var G__67139 = (i__67130_67134 + (1));
seq__67127_67131 = G__67136;
chunk__67128_67132 = G__67137;
count__67129_67133 = G__67138;
i__67130_67134 = G__67139;
continue;
} else {
var temp__4425__auto___67140 = cljs.core.seq.call(null,seq__67127_67131);
if(temp__4425__auto___67140){
var seq__67127_67141__$1 = temp__4425__auto___67140;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67127_67141__$1)){
var c__47681__auto___67142 = cljs.core.chunk_first.call(null,seq__67127_67141__$1);
var G__67143 = cljs.core.chunk_rest.call(null,seq__67127_67141__$1);
var G__67144 = c__47681__auto___67142;
var G__67145 = cljs.core.count.call(null,c__47681__auto___67142);
var G__67146 = (0);
seq__67127_67131 = G__67143;
chunk__67128_67132 = G__67144;
count__67129_67133 = G__67145;
i__67130_67134 = G__67146;
continue;
} else {
var line_67147 = cljs.core.first.call(null,seq__67127_67141__$1);
markdown.transformers.parse_reference_link.call(null,line_67147,references);

var G__67148 = cljs.core.next.call(null,seq__67127_67141__$1);
var G__67149 = null;
var G__67150 = (0);
var G__67151 = (0);
seq__67127_67131 = G__67148;
chunk__67128_67132 = G__67149;
count__67129_67133 = G__67150;
i__67130_67134 = G__67151;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__67156_67160 = cljs.core.seq.call(null,lines);
var chunk__67157_67161 = null;
var count__67158_67162 = (0);
var i__67159_67163 = (0);
while(true){
if((i__67159_67163 < count__67158_67162)){
var line_67164 = cljs.core._nth.call(null,chunk__67157_67161,i__67159_67163);
markdown.transformers.parse_footnote_link.call(null,line_67164,footnotes);

var G__67165 = seq__67156_67160;
var G__67166 = chunk__67157_67161;
var G__67167 = count__67158_67162;
var G__67168 = (i__67159_67163 + (1));
seq__67156_67160 = G__67165;
chunk__67157_67161 = G__67166;
count__67158_67162 = G__67167;
i__67159_67163 = G__67168;
continue;
} else {
var temp__4425__auto___67169 = cljs.core.seq.call(null,seq__67156_67160);
if(temp__4425__auto___67169){
var seq__67156_67170__$1 = temp__4425__auto___67169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67156_67170__$1)){
var c__47681__auto___67171 = cljs.core.chunk_first.call(null,seq__67156_67170__$1);
var G__67172 = cljs.core.chunk_rest.call(null,seq__67156_67170__$1);
var G__67173 = c__47681__auto___67171;
var G__67174 = cljs.core.count.call(null,c__47681__auto___67171);
var G__67175 = (0);
seq__67156_67160 = G__67172;
chunk__67157_67161 = G__67173;
count__67158_67162 = G__67174;
i__67159_67163 = G__67175;
continue;
} else {
var line_67176 = cljs.core.first.call(null,seq__67156_67170__$1);
markdown.transformers.parse_footnote_link.call(null,line_67176,footnotes);

var G__67177 = cljs.core.next.call(null,seq__67156_67170__$1);
var G__67178 = null;
var G__67179 = (0);
var G__67180 = (0);
seq__67156_67160 = G__67177;
chunk__67157_67161 = G__67178;
count__67158_67162 = G__67179;
i__67159_67163 = G__67180;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__47943__auto__ = [];
var len__47936__auto___67189 = arguments.length;
var i__47937__auto___67190 = (0);
while(true){
if((i__47937__auto___67190 < len__47936__auto___67189)){
args__47943__auto__.push((arguments[i__47937__auto___67190]));

var G__67191 = (i__47937__auto___67190 + (1));
i__47937__auto___67190 = G__67191;
continue;
} else {
}
break;
}

var argseq__47944__auto__ = ((((1) < args__47943__auto__.length))?(new cljs.core.IndexedSeq(args__47943__auto__.slice((1)),(0))):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47944__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
var _STAR_substring_STAR_67183 = markdown.transformers._STAR_substring_STAR_;
var formatter67184 = markdown.transformers.formatter;
markdown.transformers._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_67183,formatter67184){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_67183,formatter67184))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str(text),cljs.core.str("\n")].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__67186_67192 = lines;
var vec__67187_67193 = G__67186_67192;
var line_67194 = cljs.core.nth.call(null,vec__67187_67193,(0),null);
var more_67195 = cljs.core.nthnext.call(null,vec__67187_67193,(1));
var state_67196 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__67186_67197__$1 = G__67186_67192;
var state_67198__$1 = state_67196;
while(true){
var vec__67188_67199 = G__67186_67197__$1;
var line_67200__$1 = cljs.core.nth.call(null,vec__67188_67199,(0),null);
var more_67201__$1 = cljs.core.nthnext.call(null,vec__67188_67199,(1));
var state_67202__$2 = state_67198__$1;
var state_67203__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_67202__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_67202__$2),cljs.core.first.call(null,more_67201__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_67202__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_67202__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_67201__$1))){
var G__67204 = more_67201__$1;
var G__67205 = cljs.core.assoc.call(null,transformer.call(null,html,line_67200__$1,cljs.core.first.call(null,more_67201__$1),state_67203__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_67200__$1));
G__67186_67197__$1 = G__67204;
state_67198__$1 = G__67205;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_67203__$3))),line_67200__$1,"",cljs.core.assoc.call(null,state_67203__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return html.toString();
}finally {markdown.transformers.formatter = formatter67184;

markdown.transformers._STAR_substring_STAR_ = _STAR_substring_STAR_67183;
}});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq67181){
var G__67182 = cljs.core.first.call(null,seq67181);
var seq67181__$1 = cljs.core.next.call(null,seq67181);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__67182,seq67181__$1);
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__47943__auto__ = [];
var len__47936__auto___67207 = arguments.length;
var i__47937__auto___67208 = (0);
while(true){
if((i__47937__auto___67208 < len__47936__auto___67207)){
args__47943__auto__.push((arguments[i__47937__auto___67208]));

var G__67209 = (i__47937__auto___67208 + (1));
i__47937__auto___67208 = G__67209;
continue;
} else {
}
break;
}

var argseq__47944__auto__ = ((((0) < args__47943__auto__.length))?(new cljs.core.IndexedSeq(args__47943__auto__.slice((0)),(0))):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__47944__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq67206){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67206));
});
