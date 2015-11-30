(ns pingtai.business.shoper
  (:require
    [pingtai.db.entities :as entities]
    [pingtai.business.common :as bcommon]
    [pingtai.business.authentication :as auth]
    [clj-time.coerce :as coerce]
    [clj-time.core :as ctime])
  (:use
    [korma.core :rename {update korma-update}]))


(defn get-shop-index [ystoken]
  "获取首页的数据"
  (let [user-id (auth/get-user-id ystoken)
        shop-info (-> (select* entities/shops)
                      (where {:ower_id user-id})
                      (select)
                      (nth 0 nil))
        ower-info (bcommon/get-by-id
                   entities/users
                   user-id)
        head_url (:media_url (bcommon/get-by-id
                                entities/medias
                                (:headimg ower-info)))
        banner_media (bcommon/get-by-id
                     entities/medias
                     (:banner_media shop-info))
        blicence_media (bcommon/get-by-id
                         entities/medias
                         (:blicence_media shop-info))]
    (assoc shop-info
      :head_url head_url
      :banner_media banner_media
      :blicence_media blicence_media)))

(defn get-goods-list [ystoken]
  "获取商品列表数据"
  (let [user-id (auth/get-user-id ystoken)
        shop-info (bcommon/get-by entities/shops {:ower_id user-id})
        goodslist (-> (select* entities/goods)
                      (where {:shop_id (:id (nth shop-info 0 nil))})
                      (select))]
    (map (fn [info]
           (assoc info
             :img_url (bcommon/get-media-url-by-obj (:id info))
             :medialist (bcommon/get-medias-by-obj (:id info))))
         goodslist)))

(defn get-goods-info [goods-id]
  "获取商品详情"
  (let [goodsinfo (bcommon/get-by-id entities/goods goods-id)]
    (assoc goodsinfo
      :medialist (bcommon/get-medias-by-obj goods-id))))

(defn score-detail [ystoken]
  "获取积分详情"
  (let [user-id (auth/get-user-id ystoken)
        shop-info (bcommon/get-by entities/shops {:ower_id user-id})
        score (:score (nth shop-info 0 nil))
        today-score (-> (select* entities/users_tasks)
                        (fields [(sqlfn sum :tasks.score) :total-score])
                        (join entities/tasks (= :tasks.id :users_tasks.task_id))
                        (where (and (>= :users_tasks.ctime (coerce/to-sql-time (ctime/today-at 0 0 0)))
                                    (and (= :tasks.task_role 2)
                                         (>= (coerce/to-sql-time (ctime/now)) :tasks.stime)
                                         (<= (coerce/to-sql-time (ctime/now)) :tasks.etime))))
                        #_(as-sql)
                        (select)
                        (nth 0 nil)
                        (:total-score))]                    ;TODO 排名没有做
    {:score score
     :todayscore today-score}))

(defn get-shoper-task [ystoken]
  "获取店员任务信息"
  (let [shoper-id (auth/get-user-id ystoken)
        tasklist (-> (select* entities/tasks)
                     (where (and (>= (coerce/to-sql-time (ctime/now)) :stime)
                                 (<= (coerce/to-sql-time (ctime/now)) :etime)
                                 (= :task_role 2)))
                     (select))
        where-cond (fn [que taskinfo]
                     (condp = (:task_type taskinfo)
                       1 (where que (and (= :user_id shoper-id)
                                         (= :task_id (:id taskinfo))
                                         (>= :ctime (coerce/to-sql-time (ctime/today-at 0 0 0)))))
                       2 (where que (and (= :user_id shoper-id)
                                         (= :task_id (:id taskinfo))
                                         (= (sqlfn WEEKOFYEAR (sqlfn now)) (sqlfn WEEKOFYEAR :ctime))))
                       (where que (and (= :user_id shoper-id)
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

(defn update-shop-info [udata shop-id]
  (-> (update* entities/shops)
      (set-fields udata)
      (where {:id shop-id})
      (korma-update)))

(defn update-goods-info [udata good-id]
  (-> (update* entities/goods)
      (set-fields udata)
      (where {:id good-id})
      (korma-update)))