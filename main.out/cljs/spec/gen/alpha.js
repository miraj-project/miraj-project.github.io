// Compiled by ClojureScript 1.9.562 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__8538__auto__,writer__8539__auto__,opt__8540__auto__){
return cljs.core._write.call(null,writer__8539__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9388 = arguments.length;
var i__9103__auto___9389 = (0);
while(true){
if((i__9103__auto___9389 < len__9102__auto___9388)){
args__9109__auto__.push((arguments[i__9103__auto___9389]));

var G__9390 = (i__9103__auto___9389 + (1));
i__9103__auto___9389 = G__9390;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq9387){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9387));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9392 = arguments.length;
var i__9103__auto___9393 = (0);
while(true){
if((i__9103__auto___9393 < len__9102__auto___9392)){
args__9109__auto__.push((arguments[i__9103__auto___9393]));

var G__9394 = (i__9103__auto___9393 + (1));
i__9103__auto___9393 = G__9394;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq9391){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9391));
});

var g_QMARK__9395 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_9396 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__9395){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__9395))
,null));
var mkg_9397 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__9395,g_9396){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__9395,g_9396))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__9395,g_9396,mkg_9397){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__9395).call(null,x);
});})(g_QMARK__9395,g_9396,mkg_9397))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__9395,g_9396,mkg_9397){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_9397).call(null,gfn);
});})(g_QMARK__9395,g_9396,mkg_9397))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__9395,g_9396,mkg_9397){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_9396).call(null,generator);
});})(g_QMARK__9395,g_9396,mkg_9397))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__9359__auto___9417 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__9359__auto___9417){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9418 = arguments.length;
var i__9103__auto___9419 = (0);
while(true){
if((i__9103__auto___9419 < len__9102__auto___9418)){
args__9109__auto__.push((arguments[i__9103__auto___9419]));

var G__9420 = (i__9103__auto___9419 + (1));
i__9103__auto___9419 = G__9420;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9359__auto___9417))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9359__auto___9417){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9359__auto___9417),args);
});})(g__9359__auto___9417))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__9359__auto___9417){
return (function (seq9398){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9398));
});})(g__9359__auto___9417))
;


var g__9359__auto___9421 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__9359__auto___9421){
return (function cljs$spec$gen$alpha$list(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9422 = arguments.length;
var i__9103__auto___9423 = (0);
while(true){
if((i__9103__auto___9423 < len__9102__auto___9422)){
args__9109__auto__.push((arguments[i__9103__auto___9423]));

var G__9424 = (i__9103__auto___9423 + (1));
i__9103__auto___9423 = G__9424;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9359__auto___9421))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9359__auto___9421){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9359__auto___9421),args);
});})(g__9359__auto___9421))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__9359__auto___9421){
return (function (seq9399){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9399));
});})(g__9359__auto___9421))
;


var g__9359__auto___9425 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__9359__auto___9425){
return (function cljs$spec$gen$alpha$map(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9426 = arguments.length;
var i__9103__auto___9427 = (0);
while(true){
if((i__9103__auto___9427 < len__9102__auto___9426)){
args__9109__auto__.push((arguments[i__9103__auto___9427]));

var G__9428 = (i__9103__auto___9427 + (1));
i__9103__auto___9427 = G__9428;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9359__auto___9425))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9359__auto___9425){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9359__auto___9425),args);
});})(g__9359__auto___9425))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__9359__auto___9425){
return (function (seq9400){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9400));
});})(g__9359__auto___9425))
;


var g__9359__auto___9429 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__9359__auto___9429){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9430 = arguments.length;
var i__9103__auto___9431 = (0);
while(true){
if((i__9103__auto___9431 < len__9102__auto___9430)){
args__9109__auto__.push((arguments[i__9103__auto___9431]));

var G__9432 = (i__9103__auto___9431 + (1));
i__9103__auto___9431 = G__9432;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9359__auto___9429))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9359__auto___9429){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9359__auto___9429),args);
});})(g__9359__auto___9429))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__9359__auto___9429){
return (function (seq9401){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9401));
});})(g__9359__auto___9429))
;


