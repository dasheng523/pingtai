(ns pingtai.routes.home
  (:require [pingtai.layout :as layout]
            [compojure.core :refer [defroutes GET POST]]
            [ring.util.http-response :refer [ok found]]
            [ring.util.response :refer [response]]
            [clojure.java.io :as io]
            [pingtai.business.customer :as shop]
            [pingtai.business.authentication :as auth]
            [pingtai.business.wechat-api :as wechat]))

(def redirect-url "http://api.yunbzw.com")

(defn render-index [{:keys [session]} page]
  (if-let [ystoken (:ystoken session)]
    (layout/render page {:ystoken ystoken})
    (found (wechat/get-access-url redirect-url))))

(defn home-page [{:keys [params] :as req}]
  "顾客端首页"
  (if-let [myreq (if-let [code (get params "code")]
                   (if-let [ystoken (:ystoken (auth/create-ystoken-by-code code))]
                     (assoc-in req [:session :ystoken] ystoken)))]
    (render-index myreq "index.html")
    (render-index req "index.html")))

(defn shop-page [{:keys [params] :as req}]
  "店员端首页"
  (if-let [myreq (if-let [code (get params "code")]
                   (if-let [ystoken (:ystoken (auth/create-ystoken-by-code code))]
                     (assoc-in req [:session :ystoken] ystoken)))]
    (render-index myreq "shop.html")
    (render-index req "shop.html")))

(defn welcome []
  (layout/render "welcome.html"))



(defn test-setsession [{:keys [session]}]
  (-> (response "set!")
      (assoc-in [:session :ystoken] "44")))

(defroutes home-routes
           (GET "/" [:as req] (home-page req))
           (GET "/shopmanager" [:as req] (shop-page req))


           (GET "/docs" [] (ok (-> "docs/docs.md" io/resource slurp)))
           (GET "/welcome" [] (welcome))
           (GET "/shopinfo" [id] {:body {:id id :name "5234"}})
           (GET "/test" [:as req] (test-setsession req)))

