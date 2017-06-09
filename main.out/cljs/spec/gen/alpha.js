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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__8502__auto__,writer__8503__auto__,opt__8504__auto__){
return cljs.core._write.call(null,writer__8503__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__9073__auto__ = [];
var len__9066__auto___9340 = arguments.length;
var i__9067__auto___9341 = (0);
while(true){
if((i__9067__auto___9341 < len__9066__auto___9340)){
args__9073__auto__.push((arguments[i__9067__auto___9341]));

var G__9342 = (i__9067__auto___9341 + (1));
i__9067__auto___9341 = G__9342;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq9339){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9339));
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
var args__9073__auto__ = [];
var len__9066__auto___9344 = arguments.length;
var i__9067__auto___9345 = (0);
while(true){
if((i__9067__auto___9345 < len__9066__auto___9344)){
args__9073__auto__.push((arguments[i__9067__auto___9345]));

var G__9346 = (i__9067__auto___9345 + (1));
i__9067__auto___9345 = G__9346;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq9343){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9343));
});

var g_QMARK__9347 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_9348 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__9347){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__9347))
,null));
var mkg_9349 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__9347,g_9348){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__9347,g_9348))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__9347,g_9348,mkg_9349){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__9347).call(null,x);
});})(g_QMARK__9347,g_9348,mkg_9349))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__9347,g_9348,mkg_9349){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_9349).call(null,gfn);
});})(g_QMARK__9347,g_9348,mkg_9349))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__9347,g_9348,mkg_9349){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_9348).call(null,generator);
});})(g_QMARK__9347,g_9348,mkg_9349))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__9311__auto___9369 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__9311__auto___9369){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9370 = arguments.length;
var i__9067__auto___9371 = (0);
while(true){
if((i__9067__auto___9371 < len__9066__auto___9370)){
args__9073__auto__.push((arguments[i__9067__auto___9371]));

var G__9372 = (i__9067__auto___9371 + (1));
i__9067__auto___9371 = G__9372;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9311__auto___9369))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9311__auto___9369){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9311__auto___9369),args);
});})(g__9311__auto___9369))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__9311__auto___9369){
return (function (seq9350){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9350));
});})(g__9311__auto___9369))
;


var g__9311__auto___9373 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__9311__auto___9373){
return (function cljs$spec$gen$alpha$list(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9374 = arguments.length;
var i__9067__auto___9375 = (0);
while(true){
if((i__9067__auto___9375 < len__9066__auto___9374)){
args__9073__auto__.push((arguments[i__9067__auto___9375]));

var G__9376 = (i__9067__auto___9375 + (1));
i__9067__auto___9375 = G__9376;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9311__auto___9373))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9311__auto___9373){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9311__auto___9373),args);
});})(g__9311__auto___9373))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__9311__auto___9373){
return (function (seq9351){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9351));
});})(g__9311__auto___9373))
;


var g__9311__auto___9377 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__9311__auto___9377){
return (function cljs$spec$gen$alpha$map(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9378 = arguments.length;
var i__9067__auto___9379 = (0);
while(true){
if((i__9067__auto___9379 < len__9066__auto___9378)){
args__9073__auto__.push((arguments[i__9067__auto___9379]));

var G__9380 = (i__9067__auto___9379 + (1));
i__9067__auto___9379 = G__9380;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9311__auto___9377))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9311__auto___9377){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9311__auto___9377),args);
});})(g__9311__auto___9377))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__9311__auto___9377){
return (function (seq9352){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9352));
});})(g__9311__auto___9377))
;


var g__9311__auto___9381 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__9311__auto___9381){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9382 = arguments.length;
var i__9067__auto___9383 = (0);
while(true){
if((i__9067__auto___9383 < len__9066__auto___9382)){
args__9073__auto__.push((arguments[i__9067__auto___9383]));

var G__9384 = (i__9067__auto___9383 + (1));
i__9067__auto___9383 = G__9384;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9311__auto___9381))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9311__auto___9381){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9311__auto___9381),args);
});})(g__9311__auto___9381))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__9311__auto___9381){
return (function (seq9353){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9353));
});})(g__9311__auto___9381))
;


