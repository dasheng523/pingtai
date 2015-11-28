(ns pingtai.db.common
  (:require [environ.core :refer [env]]
            [taoensso.carmine :as car]))



(def database-url (str "jdbc:mysql:" (env :db-subname) "?user=" (env :db-user) "&password=" (env :db-password) "&&useUnicode=true&characterEncoding=UTF-8"))

(def redis-config {:host "localhost"
                   :port 6379
                   :timeout-ms 6000})
(def server1-conn {:pool {} :spec redis-config})
(defmacro wcar* [& body] `(car/wcar server1-conn ~@body))