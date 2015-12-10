(ns pingtai.business.common
  (:require
    [pingtai.db.entities :as entities]
    [clj-time.core :as ctime]
    [clj-time.coerce :as coerce]
    [pingtai.business.authentication :as auth])
  (:use
    [korma.core :rename {update korma-update}]))


(defn get-by-id [entity id]
  (-> (select* entity)
      (where {:id id})
      (limit 1)
      (select)
      (nth 0 nil)))

(defn get-by [entity m]
  (-> (select* entity)
      (where m)
      (select)))

(defn get-medias-by-obj [obj_id]
  "根据obj_id获取所有medias记录"
  (-> (select* entities/medias)
      (where {:id  [in (subselect
                         entities/objs_medias
                         (where {:obj_id obj_id})
                         (fields [:media_id]))]})
      (select)))

(defn get-media-url-by-obj [obj_id]
  "跟进obj_id获取第一个medias的访问地址"
  (-> (select* entities/medias)
      (where {:id (subselect
                    entities/objs_medias
                    (where {:obj_id obj_id})
                    (fields [:media_id])
                    (limit 1))})
      (fields [:media_url])
      (select)
      (nth 0 nil)
      (:media_url)))

(defn get-helper [id]
  "获得帮助说明"
  (get-by-id entities/helpers id))

(defn report-error [ystoken error]
  "报告错误"
  (let [user-id "1"
        id (auth/get-user-id ystoken)]
    (-> (insert* entities/report_errors)
        (values {:id    id
                 :error error
                 :ctime (coerce/to-sql-time (ctime/now))
                 :user_id user-id})
        (insert))))