var g__9359__auto___9433 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__9359__auto___9433){
return (function cljs$spec$gen$alpha$set(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9434 = arguments.length;
var i__9103__auto___9435 = (0);
while(true){
if((i__9103__auto___9435 < len__9102__auto___9434)){
args__9109__auto__.push((arguments[i__9103__auto___9435]));

var G__9436 = (i__9103__auto___9435 + (1));
i__9103__auto___9435 = G__9436;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9359__auto___9433))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9359__auto___9433){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9359__auto___9433),args);
});})(g__9359__auto___9433))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__9359__auto___9433){
return (function (seq9402){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9402));
});})(g__9359__auto___9433))
;


var g__9359__auto___9437 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__9359__auto___9437){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9438 = arguments.length;
var i__9103__auto___9439 = (0);
while(true){
if((i__9103__auto___9439 < len__9102__auto___9438)){
args__9109__auto__.push((arguments[i__9103__auto___9439]));

var G__9440 = (i__9103__auto___9439 + (1));
i__9103__auto___9439 = G__9440;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9359__auto___9437))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9359__auto___9437){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9359__auto___9437),args);
});})(g__9359__auto___9437))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__9359__auto___9437){
return (function (seq9403){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9403));
});})(g__9359__auto___9437))
;


var g__9359__auto___9441 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__9359__auto___9441){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9442 = arguments.length;
var i__9103__auto___9443 = (0);
while(true){
if((i__9103__auto___9443 < len__9102__auto___9442)){
args__9109__auto__.push((arguments[i__9103__auto___9443]));

var G__9444 = (i__9103__auto___9443 + (1));
i__9103__auto___9443 = G__9444;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9359__auto___9441))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9359__auto___9441){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9359__auto___9441),args);
});})(g__9359__auto___9441))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__9359__auto___9441){
return (function (seq9404){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9404));
});})(g__9359__auto___9441))
;


var g__9359__auto___9445 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__9359__auto___9445){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9446 = arguments.length;
var i__9103__auto___9447 = (0);
while(true){
if((i__9103__auto___9447 < len__9102__auto___9446)){
args__9109__auto__.push((arguments[i__9103__auto___9447]));

var G__9448 = (i__9103__auto___9447 + (1));
i__9103__auto___9447 = G__9448;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9359__auto___9445))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9359__auto___9445){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9359__auto___9445),args);
});})(g__9359__auto___9445))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__9359__auto___9445){
return (function (seq9405){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9405));
});})(g__9359__auto___9445))
;


var g__9359__auto___9449 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__9359__auto___9449){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9450 = arguments.length;
var i__9103__auto___9451 = (0);
while(true){
if((i__9103__auto___9451 < len__9102__auto___9450)){
args__9109__auto__.push((arguments[i__9103__auto___9451]));

var G__9452 = (i__9103__auto___9451 + (1));
i__9103__auto___9451 = G__9452;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9359__auto___9449))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9359__auto___9449){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9359__auto___9449),args);
});})(g__9359__auto___9449))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__9359__auto___9449){
return (function (seq9406){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9406));
});})(g__9359__auto___9449))
;


var g__9359__auto___9453 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__9359__auto___9453){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9454 = arguments.length;
var i__9103__auto___9455 = (0);
while(true){
if((i__9103__auto___9455 < len__9102__auto___9454)){
args__9109__auto__.push((arguments[i__9103__auto___9455]));

var G__9456 = (i__9103__auto___9455 + (1));
i__9103__auto___9455 = G__9456;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9359__auto___9453))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9359__auto___9453){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9359__auto___9453),args);
});})(g__9359__auto___9453))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__9359__auto___9453){
return (function (seq9407){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9407));
});})(g__9359__auto___9453))
;


