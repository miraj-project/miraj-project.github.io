(ns proj.widgets.devices.core
  (:require [proj.widgets.devices :as devices]))





(try
  (js/Polymer
    (cljs.core/clj->js
      {:is :proj-devices,
       :properties {:devices {:type js/Array}},
       :hostAttributes nil,
       :ready (fn [] (this-as this (devices/ready this))),
       :observers [],
       :listeners nil}))
  (catch
    js/Error
    e__7618__auto__
    (clojure.core/println
      "\"Caught exception on component registration:\""
      e__7618__auto__)))