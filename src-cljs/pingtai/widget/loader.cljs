(ns pingtai.widget.loader
  (:require [pingtai.widget.pageend :as pageend]))

(defn create-loader []
  (fn []
    [:div {:class "loading"}
     [:p
      [:i {:class "icon-spinner spin"}]]]))

(defn show-loader! [loader]
  (pageend/add-node! :loader loader))

(defn hide-loader! []
  (pageend/remove-node! :loader))