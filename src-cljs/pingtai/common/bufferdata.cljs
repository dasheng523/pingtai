(ns pingtai.common.bufferdata
  (:require [reagent.core :refer [atom]]))

(def state (atom {}))

(defn get-buffer [k]
  (get @state k))

