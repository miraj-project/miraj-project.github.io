(ns proj.widgets.device-card.core
  (:require [proj.widgets.device-card :as device-card]))





(try
  (js/Polymer
    (cljs.core/clj->js
      {:is :proj-device-card,
       :properties {:device {:type js/Object}},
       :hostAttributes nil,
       :ready (fn [] (this-as this (device-card/ready this))),
       :observers [],
       :listeners nil}))
  (catch
    js/Error
    e__7622__auto__
    (clojure.core/println
      "\"Caught exception on component registration:\""
      e__7622__auto__)))