var g__9359__auto___9457 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__9359__auto___9457){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9458 = arguments.length;
var i__9103__auto___9459 = (0);
while(true){
if((i__9103__auto___9459 < len__9102__auto___9458)){
args__9109__auto__.push((arguments[i__9103__auto___9459]));

var G__9460 = (i__9103__auto___9459 + (1));
i__9103__auto___9459 = G__9460;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9359__auto___9457))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9359__auto___9457){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9359__auto___9457),args);
});})(g__9359__auto___9457))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__9359__auto___9457){
return (function (seq9408){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9408));
});})(g__9359__auto___9457))
;


var g__9359__auto___9461 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__9359__auto___9461){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9462 = arguments.length;
var i__9103__auto___9463 = (0);
while(true){
if((i__9103__auto___9463 < len__9102__auto___9462)){
args__9109__auto__.push((arguments[i__9103__auto___9463]));

var G__9464 = (i__9103__auto___9463 + (1));
i__9103__auto___9463 = G__9464;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9359__auto___9461))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9359__auto___9461){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9359__auto___9461),args);
});})(g__9359__auto___9461))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__9359__auto___9461){
return (function (seq9409){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9409));
});})(g__9359__auto___9461))
;


var g__9359__auto___9465 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__9359__auto___9465){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9466 = arguments.length;
var i__9103__auto___9467 = (0);
while(true){
if((i__9103__auto___9467 < len__9102__auto___9466)){
args__9109__auto__.push((arguments[i__9103__auto___9467]));

var G__9468 = (i__9103__auto___9467 + (1));
i__9103__auto___9467 = G__9468;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9359__auto___9465))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9359__auto___9465){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9359__auto___9465),args);
});})(g__9359__auto___9465))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__9359__auto___9465){
return (function (seq9410){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9410));
});})(g__9359__auto___9465))
;


var g__9359__auto___9469 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__9359__auto___9469){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9470 = arguments.length;
var i__9103__auto___9471 = (0);
while(true){
if((i__9103__auto___9471 < len__9102__auto___9470)){
args__9109__auto__.push((arguments[i__9103__auto___9471]));

var G__9472 = (i__9103__auto___9471 + (1));
i__9103__auto___9471 = G__9472;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9359__auto___9469))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9359__auto___9469){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9359__auto___9469),args);
});})(g__9359__auto___9469))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__9359__auto___9469){
return (function (seq9411){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9411));
});})(g__9359__auto___9469))
;


var g__9359__auto___9473 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__9359__auto___9473){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9474 = arguments.length;
var i__9103__auto___9475 = (0);
while(true){
if((i__9103__auto___9475 < len__9102__auto___9474)){
args__9109__auto__.push((arguments[i__9103__auto___9475]));

var G__9476 = (i__9103__auto___9475 + (1));
i__9103__auto___9475 = G__9476;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9359__auto___9473))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9359__auto___9473){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9359__auto___9473),args);
});})(g__9359__auto___9473))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__9359__auto___9473){
return (function (seq9412){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9412));
});})(g__9359__auto___9473))
;


var g__9359__auto___9477 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__9359__auto___9477){
return (function cljs$spec$gen$alpha$return(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9478 = arguments.length;
var i__9103__auto___9479 = (0);
while(true){
if((i__9103__auto___9479 < len__9102__auto___9478)){
args__9109__auto__.push((arguments[i__9103__auto___9479]));

var G__9480 = (i__9103__auto___9479 + (1));
i__9103__auto___9479 = G__9480;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9359__auto___9477))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9359__auto___9477){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9359__auto___9477),args);
});})(g__9359__auto___9477))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__9359__auto___9477){
return (function (seq9413){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9413));
});})(g__9359__auto___9477))
;


var g__9359__auto___9481 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__9359__auto___9481){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9482 = arguments.length;
var i__9103__auto___9483 = (0);
while(true){
if((i__9103__auto___9483 < len__9102__auto___9482)){
args__9109__auto__.push((arguments[i__9103__auto___9483]));

var G__9484 = (i__9103__auto___9483 + (1));
i__9103__auto___9483 = G__9484;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9359__auto___9481))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9359__auto___9481){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9359__auto___9481),args);
});})(g__9359__auto___9481))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__9359__auto___9481){
return (function (seq9414){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9414));
});})(g__9359__auto___9481))
;


