(ns pingtai.wechat.wechat-api)

(ns pingtai.wechat.wechat-api
  (:require [pingtai.db.entities :as entities]
            [pandect.algo.sha1 :refer [sha1]]
            [clj-http.client :as client]
            [taoensso.carmine :as car :refer (wcar)]
            [pingtai.db.common :refer [wcar*]])
  (:use
    [korma.core :rename {update korma-update}]))

(defonce wechat-info (atom {}))

(defn- init-wechat-info []
  (let [wechat (-> (select* entities/wechats)
                   (where {:id "1"})
                   (select)
                   (nth 0 nil))]
    (reset! wechat-info wechat)))

(init-wechat-info)


(defn get-access-token []
  "获取access token"
  (if-let [access-token (wcar* (car/get "access-token"))]
    access-token
    (let [appid (:appid @wechat-info)
          appsecret (:appsecret @wechat-info)
          url (str "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=" appid "&secret=" appsecret)
          access-info (:body (client/get url {:as :json}))]
      (wcar* (car/set "access-token" (:access_token access-info))
             (car/expire "access-token" (:expires_in access-info)))
      (:access_token access-info))))

(defn get-page-access-token [code]
  "微信网页授权，可拿openid"
  (let [appid (:appid @wechat-info)
        appsecret (:appsecret @wechat-info)
        url (str "https://api.weixin.qq.com/sns/oauth2/access_token?appid=" appid "&secret=" appsecret "&code=" code "&grant_type=authorization_code")
        respinfo (:body (client/get url {:as :json}))]
    respinfo))

(defn get-access-url [redirect_url]
  "获取微信授权地址"
  (let [appid (:appid @wechat-info)]
    (str "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" appid "&redirect_uri=" redirect_url "&response_type=code&scope=snsapi_base#wechat_redirect")))

(defn checkSignature [signature timestamp nonce echostr]
  "微信接入校验"
  (let [token (:token @wechat-info)
        mysign (->> [token timestamp nonce]
                    sort
                    (apply str)
                    sha1)]
    (if (= mysign signature)
      echostr
      false)))