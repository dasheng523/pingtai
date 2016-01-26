(ns pingtai.business000db_wechat.authentication
  (:require [taoensso.carmine :as car :refer (wcar)]
            [environ.core :refer [env]]
            [clj-uuid :as uuid]
            [pingtai.db.entities :as entities]
            [pingtai.db.common :refer [wcar*]]
            [pingtai.wechat000db.wechat-api :as wechat])
  (:use
    [korma.core :rename {update korma-update}]))


(defn create-ystoken [user-id]
  "创建一个ystoken"
  (if-not (nil? user-id)
    (let [ystoken (uuid/v4)
          k (str "ystoken_" ystoken)]
      (wcar* (car/set k user-id)
             (car/expire k (* 3600 24 3)))
      ystoken)))

(defn get-user-id [ystoken]
  "通过ystoken获取user-id"
  (wcar* (car/get (str "ystoken_" ystoken))))

(defn verifite-ystoken [ystoken]
  "验证ystoken是否有效"
  (if-not (nil? (get-user-id ystoken))
    true
    false))

(defn get-user-id-by-openid [openid]
  "通过openid获取user-id"
  (if-not (nil? openid)
    (-> (select* entities/users_wechats)
        (where {:openid openid})
        (fields :user_id)
        (select)
        (nth 0 nil)
        (:user_id))))

(defn create-ystoken-by-code [code]
  "通过微信CODE获得对应的ystoken"
  (-> (wechat/get-page-access-token code)
      (:openid)
      (get-user-id-by-openid)
      (create-ystoken)))