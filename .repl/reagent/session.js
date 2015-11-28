// Compiled by ClojureScript 1.7.145 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__47943__auto__ = [];
var len__47936__auto___68600 = arguments.length;
var i__47937__auto___68601 = (0);
while(true){
if((i__47937__auto___68601 < len__47936__auto___68600)){
args__47943__auto__.push((arguments[i__47937__auto___68601]));

var G__68602 = (i__47937__auto___68601 + (1));
i__47937__auto___68601 = G__68602;
continue;
} else {
}
break;
}

var argseq__47944__auto__ = ((((1) < args__47943__auto__.length))?(new cljs.core.IndexedSeq(args__47943__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47944__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__68598){
var vec__68599 = p__68598;
var default$ = cljs.core.nth.call(null,vec__68599,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq68596){
var G__68597 = cljs.core.first.call(null,seq68596);
var seq68596__$1 = cljs.core.next.call(null,seq68596);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__68597,seq68596__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__47943__auto__ = [];
var len__47936__auto___68607 = arguments.length;
var i__47937__auto___68608 = (0);
while(true){
if((i__47937__auto___68608 < len__47936__auto___68607)){
args__47943__auto__.push((arguments[i__47937__auto___68608]));

var G__68609 = (i__47937__auto___68608 + (1));
i__47937__auto___68608 = G__68609;
continue;
} else {
}
break;
}

var argseq__47944__auto__ = ((((1) < args__47943__auto__.length))?(new cljs.core.IndexedSeq(args__47943__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47944__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__68605){
var vec__68606 = p__68605;
var default$ = cljs.core.nth.call(null,vec__68606,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq68603){
var G__68604 = cljs.core.first.call(null,seq68603);
var seq68603__$1 = cljs.core.next.call(null,seq68603);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__68604,seq68603__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__47943__auto__ = [];
var len__47936__auto___68612 = arguments.length;
var i__47937__auto___68613 = (0);
while(true){
if((i__47937__auto___68613 < len__47936__auto___68612)){
args__47943__auto__.push((arguments[i__47937__auto___68613]));

var G__68614 = (i__47937__auto___68613 + (1));
i__47937__auto___68613 = G__68614;
continue;
} else {
}
break;
}

var argseq__47944__auto__ = ((((1) < args__47943__auto__.length))?(new cljs.core.IndexedSeq(args__47943__auto__.slice((1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47944__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq68610){
var G__68611 = cljs.core.first.call(null,seq68610);
var seq68610__$1 = cljs.core.next.call(null,seq68610);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__68611,seq68610__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__68615_SHARP_){
return cljs.core.assoc_in.call(null,p1__68615_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__47943__auto__ = [];
var len__47936__auto___68620 = arguments.length;
var i__47937__auto___68621 = (0);
while(true){
if((i__47937__auto___68621 < len__47936__auto___68620)){
args__47943__auto__.push((arguments[i__47937__auto___68621]));

var G__68622 = (i__47937__auto___68621 + (1));
i__47937__auto___68621 = G__68622;
continue;
} else {
}
break;
}

var argseq__47944__auto__ = ((((1) < args__47943__auto__.length))?(new cljs.core.IndexedSeq(args__47943__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47944__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__68618){
var vec__68619 = p__68618;
var default$ = cljs.core.nth.call(null,vec__68619,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq68616){
var G__68617 = cljs.core.first.call(null,seq68616);
var seq68616__$1 = cljs.core.next.call(null,seq68616);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__68617,seq68616__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__47943__auto__ = [];
var len__47936__auto___68627 = arguments.length;
var i__47937__auto___68628 = (0);
while(true){
if((i__47937__auto___68628 < len__47936__auto___68627)){
args__47943__auto__.push((arguments[i__47937__auto___68628]));

var G__68629 = (i__47937__auto___68628 + (1));
i__47937__auto___68628 = G__68629;
continue;
} else {
}
break;
}

var argseq__47944__auto__ = ((((1) < args__47943__auto__.length))?(new cljs.core.IndexedSeq(args__47943__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47944__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__68625){
var vec__68626 = p__68625;
var default$ = cljs.core.nth.call(null,vec__68626,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq68623){
var G__68624 = cljs.core.first.call(null,seq68623);
var seq68623__$1 = cljs.core.next.call(null,seq68623);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__68624,seq68623__$1);
});
/**
 * 'Updates' a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__47943__auto__ = [];
var len__47936__auto___68634 = arguments.length;
var i__47937__auto___68635 = (0);
while(true){
if((i__47937__auto___68635 < len__47936__auto___68634)){
args__47943__auto__.push((arguments[i__47937__auto___68635]));

var G__68636 = (i__47937__auto___68635 + (1));
i__47937__auto___68635 = G__68636;
continue;
} else {
}
break;
}

var argseq__47944__auto__ = ((((2) < args__47943__auto__.length))?(new cljs.core.IndexedSeq(args__47943__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__47944__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__68630_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__68630_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq68631){
var G__68632 = cljs.core.first.call(null,seq68631);
var seq68631__$1 = cljs.core.next.call(null,seq68631);
var G__68633 = cljs.core.first.call(null,seq68631__$1);
var seq68631__$2 = cljs.core.next.call(null,seq68631__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__68632,G__68633,seq68631__$2);
});
