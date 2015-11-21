(ns pingtai.pagedata
  (:require [ajax.core :refer [GET POST]]))

(def pages {})
(def page1 [1 2 3 4 5])
(defrecord fill-config [data-url params])
(defrecord entity-data [coredata mtime fill-config])

(def timeout (* 60 10))                                     ;过期时间 60 秒

(defn- success-handle [entity-data]
  (fn [resp]
    (swap! entity-data update :coredata resp)
    (swap! entity-data update :mtime (.getTime js/Date.))))
(defn- error-handler [entity-data]
  (fn [{:keys [status status-text]}]
    (.log js/console (str "something bad happened: " status " " status-text " in entity-data:" entity-data))))

(defn update! [entity-data]
  (let [fillconfig (:fill-config entity-data)
        dataurl (:data-url fillconfig)
        params (:params fillconfig)]
    (POST dataurl {:params params
                   :handler (success-handle entity-data)
                   :error-handler (error-handler entity-data)
                   :format :raw
                   :response-format :json})))

(defn auto-update! [entity-data]
  )