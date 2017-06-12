// Compiled by ClojureScript 1.9.562 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__11373){
var map__11398 = p__11373;
var map__11398__$1 = ((((!((map__11398 == null)))?((((map__11398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11398.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11398):map__11398);
var m = map__11398__$1;
var n = cljs.core.get.call(null,map__11398__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__11398__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__11400_11422 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11401_11423 = null;
var count__11402_11424 = (0);
var i__11403_11425 = (0);
while(true){
if((i__11403_11425 < count__11402_11424)){
var f_11426 = cljs.core._nth.call(null,chunk__11401_11423,i__11403_11425);
cljs.core.println.call(null,"  ",f_11426);

var G__11427 = seq__11400_11422;
var G__11428 = chunk__11401_11423;
var G__11429 = count__11402_11424;
var G__11430 = (i__11403_11425 + (1));
seq__11400_11422 = G__11427;
chunk__11401_11423 = G__11428;
count__11402_11424 = G__11429;
i__11403_11425 = G__11430;
continue;
} else {
var temp__5278__auto___11431 = cljs.core.seq.call(null,seq__11400_11422);
if(temp__5278__auto___11431){
var seq__11400_11432__$1 = temp__5278__auto___11431;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11400_11432__$1)){
var c__8792__auto___11433 = cljs.core.chunk_first.call(null,seq__11400_11432__$1);
var G__11434 = cljs.core.chunk_rest.call(null,seq__11400_11432__$1);
var G__11435 = c__8792__auto___11433;
var G__11436 = cljs.core.count.call(null,c__8792__auto___11433);
var G__11437 = (0);
seq__11400_11422 = G__11434;
chunk__11401_11423 = G__11435;
count__11402_11424 = G__11436;
i__11403_11425 = G__11437;
continue;
} else {
var f_11438 = cljs.core.first.call(null,seq__11400_11432__$1);
cljs.core.println.call(null,"  ",f_11438);

var G__11439 = cljs.core.next.call(null,seq__11400_11432__$1);
var G__11440 = null;
var G__11441 = (0);
var G__11442 = (0);
seq__11400_11422 = G__11439;
chunk__11401_11423 = G__11440;
count__11402_11424 = G__11441;
i__11403_11425 = G__11442;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11443 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7881__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7881__auto__)){
return or__7881__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_11443);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_11443)))?cljs.core.second.call(null,arglists_11443):arglists_11443));
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
var seq__11404_11444 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11405_11445 = null;
var count__11406_11446 = (0);
var i__11407_11447 = (0);
while(true){
if((i__11407_11447 < count__11406_11446)){
var vec__11408_11448 = cljs.core._nth.call(null,chunk__11405_11445,i__11407_11447);
var name_11449 = cljs.core.nth.call(null,vec__11408_11448,(0),null);
var map__11411_11450 = cljs.core.nth.call(null,vec__11408_11448,(1),null);
var map__11411_11451__$1 = ((((!((map__11411_11450 == null)))?((((map__11411_11450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11411_11450.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11411_11450):map__11411_11450);
var doc_11452 = cljs.core.get.call(null,map__11411_11451__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11453 = cljs.core.get.call(null,map__11411_11451__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11449);

cljs.core.println.call(null," ",arglists_11453);

if(cljs.core.truth_(doc_11452)){
cljs.core.println.call(null," ",doc_11452);
} else {
}

var G__11454 = seq__11404_11444;
var G__11455 = chunk__11405_11445;
var G__11456 = count__11406_11446;
var G__11457 = (i__11407_11447 + (1));
seq__11404_11444 = G__11454;
chunk__11405_11445 = G__11455;
count__11406_11446 = G__11456;
i__11407_11447 = G__11457;
continue;
} else {
var temp__5278__auto___11458 = cljs.core.seq.call(null,seq__11404_11444);
if(temp__5278__auto___11458){
var seq__11404_11459__$1 = temp__5278__auto___11458;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11404_11459__$1)){
var c__8792__auto___11460 = cljs.core.chunk_first.call(null,seq__11404_11459__$1);
var G__11461 = cljs.core.chunk_rest.call(null,seq__11404_11459__$1);
var G__11462 = c__8792__auto___11460;
var G__11463 = cljs.core.count.call(null,c__8792__auto___11460);
var G__11464 = (0);
seq__11404_11444 = G__11461;
chunk__11405_11445 = G__11462;
count__11406_11446 = G__11463;
i__11407_11447 = G__11464;
continue;
} else {
var vec__11413_11465 = cljs.core.first.call(null,seq__11404_11459__$1);
var name_11466 = cljs.core.nth.call(null,vec__11413_11465,(0),null);
var map__11416_11467 = cljs.core.nth.call(null,vec__11413_11465,(1),null);
var map__11416_11468__$1 = ((((!((map__11416_11467 == null)))?((((map__11416_11467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11416_11467.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11416_11467):map__11416_11467);
var doc_11469 = cljs.core.get.call(null,map__11416_11468__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11470 = cljs.core.get.call(null,map__11416_11468__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11466);

cljs.core.println.call(null," ",arglists_11470);

if(cljs.core.truth_(doc_11469)){
cljs.core.println.call(null," ",doc_11469);
} else {
}

var G__11471 = cljs.core.next.call(null,seq__11404_11459__$1);
var G__11472 = null;
var G__11473 = (0);
var G__11474 = (0);
seq__11404_11444 = G__11471;
chunk__11405_11445 = G__11472;
count__11406_11446 = G__11473;
i__11407_11447 = G__11474;
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

var seq__11418 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__11419 = null;
var count__11420 = (0);
var i__11421 = (0);
while(true){
if((i__11421 < count__11420)){
var role = cljs.core._nth.call(null,chunk__11419,i__11421);
var temp__5278__auto___11475__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___11475__$1)){
var spec_11476 = temp__5278__auto___11475__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_11476));
} else {
}

var G__11477 = seq__11418;
var G__11478 = chunk__11419;
var G__11479 = count__11420;
var G__11480 = (i__11421 + (1));
seq__11418 = G__11477;
chunk__11419 = G__11478;
count__11420 = G__11479;
i__11421 = G__11480;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__11418);
if(temp__5278__auto____$1){
var seq__11418__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11418__$1)){
var c__8792__auto__ = cljs.core.chunk_first.call(null,seq__11418__$1);
var G__11481 = cljs.core.chunk_rest.call(null,seq__11418__$1);
var G__11482 = c__8792__auto__;
var G__11483 = cljs.core.count.call(null,c__8792__auto__);
var G__11484 = (0);
seq__11418 = G__11481;
chunk__11419 = G__11482;
count__11420 = G__11483;
i__11421 = G__11484;
continue;
} else {
var role = cljs.core.first.call(null,seq__11418__$1);
var temp__5278__auto___11485__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___11485__$2)){
var spec_11486 = temp__5278__auto___11485__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_11486));
} else {
}

var G__11487 = cljs.core.next.call(null,seq__11418__$1);
var G__11488 = null;
var G__11489 = (0);
var G__11490 = (0);
seq__11418 = G__11487;
chunk__11419 = G__11488;
count__11420 = G__11489;
i__11421 = G__11490;
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