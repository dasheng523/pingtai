(ns pingtai.view000widget.utils
  (:require [pingtai.common.bufferdata :as bufferdata]
            [pingtai.common.messqueue :as quque]))


(defn bing-input [input ks]
  "绑定输入控件"
  (let [bing-map {:value     (bufferdata/get-in-buffer ks)
                  :on-change #(quque/put-mess! {:url "/save-field" :ks ks :value (-> % .-target .-value)})}]
    (into []
          (if (some map? input)
            (for [item input]
              (if (map? item)
                (merge item bing-map)
                item))
            (conj input bing-map)))))