var g__9359__auto___9485 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__9359__auto___9485){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9486 = arguments.length;
var i__9103__auto___9487 = (0);
while(true){
if((i__9103__auto___9487 < len__9102__auto___9486)){
args__9109__auto__.push((arguments[i__9103__auto___9487]));

var G__9488 = (i__9103__auto___9487 + (1));
i__9103__auto___9487 = G__9488;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9359__auto___9485))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9359__auto___9485){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9359__auto___9485),args);
});})(g__9359__auto___9485))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__9359__auto___9485){
return (function (seq9415){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9415));
});})(g__9359__auto___9485))
;


var g__9359__auto___9489 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__9359__auto___9489){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9490 = arguments.length;
var i__9103__auto___9491 = (0);
while(true){
if((i__9103__auto___9491 < len__9102__auto___9490)){
args__9109__auto__.push((arguments[i__9103__auto___9491]));

var G__9492 = (i__9103__auto___9491 + (1));
i__9103__auto___9491 = G__9492;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9359__auto___9489))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9359__auto___9489){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9359__auto___9489),args);
});})(g__9359__auto___9489))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__9359__auto___9489){
return (function (seq9416){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9416));
});})(g__9359__auto___9489))
;

var g__9372__auto___9514 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__9372__auto___9514){
return (function cljs$spec$gen$alpha$any(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9515 = arguments.length;
var i__9103__auto___9516 = (0);
while(true){
if((i__9103__auto___9516 < len__9102__auto___9515)){
args__9109__auto__.push((arguments[i__9103__auto___9516]));

var G__9517 = (i__9103__auto___9516 + (1));
i__9103__auto___9516 = G__9517;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9372__auto___9514))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9372__auto___9514){
return (function (args){
return cljs.core.deref.call(null,g__9372__auto___9514);
});})(g__9372__auto___9514))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__9372__auto___9514){
return (function (seq9493){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9493));
});})(g__9372__auto___9514))
;


var g__9372__auto___9518 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__9372__auto___9518){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9519 = arguments.length;
var i__9103__auto___9520 = (0);
while(true){
if((i__9103__auto___9520 < len__9102__auto___9519)){
args__9109__auto__.push((arguments[i__9103__auto___9520]));

var G__9521 = (i__9103__auto___9520 + (1));
i__9103__auto___9520 = G__9521;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9372__auto___9518))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9372__auto___9518){
return (function (args){
return cljs.core.deref.call(null,g__9372__auto___9518);
});})(g__9372__auto___9518))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__9372__auto___9518){
return (function (seq9494){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9494));
});})(g__9372__auto___9518))
;


var g__9372__auto___9522 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__9372__auto___9522){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9523 = arguments.length;
var i__9103__auto___9524 = (0);
while(true){
if((i__9103__auto___9524 < len__9102__auto___9523)){
args__9109__auto__.push((arguments[i__9103__auto___9524]));

var G__9525 = (i__9103__auto___9524 + (1));
i__9103__auto___9524 = G__9525;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9372__auto___9522))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9372__auto___9522){
return (function (args){
return cljs.core.deref.call(null,g__9372__auto___9522);
});})(g__9372__auto___9522))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__9372__auto___9522){
return (function (seq9495){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9495));
});})(g__9372__auto___9522))
;


var g__9372__auto___9526 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__9372__auto___9526){
return (function cljs$spec$gen$alpha$char(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9527 = arguments.length;
var i__9103__auto___9528 = (0);
while(true){
if((i__9103__auto___9528 < len__9102__auto___9527)){
args__9109__auto__.push((arguments[i__9103__auto___9528]));

var G__9529 = (i__9103__auto___9528 + (1));
i__9103__auto___9528 = G__9529;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9372__auto___9526))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9372__auto___9526){
return (function (args){
return cljs.core.deref.call(null,g__9372__auto___9526);
});})(g__9372__auto___9526))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__9372__auto___9526){
return (function (seq9496){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9496));
});})(g__9372__auto___9526))
;


