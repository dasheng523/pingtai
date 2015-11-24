(ns pingtai.business.authentication
  (:require [taoensso.carmine :as car :refer (wcar)]
            [environ.core :refer [env]]
            [clj-uuid :as uuid]
            [pingtai.db.entities :as entities])
  (:use
    [korma.core :rename {update korma-update}]))

(def server1-conn {:pool {} :spec (env :redis-config)})
(defmacro wcar* [& body] `(car/wcar server1-conn ~@body))

(defn create-ystoken [user-id]
  "创建一个ystoken"
  (let [ystoken (uuid/v4)
        k (str "ystoken_" ystoken)]
    (wcar* (car/set k user-id)
           (car/expire k (* 3600 24 3)))
    ystoken))

(defn get-user-id [ystoken]
  "通过ystoken获取user-id"
  (wcar* (car/get (str "ystoken_" ystoken))))

(defn get-user-id-by-openid [openid]
  "通过openid获取user-id"
  (-> (select* entities/users_wechats)
      (where {:openid openid})
      (fields :user_id)
      (select)
      (nth 0 nil)
      (:user_id)))

(defn create-ystoken-by-code [code]
  "通过微信CODE获得对应的ystoken"
  (if (env :dev)
    (create-ystoken "1")
    ;TODO
    ))