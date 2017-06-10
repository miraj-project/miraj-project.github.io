(ns geras.gadgets
  "

  "
  
  (:require [miraj.co-dom :as codom])) ;; :refer [element #_parse-elt-args]]))

(alter-meta! *ns* (fn [m] (assoc m :miraj/miraj {:miraj/elements true
                                                 :miraj/nss '[geras.widgets.greeting geras.widgets.device-card geras.widgets.list geras.widgets.devices]
                                                 :miraj/codom "/geras/gadgets_import.html"
                                                 :miraj/assets
                                                 {:miraj/bower
                                                  [

                                                   ]
                                                   :miraj/base ""}})))

;; (println "loading geras.gadgets")


;;;;;;;; COMPONENT: geras.gadgets/greeting ;;;;;;;;;;;;;;;;
(defn greeting
  "my-greeting component

  "
  [& args]
      (apply codom/element :geras-greeting args))
(alter-meta! (find-var (symbol (str *ns*) "greeting"))
             (fn [old new] (merge old new))
             {:miraj/miraj {:miraj/co-fn true
                            :miraj/element true
                            :miraj/html-tag :geras-greeting
                            :miraj/lib :miraj/demo
                            :miraj/assets {:miraj/href "/geras/widgets/greeting.html"
                                           :miraj/bower ""}
                            :miraj/help ""}})

;;;;;;;; COMPONENT: geras.gadgets/device-card ;;;;;;;;;;;;;;;;
(defn device-card
  "geras devices component

  "
  [& args]
      (apply codom/element :geras-device-card args))
(alter-meta! (find-var (symbol (str *ns*) "device-card"))
             (fn [old new] (merge old new))
             {:miraj/miraj {:miraj/co-fn true
                            :miraj/element true
                            :miraj/html-tag :geras-device-card
                            :miraj/lib :miraj/demo
                            :miraj/assets {:miraj/href "/geras/widgets/device_card.html"
                                           :miraj/bower ""}
                            :miraj/help ""}})

;;;;;;;; COMPONENT: geras.gadgets/list ;;;;;;;;;;;;;;;;
(defn list
  "my-list component

  "
  [& args]
      (apply codom/element :geras-list args))
(alter-meta! (find-var (symbol (str *ns*) "list"))
             (fn [old new] (merge old new))
             {:miraj/miraj {:miraj/co-fn true
                            :miraj/element true
                            :miraj/html-tag :geras-list
                            :miraj/lib :miraj/demo
                            :miraj/assets {:miraj/href "/geras/widgets/list.html"
                                           :miraj/bower ""}
                            :miraj/help ""}})

;;;;;;;; COMPONENT: geras.gadgets/devices ;;;;;;;;;;;;;;;;
(defn devices
  "geras devices component

  "
  [& args]
      (apply codom/element :geras-devices args))
(alter-meta! (find-var (symbol (str *ns*) "devices"))
             (fn [old new] (merge old new))
             {:miraj/miraj {:miraj/co-fn true
                            :miraj/element true
                            :miraj/html-tag :geras-devices
                            :miraj/lib :miraj/demo
                            :miraj/assets {:miraj/href "/geras/widgets/devices.html"
                                           :miraj/bower ""}
                            :miraj/help ""}})


