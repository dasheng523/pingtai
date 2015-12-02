(ns pingtai.event
  (:require [pingtai.common :as common]
            [pingtai.pagedata :as pagedata]))

(defn insert-goods [goods-info]
  (common/YSPOST
    "http://localhost:3000/shoper/insert-goods-info"
    {:ystoken  (common/get-ystoken)
     :udata    {:goods_name   (get goods-info "goods_name")
                :origin_price (str (get goods-info "origin_price"))
                :new_price    (str (get goods-info "new_price"))
                :describe     (get goods-info "describe")
                :shop_notice  (get goods-info "shop_notice")}}
    #(if (not= % 0)
      (do (common/shop-tip "保存成功")
          (pagedata/set-api-data! {:api-url "http://localhost:3000/shoper/get-goods-list"
                                   :api-params {:ystoken (common/get-ystoken)}}
                                  (conj (pagedata/get-api-data {:api-url "http://localhost:3000/shoper/get-goods-list"
                                                                :api-params {:ystoken (common/get-ystoken)}})
                                        (assoc goods-info "id" %))))
      (common/shop-tip "出现了一些小问题"))))

(defn update-goods [goods-info]
  (common/YSPOST
    "http://localhost:3000/shoper/update-goods-info"
    {:ystoken  (common/get-ystoken)
     :udata    {:goods_name   (get goods-info "goods_name")
                :origin_price (str (get goods-info "origin_price"))
                :new_price    (str (get goods-info "new_price"))
                :describe     (str (get goods-info "describe"))
                :shop_notice  (str (get goods-info "shop_notice"))}
     :goods_id (get goods-info "id")}
    #(if (= % 1)
      (common/shop-tip "保存成功")
      (common/shop-tip "出现了一些小问题"))))

(defn save-goods [apis]
  (fn []
    (let [goods-info (pagedata/get-api-data (first apis))]
      (if-not (empty? (:goods_id goods-info))
        (update-goods goods-info)
        (insert-goods goods-info)))))

(defn save-goods-field [api field]
  (fn []
    (let [v (.-value (.getElementById js/document "edit-box"))
          entity (pagedata/get-api-data api)
          new-entity (assoc entity field v)]
      (pagedata/set-api-data! api (assoc new-entity field v))
      (.back js/history))))