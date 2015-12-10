(ns pingtai.common.utils
  (:require [ajax.core :refer [GET POST]]))


(defn get-ystoken []
  "获取ystoken"
  js/ystoken)

(defn get-view []
  "获取视图"
  js/view)

(defn get-current-url []
  "获取当前的地址 #以后的东西 除去参数"
  (let [location js/window.location.href
        hashp (nth (clojure.string/split location "#") 1 nil)
        url (nth (clojure.string/split hashp "?") 0 nil)]
    (if (nil? url) "/" url)))

(defn YSPOST [url params handler error-handler]
  (POST
    url
    {:params params
     :handler handler
     :error-handler error-handler
     :format :json
     :response-format :json}))
