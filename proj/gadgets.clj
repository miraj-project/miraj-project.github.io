(ns proj.gadgets
  "

  "
  
  (:require [miraj.co-dom :as codom])) ;; :refer [element #_parse-elt-args]]))

(alter-meta! *ns* (fn [m] (assoc m :miraj/miraj {:miraj/elements true
                                                 :miraj/nss '[proj.widgets.greeting proj.widgets.device-card proj.widgets.snippet proj.widgets.list proj.widgets.devices]
                                                 :miraj/codom "/proj/gadgets_import.html"
                                                 :miraj/assets
                                                 {:miraj/bower
                                                  [

                                                   ]
                                                   :miraj/base ""}})))

;; (println "loading proj.gadgets")


;;;;;;;; COMPONENT: proj.gadgets/greeting ;;;;;;;;;;;;;;;;
(defn greeting
  "my-greeting component

  "
  [& args]
      (apply codom/element :proj-greeting args))
(alter-meta! (find-var (symbol (str *ns*) "greeting"))
             (fn [old new] (merge old new))
             {:miraj/miraj {:miraj/co-fn true
                            :miraj/element true
                            :miraj/html-tag :proj-greeting
                            :miraj/lib :miraj/demo
                            :miraj/assets {:miraj/href "/proj/widgets/greeting.html"
                                           :miraj/bower ""}
                            :miraj/help ""}})

;;;;;;;; COMPONENT: proj.gadgets/device-card ;;;;;;;;;;;;;;;;
(defn device-card
  "proj devices component

  "
  [& args]
      (apply codom/element :proj-device-card args))
(alter-meta! (find-var (symbol (str *ns*) "device-card"))
             (fn [old new] (merge old new))
             {:miraj/miraj {:miraj/co-fn true
                            :miraj/element true
                            :miraj/html-tag :proj-device-card
                            :miraj/lib :miraj/demo
                            :miraj/assets {:miraj/href "/proj/widgets/device_card.html"
                                           :miraj/bower ""}
                            :miraj/help ""}})

;;;;;;;; COMPONENT: proj.gadgets/snippet ;;;;;;;;;;;;;;;;
(defn snippet
  "snippet component

  "
  [& args]
      (apply codom/element :proj-snippet args))
(alter-meta! (find-var (symbol (str *ns*) "snippet"))
             (fn [old new] (merge old new))
             {:miraj/miraj {:miraj/co-fn true
                            :miraj/element true
                            :miraj/html-tag :proj-snippet
                            :miraj/lib :miraj/demo
                            :miraj/assets {:miraj/href "/proj/widgets/snippet.html"
                                           :miraj/bower ""}
                            :miraj/help ""}})

;;;;;;;; COMPONENT: proj.gadgets/list ;;;;;;;;;;;;;;;;
(defn list
  "my-list component

  "
  [& args]
      (apply codom/element :proj-list args))
(alter-meta! (find-var (symbol (str *ns*) "list"))
             (fn [old new] (merge old new))
             {:miraj/miraj {:miraj/co-fn true
                            :miraj/element true
                            :miraj/html-tag :proj-list
                            :miraj/lib :miraj/demo
                            :miraj/assets {:miraj/href "/proj/widgets/list.html"
                                           :miraj/bower ""}
                            :miraj/help ""}})

;;;;;;;; COMPONENT: proj.gadgets/devices ;;;;;;;;;;;;;;;;
(defn devices
  "proj devices component

  "
  [& args]
      (apply codom/element :proj-devices args))
(alter-meta! (find-var (symbol (str *ns*) "devices"))
             (fn [old new] (merge old new))
             {:miraj/miraj {:miraj/co-fn true
                            :miraj/element true
                            :miraj/html-tag :proj-devices
                            :miraj/lib :miraj/demo
                            :miraj/assets {:miraj/href "/proj/widgets/devices.html"
                                           :miraj/bower ""}
                            :miraj/help ""}})