var g__9311__auto___9385 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__9311__auto___9385){
return (function cljs$spec$gen$alpha$set(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9386 = arguments.length;
var i__9067__auto___9387 = (0);
while(true){
if((i__9067__auto___9387 < len__9066__auto___9386)){
args__9073__auto__.push((arguments[i__9067__auto___9387]));

var G__9388 = (i__9067__auto___9387 + (1));
i__9067__auto___9387 = G__9388;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9311__auto___9385))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9311__auto___9385){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9311__auto___9385),args);
});})(g__9311__auto___9385))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__9311__auto___9385){
return (function (seq9354){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9354));
});})(g__9311__auto___9385))
;


var g__9311__auto___9389 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__9311__auto___9389){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9390 = arguments.length;
var i__9067__auto___9391 = (0);
while(true){
if((i__9067__auto___9391 < len__9066__auto___9390)){
args__9073__auto__.push((arguments[i__9067__auto___9391]));

var G__9392 = (i__9067__auto___9391 + (1));
i__9067__auto___9391 = G__9392;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9311__auto___9389))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9311__auto___9389){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9311__auto___9389),args);
});})(g__9311__auto___9389))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__9311__auto___9389){
return (function (seq9355){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9355));
});})(g__9311__auto___9389))
;


var g__9311__auto___9393 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__9311__auto___9393){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9394 = arguments.length;
var i__9067__auto___9395 = (0);
while(true){
if((i__9067__auto___9395 < len__9066__auto___9394)){
args__9073__auto__.push((arguments[i__9067__auto___9395]));

var G__9396 = (i__9067__auto___9395 + (1));
i__9067__auto___9395 = G__9396;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9311__auto___9393))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9311__auto___9393){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9311__auto___9393),args);
});})(g__9311__auto___9393))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__9311__auto___9393){
return (function (seq9356){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9356));
});})(g__9311__auto___9393))
;


var g__9311__auto___9397 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__9311__auto___9397){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9398 = arguments.length;
var i__9067__auto___9399 = (0);
while(true){
if((i__9067__auto___9399 < len__9066__auto___9398)){
args__9073__auto__.push((arguments[i__9067__auto___9399]));

var G__9400 = (i__9067__auto___9399 + (1));
i__9067__auto___9399 = G__9400;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9311__auto___9397))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9311__auto___9397){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9311__auto___9397),args);
});})(g__9311__auto___9397))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__9311__auto___9397){
return (function (seq9357){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9357));
});})(g__9311__auto___9397))
;


var g__9311__auto___9401 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__9311__auto___9401){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9402 = arguments.length;
var i__9067__auto___9403 = (0);
while(true){
if((i__9067__auto___9403 < len__9066__auto___9402)){
args__9073__auto__.push((arguments[i__9067__auto___9403]));

var G__9404 = (i__9067__auto___9403 + (1));
i__9067__auto___9403 = G__9404;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9311__auto___9401))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9311__auto___9401){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9311__auto___9401),args);
});})(g__9311__auto___9401))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__9311__auto___9401){
return (function (seq9358){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9358));
});})(g__9311__auto___9401))
;


var g__9311__auto___9405 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__9311__auto___9405){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9406 = arguments.length;
var i__9067__auto___9407 = (0);
while(true){
if((i__9067__auto___9407 < len__9066__auto___9406)){
args__9073__auto__.push((arguments[i__9067__auto___9407]));

var G__9408 = (i__9067__auto___9407 + (1));
i__9067__auto___9407 = G__9408;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9311__auto___9405))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9311__auto___9405){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9311__auto___9405),args);
});})(g__9311__auto___9405))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__9311__auto___9405){
return (function (seq9359){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9359));
});})(g__9311__auto___9405))
;


