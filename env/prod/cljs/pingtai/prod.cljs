(ns pingtai.app
  (:require [pingtai.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(defn ^:export init []
  (core/init!))

