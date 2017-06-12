// Compiled by ClojureScript 1.9.562 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__11369){
var map__11394 = p__11369;
var map__11394__$1 = ((((!((map__11394 == null)))?((((map__11394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11394.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11394):map__11394);
var m = map__11394__$1;
var n = cljs.core.get.call(null,map__11394__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__11394__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__11396_11418 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11397_11419 = null;
var count__11398_11420 = (0);
var i__11399_11421 = (0);
while(true){
if((i__11399_11421 < count__11398_11420)){
var f_11422 = cljs.core._nth.call(null,chunk__11397_11419,i__11399_11421);
cljs.core.println.call(null,"  ",f_11422);

var G__11423 = seq__11396_11418;
var G__11424 = chunk__11397_11419;
var G__11425 = count__11398_11420;
var G__11426 = (i__11399_11421 + (1));
seq__11396_11418 = G__11423;
chunk__11397_11419 = G__11424;
count__11398_11420 = G__11425;
i__11399_11421 = G__11426;
continue;
} else {
var temp__5278__auto___11427 = cljs.core.seq.call(null,seq__11396_11418);
if(temp__5278__auto___11427){
var seq__11396_11428__$1 = temp__5278__auto___11427;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11396_11428__$1)){
var c__8792__auto___11429 = cljs.core.chunk_first.call(null,seq__11396_11428__$1);
var G__11430 = cljs.core.chunk_rest.call(null,seq__11396_11428__$1);
var G__11431 = c__8792__auto___11429;
var G__11432 = cljs.core.count.call(null,c__8792__auto___11429);
var G__11433 = (0);
seq__11396_11418 = G__11430;
chunk__11397_11419 = G__11431;
count__11398_11420 = G__11432;
i__11399_11421 = G__11433;
continue;
} else {
var f_11434 = cljs.core.first.call(null,seq__11396_11428__$1);
cljs.core.println.call(null,"  ",f_11434);

var G__11435 = cljs.core.next.call(null,seq__11396_11428__$1);
var G__11436 = null;
var G__11437 = (0);
var G__11438 = (0);
seq__11396_11418 = G__11435;
chunk__11397_11419 = G__11436;
count__11398_11420 = G__11437;
i__11399_11421 = G__11438;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11439 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7881__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7881__auto__)){
return or__7881__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_11439);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_11439)))?cljs.core.second.call(null,arglists_11439):arglists_11439));
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
var seq__11400_11440 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11401_11441 = null;
var count__11402_11442 = (0);
var i__11403_11443 = (0);
while(true){
if((i__11403_11443 < count__11402_11442)){
var vec__11404_11444 = cljs.core._nth.call(null,chunk__11401_11441,i__11403_11443);
var name_11445 = cljs.core.nth.call(null,vec__11404_11444,(0),null);
var map__11407_11446 = cljs.core.nth.call(null,vec__11404_11444,(1),null);
var map__11407_11447__$1 = ((((!((map__11407_11446 == null)))?((((map__11407_11446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11407_11446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11407_11446):map__11407_11446);
var doc_11448 = cljs.core.get.call(null,map__11407_11447__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11449 = cljs.core.get.call(null,map__11407_11447__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11445);

cljs.core.println.call(null," ",arglists_11449);

if(cljs.core.truth_(doc_11448)){
cljs.core.println.call(null," ",doc_11448);
} else {
}

var G__11450 = seq__11400_11440;
var G__11451 = chunk__11401_11441;
var G__11452 = count__11402_11442;
var G__11453 = (i__11403_11443 + (1));
seq__11400_11440 = G__11450;
chunk__11401_11441 = G__11451;
count__11402_11442 = G__11452;
i__11403_11443 = G__11453;
continue;
} else {
var temp__5278__auto___11454 = cljs.core.seq.call(null,seq__11400_11440);
if(temp__5278__auto___11454){
var seq__11400_11455__$1 = temp__5278__auto___11454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11400_11455__$1)){
var c__8792__auto___11456 = cljs.core.chunk_first.call(null,seq__11400_11455__$1);
var G__11457 = cljs.core.chunk_rest.call(null,seq__11400_11455__$1);
var G__11458 = c__8792__auto___11456;
var G__11459 = cljs.core.count.call(null,c__8792__auto___11456);
var G__11460 = (0);
seq__11400_11440 = G__11457;
chunk__11401_11441 = G__11458;
count__11402_11442 = G__11459;
i__11403_11443 = G__11460;
continue;
} else {
var vec__11409_11461 = cljs.core.first.call(null,seq__11400_11455__$1);
var name_11462 = cljs.core.nth.call(null,vec__11409_11461,(0),null);
var map__11412_11463 = cljs.core.nth.call(null,vec__11409_11461,(1),null);
var map__11412_11464__$1 = ((((!((map__11412_11463 == null)))?((((map__11412_11463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11412_11463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11412_11463):map__11412_11463);
var doc_11465 = cljs.core.get.call(null,map__11412_11464__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11466 = cljs.core.get.call(null,map__11412_11464__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11462);

cljs.core.println.call(null," ",arglists_11466);

if(cljs.core.truth_(doc_11465)){
cljs.core.println.call(null," ",doc_11465);
} else {
}

var G__11467 = cljs.core.next.call(null,seq__11400_11455__$1);
var G__11468 = null;
var G__11469 = (0);
var G__11470 = (0);
seq__11400_11440 = G__11467;
chunk__11401_11441 = G__11468;
count__11402_11442 = G__11469;
i__11403_11443 = G__11470;
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

var seq__11414 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__11415 = null;
var count__11416 = (0);
var i__11417 = (0);
while(true){
if((i__11417 < count__11416)){
var role = cljs.core._nth.call(null,chunk__11415,i__11417);
var temp__5278__auto___11471__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___11471__$1)){
var spec_11472 = temp__5278__auto___11471__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_11472));
} else {
}

var G__11473 = seq__11414;
var G__11474 = chunk__11415;
var G__11475 = count__11416;
var G__11476 = (i__11417 + (1));
seq__11414 = G__11473;
chunk__11415 = G__11474;
count__11416 = G__11475;
i__11417 = G__11476;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__11414);
if(temp__5278__auto____$1){
var seq__11414__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11414__$1)){
var c__8792__auto__ = cljs.core.chunk_first.call(null,seq__11414__$1);
var G__11477 = cljs.core.chunk_rest.call(null,seq__11414__$1);
var G__11478 = c__8792__auto__;
var G__11479 = cljs.core.count.call(null,c__8792__auto__);
var G__11480 = (0);
seq__11414 = G__11477;
chunk__11415 = G__11478;
count__11416 = G__11479;
i__11417 = G__11480;
continue;
} else {
var role = cljs.core.first.call(null,seq__11414__$1);
var temp__5278__auto___11481__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___11481__$2)){
var spec_11482 = temp__5278__auto___11481__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_11482));
} else {
}

var G__11483 = cljs.core.next.call(null,seq__11414__$1);
var G__11484 = null;
var G__11485 = (0);
var G__11486 = (0);
seq__11414 = G__11483;
chunk__11415 = G__11484;
count__11416 = G__11485;
i__11417 = G__11486;
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