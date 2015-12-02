(ns pingtai.view.common
  (:require
    [pingtai.common.bufferdata :as bufferdata]))


(defn error-page []
  "错误页面"
  (let [error (bufferdata/get-buffer :error-msg)]
    [:div {:class "errorbox"}
     [:div {:class "error-code"} (get error :code)]
     [:div {:class "error-text"} (get error :msg)]]))