var g__9372__auto___9530 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__9372__auto___9530){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9531 = arguments.length;
var i__9103__auto___9532 = (0);
while(true){
if((i__9103__auto___9532 < len__9102__auto___9531)){
args__9109__auto__.push((arguments[i__9103__auto___9532]));

var G__9533 = (i__9103__auto___9532 + (1));
i__9103__auto___9532 = G__9533;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9372__auto___9530))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9372__auto___9530){
return (function (args){
return cljs.core.deref.call(null,g__9372__auto___9530);
});})(g__9372__auto___9530))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__9372__auto___9530){
return (function (seq9497){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9497));
});})(g__9372__auto___9530))
;


var g__9372__auto___9534 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__9372__auto___9534){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9535 = arguments.length;
var i__9103__auto___9536 = (0);
while(true){
if((i__9103__auto___9536 < len__9102__auto___9535)){
args__9109__auto__.push((arguments[i__9103__auto___9536]));

var G__9537 = (i__9103__auto___9536 + (1));
i__9103__auto___9536 = G__9537;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9372__auto___9534))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9372__auto___9534){
return (function (args){
return cljs.core.deref.call(null,g__9372__auto___9534);
});})(g__9372__auto___9534))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__9372__auto___9534){
return (function (seq9498){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9498));
});})(g__9372__auto___9534))
;


var g__9372__auto___9538 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__9372__auto___9538){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9539 = arguments.length;
var i__9103__auto___9540 = (0);
while(true){
if((i__9103__auto___9540 < len__9102__auto___9539)){
args__9109__auto__.push((arguments[i__9103__auto___9540]));

var G__9541 = (i__9103__auto___9540 + (1));
i__9103__auto___9540 = G__9541;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9372__auto___9538))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9372__auto___9538){
return (function (args){
return cljs.core.deref.call(null,g__9372__auto___9538);
});})(g__9372__auto___9538))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__9372__auto___9538){
return (function (seq9499){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9499));
});})(g__9372__auto___9538))
;


var g__9372__auto___9542 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__9372__auto___9542){
return (function cljs$spec$gen$alpha$double(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9543 = arguments.length;
var i__9103__auto___9544 = (0);
while(true){
if((i__9103__auto___9544 < len__9102__auto___9543)){
args__9109__auto__.push((arguments[i__9103__auto___9544]));

var G__9545 = (i__9103__auto___9544 + (1));
i__9103__auto___9544 = G__9545;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9372__auto___9542))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9372__auto___9542){
return (function (args){
return cljs.core.deref.call(null,g__9372__auto___9542);
});})(g__9372__auto___9542))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__9372__auto___9542){
return (function (seq9500){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9500));
});})(g__9372__auto___9542))
;


var g__9372__auto___9546 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__9372__auto___9546){
return (function cljs$spec$gen$alpha$int(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9547 = arguments.length;
var i__9103__auto___9548 = (0);
while(true){
if((i__9103__auto___9548 < len__9102__auto___9547)){
args__9109__auto__.push((arguments[i__9103__auto___9548]));

var G__9549 = (i__9103__auto___9548 + (1));
i__9103__auto___9548 = G__9549;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9372__auto___9546))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9372__auto___9546){
return (function (args){
return cljs.core.deref.call(null,g__9372__auto___9546);
});})(g__9372__auto___9546))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__9372__auto___9546){
return (function (seq9501){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9501));
});})(g__9372__auto___9546))
;


var g__9372__auto___9550 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__9372__auto___9550){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9551 = arguments.length;
var i__9103__auto___9552 = (0);
while(true){
if((i__9103__auto___9552 < len__9102__auto___9551)){
args__9109__auto__.push((arguments[i__9103__auto___9552]));

var G__9553 = (i__9103__auto___9552 + (1));
i__9103__auto___9552 = G__9553;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9372__auto___9550))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9372__auto___9550){
return (function (args){
return cljs.core.deref.call(null,g__9372__auto___9550);
});})(g__9372__auto___9550))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__9372__auto___9550){
return (function (seq9502){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9502));
});})(g__9372__auto___9550))
;


