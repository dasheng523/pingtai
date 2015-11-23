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
            [pingtai.pagedata :as pagedata])
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
   [:h3 {:class "page-title"} "个人中心"]
   [:a {:href "javascript:" :class "right-btn pull-right" :on-click #(.back js/history)}
    [:span {:class "glyphicon glyphicon-chevron-right"}]]])

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
  {:shop-index [#'shopmanager/indexpage []]
   :yingxiangli [#'shopmanager/yingxiangli []]
   :shopbargain [#'shopmanager/shop-bargain []]
   :shop-shopinfo [#'shopmanager/shopinfo []]
   :helpinfo [#'shopmanager/helpinfo []]
   :goodsinfo [#'shopmanager/goodsinfo []]
   :topshop [#'shopmanager/topshop []]

   "goods" [#'customerview/index [pagedata/top-shop-entity]]
   "goods-info" [#'customerview/goods []]
   "goods-list" [#'customerview/goodslist []]
   "goods-commentlist" [#'customerview/commentlist []]

   "shop" [#'customerview/shoplist []]
   "shop-info" [#'customerview/shopinfo [pagedata/shopinfo]]

   "user" [#'customerview/usercenter []]
   "user-likeshoplist" [#'customerview/userlikeshoplist []]
   "user-likegoodslist" [#'customerview/userlikegoodslist []]

   "search" [#'customerview/search []]})

(defn- page-render []
  [:div
   [nav]
   [:div.scroll-wrapper
    [:div.scroller
     (let [view (get-in pages [(session/get :page) 0])
           page-entitys (get-in pages [(session/get :page) 1])
           query (session/get :params)
           params (pagedata/get-page-params page-entitys query)]
       [view params])]]
   [footer]])

(defn page-shop []
  [:div
   [nav-shop]
   (let [view (get-in pages [(session/get :page) 0])
         page-entitys (get-in pages [(session/get :page) 1])
         query (session/get :params)
         params (pagedata/get-page-params page-entitys query)]
     [view params])])

(defn- page-did-amount []
  (.log js/console "page amount"))
(defn page []
  (reagent/create-class {:reagent-render page-render
                         :component-did-mount page-did-amount}))

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute
  "/" []
  (session/put! :page "goods"))
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
  (session/put! :page "shop-info")
  (session/put! :params query-params))

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
  (session/put! :page :shop-index))
(secretary/defroute
  "/shop/yingxiangli" []
  (session/put! :page :yingxiangli))
(secretary/defroute
  "/shop/shopbargain" []
  (session/put! :page :shopbargain))
(secretary/defroute
  "/shop/shopinfo" []
  (session/put! :page :shop-shopinfo))
(secretary/defroute
  "/shop/helpinfo" []
  (session/put! :page :helpinfo))
(secretary/defroute
  "/shop/goodsinfo" []
  (session/put! :page :goodsinfo))
(secretary/defroute
  "/shop/topshop" []
  (session/put! :page :topshop))

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
;; Initialize app
(defn mount-components []
  (reagent/render [#'page] (.getElementById js/document "app")))
(defn mount-components-shop []
  (reagent/render [#'page-shop] (.getElementById js/document "app")))

(defn init! []
  (hook-browser-navigation!)
  (mount-components))

(defn shopmanager! []
  (hook-browser-navigation!)
  (mount-components-shop))
