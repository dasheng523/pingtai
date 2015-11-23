(ns pingtai.routes.home
  (:require [pingtai.layout :as layout]
            [compojure.core :refer [defroutes GET POST]]
            [ring.util.http-response :refer [ok]]
            [clojure.java.io :as io]
            [pingtai.business.customer :as shop]))

(defn home-page []
  (layout/render "home.html"))

(defn welcome []
  (layout/render "welcome.html"))

(defroutes home-routes
           (GET "/" [] (home-page))
           (GET "/docs" [] (ok (-> "docs/docs.md" io/resource slurp)))
           (GET "/welcome" [] (welcome))
           (GET "/getshop" [] {:body [{:id 4 :name "qqq" :img-url "http://localhost:3000/images/1.png"}
                                      {:id 5 :name "222" :img-url "http://localhost:3000/images/2.png"}
                                      {:id 6 :name "5556" :img-url "http://localhost:3000/images/3.png"}
                                      {:id 7 :name "8988" :img-url "http://localhost:3000/images/4.png"}
                                      {:id 8 :name "8988" :img-url "http://localhost:3000/images/4.png"}
                                      {:id 9 :name "8988" :img-url "http://localhost:3000/images/4.png"}
                                      {:id 1 :name "8988" :img-url "http://localhost:3000/images/4.png"}
                                      {:id 2 :name "8988" :img-url "http://localhost:3000/images/4.png"}
                                      {:id 3 :name "8988" :img-url "http://localhost:3000/images/4.png"}
                                      {:id 6 :name "8988" :img-url "http://localhost:3000/images/4.png"}]})
           (GET "/shopinfo" [id] {:body {:id id
                                             :name "5234"}})
           (GET "/test" [] {:body (shop/get-all-categorys)}))