var g__9372__auto___9554 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__9372__auto___9554){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9555 = arguments.length;
var i__9103__auto___9556 = (0);
while(true){
if((i__9103__auto___9556 < len__9102__auto___9555)){
args__9109__auto__.push((arguments[i__9103__auto___9556]));

var G__9557 = (i__9103__auto___9556 + (1));
i__9103__auto___9556 = G__9557;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9372__auto___9554))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9372__auto___9554){
return (function (args){
return cljs.core.deref.call(null,g__9372__auto___9554);
});})(g__9372__auto___9554))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__9372__auto___9554){
return (function (seq9503){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9503));
});})(g__9372__auto___9554))
;


var g__9372__auto___9558 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__9372__auto___9558){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9559 = arguments.length;
var i__9103__auto___9560 = (0);
while(true){
if((i__9103__auto___9560 < len__9102__auto___9559)){
args__9109__auto__.push((arguments[i__9103__auto___9560]));

var G__9561 = (i__9103__auto___9560 + (1));
i__9103__auto___9560 = G__9561;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9372__auto___9558))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9372__auto___9558){
return (function (args){
return cljs.core.deref.call(null,g__9372__auto___9558);
});})(g__9372__auto___9558))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__9372__auto___9558){
return (function (seq9504){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9504));
});})(g__9372__auto___9558))
;


var g__9372__auto___9562 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__9372__auto___9562){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9563 = arguments.length;
var i__9103__auto___9564 = (0);
while(true){
if((i__9103__auto___9564 < len__9102__auto___9563)){
args__9109__auto__.push((arguments[i__9103__auto___9564]));

var G__9565 = (i__9103__auto___9564 + (1));
i__9103__auto___9564 = G__9565;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9372__auto___9562))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9372__auto___9562){
return (function (args){
return cljs.core.deref.call(null,g__9372__auto___9562);
});})(g__9372__auto___9562))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__9372__auto___9562){
return (function (seq9505){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9505));
});})(g__9372__auto___9562))
;


var g__9372__auto___9566 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__9372__auto___9566){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9567 = arguments.length;
var i__9103__auto___9568 = (0);
while(true){
if((i__9103__auto___9568 < len__9102__auto___9567)){
args__9109__auto__.push((arguments[i__9103__auto___9568]));

var G__9569 = (i__9103__auto___9568 + (1));
i__9103__auto___9568 = G__9569;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9372__auto___9566))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9372__auto___9566){
return (function (args){
return cljs.core.deref.call(null,g__9372__auto___9566);
});})(g__9372__auto___9566))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__9372__auto___9566){
return (function (seq9506){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9506));
});})(g__9372__auto___9566))
;


var g__9372__auto___9570 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__9372__auto___9570){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9571 = arguments.length;
var i__9103__auto___9572 = (0);
while(true){
if((i__9103__auto___9572 < len__9102__auto___9571)){
args__9109__auto__.push((arguments[i__9103__auto___9572]));

var G__9573 = (i__9103__auto___9572 + (1));
i__9103__auto___9572 = G__9573;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9372__auto___9570))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9372__auto___9570){
return (function (args){
return cljs.core.deref.call(null,g__9372__auto___9570);
});})(g__9372__auto___9570))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__9372__auto___9570){
return (function (seq9507){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9507));
});})(g__9372__auto___9570))
;


var g__9372__auto___9574 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__9372__auto___9574){
return (function cljs$spec$gen$alpha$string(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9575 = arguments.length;
var i__9103__auto___9576 = (0);
while(true){
if((i__9103__auto___9576 < len__9102__auto___9575)){
args__9109__auto__.push((arguments[i__9103__auto___9576]));

var G__9577 = (i__9103__auto___9576 + (1));
i__9103__auto___9576 = G__9577;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9372__auto___9574))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9372__auto___9574){
return (function (args){
return cljs.core.deref.call(null,g__9372__auto___9574);
});})(g__9372__auto___9574))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__9372__auto___9574){
return (function (seq9508){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9508));
});})(g__9372__auto___9574))
;