var g__9311__auto___9409 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__9311__auto___9409){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9410 = arguments.length;
var i__9067__auto___9411 = (0);
while(true){
if((i__9067__auto___9411 < len__9066__auto___9410)){
args__9073__auto__.push((arguments[i__9067__auto___9411]));

var G__9412 = (i__9067__auto___9411 + (1));
i__9067__auto___9411 = G__9412;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9311__auto___9409))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9311__auto___9409){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9311__auto___9409),args);
});})(g__9311__auto___9409))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__9311__auto___9409){
return (function (seq9360){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9360));
});})(g__9311__auto___9409))
;


var g__9311__auto___9413 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__9311__auto___9413){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9414 = arguments.length;
var i__9067__auto___9415 = (0);
while(true){
if((i__9067__auto___9415 < len__9066__auto___9414)){
args__9073__auto__.push((arguments[i__9067__auto___9415]));

var G__9416 = (i__9067__auto___9415 + (1));
i__9067__auto___9415 = G__9416;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9311__auto___9413))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9311__auto___9413){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9311__auto___9413),args);
});})(g__9311__auto___9413))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__9311__auto___9413){
return (function (seq9361){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9361));
});})(g__9311__auto___9413))
;


var g__9311__auto___9417 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__9311__auto___9417){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9418 = arguments.length;
var i__9067__auto___9419 = (0);
while(true){
if((i__9067__auto___9419 < len__9066__auto___9418)){
args__9073__auto__.push((arguments[i__9067__auto___9419]));

var G__9420 = (i__9067__auto___9419 + (1));
i__9067__auto___9419 = G__9420;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9311__auto___9417))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9311__auto___9417){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9311__auto___9417),args);
});})(g__9311__auto___9417))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__9311__auto___9417){
return (function (seq9362){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9362));
});})(g__9311__auto___9417))
;


var g__9311__auto___9421 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__9311__auto___9421){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9422 = arguments.length;
var i__9067__auto___9423 = (0);
while(true){
if((i__9067__auto___9423 < len__9066__auto___9422)){
args__9073__auto__.push((arguments[i__9067__auto___9423]));

var G__9424 = (i__9067__auto___9423 + (1));
i__9067__auto___9423 = G__9424;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9311__auto___9421))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9311__auto___9421){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9311__auto___9421),args);
});})(g__9311__auto___9421))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__9311__auto___9421){
return (function (seq9363){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9363));
});})(g__9311__auto___9421))
;


var g__9311__auto___9425 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__9311__auto___9425){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9426 = arguments.length;
var i__9067__auto___9427 = (0);
while(true){
if((i__9067__auto___9427 < len__9066__auto___9426)){
args__9073__auto__.push((arguments[i__9067__auto___9427]));

var G__9428 = (i__9067__auto___9427 + (1));
i__9067__auto___9427 = G__9428;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9311__auto___9425))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9311__auto___9425){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9311__auto___9425),args);
});})(g__9311__auto___9425))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__9311__auto___9425){
return (function (seq9364){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9364));
});})(g__9311__auto___9425))
;


var g__9311__auto___9429 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__9311__auto___9429){
return (function cljs$spec$gen$alpha$return(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9430 = arguments.length;
var i__9067__auto___9431 = (0);
while(true){
if((i__9067__auto___9431 < len__9066__auto___9430)){
args__9073__auto__.push((arguments[i__9067__auto___9431]));

var G__9432 = (i__9067__auto___9431 + (1));
i__9067__auto___9431 = G__9432;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9311__auto___9429))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9311__auto___9429){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9311__auto___9429),args);
});})(g__9311__auto___9429))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__9311__auto___9429){
return (function (seq9365){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9365));
});})(g__9311__auto___9429))
;


var g__9311__auto___9433 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__9311__auto___9433){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9434 = arguments.length;
var i__9067__auto___9435 = (0);
while(true){
if((i__9067__auto___9435 < len__9066__auto___9434)){
args__9073__auto__.push((arguments[i__9067__auto___9435]));

var G__9436 = (i__9067__auto___9435 + (1));
i__9067__auto___9435 = G__9436;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9311__auto___9433))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9311__auto___9433){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9311__auto___9433),args);
});})(g__9311__auto___9433))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__9311__auto___9433){
return (function (seq9366){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9366));
});})(g__9311__auto___9433))
;


