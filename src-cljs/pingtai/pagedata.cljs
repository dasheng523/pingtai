(ns pingtai.pagedata
  (:require [ajax.core :refer [GET POST]]
            [reagent.core :as reagent]))

(defrecord fill-config [data-url params])
(defrecord entity-data [id data mtime fill-config])

(def top-shop-entity (reagent/atom
                       {:id :topshop-entity
                        :data-url "http://localhost:3000/getshop"}))
(def shopinfo (reagent/atom
                       {:id :shopinfo
                        :data-url "http://localhost:3000/shopinfo"}))

(def timeout (* 20 60 1000))                                     ;过期时间 20 分

(defn- success-handle [entity-data]
  (fn [resp]
    (swap! entity-data assoc :data resp)
    (swap! entity-data assoc :mtime (.getTime (js/Date.)))))
(defn- error-handler [entity-data]
  (fn [{:keys [status status-text]}]
    (.log js/console (str "something bad happened: " status " " status-text " in entity-data:" @entity-data))))

(defn update! [entity-data]
  (let [dataurl (:data-url @entity-data)
        params (:params @entity-data)]
    (GET dataurl {:params params
                   :handler (success-handle entity-data)
                   :error-handler (error-handler entity-data)
                   :format :raw
                   :response-format :json})))


(defn get-page-params [page-datas params]
  (reduce (fn [m entity-data]
            (let [data (:data @entity-data)
                  k (:id @entity-data)]
              (swap! entity-data assoc :params params)
              (if (or (nil? data)
                    (>= (- (.getTime (js/Date.)) (:mtime @entity-data)) timeout))
                (update! entity-data)) ;如果数据不存在或者已经超时，就刷新数据
              (assoc m k data))) {} page-datas))