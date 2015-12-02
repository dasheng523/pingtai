(ns pingtai.messqueue
  [:require [cljs.core.async :as async]]
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

;要做的是建设类似ring的机制。所有消息都经过一个个handler进行处理，而后经过route进行转发等等。

(def mess-chan (async/chan 100))
(def url-map (atom {}))

(defn put-mess! [mess]
  "加入消息"
  (go
    (async/>! mess-chan mess)))

(defn default-routes [mess]
  "路由器"
  (let [url (:url mess)
        handler (get @url-map url)]
    (if handler
      (handler mess)
      (throw (js/Error. {:mes "您要找的页面不存在" :code 404})))))

(defn def-messhandler [url handler-fn]
  "定义一个消息处理器"
  (swap! url-map assoc url handler-fn))


(defn wrap-page-redirect [handler]
  "跳转控制器"
  (fn [mess]
    (if-let [redict (:redirect (handler mess))]
      (condp = redict
        :back (.back js/history)
        :forward (.forward js/history)
        (set! js/window.location.href redict)))))

(defn wrap-exception [handler]
  "异常处理器"
  (fn [mess]
    (try
      (handler mess)
      (catch js/Error e
        (println e)
        ))))

(defn wrap-base [handler]
  (-> handler
      wrap-page-redirect
      wrap-exception))


(go
  (while true
    ((wrap-base default-routes) (async/<! mess-chan))))


;TEST
(put-mess! {:url "/home"})