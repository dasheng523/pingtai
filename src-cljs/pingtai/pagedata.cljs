(ns pingtai.pagedata
  (:require [ajax.core :refer [GET POST]]
            [reagent.session :as session]
            [pingtai.common :as common]))

;;店铺端
(defn manager-shopinfo []
  {:data-url "http://localhost:3000/shoper/get-shop-index"
   :params {:ystoken (common/get-ystoken)}
   :id :manager-shopinfo})
(defn manager-scoredetail []
  {:data-url "http://localhost:3000/shoper/score-detail"
   :params {:ystoken (common/get-ystoken)}
   :id :manager-scoredetail})
(defn manager-shopertask []
  {:data-url "http://localhost:3000/shoper/get-shoper-task"
   :params {:ystoken (common/get-ystoken)}
   :id :manager-shopertask})
(defn manager-helpdata []
  {:data-url "http://localhost:3000/common/get-help"
   :params {:id "1"}
   :id :manager-helpdata})
(defn manager-goods []
  {:data-url "http://localhost:3000/shoper/get-goods-list"
   :params {:ystoken (common/get-ystoken)}
   :id :manager-goods})
(defn manager-goods-info []
  {:data-url "http://localhost:3000/shoper/get-goods-info"
   :params {:ystoken (common/get-ystoken)
            :goodsid (session/get :params)}
   :id :manager-goods-info})


(def timeout (* 20 60 1000))                                     ;过期时间 20 分

(defn get-entity-data [entity]
  (session/get-in [:entity (:id entity) :data]))

(defn- success-handle [entity-data]
  (fn [resp]
    (session/assoc-in!
      [:entity (:id entity-data)]
      {:data resp
       :mtime (.getTime (js/Date.))})))

(defn- error-handler [entity-data]
  (fn [{:keys [status status-text]}]
    (.log js/console (str "something bad happened: " status " " status-text " in entity-data:" @entity-data))))

(defn update! [entity]
  (let [dataurl (:data-url entity)
        params (:params entity)]
    (POST dataurl {:params params
                   :handler (success-handle entity)
                   :error-handler (error-handler entity)
                   :format :json
                   :response-format :json})))


(defn reflesh! [page-datas]
  (doseq [entity page-datas]
    (let [data (session/get-in [:entity (:id (entity))])
          mtime (get data :mtime)]
      (when (or (nil? mtime)
                (<= mtime (- (.getTime (js/Date.)) timeout)))
        (update! (entity))))))

(defn get-entitydata [entites]
  (reduce (fn [m entity]
         (assoc m (:id (entity)) (session/get-in [:entity (:id (entity)) :data])))
       {} entites))