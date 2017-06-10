(ns proj.widgets.list.core
  (:require [proj.widgets.list :as list]))





(try
  (js/Polymer
    (cljs.core/clj->js
      {:is :proj-list,
       :properties {:items {:notify :true}},
       :hostAttributes nil,
       :ready (fn [] (this-as this (list/ready this))),
       :observers [],
       :listeners nil}))
  (catch
    js/Error
    e__7618__auto__
    (clojure.core/println
      "\"Caught exception on component registration:\""
      e__7618__auto__)))