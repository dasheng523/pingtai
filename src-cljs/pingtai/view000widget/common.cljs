(ns pingtai.view000widget.common
  (:require
    [pingtai.common.bufferdata :as bufferdata]
    [pingtai.common.utils :as utils]
    [pingtai.view000widget.shoper :as shoper]
    [pingtai.view000widget.customer :as customer]
    [pingtai.widget.pageend :as pageend]))

(defn main-page []
  [:div
   (if (utils/get-view)
     [shoper/page]
     [customer/page])
   (if (bufferdata/get-buffer :tip)
     [(bufferdata/get-buffer :tip)])
   [pageend/display]])


