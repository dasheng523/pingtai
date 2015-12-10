(ns pingtai.core
  (:require [reagent.core :as reagent]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [pingtai.common.messqueue :as messqueue]
            [pingtai.common.routeframe :as routes]
            [pingtai.common.bufferdata :as bufferdata]
            [pingtai.view.common :as view-common]
            [pingtai.common.utils :as utils]
            [pingtai.routes.common]
            [pingtai.routes.customer :as customer]
            [pingtai.routes.shoper :as shoper])
  (:import goog.History))

(enable-console-print!)

(messqueue/listen-event!)

(bufferdata/init!)

(utils/get-current-url)

(routes/defroute
  "/"
  (fn [state mess]
    (if (utils/get-view)
      (shoper/index state mess)
      (customer/index state mess))))

(defn hook-browser-navigation! []
  (doto (History.)
        (events/listen
          EventType/NAVIGATE
          (fn [event]
            (routes/dispatch! (.-token event))))
        (.setEnabled true)))

(defn mount-components []
  (reagent/render [#'view-common/main-page] (.getElementById js/document "app")))


(defn init! []
  (hook-browser-navigation!)
  (mount-components))
