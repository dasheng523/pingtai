(ns pingtai.routes.customer)

(defn index [state mess]
  [:div "45"])

(defn open-shop [state mess]
  (assoc-in state 
    {:page customer/open-shop}))