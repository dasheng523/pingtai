(ns pingtai.db.entities
  (:require
    [environ.core :refer [env]]
    [korma.core :as korma]
    [korma.db :refer [defdb]]))

(defn- mysql [db-user db-password db-subname]
  "改编自korma，添加了utf-8的支持"
  {:user db-user
   :password db-password
   :classname "com.mysql.jdbc.Driver"
   :subprotocol "mysql"
   :subname db-subname
   :useUnicode "yes"
   :characterEncoding "UTF-8"
   :delimiters "`"})

(defdb db (mysql (env :db-user)
                 (env :db-password)
                 (env :db-subname)))

(declare categorys goods medias objs_medias shops shops_categorys tasks users users_like_goods users_like_shops users_tasks users_wechats wechats helpers)

(korma/defentity categorys)
(korma/defentity goods)
(korma/defentity medias)
(korma/defentity objs_medias)
(korma/defentity shops)
(korma/defentity shops_categorys)
(korma/defentity tasks)
(korma/defentity users)
(korma/defentity users_like_goods)
(korma/defentity users_like_shops)
(korma/defentity users_tasks)
(korma/defentity users_wechats)
(korma/defentity wechats)
(korma/defentity helpers)


