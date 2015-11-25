(ns pingtai.business.wechat-api
  (:require [pingtai.db.entities :as entities]
            [pingtai.business.common :as bcommon]
            [pandect.algo.sha1 :refer [sha1]])
  (:use
    [korma.core :rename {update korma-update}])
  (:import (java.security MessageDigest)))

(defn get-openid-by-code [code]
  "微信网页授权，通过code拿openid"
  ())

(defn checkSignature [signature timestamp nonce echostr]
  "微信接入校验"
  (let [token (-> (select* entities/wechats)
                  (where {:id "1"})
                  (fields :token)
                  (select)
                  (nth 0 nil)
                  (:token))
        mysign (->> [token timestamp nonce]
                   sort
                   (apply str)
                    sha1)]
    (if (= mysign signature)
      echostr
      false)))