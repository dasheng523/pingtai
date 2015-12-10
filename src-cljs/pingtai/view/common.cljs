(ns pingtai.view.common
  (:require
    [pingtai.common.bufferdata :as bufferdata]
    [pingtai.common.utils :as utils]
    [pingtai.view.shoper :as shoper]
    [pingtai.view.customer :as customer]))

(defn main-page []
  [:div
   (if (utils/get-view)
     [shoper/page]
     [customer/page])
   (if (bufferdata/get-buffer :tip)
     [(bufferdata/get-buffer :tip)])])


(defn error-page []
  "错误页面"
  (let [error (bufferdata/get-buffer :error)]
    [:div {:class "errorbox"}
     [:div {:class "error-code"} (get error :code)]
     [:div {:class "error-text"} (get error :msg)]]))
