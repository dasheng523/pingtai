(ns pingtai.core
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [markdown.core :refer [md->html]]
            [ajax.core :refer [GET POST]]
            [pingtai.shopmanager :as shopmanager]
            [pingtai.customerview :as customerview]
            [pingtai.pagedata :as pagedata]
            [pingtai.common :as common])
  (:import goog.History))

(enable-console-print!)

(defn nav []
  [:div.yscontainer.navbarr.red
   [:a {:href "javascript:" :class "navbarr-back"}
    [:i {:class "icon-chevron-left"}]]
   [:span {:class "navbarr-title"} "我的主页"]
   [:a {:href "#/customer/search" :class "navbarr-more"}
    [:i {:class "icon-search"}]]])

(defn nav-shop []
  [:header
   [:a {:href "javascript:" :class "back-btn pull-left" :on-click #(.back js/history)}
    [:span {:class "glyphicon glyphicon-chevron-left"}]]
   [:h3 {:class "page-title"} (session/get "title")]
   (if-let [nar-btn (session/get "narbtn")]
     [:a {:href "javascript:" :class "right-btn pull-right" :on-click (:click nar-btn)}
      [:span {:class (str "glyphicon " (:icon nar-btn))}]])])

(defn footer []
  (let [items [{:url "#/goods" :name "特价" :icon "icon-money" :key "goods"}
               {:url "#/shop" :name "商家" :icon "icon-gift" :key "shop"}
               {:url "#/user" :name "我的" :icon "icon-user" :key "user"}]
        currentpage (session/get :page)
        currenttag (some #(if (>= (.indexOf currentpage (% :key)) 0) (% :key) nil) items)]
    (if currenttag
      [:div.footer.flex-box
       [:div.flex-row
        (for [item items]
          ^{:key (item :name)}
          [:a {:href (item :url)
               :class (str "flex-item footer-item " (if (= currenttag (item :key)) "current"))}
           [:i {:class (item :icon)}] [:br] (item :name)])]])))

(def pages
  {"shopmanager" [shopmanager/indexpage [pagedata/manager-shopinfo]]
   "shopmanager-yingxiangli" [#'shopmanager/yingxiangli [pagedata/manager-scoredetail pagedata/manager-shopertask]]
   "shopmanager-shopbargain" [#'shopmanager/shop-bargain [pagedata/manager-goods]]
   "shopmanager-shopinfo" [#'shopmanager/shopinfo []]
   "shopmanager-helpinfo" [#'shopmanager/helpinfo [pagedata/manager-helpdata]]
   "shopmanager-goodsinfo" [#'shopmanager/goodsinfo [pagedata/manager-goods-info]]
   "shopmanager-topshop" [#'shopmanager/topshop []]
   "shopmanager-editbox" [#'shopmanager/editbox []]

   "goods" [#'customerview/index []]
   "goods-info" [#'customerview/goods []]
   "goods-list" [#'customerview/goodslist []]
   "goods-commentlist" [#'customerview/commentlist []]

   "shop" [#'customerview/shoplist []]
   "shop-info" [#'customerview/shopinfo []]

   "user" [#'customerview/usercenter []]
   "user-likeshoplist" [#'customerview/userlikeshoplist []]
   "user-likegoodslist" [#'customerview/userlikegoodslist []]

   "search" [#'customerview/search []]})


(defn page-shop []
  [:div
   [nav-shop]
   (session/get "tip")
   [(session/get "mainpage") (session/get "mainpage-params")]])

(defn page []
  [:div
   [nav]
   [:div.scroll-wrapper
    [:div.scroller
     (let [view (get-in pages [(session/get :page) 0])
           page-entitys (get-in pages [(session/get :page) 1])
           datas (pagedata/get-entitydata page-entitys)]
       (pagedata/reflesh! page-entitys)
       [view datas])]]
   [footer]])

(defn pageload [view & api-entities]
  (doseq [api-entity api-entities]
    (pagedata/auto-fill-data! api-entity))
  (session/put! "mainpage" view)
  (session/put! "mainpage-params" api-entities))
;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute
  "/" []
  (session/put!
    :page
    (if (= (.-pathname js/window.location) "/shopmanager")
      "shopmanager"
      "goods")))
(secretary/defroute

  "/goods" []
  (session/put! :page "goods"))
(secretary/defroute
  "/goods/info" []
  (session/put! :page "goods-info"))
(secretary/defroute
  "/goods/list" []
  (session/put! :page "goods-list"))
(secretary/defroute
  "/goods/commentlist" []
  (session/put! :page "goods-commentlist"))

(secretary/defroute
  "/shop" []
  (session/put! :page "shop"))
(secretary/defroute
  "/shop/info" [query-params]
  (session/put! :page "shop-info"))

(secretary/defroute
  "/user" []
  (session/put! :page "user"))
(secretary/defroute
  "/user/likeshoplist" []
  (session/put! :page "user-likeshoplist"))
(secretary/defroute
  "/user/likegoodslist" []
  (session/put! :page ("user-likegoodslist")))
(secretary/defroute
  "/search" []
  (session/put! :page "search"))



(secretary/defroute
  "/shop/index" []
  (let [api {:api-url "http://localhost:3000/shoper/get-shop-index"
             :api-params {:ystoken (common/get-ystoken)}}]
    (pageload shopmanager/indexpage api)))
(secretary/defroute
  "/shop/yingxiangli" []
  (let [api {:api-url "http://localhost:3000/shoper/score-detail"
             :api-params {:ystoken (common/get-ystoken)}}
        task-api {:api-url "http://localhost:3000/shoper/get-shoper-task"
                  :api-params {:ystoken (common/get-ystoken)}}]
    (pageload shopmanager/yingxiangli api task-api)))
(secretary/defroute
  "/shop/shopbargain" []
  (let [api {:api-url "http://localhost:3000/shoper/get-goods-list"
             :api-params {:ystoken (common/get-ystoken)}}]
    (pageload shopmanager/shop-bargain api)))
(secretary/defroute
  "/shop/shopinfo" []
  (pageload "shopmanager-shopinfo"))
(secretary/defroute
  "/shop/helpinfo" []
  (pageload "shopmanager-helpinfo"))
(secretary/defroute
  "/shop/goodsinfo-:id" [id]
  (let [api {:api-url "http://localhost:3000/shoper/get-goods-info"
             :api-params {:ystoken (common/get-ystoken)
                          :goodsid id}}]
    (pageload shopmanager/goodsinfo api)))
(secretary/defroute
  "/shop/topshop" []
  (pageload "shopmanager-topshop"))
(secretary/defroute
  "/shop/editbox" []
  (pageload "shopmanager-editbox"))

;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
        (events/listen
          EventType/NAVIGATE
          (fn [event]
              (secretary/dispatch! (.-token event))))
        (.setEnabled true)))




(defn init! []
  (hook-browser-navigation!)
  (reagent/render [#'page] (.getElementById js/document "app")))

(defn shopmanager! []
  (hook-browser-navigation!)
  (reagent/render [#'page-shop] (.getElementById js/document "app")))
