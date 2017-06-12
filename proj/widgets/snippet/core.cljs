(ns proj.widgets.snippet.core)





(try
  (js/Polymer
    (cljs.core/clj->js
      {:is :proj-snippet,
       :properties
       {:clj {:value false, :type js/Boolean},
        :html {:value false, :type js/Boolean}},
       :hostAttributes nil,
       :observers [],
       :listeners nil}))
  (catch
    js/Error
    e__7622__auto__
    (clojure.core/println
      "\"Caught exception on component registration:\""
      e__7622__auto__)))