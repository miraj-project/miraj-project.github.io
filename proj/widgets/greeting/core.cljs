(ns proj.widgets.greeting.core)





(try
  (js/Polymer
    (cljs.core/clj->js
      {:is :proj-greeting,
       :properties
       {:greeting {:value "Welcome!", :type js/String, :notify :true}},
       :hostAttributes nil,
       :ready (fn [] (.log js/console "READY greeting")),
       :observers [],
       :listeners nil}))
  (catch
    js/Error
    e__69869__auto__
    (clojure.core/println
      "\"Caught exception on component registration:\""
      e__69869__auto__)))