(ns pingtai.common.bufferdata
  (:require [reagent.core :refer [atom]]))

(def buffer (atom {}))

(defn init! []
  "初始化数据"
  (let [initdata {
                  :pagedata {
                             :common {:show-back true}
                             "/" {:show-back nil
                                  :title "店铺管理中心"}
                             }
                  }]
    (reset! buffer initdata)))

(defn get-buffer [k]
  "简单读取"
  (get @buffer k))

(defn get-in-buffer [k]
  (get-in @buffer k))

(defn swap-buffer! [ks v]
  (swap! buffer assoc-in ks v))

(defn get-pagedata [page k]
  (let [common (get-in @buffer [:pagedata :common])
        data (get-in @buffer [:pagedata page])
        mergedata (merge common data)]
    (get mergedata k)))

(defn reset-buffuer! [data]
  (reset! buffer data))

(defn merge-buffer [data]
  (swap! buffer merge data))

(defn remove-buffer [k]
  (swap! buffer dissoc k))

(defn get-once [ks]
  (let [v (get-in-buffer ks)]
    (swap! buffer assoc-in ks nil)
    v))

(defn set-buffer [k v]
  (swap! buffer assoc k v))

(defn get-all-buffer []
  @buffer)
