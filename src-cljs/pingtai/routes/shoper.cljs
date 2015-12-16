(ns pingtai.routes.shoper
  (:require [pingtai.view.common :as view-common]
            [pingtai.common.routeframe :refer [defroute]]
            [pingtai.view.shoper :as shoper]
            [pingtai.common.utils :as common-utils]
            [pingtai.routes.common :as route-common]
            [pingtai.common.messqueue :as queue]))

(defn index [state _]
  "店铺首页"
  (let [shop-info {:url "/shoper/get-shop-info"
                   :params {:ystoken (common-utils/get-ystoken)}}]
    (-> state
        (assoc-in [:cpage] shoper/indexpage)
        (assoc-in [:datasource :shop-info] shop-info)
        (assoc-in [:remote :shop-info] {}))))

(defroute
  "/shop/yingxiangli"
  (fn [state _]
    (let [task-info {:url "/shoper/get-shoper-task"
                     :params {:ystoken (common-utils/get-ystoken)}}
          shop-score {:url "/shoper/score-detail"
                      :params {:ystoken (common-utils/get-ystoken)}}]
      (-> state
          (assoc-in [:cpage] shoper/yingxiangli)
          (assoc-in [:datasource :task-info] task-info)
          (assoc-in [:datasource :shop-score] shop-score)))))

(defroute
  "/shop/goodslist"
  (fn [state _]
    (let [goodslist {:url "/shoper/get-goods-list"
                     :params {:ystoken (common-utils/get-ystoken)}}]
      (-> state
          (assoc-in [:cpage] shoper/goodslist)
          (assoc-in [:datasource :goodslist] goodslist)
          (assoc-in [:pagedata "/shop/goodslist" :narbtn]
                    {:text "添加"
                     :href "#/shop/goodsinfo"})))))

(defroute
  "/shop/goodsinfo"
  (fn [state mess]
    (let [id (get-in mess [:params "id"])
          is-target-goods (fn [item]
                            (= (get item "id") id))]
      (-> state
          (assoc-in [:cpage] shoper/goodsinfo)
          (assoc-in [:pagedata "/shop/goodsinfo"]
                    (if id
                      {:goods-id id
                       :goods-info (-> (filter is-target-goods (get-in state [:remote :goodslist :data]))
                                     (first))
                       :narbtn {:text "保存"
                                :click #(queue/put-mess! {:url "/shop/save-goodsinfo" :goods-id id})}}
                      {:narbtn {:text "保存"
                                :click #(queue/put-mess! {:url "/shop/add-goodsinfo"})}}))))))


(defroute
  "/shop/add-goodsinfo"
  (fn [state _]
    (let [goodsinfo (get-in state [:pagedata "/shop/goodsinfo" :goods-info])]
      (route-common/send-data
        "/shoper/insert-goods-info"
        {:udata {:goods_name (get goodsinfo "goods_name")
                 :origin_price (str (get goodsinfo "origin_price"))
                 :new_price (str (get goodsinfo "new_price"))
                 :describe (get goodsinfo "describe")
                 :shop_notice (get goodsinfo "shop_notice")}
         :ystoken (common-utils/get-ystoken)}
        #(queue/put-mess! {:url "/shop/success-add-goodsinfo" :data %})
        nil))
    state))

(defroute
  "/shop/success-add-goodsinfo"
  (fn [state mess]
    (let [goods-id (get-in mess [:data "id"] )
          goodsinfo (-> (get-in state [:pagedata "/shop/goodsinfo" :goods-info])
                        (assoc "id" goods-id))
          now-time (.getTime (js/Date.))]
      (-> state
          (assoc-in [:redirect] :back)
          (assoc-in [:pagedata "/shop/goodsinfo" :goods-info] nil)
          (assoc-in [:remote :goodslist :mtime] now-time)
          (update-in [:remote :goodslist :data] conj goodsinfo)))))

(defroute
  "/shop/save-goodsinfo"
  (fn [state mess]
    (let [goods-id (get mess :goods-id)
          goodsinfo (get-in state [:pagedata "/shop/goodsinfo" :goods-info])
          now-time (.getTime (js/Date.))
          ystoken (common-utils/get-ystoken)]
      (route-common/send-data
        "/shoper/update-goods-info"
        {:goods_id goods-id
         :ystoken ystoken
         :udata {:goods_name (get goodsinfo "goods_name")
                 :origin_price (str (get goodsinfo "origin_price"))
                 :new_price (str (get goodsinfo "new_price"))
                 :describe (get goodsinfo "describe")
                 :shop_notice (get goodsinfo "shop_notice")}}
        nil nil)
      (-> state
          (assoc-in [:pagedata "/shop/goodsinfo" :goods-info] nil)
          (assoc-in [:remote :goodslist :mtime] now-time)
          (assoc-in [:remote :goodslist :data]
                    (for [item (get-in state [:remote :goodslist :data])]
                      (if (= goods-id (get item "id"))
                        (merge item goodsinfo)
                        item)))
          (assoc-in [:redirect] :back)))))


(defroute
  "/del-goods"
  (fn [state mess]
    (let [id (str (get mess :id))
          ystoken (common-utils/get-ystoken)]
      (route-common/send-data
        "/shoper/delete-goods-info"
        {:ystoken ystoken
         :goods_id id}
        nil
        nil)
      (update-in state
                 [:remote :goodslist :data]
                 (fn [list]
                   (remove #(= (get % "id") id) list))))))


(defroute
  "/shop/shopinfo"
  (fn [state _]
    (let [shopinfo-datasource {:url "/shoper/get-shop-info"
                               :params {:ystoken (common-utils/get-ystoken)}}]
      (-> state
          (assoc-in [:cpage] shoper/shopinfo)
          (assoc-in [:datasource :shopinfo] shopinfo-datasource)
          (assoc-in [:pagedata "/shop/shopinfo" :narbtn]
                    {:text "保存"
                     :href "#/shop/save-shop-info"})))))

(defroute
  "/shop/save-shop-info"
  (fn [state mess]
    (let [shopinfo (get-in state [:remote :shopinfo :data])
          post-data {:ystoken (common-utils/get-ystoken)
                     :shop_id (get shopinfo "id")
                     :udata {:name (get shopinfo "name")
                             :mobile (get shopinfo "mobile")
                             :address (get shopinfo "address")
                             :banner_media (get shopinfo "banner_media")
                             :blicence_media (get shopinfo "blicence_media")}}]
      (route-common/send-data
        "/shoper/update-shop-info"
        post-data
        nil
        nil)
      (assoc state :redirect :back))))

(defroute
  "/shop/helpinfo"
  (fn [state mess]
    (-> state
        (assoc-in [:cpage] shoper/helpinfo)
        (assoc-in [:datasource :helpinfo]
                  {:url "/common/get-help"
                   :params {:id (str (get-in mess [:params "id"]))}}))))

(defroute
  "/shop/topshop"
  (fn [state mess]
    (-> state
        (assoc-in [:cpage] shoper/topshop)
        (assoc-in [:datasource :topshop]
                  {:url "/shoper/get-shop-top"
                   :params {:ystoken (common-utils/get-ystoken)}}))))

(defroute
  "/error"
  (fn [state mess]
    (-> state
        (assoc-in [:cpage] view-common/error-page)
        (assoc-in [:error] mess))))



(defroute
  "/test"
  (fn [store res]
    (-> store
        (assoc-in [:remote {:url "http://192.168.23.105:3000/common/create-ystoken"
                            :params {:id "111"}}] {}))))