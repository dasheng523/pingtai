(ns pingtai.routes.home
  (:require [pingtai.layout :as layout]
            [compojure.core :refer [defroutes GET]]
            [ring.util.http-response :refer [ok]]
            [clojure.java.io :as io]))

(defn home-page []
  (layout/render "home.html"))

(defn welcome []
  (layout/render "welcome.html"))

(defroutes home-routes
           (GET "/" [] (home-page))
           (GET "/docs" [] (ok (-> "docs/docs.md" io/resource slurp)))
           (GET "/welcome" [] (welcome)))