var g__9311__auto___9437 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__9311__auto___9437){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9438 = arguments.length;
var i__9067__auto___9439 = (0);
while(true){
if((i__9067__auto___9439 < len__9066__auto___9438)){
args__9073__auto__.push((arguments[i__9067__auto___9439]));

var G__9440 = (i__9067__auto___9439 + (1));
i__9067__auto___9439 = G__9440;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9311__auto___9437))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9311__auto___9437){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9311__auto___9437),args);
});})(g__9311__auto___9437))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__9311__auto___9437){
return (function (seq9367){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9367));
});})(g__9311__auto___9437))
;


var g__9311__auto___9441 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__9311__auto___9441){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9442 = arguments.length;
var i__9067__auto___9443 = (0);
while(true){
if((i__9067__auto___9443 < len__9066__auto___9442)){
args__9073__auto__.push((arguments[i__9067__auto___9443]));

var G__9444 = (i__9067__auto___9443 + (1));
i__9067__auto___9443 = G__9444;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9311__auto___9441))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9311__auto___9441){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9311__auto___9441),args);
});})(g__9311__auto___9441))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__9311__auto___9441){
return (function (seq9368){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9368));
});})(g__9311__auto___9441))
;

var g__9324__auto___9466 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__9324__auto___9466){
return (function cljs$spec$gen$alpha$any(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9467 = arguments.length;
var i__9067__auto___9468 = (0);
while(true){
if((i__9067__auto___9468 < len__9066__auto___9467)){
args__9073__auto__.push((arguments[i__9067__auto___9468]));

var G__9469 = (i__9067__auto___9468 + (1));
i__9067__auto___9468 = G__9469;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9324__auto___9466))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9324__auto___9466){
return (function (args){
return cljs.core.deref.call(null,g__9324__auto___9466);
});})(g__9324__auto___9466))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__9324__auto___9466){
return (function (seq9445){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9445));
});})(g__9324__auto___9466))
;


var g__9324__auto___9470 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__9324__auto___9470){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9471 = arguments.length;
var i__9067__auto___9472 = (0);
while(true){
if((i__9067__auto___9472 < len__9066__auto___9471)){
args__9073__auto__.push((arguments[i__9067__auto___9472]));

var G__9473 = (i__9067__auto___9472 + (1));
i__9067__auto___9472 = G__9473;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9324__auto___9470))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9324__auto___9470){
return (function (args){
return cljs.core.deref.call(null,g__9324__auto___9470);
});})(g__9324__auto___9470))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__9324__auto___9470){
return (function (seq9446){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9446));
});})(g__9324__auto___9470))
;


var g__9324__auto___9474 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__9324__auto___9474){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9475 = arguments.length;
var i__9067__auto___9476 = (0);
while(true){
if((i__9067__auto___9476 < len__9066__auto___9475)){
args__9073__auto__.push((arguments[i__9067__auto___9476]));

var G__9477 = (i__9067__auto___9476 + (1));
i__9067__auto___9476 = G__9477;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9324__auto___9474))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9324__auto___9474){
return (function (args){
return cljs.core.deref.call(null,g__9324__auto___9474);
});})(g__9324__auto___9474))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__9324__auto___9474){
return (function (seq9447){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9447));
});})(g__9324__auto___9474))
;


var g__9324__auto___9478 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__9324__auto___9478){
return (function cljs$spec$gen$alpha$char(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9479 = arguments.length;
var i__9067__auto___9480 = (0);
while(true){
if((i__9067__auto___9480 < len__9066__auto___9479)){
args__9073__auto__.push((arguments[i__9067__auto___9480]));

var G__9481 = (i__9067__auto___9480 + (1));
i__9067__auto___9480 = G__9481;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9324__auto___9478))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9324__auto___9478){
return (function (args){
return cljs.core.deref.call(null,g__9324__auto___9478);
});})(g__9324__auto___9478))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__9324__auto___9478){
return (function (seq9448){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9448));
});})(g__9324__auto___9478))
;


