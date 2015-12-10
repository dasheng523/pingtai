(ns pingtai.common.routeframe
  (:require
            [pingtai.common.messqueue :as messqueue]
            [clojure.string :as string]))


(defn defroute [url handler-fn]
  "定义一个消息处理器"
  (swap! messqueue/url-map assoc url handler-fn))

(def decode js/decodeURIComponent)
(defn decode-query-params
  "从请求参数中解析params map"
  [query-string]
  (let [parts (string/split query-string #"&")
        params (reduce
                 (fn [m part]
                   (let [[k v] (string/split part #"=" 2)]
                     (assoc m k (decode v))))
                 {}
                 parts)]
    params))

(defn- uri-with-leading-slash
  "Ensures that the uri has a leading slash"
  [uri]
  (if (= "/" (first uri))
    uri
    (str "/" uri)))
(defn- uri-without-prefix
  [uri]
  (string/replace uri (re-pattern (str "^" "#")) ""))

(defn dispatch! [uri]
  "处理浏览器跳转"
  (let [[uri-path query-string] (string/split (uri-without-prefix uri) #"\?")
        uri-path (uri-with-leading-slash uri-path)
        params (when query-string (decode-query-params query-string))]
    (messqueue/put-mess! {:url uri-path
                :params params})))
