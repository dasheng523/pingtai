(ns pingtai.common
  (:require [reagent.session :as session]
            [ajax.core :refer [GET POST]]))

(defn get-ystoken []
  js/ystoken)

(defn shop-tip [mes]
  (session/put! "tip" [:p {:class "tip"} [:span mes]])
  (js/setTimeout #(session/remove! "tip") 3000))

(defn YSPOST [url params handler]
  (POST
    url
    {:params params
     :handler handler
     :format :json
     :response-format :json}))

(defn setpage [view params]
  (session/put! "mainpage" view)
  (session/put! "mainpage-params" params))