var g__9324__auto___9482 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__9324__auto___9482){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9483 = arguments.length;
var i__9067__auto___9484 = (0);
while(true){
if((i__9067__auto___9484 < len__9066__auto___9483)){
args__9073__auto__.push((arguments[i__9067__auto___9484]));

var G__9485 = (i__9067__auto___9484 + (1));
i__9067__auto___9484 = G__9485;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9324__auto___9482))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9324__auto___9482){
return (function (args){
return cljs.core.deref.call(null,g__9324__auto___9482);
});})(g__9324__auto___9482))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__9324__auto___9482){
return (function (seq9449){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9449));
});})(g__9324__auto___9482))
;


var g__9324__auto___9486 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__9324__auto___9486){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9487 = arguments.length;
var i__9067__auto___9488 = (0);
while(true){
if((i__9067__auto___9488 < len__9066__auto___9487)){
args__9073__auto__.push((arguments[i__9067__auto___9488]));

var G__9489 = (i__9067__auto___9488 + (1));
i__9067__auto___9488 = G__9489;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9324__auto___9486))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9324__auto___9486){
return (function (args){
return cljs.core.deref.call(null,g__9324__auto___9486);
});})(g__9324__auto___9486))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__9324__auto___9486){
return (function (seq9450){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9450));
});})(g__9324__auto___9486))
;


var g__9324__auto___9490 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__9324__auto___9490){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9491 = arguments.length;
var i__9067__auto___9492 = (0);
while(true){
if((i__9067__auto___9492 < len__9066__auto___9491)){
args__9073__auto__.push((arguments[i__9067__auto___9492]));

var G__9493 = (i__9067__auto___9492 + (1));
i__9067__auto___9492 = G__9493;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9324__auto___9490))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9324__auto___9490){
return (function (args){
return cljs.core.deref.call(null,g__9324__auto___9490);
});})(g__9324__auto___9490))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__9324__auto___9490){
return (function (seq9451){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9451));
});})(g__9324__auto___9490))
;


var g__9324__auto___9494 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__9324__auto___9494){
return (function cljs$spec$gen$alpha$double(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9495 = arguments.length;
var i__9067__auto___9496 = (0);
while(true){
if((i__9067__auto___9496 < len__9066__auto___9495)){
args__9073__auto__.push((arguments[i__9067__auto___9496]));

var G__9497 = (i__9067__auto___9496 + (1));
i__9067__auto___9496 = G__9497;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9324__auto___9494))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9324__auto___9494){
return (function (args){
return cljs.core.deref.call(null,g__9324__auto___9494);
});})(g__9324__auto___9494))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__9324__auto___9494){
return (function (seq9452){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9452));
});})(g__9324__auto___9494))
;


var g__9324__auto___9498 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__9324__auto___9498){
return (function cljs$spec$gen$alpha$int(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9499 = arguments.length;
var i__9067__auto___9500 = (0);
while(true){
if((i__9067__auto___9500 < len__9066__auto___9499)){
args__9073__auto__.push((arguments[i__9067__auto___9500]));

var G__9501 = (i__9067__auto___9500 + (1));
i__9067__auto___9500 = G__9501;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9324__auto___9498))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9324__auto___9498){
return (function (args){
return cljs.core.deref.call(null,g__9324__auto___9498);
});})(g__9324__auto___9498))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__9324__auto___9498){
return (function (seq9453){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9453));
});})(g__9324__auto___9498))
;


var g__9324__auto___9502 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__9324__auto___9502){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9503 = arguments.length;
var i__9067__auto___9504 = (0);
while(true){
if((i__9067__auto___9504 < len__9066__auto___9503)){
args__9073__auto__.push((arguments[i__9067__auto___9504]));

var G__9505 = (i__9067__auto___9504 + (1));
i__9067__auto___9504 = G__9505;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9324__auto___9502))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9324__auto___9502){
return (function (args){
return cljs.core.deref.call(null,g__9324__auto___9502);
});})(g__9324__auto___9502))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__9324__auto___9502){
return (function (seq9454){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9454));
});})(g__9324__auto___9502))
;


