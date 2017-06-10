(ns proj.widgets.snippet.core)





(try
  (js/Polymer
    (cljs.core/clj->js
      {:is :proj-snippet,
       :properties {},
       :hostAttributes nil,
       :observers [],
       :listeners nil}))
  (catch
    js/Error
    e__7618__auto__
    (clojure.core/println
      "\"Caught exception on component registration:\""
      e__7618__auto__)))