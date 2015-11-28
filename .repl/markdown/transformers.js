// Compiled by ClojureScript 1.7.145 {}
goog.provide('markdown.transformers');
goog.require('cljs.core');
goog.require('clojure.string');
markdown.transformers.formatter;
markdown.transformers._STAR_substring_STAR_;
markdown.transformers._STAR_next_line_STAR_;
markdown.transformers.heading_QMARK_ = (function markdown$transformers$heading_QMARK_(text,type){
if(cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [" ",null], null), null),cljs.core.take.call(null,(4),text))){
return null;
} else {
var trimmed = (cljs.core.truth_(text)?clojure.string.trim.call(null,text):null);
var and__46866__auto__ = cljs.core.not_empty.call(null,trimmed);
if(cljs.core.truth_(and__46866__auto__)){
return cljs.core.every_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([type], true),trimmed);
} else {
return and__46866__auto__;
}
}
});
markdown.transformers.h1_QMARK_ = (function markdown$transformers$h1_QMARK_(text){
return markdown.transformers.heading_QMARK_.call(null,text,"=");
});
markdown.transformers.h2_QMARK_ = (function markdown$transformers$h2_QMARK_(text){
return markdown.transformers.heading_QMARK_.call(null,text,"-");
});
markdown.transformers.empty_line = (function markdown$transformers$empty_line(text,state){
if(cljs.core.truth_((function (){var or__46878__auto__ = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
return new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__46878__auto__ = markdown.transformers.h1_QMARK_.call(null,text);
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
return markdown.transformers.h2_QMARK_.call(null,text);
}
})())?"":text),(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,text))?cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.Keyword(null,"heading","heading",-1312171873)):state)], null);
}
});
markdown.transformers.escape_code = (function markdown$transformers$escape_code(s){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,s,/&/,"&amp;"),/\*/,"&#42;"),/\^/,"&#94;"),/\_/,"&#95;"),/\~/,"&#126;"),/\</,"&lt;"),/\>/,"&gt;"),/\[/,"&#91;"),/\]/,"&#93;"),/\(/,"&#40;"),/\)/,"&#41;"),/\"/,"&quot;");
});
markdown.transformers.escape_delimiter = [cljs.core.str(cljs.core.char$.call(null,(254))),cljs.core.str(cljs.core.char$.call(null,(491)))].join('');
/**
 * Freezes an output string.  Converts to a placeholder token and puts that into the output.
 *   Returns the [text, state] pair.  Adds it into the state, the 'frozen-strings' hashmap
 *   So that it can be unfrozen later.
 */
markdown.transformers.freeze_string = (function markdown$transformers$freeze_string(var_args){
var args__47943__auto__ = [];
var len__47936__auto___67213 = arguments.length;
var i__47937__auto___67214 = (0);
while(true){
if((i__47937__auto___67214 < len__47936__auto___67213)){
args__47943__auto__.push((arguments[i__47937__auto___67214]));

var G__67215 = (i__47937__auto___67214 + (1));
i__47937__auto___67214 = G__67215;
continue;
} else {
}
break;
}

var argseq__47944__auto__ = ((((0) < args__47943__auto__.length))?(new cljs.core.IndexedSeq(args__47943__auto__.slice((0)),(0))):null);
return markdown.transformers.freeze_string.cljs$core$IFn$_invoke$arity$variadic(argseq__47944__auto__);
});

markdown.transformers.freeze_string.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var state = cljs.core.last.call(null,args);
var token = [cljs.core.str(markdown.transformers.escape_delimiter),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state))),cljs.core.str(markdown.transformers.escape_delimiter)].join('');
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560),token], null),cljs.core.reduce.call(null,cljs.core.str,cljs.core.flatten.call(null,cljs.core.drop_last.call(null,args))))], null);
});

markdown.transformers.freeze_string.cljs$lang$maxFixedArity = (0);

markdown.transformers.freeze_string.cljs$lang$applyTo = (function (seq67212){
return markdown.transformers.freeze_string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67212));
});
/**
 * Recursively replaces the frozen strings in the output with the original text.
 */
