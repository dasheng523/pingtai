(ns pingtai.routes000view_widget.customer
  (:require [pingtai.view000widget.customer :as customer]
            [pingtai.common.routeframe :refer [defroute]]))

(defn index [state mess]
  (-> state
      (assoc-in [:cpage] customer/index)))

(defroute
  "/customer/goodsinfo"
  (fn [state mess]
    (-> state
        (assoc-in [:cpage] customer/goods-info))))

(defroute
  "/customer/shoplist"
  (fn [state mess]
    (-> state
        (assoc-in [:cpage] customer/shoplist))))

(defroute
  "/customer/shopinfo"
  (fn [state mess]
    (-> state
        (assoc-in [:cpage] customer/shopinfo))))

(defroute
  "/customer/usercenter"
  (fn [state mess]
    (-> state
        (assoc-in [:cpage] customer/usercenter))))

(defroute
  "/customer/userlikeshoplist"
  (fn [state mess]
    (-> state
        (assoc-in [:cpage] customer/userlikeshoplist))))

(defroute
  "/customer/userlikegoodslist"
  (fn [state mess]
    (-> state
        (assoc-in [:cpage] customer/userlikegoodslist))))


(defroute
  "/customer/search"
  (fn [state mess]
    (-> state
        (assoc-in [:cpage] customer/search))))


(defroute
  "/customer/commentlist"
  (fn [state mess]
    (-> state
        (assoc-in [:cpage] customer/commentlist))))