var g__9324__auto___9506 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__9324__auto___9506){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9507 = arguments.length;
var i__9067__auto___9508 = (0);
while(true){
if((i__9067__auto___9508 < len__9066__auto___9507)){
args__9073__auto__.push((arguments[i__9067__auto___9508]));

var G__9509 = (i__9067__auto___9508 + (1));
i__9067__auto___9508 = G__9509;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9324__auto___9506))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9324__auto___9506){
return (function (args){
return cljs.core.deref.call(null,g__9324__auto___9506);
});})(g__9324__auto___9506))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__9324__auto___9506){
return (function (seq9455){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9455));
});})(g__9324__auto___9506))
;


var g__9324__auto___9510 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__9324__auto___9510){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9511 = arguments.length;
var i__9067__auto___9512 = (0);
while(true){
if((i__9067__auto___9512 < len__9066__auto___9511)){
args__9073__auto__.push((arguments[i__9067__auto___9512]));

var G__9513 = (i__9067__auto___9512 + (1));
i__9067__auto___9512 = G__9513;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9324__auto___9510))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9324__auto___9510){
return (function (args){
return cljs.core.deref.call(null,g__9324__auto___9510);
});})(g__9324__auto___9510))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__9324__auto___9510){
return (function (seq9456){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9456));
});})(g__9324__auto___9510))
;


var g__9324__auto___9514 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__9324__auto___9514){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9515 = arguments.length;
var i__9067__auto___9516 = (0);
while(true){
if((i__9067__auto___9516 < len__9066__auto___9515)){
args__9073__auto__.push((arguments[i__9067__auto___9516]));

var G__9517 = (i__9067__auto___9516 + (1));
i__9067__auto___9516 = G__9517;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9324__auto___9514))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9324__auto___9514){
return (function (args){
return cljs.core.deref.call(null,g__9324__auto___9514);
});})(g__9324__auto___9514))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__9324__auto___9514){
return (function (seq9457){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9457));
});})(g__9324__auto___9514))
;


var g__9324__auto___9518 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__9324__auto___9518){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9519 = arguments.length;
var i__9067__auto___9520 = (0);
while(true){
if((i__9067__auto___9520 < len__9066__auto___9519)){
args__9073__auto__.push((arguments[i__9067__auto___9520]));

var G__9521 = (i__9067__auto___9520 + (1));
i__9067__auto___9520 = G__9521;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9324__auto___9518))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9324__auto___9518){
return (function (args){
return cljs.core.deref.call(null,g__9324__auto___9518);
});})(g__9324__auto___9518))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__9324__auto___9518){
return (function (seq9458){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9458));
});})(g__9324__auto___9518))
;


var g__9324__auto___9522 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__9324__auto___9522){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9523 = arguments.length;
var i__9067__auto___9524 = (0);
while(true){
if((i__9067__auto___9524 < len__9066__auto___9523)){
args__9073__auto__.push((arguments[i__9067__auto___9524]));

var G__9525 = (i__9067__auto___9524 + (1));
i__9067__auto___9524 = G__9525;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9324__auto___9522))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9324__auto___9522){
return (function (args){
return cljs.core.deref.call(null,g__9324__auto___9522);
});})(g__9324__auto___9522))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__9324__auto___9522){
return (function (seq9459){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9459));
});})(g__9324__auto___9522))
;


var g__9324__auto___9526 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__9324__auto___9526){
return (function cljs$spec$gen$alpha$string(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9527 = arguments.length;
var i__9067__auto___9528 = (0);
while(true){
if((i__9067__auto___9528 < len__9066__auto___9527)){
args__9073__auto__.push((arguments[i__9067__auto___9528]));

var G__9529 = (i__9067__auto___9528 + (1));
i__9067__auto___9528 = G__9529;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9324__auto___9526))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9324__auto___9526){
return (function (args){
return cljs.core.deref.call(null,g__9324__auto___9526);
});})(g__9324__auto___9526))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__9324__auto___9526){
return (function (seq9460){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9460));
});})(g__9324__auto___9526))
;