markdown.transformers.thaw_string = (function markdown$transformers$thaw_string(text,state){
while(true){
var unfrozen_text = clojure.string.replace.call(null,text,cljs.core.re_pattern.call(null,[cljs.core.str(markdown.transformers.escape_delimiter),cljs.core.str("\\d+"),cljs.core.str(markdown.transformers.escape_delimiter)].join('')),((function (text,state){
return (function (p1__67216_SHARP_){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state),p1__67216_SHARP_,p1__67216_SHARP_);
});})(text,state))
);
if(cljs.core._EQ_.call(null,text,unfrozen_text)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [unfrozen_text,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560))], null);
} else {
var G__67217 = unfrozen_text;
var G__67218 = state;
text = G__67217;
state = G__67218;
continue;
}
break;
}
});
markdown.transformers.escaped_chars = (function markdown$transformers$escaped_chars(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__46878__auto__ = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
return new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,text,/\\\\/,"&#92;"),/\\`/,"&#8216;"),/\\\*/,"&#42;"),/\\_/,"&#95;"),/\\\{/,"&#123;"),/\\\}/,"&#125;"),/\\\[/,"&#91;"),/\\\]/,"&#93;"),/\\\(/,"&#40;"),/\\\)/,"&#41;"),/\\#/,"&#35;"),/\\\+/,"&#43;"),/\\-/,"&#45;"),/\\\./,"&#46;"),/\\!/,"&#33;")),state], null);
});
markdown.transformers.separator = (function markdown$transformers$separator(escape_QMARK_,text,open,close,separator__$1,state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var buf = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.partition_by.call(null,cljs.core.partial.call(null,cljs.core._EQ_,cljs.core.first.call(null,separator__$1)),cljs.core.seq.call(null,text));
var cur_state = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"found-token","found-token",113525576),false);
while(true){
if(cljs.core.empty_QMARK_.call(null,tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,cljs.core.into.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"found-token","found-token",113525576).cljs$core$IFn$_invoke$arity$1(cur_state))?cljs.core.into.call(null,out,separator__$1):out),buf)),cljs.core.dissoc.call(null,cur_state,new cljs.core.Keyword(null,"found-token","found-token",113525576))], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"found-token","found-token",113525576).cljs$core$IFn$_invoke$arity$1(cur_state))){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,tokens),separator__$1)){
var G__67219 = cljs.core.vec.call(null,cljs.core.concat.call(null,out,cljs.core.seq.call(null,open),(cljs.core.truth_(escape_QMARK_)?cljs.core.seq.call(null,markdown.transformers.escape_code.call(null,clojure.string.join.call(null,buf))):buf),cljs.core.seq.call(null,close)));
var G__67220 = cljs.core.PersistentVector.EMPTY;
var G__67221 = cljs.core.rest.call(null,tokens);
var G__67222 = cljs.core.assoc.call(null,cur_state,new cljs.core.Keyword(null,"found-token","found-token",113525576),false);
out = G__67219;
buf = G__67220;
tokens = G__67221;
cur_state = G__67222;
continue;
} else {
var G__67223 = out;
var G__67224 = cljs.core.into.call(null,buf,cljs.core.first.call(null,tokens));
var G__67225 = cljs.core.rest.call(null,tokens);
var G__67226 = cur_state;
out = G__67223;
buf = G__67224;
tokens = G__67225;
cur_state = G__67226;
continue;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,tokens),separator__$1)){
var G__67227 = out;
var G__67228 = buf;
var G__67229 = cljs.core.rest.call(null,tokens);
var G__67230 = cljs.core.assoc.call(null,cur_state,new cljs.core.Keyword(null,"found-token","found-token",113525576),true);
out = G__67227;
buf = G__67228;
tokens = G__67229;
cur_state = G__67230;
continue;
} else {
var G__67231 = cljs.core.into.call(null,out,cljs.core.first.call(null,tokens));
var G__67232 = buf;
var G__67233 = cljs.core.rest.call(null,tokens);
var G__67234 = cur_state;
out = G__67231;
buf = G__67232;
tokens = G__67233;
cur_state = G__67234;
continue;

}
}
}
break;
}
}
});
markdown.transformers.strong = (function markdown$transformers$strong(text,state){
return markdown.transformers.separator.call(null,false,text,"<strong>","</strong>",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*","*"], null),state);
});
markdown.transformers.bold = (function markdown$transformers$bold(text,state){
return markdown.transformers.separator.call(null,false,text,"<b>","</b>",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["_","_"], null),state);
});
markdown.transformers.em = (function markdown$transformers$em(text,state){
return markdown.transformers.separator.call(null,false,text,"<em>","</em>",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*"], null),state);
});
markdown.transformers.italics = (function markdown$transformers$italics(text,state){
return markdown.transformers.separator.call(null,false,text,"<i>","</i>",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["_"], null),state);
});
markdown.transformers.inline_code = (function markdown$transformers$inline_code(text,state){
return markdown.transformers.separator.call(null,true,text,"<code>","</code>",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`"], null),state);
});
markdown.transformers.strikethrough = (function markdown$transformers$strikethrough(text,state){
return markdown.transformers.separator.call(null,false,text,"<del>","</del>",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~","~"], null),state);
});
markdown.transformers.superscript = (function markdown$transformers$superscript(text,state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var tokens = cljs.core.partition_by.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"^",null], null), null)),text);
var buf = cljs.core.PersistentVector.EMPTY;
var remaining = tokens;
while(true){
if(cljs.core.empty_QMARK_.call(null,remaining)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,buf),state], null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remaining),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null))){
var G__67235 = cljs.core.into.call(null,buf,cljs.core.concat.call(null,cljs.core.seq.call(null,"<sup>"),cljs.core.second.call(null,remaining),cljs.core.seq.call(null,"</sup>")));
var G__67236 = cljs.core.drop.call(null,(2),remaining);
buf = G__67235;
remaining = G__67236;
continue;
} else {
var G__67237 = cljs.core.into.call(null,buf,cljs.core.first.call(null,remaining));
var G__67238 = cljs.core.rest.call(null,remaining);
buf = G__67237;
remaining = G__67238;
continue;

}
}
break;
}
}
});
markdown.transformers.heading_text = (function markdown$transformers$heading_text(text){
return clojure.string.trim.call(null,clojure.string.join.call(null,cljs.core.take_while.call(null,(function (p1__67240_SHARP_){
return cljs.core.not_EQ_.call(null,"#",p1__67240_SHARP_);
}),cljs.core.drop_while.call(null,(function (p1__67239_SHARP_){
return (cljs.core._EQ_.call(null,"#",p1__67239_SHARP_)) || (cljs.core._EQ_.call(null," ",p1__67239_SHARP_));
}),text))));
});
markdown.transformers.heading_level = (function markdown$transformers$heading_level(text){
var num_hashes = cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__67241_SHARP_){
return cljs.core.not_EQ_.call(null," ",p1__67241_SHARP_);
}),cljs.core.take_while.call(null,(function (p1__67242_SHARP_){
return (cljs.core._EQ_.call(null,"#",p1__67242_SHARP_)) || (cljs.core._EQ_.call(null," ",p1__67242_SHARP_));
}),cljs.core.seq.call(null,text))));
if((num_hashes > (0))){
return num_hashes;
} else {
return null;
}
});
markdown.transformers.make_heading = (function markdown$transformers$make_heading(text,heading_anchors){
var temp__4423__auto__ = markdown.transformers.heading_level.call(null,text);
if(cljs.core.truth_(temp__4423__auto__)){
var heading = temp__4423__auto__;
var text__$1 = markdown.transformers.heading_text.call(null,text);
return [cljs.core.str("<h"),cljs.core.str(heading),cljs.core.str(">"),cljs.core.str((cljs.core.truth_(heading_anchors)?[cljs.core.str("<a name=\""),cljs.core.str(clojure.string.replace.call(null,clojure.string.lower_case.call(null,text__$1)," ","&#95;")),cljs.core.str("\"></a>")].join(''):null)),cljs.core.str(text__$1),cljs.core.str("</h"),cljs.core.str(heading),cljs.core.str(">")].join('');
} else {
return null;
}
});
markdown.transformers.heading = (function markdown$transformers$heading(text,state){
if(cljs.core.truth_((function (){var or__46878__auto__ = new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.transformers.h1_QMARK_.call(null,markdown.transformers._STAR_next_line_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<h1>"),cljs.core.str(text),cljs.core.str("</h1>")].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"heading","heading",-1312171873),true)], null);
} else {
if(cljs.core.truth_(markdown.transformers.h2_QMARK_.call(null,markdown.transformers._STAR_next_line_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<h2>"),cljs.core.str(text),cljs.core.str("</h2>")].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"heading","heading",-1312171873),true)], null);
} else {
var temp__4423__auto__ = markdown.transformers.make_heading.call(null,text,new cljs.core.Keyword(null,"heading-anchors","heading-anchors",1713527866).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(temp__4423__auto__)){
var heading__$1 = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [heading__$1,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"heading","heading",-1312171873),true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
}
});
markdown.transformers.br = (function markdown$transformers$br(text,p__67243){
var map__67246 = p__67243;
var map__67246__$1 = ((((!((map__67246 == null)))?((((map__67246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67246):map__67246);
var state = map__67246__$1;
var code = cljs.core.get.call(null,map__67246__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var lists = cljs.core.get.call(null,map__67246__$1,new cljs.core.Keyword(null,"lists","lists",-884730684));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "," "], null),cljs.core.take_last.call(null,(2),text))) && (cljs.core.not.call(null,(function (){var or__46878__auto__ = code;
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
return lists;
}
})())))?[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.drop_last.call(null,(2),text))),cljs.core.str("<br />")].join(''):text),state], null);
});
markdown.transformers.autourl_transformer = (function markdown$transformers$autourl_transformer(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state))?text:clojure.string.replace.call(null,text,/<https?:\/\/[-A-Za-z0-9+&@#\/%?=~_()|!:,.;]*[-A-Za-z0-9+&@#\/%=~_()|]>/,(function (p1__67248_SHARP_){
var url = cljs.core.subs.call(null,p1__67248_SHARP_,(1),(cljs.core.count.call(null,p1__67248_SHARP_) - (1)));
return [cljs.core.str("<a href=\""),cljs.core.str(url),cljs.core.str("\">"),cljs.core.str(url),cljs.core.str("</a>")].join('');
}))),state], null);
});
markdown.transformers.autoemail_transformer = (function markdown$transformers$autoemail_transformer(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__46878__auto__ = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
return new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace.call(null,text,/<[\w._%+-]+@[\w.-]+\.[\w]{2,4}>/,(function (p1__67249_SHARP_){
var encoded = (cljs.core.truth_(new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403).cljs$core$IFn$_invoke$arity$1(state))?cljs.core.subs.call(null,p1__67249_SHARP_,(1),(cljs.core.count.call(null,p1__67249_SHARP_) - (1))):cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (c){
if((cljs.core.rand.call(null) > 0.5)){
return markdown.transformers.formatter.call(null,"&#x%02x;",(c | (0)));
} else {
return c;
}
}),cljs.core.subs.call(null,p1__67249_SHARP_,(1),(cljs.core.count.call(null,p1__67249_SHARP_) - (1))))));
return [cljs.core.str("<a href=\"mailto:"),cljs.core.str(encoded),cljs.core.str("\">"),cljs.core.str(encoded),cljs.core.str("</a>")].join('');
}))),state], null);
});
markdown.transformers.paragraph_text = (function markdown$transformers$paragraph_text(last_line_empty_QMARK_,text){
if(cljs.core.truth_((function (){var and__46866__auto__ = cljs.core.not.call(null,last_line_empty_QMARK_);
if(and__46866__auto__){
return cljs.core.not_empty.call(null,text);
} else {
return and__46866__auto__;
}
})())){
return [cljs.core.str(" "),cljs.core.str(text)].join('');
} else {
return text;
}
});
markdown.transformers.paragraph = (function markdown$transformers$paragraph(text,p__67250){
var map__67253 = p__67250;
var map__67253__$1 = ((((!((map__67253 == null)))?((((map__67253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67253):map__67253);
var state = map__67253__$1;
var eof = cljs.core.get.call(null,map__67253__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
var heading = cljs.core.get.call(null,map__67253__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var hr = cljs.core.get.call(null,map__67253__$1,new cljs.core.Keyword(null,"hr","hr",1377740067));
var code = cljs.core.get.call(null,map__67253__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var lists = cljs.core.get.call(null,map__67253__$1,new cljs.core.Keyword(null,"lists","lists",-884730684));
var blockquote = cljs.core.get.call(null,map__67253__$1,new cljs.core.Keyword(null,"blockquote","blockquote",372264190));
var paragraph__$1 = cljs.core.get.call(null,map__67253__$1,new cljs.core.Keyword(null,"paragraph","paragraph",296707709));
var last_line_empty_QMARK_ = cljs.core.get.call(null,map__67253__$1,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527));
if(cljs.core.truth_((function (){var and__46866__auto__ = paragraph__$1;
if(cljs.core.truth_(and__46866__auto__)){
return lists;
} else {
return and__46866__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</p>"),cljs.core.str(text)].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"paragraph","paragraph",296707709),false)], null);
} else {
if(cljs.core.truth_((function (){var or__46878__auto__ = heading;
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
var or__46878__auto____$1 = hr;
if(cljs.core.truth_(or__46878__auto____$1)){
return or__46878__auto____$1;
} else {
var or__46878__auto____$2 = code;
if(cljs.core.truth_(or__46878__auto____$2)){
return or__46878__auto____$2;
} else {
var or__46878__auto____$3 = lists;
if(cljs.core.truth_(or__46878__auto____$3)){
return or__46878__auto____$3;
} else {
return blockquote;
}
}
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(paragraph__$1)){
if(cljs.core.truth_((function (){var or__46878__auto__ = eof;
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
return cljs.core.empty_QMARK_.call(null,clojure.string.trim.call(null,text));
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(markdown.transformers.paragraph_text.call(null,last_line_empty_QMARK_,text)),cljs.core.str("</p>")].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"paragraph","paragraph",296707709),false)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.paragraph_text.call(null,last_line_empty_QMARK_,text),state], null);
}
} else {
if(cljs.core.truth_((function (){var and__46866__auto__ = cljs.core.not.call(null,eof);
if(and__46866__auto__){
return last_line_empty_QMARK_;
} else {
return and__46866__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<p>"),cljs.core.str(text)].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"paragraph","paragraph",296707709),true,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),false)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}
});
markdown.transformers.code = (function markdown$transformers$code(text,p__67255){
var map__67258 = p__67255;
var map__67258__$1 = ((((!((map__67258 == null)))?((((map__67258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67258):map__67258);
var state = map__67258__$1;
var eof = cljs.core.get.call(null,map__67258__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
var lists = cljs.core.get.call(null,map__67258__$1,new cljs.core.Keyword(null,"lists","lists",-884730684));
var code__$1 = cljs.core.get.call(null,map__67258__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__67258__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
if(cljs.core.truth_((function (){var or__46878__auto__ = lists;
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(code__$1)){
if(cljs.core.truth_((function (){var or__46878__auto__ = eof;
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
return cljs.core.not_EQ_.call(null,"    ",clojure.string.join.call(null,cljs.core.take.call(null,(4),text)));
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("\n</code></pre>"),cljs.core.str(text)].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"code","code",1586293142),false,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),false)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("\n"),cljs.core.str(markdown.transformers.escape_code.call(null,clojure.string.replace_first.call(null,text,/    /,"")))].join(''),state], null);
}
} else {
if(cljs.core.empty_QMARK_.call(null,clojure.string.trim.call(null,text))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var num_spaces = cljs.core.count.call(null,cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core._EQ_," "),text));
if((num_spaces > (3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<pre><code>"),cljs.core.str(markdown.transformers.escape_code.call(null,clojure.string.replace_first.call(null,text,/    /,"")))].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"code","code",1586293142),true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
}
});
markdown.transformers.codeblock = (function markdown$transformers$codeblock(text,state){
var trimmed = clojure.string.trim.call(null,text);
if(cljs.core.truth_((function (){var and__46866__auto__ = cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take.call(null,(3),trimmed));
if(and__46866__auto__){
return new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state);
} else {
return and__46866__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</code></pre>"),cljs.core.str(clojure.string.join.call(null,cljs.core.drop.call(null,(3),trimmed)))].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"code","code",1586293142),false,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855),false,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),false)], null);
} else {
if(cljs.core.truth_((function (){var and__46866__auto__ = cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take_last.call(null,(3),trimmed));
if(and__46866__auto__){
return new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state);
} else {
return and__46866__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</code></pre>"),cljs.core.str(clojure.string.join.call(null,cljs.core.drop_last.call(null,(3),trimmed)))].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"code","code",1586293142),false,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855),false,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),false)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take.call(null,(3),trimmed))){
var vec__67261 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),cljs.core.drop.call(null,(3),trimmed));
var lang = cljs.core.nth.call(null,vec__67261,(0),null);
var code = cljs.core.nth.call(null,vec__67261,(1),null);
var s = cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,code));
var formatter = new cljs.core.Keyword(null,"code-style","code-style",-2144009586).cljs$core$IFn$_invoke$arity$1(state);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<pre><code"),cljs.core.str((cljs.core.truth_(cljs.core.not_empty.call(null,lang))?[cljs.core.str(" "),cljs.core.str((cljs.core.truth_(formatter)?formatter.call(null,clojure.string.join.call(null,lang)):[cljs.core.str("class=\""),cljs.core.str(clojure.string.join.call(null,lang)),cljs.core.str("\"")].join('')))].join(''):null)),cljs.core.str(">"),cljs.core.str(markdown.transformers.escape_code.call(null,((cljs.core.empty_QMARK_.call(null,s))?s:[cljs.core.str(s),cljs.core.str("\n")].join(''))))].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"code","code",1586293142),true,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855),true)], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(markdown.transformers.escape_code.call(null,text)),cljs.core.str("\n")].join(''),state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}
});
markdown.transformers.hr = (function markdown$transformers$hr(text,state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(((cljs.core.empty_QMARK_.call(null,cljs.core.drop_while.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"*",null], null), null),text))) || (cljs.core.empty_QMARK_.call(null,cljs.core.drop_while.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"-",null], null), null),text))) || (cljs.core.empty_QMARK_.call(null,cljs.core.drop_while.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"_",null], null), null),text)))) && ((cljs.core.count.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [" ",null], null), null),text)) > (2)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<hr/>")].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"hr","hr",1377740067),true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
}
});
markdown.transformers.blockquote = (function markdown$transformers$blockquote(text,p__67262){
var map__67265 = p__67262;
var map__67265__$1 = ((((!((map__67265 == null)))?((((map__67265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67265):map__67265);
var state = map__67265__$1;
var eof = cljs.core.get.call(null,map__67265__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
var code = cljs.core.get.call(null,map__67265__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__67265__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var lists = cljs.core.get.call(null,map__67265__$1,new cljs.core.Keyword(null,"lists","lists",-884730684));
var trimmed = clojure.string.trim.call(null,text);
if(cljs.core.truth_((function (){var or__46878__auto__ = code;
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
var or__46878__auto____$1 = codeblock;
if(cljs.core.truth_(or__46878__auto____$1)){
return or__46878__auto____$1;
} else {
return lists;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"blockquote","blockquote",372264190).cljs$core$IFn$_invoke$arity$1(state))){
if(cljs.core.truth_((function (){var or__46878__auto__ = eof;
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
return cljs.core.empty_QMARK_.call(null,trimmed);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["</p></blockquote>",cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"blockquote","blockquote",372264190),false)], null);
} else {
if(cljs.core._EQ_.call(null,">",trimmed)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["</p><p>",state], null);
} else {
if(cljs.core._EQ_.call(null,">-",cljs.core.subs.call(null,trimmed,(0),(2)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</p><footer>"),cljs.core.str(cljs.core.subs.call(null,text,(2))),cljs.core.str("</footer><p>")].join(''),state], null);
} else {
if(cljs.core._EQ_.call(null,">",cljs.core.subs.call(null,trimmed,(0),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.call(null,text,(1))),cljs.core.str(" ")].join(''),state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(text),cljs.core.str(" ")].join(''),state], null);

}
}
}
}
} else {
if(cljs.core._EQ_.call(null,">",cljs.core.first.call(null,text))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<blockquote><p>"),cljs.core.str(clojure.string.join.call(null,cljs.core.rest.call(null,text))),cljs.core.str(" ")].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"blockquote","blockquote",372264190),true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
});
markdown.transformers.href = (function markdown$transformers$href(title,link,state){
return markdown.transformers.freeze_string.call(null,cljs.core.seq.call(null,"<a href='"),link,cljs.core.seq.call(null,"'>"),title,cljs.core.seq.call(null,"</a>"),state);
});
markdown.transformers.img = (function markdown$transformers$img(var_args){
var args__47943__auto__ = [];
var len__47936__auto___67273 = arguments.length;
var i__47937__auto___67274 = (0);
while(true){
if((i__47937__auto___67274 < len__47936__auto___67273)){
args__47943__auto__.push((arguments[i__47937__auto___67274]));

var G__67275 = (i__47937__auto___67274 + (1));
i__47937__auto___67274 = G__67275;
continue;
} else {
}
break;
}

var argseq__47944__auto__ = ((((3) < args__47943__auto__.length))?(new cljs.core.IndexedSeq(args__47943__auto__.slice((3)),(0))):null);
return markdown.transformers.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__47944__auto__);
});

markdown.transformers.img.cljs$core$IFn$_invoke$arity$variadic = (function (alt,url,state,p__67271){
var vec__67272 = p__67271;
var title = cljs.core.nth.call(null,vec__67272,(0),null);
return markdown.transformers.freeze_string.call(null,cljs.core.seq.call(null,"<img src=\""),url,cljs.core.seq.call(null,"\" alt=\""),alt,(cljs.core.truth_(cljs.core.not_empty.call(null,title))?cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.str,"\" title=",clojure.string.join.call(null,title)," />")):cljs.core.seq.call(null,"\" />")),state);
});

markdown.transformers.img.cljs$lang$maxFixedArity = (3);

markdown.transformers.img.cljs$lang$applyTo = (function (seq67267){
var G__67268 = cljs.core.first.call(null,seq67267);
var seq67267__$1 = cljs.core.next.call(null,seq67267);
var G__67269 = cljs.core.first.call(null,seq67267__$1);
var seq67267__$2 = cljs.core.next.call(null,seq67267__$1);
var G__67270 = cljs.core.first.call(null,seq67267__$2);
var seq67267__$3 = cljs.core.next.call(null,seq67267__$2);
return markdown.transformers.img.cljs$core$IFn$_invoke$arity$variadic(G__67268,G__67269,G__67270,seq67267__$3);
});
markdown.transformers.handle_img_link = (function markdown$transformers$handle_img_link(xs,state){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","!","["], null),cljs.core.take.call(null,(3),xs))){
var xs__$1 = cljs.core.drop.call(null,(3),xs);
var vec__67280 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"]"),xs__$1);
var alt = cljs.core.nth.call(null,vec__67280,(0),null);
var xy = cljs.core.nth.call(null,vec__67280,(1),null);
var vec__67281 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,")"),cljs.core.drop.call(null,(2),xy));
var url_title = cljs.core.nth.call(null,vec__67281,(0),null);
var zy = cljs.core.nth.call(null,vec__67281,(1),null);
var vec__67282 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),url_title);
var url = cljs.core.nth.call(null,vec__67282,(0),null);
var title = cljs.core.nth.call(null,vec__67282,(1),null);
var vec__67283 = markdown.transformers.img.call(null,alt,url,state,cljs.core.not_empty.call(null,title));
var new_text = cljs.core.nth.call(null,vec__67283,(0),null);
var new_state = cljs.core.nth.call(null,vec__67283,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,"[",new_text,cljs.core.rest.call(null,zy)),new_state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs,state], null);
}
});
markdown.transformers.process_link_title = (function markdown$transformers$process_link_title(title,state){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p1__67285_SHARP_,p2__67284_SHARP_){
return cljs.core.apply.call(null,p2__67284_SHARP_,p1__67285_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,state], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.italics,markdown.transformers.em,markdown.transformers.strong,markdown.transformers.bold,markdown.transformers.strikethrough], null)));
});
markdown.transformers.link = (function markdown$transformers$link(text,p__67286){
var map__67297 = p__67286;
var map__67297__$1 = ((((!((map__67297 == null)))?((((map__67297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67297):map__67297);
var state = map__67297__$1;
var code = cljs.core.get.call(null,map__67297__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__67297__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
if(cljs.core.truth_((function (){var or__46878__auto__ = code;
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.seq.call(null,text);
var loop_state = state;
while(true){
if(cljs.core.empty_QMARK_.call(null,tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,out),loop_state], null);
} else {
var vec__67299 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"["),tokens);
var head = cljs.core.nth.call(null,vec__67299,(0),null);
var xs = cljs.core.nth.call(null,vec__67299,(1),null);
var vec__67300 = markdown.transformers.handle_img_link.call(null,xs,loop_state);
var xs__$1 = cljs.core.nth.call(null,vec__67300,(0),null);
var loop_state__$1 = cljs.core.nth.call(null,vec__67300,(1),null);
var vec__67301 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"]"),xs__$1);
var title = cljs.core.nth.call(null,vec__67301,(0),null);
var ys = cljs.core.nth.call(null,vec__67301,(1),null);
var vec__67302 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"("),ys);
var dud = cljs.core.nth.call(null,vec__67302,(0),null);
var zs = cljs.core.nth.call(null,vec__67302,(1),null);
var vec__67303 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,")"),zs);
var link__$1 = cljs.core.nth.call(null,vec__67303,(0),null);
var tail = cljs.core.nth.call(null,vec__67303,(1),null);
if(((cljs.core.count.call(null,link__$1) < (2))) || ((cljs.core.count.call(null,tail) < (1))) || ((cljs.core.count.call(null,dud) > (1)))){
var G__67307 = cljs.core.concat.call(null,out,head,markdown.transformers.process_link_title.call(null,title,state),dud,link__$1);
var G__67308 = tail;
var G__67309 = loop_state__$1;
out = G__67307;
tokens = G__67308;
loop_state = G__67309;
continue;
} else {
if(cljs.core._EQ_.call(null,cljs.core.last.call(null,head),"!")){
var alt = cljs.core.rest.call(null,title);
var vec__67304 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),cljs.core.rest.call(null,link__$1));
var url = cljs.core.nth.call(null,vec__67304,(0),null);
var title__$1 = cljs.core.nth.call(null,vec__67304,(1),null);
var title__$2 = markdown.transformers.process_link_title.call(null,clojure.string.join.call(null,cljs.core.rest.call(null,title__$1)),loop_state__$1);
var vec__67305 = markdown.transformers.img.call(null,alt,url,loop_state__$1,title__$2);
var img_text = cljs.core.nth.call(null,vec__67305,(0),null);
var new_loop_state = cljs.core.nth.call(null,vec__67305,(1),null);
var G__67310 = cljs.core.concat.call(null,cljs.core.butlast.call(null,head),img_text);
var G__67311 = cljs.core.rest.call(null,tail);
var G__67312 = new_loop_state;
out = G__67310;
tokens = G__67311;
loop_state = G__67312;
continue;
} else {
var vec__67306 = markdown.transformers.href.call(null,cljs.core.rest.call(null,markdown.transformers.process_link_title.call(null,title,state)),cljs.core.rest.call(null,link__$1),loop_state__$1);
var link_text = cljs.core.nth.call(null,vec__67306,(0),null);
var new_loop_state = cljs.core.nth.call(null,vec__67306,(1),null);
var G__67313 = cljs.core.concat.call(null,out,head,link_text);
var G__67314 = cljs.core.rest.call(null,tail);
var G__67315 = new_loop_state;
out = G__67313;
tokens = G__67314;
loop_state = G__67315;
continue;
}
}
}
break;
}
}
});
markdown.transformers.reference = (function markdown$transformers$reference(text){
return cljs.core.re_find.call(null,/^\[[a-zA-Z0-9 ]+\]:/,text);
});
markdown.transformers.parse_reference = (function markdown$transformers$parse_reference(reference,start){
return clojure.string.split.call(null,clojure.string.trim.call(null,cljs.core.subs.call(null,reference,start)),/\s+/,(2));
});
markdown.transformers.parse_reference_link = (function markdown$transformers$parse_reference_link(line,references){
var trimmed = clojure.string.trim.call(null,line);
var temp__4425__auto__ = markdown.transformers.reference.call(null,trimmed);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return cljs.core.swap_BANG_.call(null,references,cljs.core.assoc,cljs.core.subs.call(null,link,(0),(cljs.core.count.call(null,link) - (1))),markdown.transformers.parse_reference.call(null,trimmed,(cljs.core.count.call(null,link) + (1))));
} else {
return null;
}
});
markdown.transformers.replace_reference_link = (function markdown$transformers$replace_reference_link(references,reference){
var vec__67318 = clojure.string.split.call(null,reference,/\]\s*/,(2));
var title = cljs.core.nth.call(null,vec__67318,(0),null);
var id = cljs.core.nth.call(null,vec__67318,(1),null);
var vec__67319 = cljs.core.get.call(null,references,id);
var link = cljs.core.nth.call(null,vec__67319,(0),null);
var alt = cljs.core.nth.call(null,vec__67319,(1),null);
return [cljs.core.str("<a href='"),cljs.core.str(link),cljs.core.str("'"),cljs.core.str((cljs.core.truth_(alt)?[cljs.core.str(" title='"),cljs.core.str(cljs.core.subs.call(null,alt,(1),(cljs.core.count.call(null,alt) - (1)))),cljs.core.str("'")].join(''):null)),cljs.core.str(">"),cljs.core.str(cljs.core.subs.call(null,title,(1))),cljs.core.str("</a>")].join('');
});
markdown.transformers.reference_link = (function markdown$transformers$reference_link(text,p__67320){
var map__67323 = p__67320;
var map__67323__$1 = ((((!((map__67323 == null)))?((((map__67323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67323):map__67323);
var state = map__67323__$1;
var code = cljs.core.get.call(null,map__67323__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__67323__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var references = cljs.core.get.call(null,map__67323__$1,new cljs.core.Keyword(null,"references","references",882562509));
if(cljs.core.truth_((function (){var or__46878__auto__ = (references == null);
if(or__46878__auto__){
return or__46878__auto__;
} else {
var or__46878__auto____$1 = code;
if(cljs.core.truth_(or__46878__auto____$1)){
return or__46878__auto____$1;
} else {
return codeblock;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.transformers.reference.call(null,clojure.string.trim.call(null,text)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",state], null);
} else {
var replaced = clojure.string.replace.call(null,text,/\[[^\]]+\]\s*\[[a-zA-Z0-9 ]+\]/,cljs.core.partial.call(null,markdown.transformers.replace_reference_link,references));
if(cljs.core._EQ_.call(null,replaced,text)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
return markdown.transformers.freeze_string.call(null,replaced,state);
}

}
}
});
markdown.transformers.footnote = (function markdown$transformers$footnote(text){
return cljs.core.re_find.call(null,/^\[\^[a-zA-Z0-9_-]+\]:/,text);
});
markdown.transformers.parse_footnote_link = (function markdown$transformers$parse_footnote_link(line,footnotes){
var trimmed = clojure.string.trim.call(null,line);
var temp__4425__auto__ = markdown.transformers.footnote.call(null,trimmed);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return cljs.core.swap_BANG_.call(null,footnotes,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.subs.call(null,link,(0),(cljs.core.count.call(null,link) - (1)))], null),markdown.transformers.parse_reference.call(null,trimmed,(cljs.core.count.call(null,link) + (1))));
} else {
return null;
}
});
markdown.transformers.replace_footnote_link = (function markdown$transformers$replace_footnote_link(footnotes,footnote){
var next_fn_id = new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636).cljs$core$IFn$_invoke$arity$1(footnotes);
var link = [cljs.core.str("#fn-"),cljs.core.str(next_fn_id)].join('');
return [cljs.core.str("<a href='"),cljs.core.str(link),cljs.core.str("' id='fnref"),cljs.core.str(next_fn_id),cljs.core.str("'><sup>"),cljs.core.str(next_fn_id),cljs.core.str("</sup></a>")].join('');
});
markdown.transformers.replace_all_footnote_links = (function markdown$transformers$replace_all_footnote_links(text,p__67325){
while(true){
var map__67328 = p__67325;
var map__67328__$1 = ((((!((map__67328 == null)))?((((map__67328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67328):map__67328);
var state = map__67328__$1;
var footnotes = cljs.core.get.call(null,map__67328__$1,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205));
var matcher = /\[\^[a-zA-Z0-9_-]+\]/;
var match = cljs.core.re_find.call(null,matcher,text);
if((match == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var next_text = clojure.string.replace_first.call(null,text,matcher,cljs.core.partial.call(null,markdown.transformers.replace_footnote_link,footnotes));
var next_state = cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636)], null))], null),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),match], null)));
var G__67330 = next_text;
var G__67331 = next_state;
text = G__67330;
p__67325 = G__67331;
continue;
}
break;
}
});
markdown.transformers.footnote_link = (function markdown$transformers$footnote_link(text,p__67332){
var map__67336 = p__67332;
var map__67336__$1 = ((((!((map__67336 == null)))?((((map__67336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67336):map__67336);
var state = map__67336__$1;
var code = cljs.core.get.call(null,map__67336__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__67336__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var footnotes = cljs.core.get.call(null,map__67336__$1,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205));
if(cljs.core.truth_((function (){var or__46878__auto__ = (new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972).cljs$core$IFn$_invoke$arity$1(footnotes) == null);
if(or__46878__auto__){
return or__46878__auto__;
} else {
var or__46878__auto____$1 = code;
if(cljs.core.truth_(or__46878__auto____$1)){
return or__46878__auto____$1;
} else {
return codeblock;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.transformers.footnote.call(null,clojure.string.trim.call(null,text)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",state], null);
} else {
var vec__67338 = markdown.transformers.replace_all_footnote_links.call(null,text,state);
var text__$1 = cljs.core.nth.call(null,vec__67338,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__67338,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text__$1,state__$1], null);

}
}
});
markdown.transformers.footer = (function markdown$transformers$footer(footnotes){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"processed","processed",800622264).cljs$core$IFn$_invoke$arity$1(footnotes))){
return "";
} else {
return (function (p1__67339_SHARP_){
return [cljs.core.str("<ol>"),cljs.core.str(p1__67339_SHARP_),cljs.core.str("</ol>")].join('');
}).call(null,cljs.core.reduce.call(null,(function (footnotes__$1,p__67342){
var vec__67343 = p__67342;
var id = cljs.core.nth.call(null,vec__67343,(0),null);
var label = cljs.core.nth.call(null,vec__67343,(1),null);
return [cljs.core.str(footnotes__$1),cljs.core.str("<li id='fn-"),cljs.core.str(id),cljs.core.str("'>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",label))),cljs.core.str("<a href='#fnref"),cljs.core.str(id),cljs.core.str("'>&#8617;</a></li>")].join('');
}),"",cljs.core.into.call(null,cljs.core.sorted_map.call(null),new cljs.core.Keyword(null,"processed","processed",800622264).cljs$core$IFn$_invoke$arity$1(footnotes))));
}
});
markdown.transformers.close_lists = (function markdown$transformers$close_lists(lists){
return clojure.string.join.call(null,(function (){var iter__47650__auto__ = (function markdown$transformers$close_lists_$_iter__67352(s__67353){
return (new cljs.core.LazySeq(null,(function (){
var s__67353__$1 = s__67353;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__67353__$1);
if(temp__4425__auto__){
var s__67353__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__67353__$2)){
var c__47648__auto__ = cljs.core.chunk_first.call(null,s__67353__$2);
var size__47649__auto__ = cljs.core.count.call(null,c__47648__auto__);
var b__67355 = cljs.core.chunk_buffer.call(null,size__47649__auto__);
if((function (){var i__67354 = (0);
while(true){
if((i__67354 < size__47649__auto__)){
var vec__67358 = cljs.core._nth.call(null,c__47648__auto__,i__67354);
var list_type = cljs.core.nth.call(null,vec__67358,(0),null);
cljs.core.chunk_append.call(null,b__67355,[cljs.core.str("</li></"),cljs.core.str(cljs.core.name.call(null,list_type)),cljs.core.str(">")].join(''));

var G__67360 = (i__67354 + (1));
i__67354 = G__67360;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67355),markdown$transformers$close_lists_$_iter__67352.call(null,cljs.core.chunk_rest.call(null,s__67353__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67355),null);
}
} else {
var vec__67359 = cljs.core.first.call(null,s__67353__$2);
var list_type = cljs.core.nth.call(null,vec__67359,(0),null);
return cljs.core.cons.call(null,[cljs.core.str("</li></"),cljs.core.str(cljs.core.name.call(null,list_type)),cljs.core.str(">")].join(''),markdown$transformers$close_lists_$_iter__67352.call(null,cljs.core.rest.call(null,s__67353__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__47650__auto__.call(null,lists);
})());
});
markdown.transformers.add_row = (function markdown$transformers$add_row(row_type,list_type,num_indents,indents,content,state){
if(cljs.core.truth_(list_type)){
if((num_indents < indents)){
var lists_to_close = cljs.core.take_while.call(null,(function (p1__67361_SHARP_){
return (cljs.core.second.call(null,p1__67361_SHARP_) > num_indents);
}),cljs.core.reverse.call(null,new cljs.core.Keyword(null,"lists","lists",-884730684).cljs$core$IFn$_invoke$arity$1(state)));
var remaining_lists = cljs.core.vec.call(null,cljs.core.drop_last.call(null,cljs.core.count.call(null,lists_to_close),new cljs.core.Keyword(null,"lists","lists",-884730684).cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.str,markdown.transformers.close_lists.call(null,lists_to_close),"</li><li>",content),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"lists","lists",-884730684),(((num_indents > cljs.core.second.call(null,cljs.core.last.call(null,remaining_lists))))?cljs.core.conj.call(null,remaining_lists,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null)):remaining_lists))], null);
} else {
if((num_indents > indents)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<"),cljs.core.str(cljs.core.name.call(null,row_type)),cljs.core.str("><li>"),cljs.core.str(content)].join(''),cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lists","lists",-884730684)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null))], null);
} else {
if(cljs.core._EQ_.call(null,num_indents,indents)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</li><li>"),cljs.core.str(content)].join(''),state], null);
} else {
return null;
}
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<"),cljs.core.str(cljs.core.name.call(null,row_type)),cljs.core.str("><li>"),cljs.core.str(content)].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null)], null))], null);
}
});
markdown.transformers.ul = (function markdown$transformers$ul(text,state){
var vec__67363 = cljs.core.last.call(null,new cljs.core.Keyword(null,"lists","lists",-884730684).cljs$core$IFn$_invoke$arity$1(state));
var list_type = cljs.core.nth.call(null,vec__67363,(0),null);
var indents = cljs.core.nth.call(null,vec__67363,(1),null);
var num_indents = cljs.core.count.call(null,cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core._EQ_," "),text));
var content = clojure.string.trim.call(null,markdown.transformers._STAR_substring_STAR_.call(null,text,(num_indents + (1))));
return markdown.transformers.add_row.call(null,new cljs.core.Keyword(null,"ul","ul",-1349521403),list_type,num_indents,indents,(function (){var or__46878__auto__ = markdown.transformers.make_heading.call(null,content,false);
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
return content;
}
})(),state);
});
markdown.transformers.ol = (function markdown$transformers$ol(text,state){
var vec__67365 = cljs.core.last.call(null,new cljs.core.Keyword(null,"lists","lists",-884730684).cljs$core$IFn$_invoke$arity$1(state));
var list_type = cljs.core.nth.call(null,vec__67365,(0),null);
var indents = cljs.core.nth.call(null,vec__67365,(1),null);
var num_indents = cljs.core.count.call(null,cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core._EQ_," "),text));
var content = clojure.string.trim.call(null,clojure.string.join.call(null,cljs.core.drop_while.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),clojure.string.trim.call(null,text))));
return markdown.transformers.add_row.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),list_type,num_indents,indents,(function (){var or__46878__auto__ = markdown.transformers.make_heading.call(null,content,false);
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
return content;
}
})(),state);
});
markdown.transformers.li = (function markdown$transformers$li(text,p__67366){
var map__67369 = p__67366;
var map__67369__$1 = ((((!((map__67369 == null)))?((((map__67369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67369):map__67369);
var state = map__67369__$1;
var code = cljs.core.get.call(null,map__67369__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__67369__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var last_line_empty_QMARK_ = cljs.core.get.call(null,map__67369__$1,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527));
var eof = cljs.core.get.call(null,map__67369__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
var lists = cljs.core.get.call(null,map__67369__$1,new cljs.core.Keyword(null,"lists","lists",-884730684));
if(cljs.core.truth_((function (){var and__46866__auto__ = last_line_empty_QMARK_;
if(cljs.core.truth_(and__46866__auto__)){
return clojure.string.blank_QMARK_.call(null,text);
} else {
return and__46866__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(markdown.transformers.close_lists.call(null,cljs.core.reverse.call(null,lists))),cljs.core.str(text)].join(''),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),false)], null);
} else {
if(cljs.core.truth_((function (){var or__46878__auto__ = code;
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
return codeblock;
}
})())){
if(cljs.core.truth_((function (){var and__46866__auto__ = lists;
if(cljs.core.truth_(and__46866__auto__)){
var or__46878__auto__ = last_line_empty_QMARK_;
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
return eof;
}
} else {
return and__46866__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(markdown.transformers.close_lists.call(null,cljs.core.reverse.call(null,lists))),cljs.core.str(text)].join(''),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),false)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
} else {
if(cljs.core.truth_((function (){var and__46866__auto__ = cljs.core.not.call(null,eof);
if(and__46866__auto__){
var and__46866__auto____$1 = lists;
if(cljs.core.truth_(and__46866__auto____$1)){
return clojure.string.blank_QMARK_.call(null,text);
} else {
return and__46866__auto____$1;
}
} else {
return and__46866__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)], null);
} else {
var indents = (cljs.core.truth_(last_line_empty_QMARK_)?(0):cljs.core.count.call(null,cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core._EQ_," "),text)));
var trimmed = clojure.string.trim.call(null,text);
var in_list_QMARK_ = new cljs.core.Keyword(null,"lists","lists",-884730684).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(cljs.core.re_find.call(null,/^[\*\+-] /,trimmed))){
return markdown.transformers.ul.call(null,(cljs.core.truth_(in_list_QMARK_)?text:trimmed),state);
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/^[0-9]+\. /,trimmed))){
return markdown.transformers.ol.call(null,(cljs.core.truth_(in_list_QMARK_)?text:trimmed),state);
} else {
if((indents > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_((function (){var and__46866__auto__ = (function (){var or__46878__auto__ = eof;
if(cljs.core.truth_(or__46878__auto__)){
return or__46878__auto__;
} else {
return last_line_empty_QMARK_;
}
})();
if(cljs.core.truth_(and__46866__auto__)){
return cljs.core.not_empty.call(null,lists);
} else {
return and__46866__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.close_lists.call(null,cljs.core.reverse.call(null,lists)),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"lists","lists",-884730684),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"buf","buf",-213913340),text)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}

}
}
}
});
/**
 * Terminally encoded strings are ones that we've determined should no longer be processed or evaluated
 */
markdown.transformers.thaw_strings = (function markdown$transformers$thaw_strings(text,state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state))){
return markdown.transformers.thaw_string.call(null,text,state);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
});
markdown.transformers.transformer_vector = new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.empty_line,markdown.transformers.codeblock,markdown.transformers.code,markdown.transformers.escaped_chars,markdown.transformers.inline_code,markdown.transformers.autoemail_transformer,markdown.transformers.autourl_transformer,markdown.transformers.link,markdown.transformers.reference_link,markdown.transformers.footnote_link,markdown.transformers.hr,markdown.transformers.li,markdown.transformers.heading,markdown.transformers.italics,markdown.transformers.em,markdown.transformers.strong,markdown.transformers.bold,markdown.transformers.strikethrough,markdown.transformers.superscript,markdown.transformers.blockquote,markdown.transformers.paragraph,markdown.transformers.br,markdown.transformers.thaw_strings], null);
