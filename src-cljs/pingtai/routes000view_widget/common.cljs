(ns pingtai.routes000view_widget.common
  (:require
    [pingtai.common.routeframe :refer [defroute]]
    [pingtai.common.cview :as view-common]
    [pingtai.common.utils :as utils]
    [pingtai.common.messqueue :as queue]))

(defroute                                                   ;保持远程接口数据
  "/save-remote-data"
  (fn [state {:keys [data source-id]}]
    (-> state
        (assoc-in [:remote source-id] {:mtime (.getTime (js/Date.)) :data data}))))

(defroute                                                   ;展示错误
  "/export-error"
  (fn [state _]
    (-> state
        (assoc-in [:cpage] view-common/error-page)
        (assoc-in [:error] {:code 500 :msg "远程服务器有些异常，请等待修复。"}))))

(defroute
  "/remove-error-datasource"
  (fn [state mess]
    (-> state
        (update-in [:datasource] dissoc (:source-id mess)))))

(defroute
  "/remove-tip"
  (fn [state _]
    (-> state
        (dissoc :tip))))

(defroute
  "/tip"
  (fn [state mess]
    (-> state
        (assoc-in [:tip] (fn []
                           (js/setTimeout #(queue/put-mess! {:url "/remove-tip"}) 3000)
                           [:p {:class "tip"} [:span (:text mess)]])))))

(defn send-data [url params success-fn error-fn]
  "发送数据到服务端"
  (utils/YSPOST url params
                #(do (if success-fn (success-fn %)) (queue/put-mess! {:url "/tip" :text "修改成功"}))
                #(do (if error-fn (error-fn %)) (queue/put-mess! {:url "/tip" :text "服务器出现一些小问题"}))))

(defroute
  "/save-field"
  (fn [state mess]
    (-> state
        (assoc-in (:ks mess) (:value mess)))))

(defroute
  "reflesh-datasource"
  (fn [state _]
    (doseq [datasource (:datasource state)]
      (let [{:keys [url params]} (val datasource)
            source-id (key datasource)]
        (utils/YSPOST url params
                      #(queue/put-mess!
                        {:url "/save-remote-data"
                         :data %
                         :source-id source-id})
                      #(do
                        (queue/put-mess!
                          {:url "/remove-error-datasource"
                           :source-id source-id})
                        (queue/put-mess!
                          {:url "/export-error"
                           :source-id source-id})))))
    state))
