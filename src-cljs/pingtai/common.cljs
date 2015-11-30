(ns pingtai.common
  (:require [reagent.session :as session]))

(defn get-ystoken []
  js/ystoken)

(defn shop-tip [mes]
  (session/put! "tip" [:p {:class "tip"} [:span mes]])
  (js/setTimeout #(session/remove! "tip") 3000))