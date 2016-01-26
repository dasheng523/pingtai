(ns pingtai.widget.pageend
  (:require [reagent.core :as reagent]))
;;页面底部模块

(def pageend-model (reagent/atom {}))

(defn display []
  [:div
   (doall
     (for [k (keys @pageend-model)]
       ^{:key k}
       [(get @pageend-model k)]))])

(defn add-node! [k node]
  (swap! pageend-model assoc k node))

(defn remove-node! [k]
  (swap! pageend-model dissoc k))