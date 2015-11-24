(ns pingtai.business.customer
  (:require
    [clj-uuid :as uuid]
    [pingtai.db.entities :as entities]
    [clj-time.coerce :as coerce]
    [clj-time.core :as ctime]
    [pingtai.business.common :as bcommon]
    [pingtai.business.authentication :as auth])
  (:use
    [korma.core :rename {update korma-update}]))




(defn get-all-categorys []
  "获取所有分类信息"
  (-> (select* entities/categorys)
      (select)))

(defn create-category! [p]
  "创建一个分类"
  (let [id (.toString (uuid/v4))]
    (->
      (insert* entities/categorys)
      (values (assoc p :id id))
      (insert))
    id))

(defn get-sub-category [parent-id]
  "获取某分类的子分类"
  (-> (select* entities/categorys)
      (where (= parent-id :parent_id))
      (select)))


(defn get-home-goods [page]
  "获取首页商品列表"
  (map #(assoc % :img-url (bcommon/get-media-url-by-obj (:id %)))
       (-> (select* entities/goods)
           (order :visit_count :desc)
           (limit 10)
           (offset (* page 10))
           (select))))

(defn get-shop-list [page category_id]
  "获取店铺信息，按分数排序"
  (map #(assoc % :img-url (bcommon/get-media-url-by-obj (:id %)))
       (-> (select* entities/shops)
           (where {:id [in (subselect
                             entities/shops_categorys
                             (fields [:shop_id])
                             (where {:category_id category_id}))]})
           (order :score :desc)
           (limit 10)
           (offset (* page 10))
           (select))))

(defn get-goods-by-shopid [shopid]
  (-> (select* entities/goods)
      (where {:shop_id shopid})
      (select)))

(defn get-shop-info [shop-id ystoken]
  "获取店铺具体信息"
  (let [user-id (auth/get-user-id ystoken)
        shopinfo (bcommon/get-by-id entities/shops shop-id)
        users-like (bcommon/get-by entities/users_like_shops {:shop_id shop-id :user_id user-id})]
    (assoc
      shopinfo
      :imgs
      (bcommon/get-medias-by-obj shop-id)
      :goodslist
      (get-goods-by-shopid shop-id)
      :liked (not-empty users-like))))

(defn get-goods-info [goods-id ystoken]
  "获得商品具体信息"
  (let [user-id (auth/get-user-id ystoken)
        goodsinfo (bcommon/get-by-id entities/goods goods-id)
        users-like (bcommon/get-by entities/users_like_goods {:goods_id goods-id :user_id user-id})
        shopinfo (bcommon/get-by-id entities/shops (:shop_id goodsinfo))]
    (assoc
      goodsinfo
      :shopinfo shopinfo
      :imgs (bcommon/get-medias-by-obj goods-id)
      :liked (not-empty users-like))))

(defn like-goods! [goods-id ystoken relation_type]
  "用户与商品关系"
  (let [user-id (auth/get-user-id ystoken)
        id (.toString (uuid/v4))]
    (->
      (insert* entities/users_like_goods)
      (values {:id id :goods_id goods-id :user_id user-id :ctime (coerce/to-sql-time (ctime/now)) :relation_type relation_type})
      (insert))
    id))

(defn like-shop! [shop-id ystoken relation_type]
  "用户与店铺关系"
  (let [user-id (auth/get-user-id ystoken)
        id (.toString (uuid/v4))]
    (->
      (insert* entities/users_like_shops)
      (values {:id id :shop_id shop-id :user_id user-id :ctime (coerce/to-sql-time (ctime/now)) :relation_type relation_type})
      (insert))
    id))

(defn get-user-info [ystoken]
  "获取用户信息"
  (let [user-id (auth/get-user-id ystoken)]
    (bcommon/get-by-id entities/users user-id)))

(defn get-user-task [ystoken]
  "获取用户任务信息"
  (let [user-id (auth/get-user-id ystoken)
        tasklist (-> (select* entities/tasks)
                     (where (and (>= (coerce/to-sql-time (ctime/now)) :stime)
                                 (<= (coerce/to-sql-time (ctime/now)) :etime)
                                 (= :task_role 1)))
                     (select))
        where-cond (fn [que taskinfo]
                     (condp = (:task_type taskinfo)
                       1 (where que (and (= :user_id user-id)
                                         (= :task_id (:id taskinfo))
                                         (>= :ctime (coerce/to-sql-time (ctime/today-at 0 0 0)))))
                       2 (where que (and (= :user_id user-id)
                                         (= :task_id (:id taskinfo))
                                         (= (sqlfn WEEKOFYEAR (sqlfn now)) (sqlfn WEEKOFYEAR :ctime))))
                       (where que (and (= :user_id user-id)
                                       (= :task_id (:id taskinfo))))))]
    (map
      (fn [taskinfo]
        (assoc taskinfo :ready-done (->
                                      (select* entities/users_tasks)
                                      (aggregate (count :id) :cnt)
                                      (where-cond taskinfo)
                                      (select)
                                      (nth 0 nil)
                                      (:cnt))))
      tasklist)))

(defn search [k]
  "用户搜索内容：具体的商品，分类，店铺"
  (let [goodslist (->
                    (select* entities/goods)
                    (where {:goods_name [like (str "%" k "%")]})
                    (limit 10)
                    (order :visit_count :desc)
                    (select))
        shoplist (->
                   (select* entities/shops)
                   (where {:name [like (str "%" k "%")]})
                   (limit 10)
                   (order :score :desc)
                   (select))
        category (->
                   (select* entities/categorys)
                   (where {:title [like (str "%" k "%")]})
                   (limit 10)
                   (order :sort_num :desc)
                   (select))]
    {:goodslist goodslist
     :shoplist shoplist
     :category category}))
