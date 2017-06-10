(ns geras.widgets.devices)

(enable-console-print!)

(println "LOADING geras.widgets.devices")

(defn ready [this]
  (println "devices READY"))

#_(defn ajax [this]
  (println "devices AJAX")
  (println "this:" this)
  (println "r:" r)
  (println "data: " (aget this "devices")))


