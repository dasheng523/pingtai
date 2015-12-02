(ns pingtai.pagedata
  (:require [ajax.core :refer [GET POST]]
            [reagent.core :as reagent]))

(def timeout (* 20 60 1000))                                     ;过期时间 20 分


(def buffer-api-data (reagent/atom {}))

(defn set-api-data! [api-entity entity-data]
  "设置API值"
  (swap! buffer-api-data assoc  api-entity {:mtime (.getTime (js/Date.))
                                            :data entity-data}))

(defn reflesh-api! [{:keys [api-url api-params] :as api-entity}]
  "刷新API数据"
  (POST api-url {:params api-params
                 :handler #(do
                            (set-api-data!
                              api-entity
                              %))
                 :format :json
                 :response-format :json}))

(defn get-api-data [api-entity]
  "获取API数据"
  (or (get-in @buffer-api-data [api-entity :data])
      {}))

(defn auto-fill-data! [api-entity]
  "自动检查data是否过期，如果过去或者不存在就更新api数据"
  (let [entity (get-in @buffer-api-data [api-entity])
        mtime (get-in entity [:mtime])]
    (when (or (nil? mtime)
              (<= mtime (- (.getTime (js/Date.)) timeout)))
      (reflesh-api! api-entity))))










