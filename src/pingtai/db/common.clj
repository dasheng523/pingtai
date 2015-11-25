(ns pingtai.db.common
  (:require [environ.core :refer [env]]))



(def database-url (str "jdbc:mysql:" (env :db-subname) "?user=" (env :db-user) "&password=" (env :db-password) "&&useUnicode=true&characterEncoding=UTF-8"))

(def redis-config {:host "localhost"
                   :port 6379
                   :timeout-ms 6000})