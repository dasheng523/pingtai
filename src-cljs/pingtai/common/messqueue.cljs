(ns pingtai.common.messqueue
  [:require [cljs.core.async :as async]
            [pingtai.common.bufferdata :as bufferdata]
            [pingtai.common.utils :as utils]]
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

;要做的是建设类似ring的机制。所有消息都经过一个个handler进行处理，而后经过route进行转发等等。

(def mess-chan (async/chan 100))
(def ^:dynamic url-map (atom {}))


(defn put-mess! [mess]
  "加入消息"
  (go
    (async/>! mess-chan mess)))


(defn default-routes [store mess]
  "路由器"
  (let [url (:url mess)
        handler (get @url-map url)]
    (if handler
      (handler store mess)
      (throw (js/Error. "您要找的页面似乎有点小问题")))))

(def timeout (* 20 60 1000))

(defn wrap-parse-data [handler]
  "解析接口，并获取接口数据"
  (fn [store mess]
    (let [newstore (handler store mess)
          data-ids (keys (:datasource newstore))
          is-need-update (fn [source-id]
                           (let [data (get (:remote newstore) source-id)
                                 mtime (:mtime data)
                                 avoitime (- (.getTime (js/Date.)) timeout)]
                             (if (or (nil? mtime) (<= mtime avoitime))
                               true
                               nil)))
          need-update-ids (filter is-need-update data-ids)]
      ;更新数据
      (doseq [source-id need-update-ids]
        (let [{:keys [url params]} (get (:datasource newstore) source-id)]
          (utils/YSPOST url params
                        #(put-mess!
                          {:url "/save-remote-data"
                           :data %
                           :source-id source-id})
                        #(do
                          (put-mess!
                            {:url "/remove-error-datasource"
                             :source-id source-id})
                          (put-mess!
                            {:url "/export-error"
                             :source-id source-id})))))
      newstore)))


(defn wrap-save-state [handler]
  "保存状态"
  (fn [store mess]
    (let [resp (handler store mess)]
      (bufferdata/reset-buffuer! resp))))

(defn wrap-page-redirect [handler]
  "跳转控制器"
  (fn [store mess]
    (let [resp (handler store mess)]
      (when-let [redict (:redirect resp)]
        (bufferdata/remove-buffer :redirect)
        (condp = redict
          :back (.back js/history)
          :forward (.forward js/history)
          (set! js/window.location.href redict))))))

(defn wrap-exception [handler]
  "异常处理器"
  (fn [store mess]
    (try
      (handler store mess)
      (catch js/Error e
        (bufferdata/set-buffer :cpage pingtai.view.common/error-page)
        (bufferdata/set-buffer :error {:code 500 :msg (.-message e)})))))


(defn wrap-base [handler]
  (-> handler
      wrap-parse-data
      wrap-save-state
      wrap-page-redirect
      wrap-exception))

(defn listen-event! []
  "监听消息"
  (go
    (while true
      (let [mess (async/<! mess-chan)]
        ((wrap-base default-routes) (bufferdata/get-all-buffer) mess)))))
