// Compiled by ClojureScript 1.9.562 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__11325){
var map__11350 = p__11325;
var map__11350__$1 = ((((!((map__11350 == null)))?((((map__11350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11350.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11350):map__11350);
var m = map__11350__$1;
var n = cljs.core.get.call(null,map__11350__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__11350__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5278__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5278__auto__)){
var ns = temp__5278__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__11352_11374 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11353_11375 = null;
var count__11354_11376 = (0);
var i__11355_11377 = (0);
while(true){
if((i__11355_11377 < count__11354_11376)){
var f_11378 = cljs.core._nth.call(null,chunk__11353_11375,i__11355_11377);
cljs.core.println.call(null,"  ",f_11378);

var G__11379 = seq__11352_11374;
var G__11380 = chunk__11353_11375;
var G__11381 = count__11354_11376;
var G__11382 = (i__11355_11377 + (1));
seq__11352_11374 = G__11379;
chunk__11353_11375 = G__11380;
count__11354_11376 = G__11381;
i__11355_11377 = G__11382;
continue;
} else {
var temp__5278__auto___11383 = cljs.core.seq.call(null,seq__11352_11374);
if(temp__5278__auto___11383){
var seq__11352_11384__$1 = temp__5278__auto___11383;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11352_11384__$1)){
var c__8756__auto___11385 = cljs.core.chunk_first.call(null,seq__11352_11384__$1);
var G__11386 = cljs.core.chunk_rest.call(null,seq__11352_11384__$1);
var G__11387 = c__8756__auto___11385;
var G__11388 = cljs.core.count.call(null,c__8756__auto___11385);
var G__11389 = (0);
seq__11352_11374 = G__11386;
chunk__11353_11375 = G__11387;
count__11354_11376 = G__11388;
i__11355_11377 = G__11389;
continue;
} else {
var f_11390 = cljs.core.first.call(null,seq__11352_11384__$1);
cljs.core.println.call(null,"  ",f_11390);

var G__11391 = cljs.core.next.call(null,seq__11352_11384__$1);
var G__11392 = null;
var G__11393 = (0);
var G__11394 = (0);
seq__11352_11374 = G__11391;
chunk__11353_11375 = G__11392;
count__11354_11376 = G__11393;
i__11355_11377 = G__11394;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11395 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7845__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7845__auto__)){
return or__7845__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_11395);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_11395)))?cljs.core.second.call(null,arglists_11395):arglists_11395));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__11356_11396 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11357_11397 = null;
var count__11358_11398 = (0);
var i__11359_11399 = (0);
while(true){
if((i__11359_11399 < count__11358_11398)){
var vec__11360_11400 = cljs.core._nth.call(null,chunk__11357_11397,i__11359_11399);
var name_11401 = cljs.core.nth.call(null,vec__11360_11400,(0),null);
var map__11363_11402 = cljs.core.nth.call(null,vec__11360_11400,(1),null);
var map__11363_11403__$1 = ((((!((map__11363_11402 == null)))?((((map__11363_11402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11363_11402.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11363_11402):map__11363_11402);
var doc_11404 = cljs.core.get.call(null,map__11363_11403__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11405 = cljs.core.get.call(null,map__11363_11403__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11401);

cljs.core.println.call(null," ",arglists_11405);

if(cljs.core.truth_(doc_11404)){
cljs.core.println.call(null," ",doc_11404);
} else {
}

var G__11406 = seq__11356_11396;
var G__11407 = chunk__11357_11397;
var G__11408 = count__11358_11398;
var G__11409 = (i__11359_11399 + (1));
seq__11356_11396 = G__11406;
chunk__11357_11397 = G__11407;
count__11358_11398 = G__11408;
i__11359_11399 = G__11409;
continue;
} else {
var temp__5278__auto___11410 = cljs.core.seq.call(null,seq__11356_11396);
if(temp__5278__auto___11410){
var seq__11356_11411__$1 = temp__5278__auto___11410;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11356_11411__$1)){
var c__8756__auto___11412 = cljs.core.chunk_first.call(null,seq__11356_11411__$1);
var G__11413 = cljs.core.chunk_rest.call(null,seq__11356_11411__$1);
var G__11414 = c__8756__auto___11412;
var G__11415 = cljs.core.count.call(null,c__8756__auto___11412);
var G__11416 = (0);
seq__11356_11396 = G__11413;
chunk__11357_11397 = G__11414;
count__11358_11398 = G__11415;
i__11359_11399 = G__11416;
continue;
} else {
var vec__11365_11417 = cljs.core.first.call(null,seq__11356_11411__$1);
var name_11418 = cljs.core.nth.call(null,vec__11365_11417,(0),null);
var map__11368_11419 = cljs.core.nth.call(null,vec__11365_11417,(1),null);
var map__11368_11420__$1 = ((((!((map__11368_11419 == null)))?((((map__11368_11419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11368_11419.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11368_11419):map__11368_11419);
var doc_11421 = cljs.core.get.call(null,map__11368_11420__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11422 = cljs.core.get.call(null,map__11368_11420__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11418);

cljs.core.println.call(null," ",arglists_11422);

if(cljs.core.truth_(doc_11421)){
cljs.core.println.call(null," ",doc_11421);
} else {
}

var G__11423 = cljs.core.next.call(null,seq__11356_11411__$1);
var G__11424 = null;
var G__11425 = (0);
var G__11426 = (0);
seq__11356_11396 = G__11423;
chunk__11357_11397 = G__11424;
count__11358_11398 = G__11425;
i__11359_11399 = G__11426;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5278__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5278__auto__)){
var fnspec = temp__5278__auto__;
cljs.core.print.call(null,"Spec");

var seq__11370 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__11371 = null;
var count__11372 = (0);
var i__11373 = (0);
while(true){
if((i__11373 < count__11372)){
var role = cljs.core._nth.call(null,chunk__11371,i__11373);
var temp__5278__auto___11427__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___11427__$1)){
var spec_11428 = temp__5278__auto___11427__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_11428));
} else {
}

var G__11429 = seq__11370;
var G__11430 = chunk__11371;
var G__11431 = count__11372;
var G__11432 = (i__11373 + (1));
seq__11370 = G__11429;
chunk__11371 = G__11430;
count__11372 = G__11431;
i__11373 = G__11432;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__11370);
if(temp__5278__auto____$1){
var seq__11370__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11370__$1)){
var c__8756__auto__ = cljs.core.chunk_first.call(null,seq__11370__$1);
var G__11433 = cljs.core.chunk_rest.call(null,seq__11370__$1);
var G__11434 = c__8756__auto__;
var G__11435 = cljs.core.count.call(null,c__8756__auto__);
var G__11436 = (0);
seq__11370 = G__11433;
chunk__11371 = G__11434;
count__11372 = G__11435;
i__11373 = G__11436;
continue;
} else {
var role = cljs.core.first.call(null,seq__11370__$1);
var temp__5278__auto___11437__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___11437__$2)){
var spec_11438 = temp__5278__auto___11437__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_11438));
} else {
}

var G__11439 = cljs.core.next.call(null,seq__11370__$1);
var G__11440 = null;
var G__11441 = (0);
var G__11442 = (0);
seq__11370 = G__11439;
chunk__11371 = G__11440;
count__11372 = G__11441;
i__11373 = G__11442;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map