var g__9324__auto___9530 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__9324__auto___9530){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9531 = arguments.length;
var i__9067__auto___9532 = (0);
while(true){
if((i__9067__auto___9532 < len__9066__auto___9531)){
args__9073__auto__.push((arguments[i__9067__auto___9532]));

var G__9533 = (i__9067__auto___9532 + (1));
i__9067__auto___9532 = G__9533;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9324__auto___9530))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9324__auto___9530){
return (function (args){
return cljs.core.deref.call(null,g__9324__auto___9530);
});})(g__9324__auto___9530))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__9324__auto___9530){
return (function (seq9461){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9461));
});})(g__9324__auto___9530))
;


var g__9324__auto___9534 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__9324__auto___9534){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9535 = arguments.length;
var i__9067__auto___9536 = (0);
while(true){
if((i__9067__auto___9536 < len__9066__auto___9535)){
args__9073__auto__.push((arguments[i__9067__auto___9536]));

var G__9537 = (i__9067__auto___9536 + (1));
i__9067__auto___9536 = G__9537;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9324__auto___9534))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9324__auto___9534){
return (function (args){
return cljs.core.deref.call(null,g__9324__auto___9534);
});})(g__9324__auto___9534))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__9324__auto___9534){
return (function (seq9462){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9462));
});})(g__9324__auto___9534))
;


var g__9324__auto___9538 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__9324__auto___9538){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9539 = arguments.length;
var i__9067__auto___9540 = (0);
while(true){
if((i__9067__auto___9540 < len__9066__auto___9539)){
args__9073__auto__.push((arguments[i__9067__auto___9540]));

var G__9541 = (i__9067__auto___9540 + (1));
i__9067__auto___9540 = G__9541;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9324__auto___9538))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9324__auto___9538){
return (function (args){
return cljs.core.deref.call(null,g__9324__auto___9538);
});})(g__9324__auto___9538))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__9324__auto___9538){
return (function (seq9463){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9463));
});})(g__9324__auto___9538))
;


var g__9324__auto___9542 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__9324__auto___9542){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9543 = arguments.length;
var i__9067__auto___9544 = (0);
while(true){
if((i__9067__auto___9544 < len__9066__auto___9543)){
args__9073__auto__.push((arguments[i__9067__auto___9544]));

var G__9545 = (i__9067__auto___9544 + (1));
i__9067__auto___9544 = G__9545;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9324__auto___9542))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9324__auto___9542){
return (function (args){
return cljs.core.deref.call(null,g__9324__auto___9542);
});})(g__9324__auto___9542))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__9324__auto___9542){
return (function (seq9464){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9464));
});})(g__9324__auto___9542))
;


var g__9324__auto___9546 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__9324__auto___9546){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9547 = arguments.length;
var i__9067__auto___9548 = (0);
while(true){
if((i__9067__auto___9548 < len__9066__auto___9547)){
args__9073__auto__.push((arguments[i__9067__auto___9548]));

var G__9549 = (i__9067__auto___9548 + (1));
i__9067__auto___9548 = G__9549;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});})(g__9324__auto___9546))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9324__auto___9546){
return (function (args){
return cljs.core.deref.call(null,g__9324__auto___9546);
});})(g__9324__auto___9546))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__9324__auto___9546){
return (function (seq9465){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9465));
});})(g__9324__auto___9546))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__9073__auto__ = [];
var len__9066__auto___9552 = arguments.length;
var i__9067__auto___9553 = (0);
while(true){
if((i__9067__auto___9553 < len__9066__auto___9552)){
args__9073__auto__.push((arguments[i__9067__auto___9553]));

var G__9554 = (i__9067__auto___9553 + (1));
i__9067__auto___9553 = G__9554;
continue;
} else {
}
break;
}

var argseq__9074__auto__ = ((((0) < args__9073__auto__.length))?(new cljs.core.IndexedSeq(args__9073__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__9074__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__9550_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__9550_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq9551){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9551));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__9555_SHARP_){
return (new Date(p1__9555_SHARP_));
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