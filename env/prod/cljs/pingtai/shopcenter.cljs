(ns pingtai.shopcenterapp
  (:require [pingtai.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))


(core/shopmanager!)