var g__9372__auto___9578 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__9372__auto___9578){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9579 = arguments.length;
var i__9103__auto___9580 = (0);
while(true){
if((i__9103__auto___9580 < len__9102__auto___9579)){
args__9109__auto__.push((arguments[i__9103__auto___9580]));

var G__9581 = (i__9103__auto___9580 + (1));
i__9103__auto___9580 = G__9581;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9372__auto___9578))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9372__auto___9578){
return (function (args){
return cljs.core.deref.call(null,g__9372__auto___9578);
});})(g__9372__auto___9578))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__9372__auto___9578){
return (function (seq9509){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9509));
});})(g__9372__auto___9578))
;


var g__9372__auto___9582 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__9372__auto___9582){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9583 = arguments.length;
var i__9103__auto___9584 = (0);
while(true){
if((i__9103__auto___9584 < len__9102__auto___9583)){
args__9109__auto__.push((arguments[i__9103__auto___9584]));

var G__9585 = (i__9103__auto___9584 + (1));
i__9103__auto___9584 = G__9585;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9372__auto___9582))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9372__auto___9582){
return (function (args){
return cljs.core.deref.call(null,g__9372__auto___9582);
});})(g__9372__auto___9582))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__9372__auto___9582){
return (function (seq9510){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9510));
});})(g__9372__auto___9582))
;


var g__9372__auto___9586 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__9372__auto___9586){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9587 = arguments.length;
var i__9103__auto___9588 = (0);
while(true){
if((i__9103__auto___9588 < len__9102__auto___9587)){
args__9109__auto__.push((arguments[i__9103__auto___9588]));

var G__9589 = (i__9103__auto___9588 + (1));
i__9103__auto___9588 = G__9589;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9372__auto___9586))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9372__auto___9586){
return (function (args){
return cljs.core.deref.call(null,g__9372__auto___9586);
});})(g__9372__auto___9586))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__9372__auto___9586){
return (function (seq9511){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9511));
});})(g__9372__auto___9586))
;


var g__9372__auto___9590 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__9372__auto___9590){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9591 = arguments.length;
var i__9103__auto___9592 = (0);
while(true){
if((i__9103__auto___9592 < len__9102__auto___9591)){
args__9109__auto__.push((arguments[i__9103__auto___9592]));

var G__9593 = (i__9103__auto___9592 + (1));
i__9103__auto___9592 = G__9593;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9372__auto___9590))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9372__auto___9590){
return (function (args){
return cljs.core.deref.call(null,g__9372__auto___9590);
});})(g__9372__auto___9590))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__9372__auto___9590){
return (function (seq9512){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9512));
});})(g__9372__auto___9590))
;


var g__9372__auto___9594 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__9372__auto___9594){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9595 = arguments.length;
var i__9103__auto___9596 = (0);
while(true){
if((i__9103__auto___9596 < len__9102__auto___9595)){
args__9109__auto__.push((arguments[i__9103__auto___9596]));

var G__9597 = (i__9103__auto___9596 + (1));
i__9103__auto___9596 = G__9597;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});})(g__9372__auto___9594))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9372__auto___9594){
return (function (args){
return cljs.core.deref.call(null,g__9372__auto___9594);
});})(g__9372__auto___9594))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__9372__auto___9594){
return (function (seq9513){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9513));
});})(g__9372__auto___9594))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__9109__auto__ = [];
var len__9102__auto___9600 = arguments.length;
var i__9103__auto___9601 = (0);
while(true){
if((i__9103__auto___9601 < len__9102__auto___9600)){
args__9109__auto__.push((arguments[i__9103__auto___9601]));

var G__9602 = (i__9103__auto___9601 + (1));
i__9103__auto___9601 = G__9602;
continue;
} else {
}
break;
}

var argseq__9110__auto__ = ((((0) < args__9109__auto__.length))?(new cljs.core.IndexedSeq(args__9109__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__9110__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__9598_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__9598_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq9599){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9599));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__9603_SHARP_){
return (new Date(p1__9603_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map