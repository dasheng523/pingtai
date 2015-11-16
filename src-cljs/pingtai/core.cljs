(ns pingtai.core
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [markdown.core :refer [md->html]]
            [ajax.core :refer [GET POST]]
            [pingtai.shopmanager :as shopmanager]
            [pingtai.customerview :as customerview])
  (:import goog.History))

(enable-console-print!)

(defn nav []
  [:div.yscontainer.navbarr.red
   [:a {:href "javascript:" :class "navbarr-back" :on-click #(.back js/history)}
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
  [:div.footer.flex-box
   [:div.flex-row
    [:a {:href "#/customer/index" :class "flex-item footer-item current"}
     [:i {:class "icon-money"}] [:br] "特价"]
    [:a {:href "#/customer/shoplist" :class "flex-item footer-item"}
     [:i {:class "icon-gift"}] [:br] "商家"]
    [:a {:href "#/customer/usercenter" :class "flex-item footer-item"}
     [:i {:class "icon-user"}] [:br] "我的"]]])

(def pages
  {:shop-index #'shopmanager/indexpage
   :yingxiangli #'shopmanager/yingxiangli
   :shopbargain #'shopmanager/shop-bargain
   :shop-shopinfo #'shopmanager/shopinfo
   :helpinfo #'shopmanager/helpinfo
   :goodsinfo #'shopmanager/goodsinfo
   :topshop #'shopmanager/topshop

   :goods #'customerview/goods
   :goodslist #'customerview/goodslist
   :commentlist #'customerview/commentlist
   :index #'customerview/index
   :shoplist #'customerview/shoplist
   :shopinfo #'customerview/shopinfo
   :usercenter #'customerview/usercenter
   :userlikeshoplist #'customerview/userlikeshoplist
   :userlikegoodslist #'customerview/userlikegoodslist
   :search #'customerview/search})

(defn page []
  [:div
   [nav]
   [(pages (session/get :page))]
   [footer]])

(defn page-shop []
  [:div
   [nav-shop]
   [(pages (session/get :page))]])

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute
  "/" []
  (session/put! :page :index))
(secretary/defroute
  "/customer/goods" []
  (session/put! :page :goods))
(secretary/defroute
  "/customer/goodslist" []
  (session/put! :page :goodslist))
(secretary/defroute
  "/customer/commentlist" []
  (session/put! :page :commentlist))
(secretary/defroute
  "/customer/index" []
  (session/put! :page :index))
(secretary/defroute
  "/customer/shoplist" []
  (session/put! :page :shoplist))
(secretary/defroute
  "/customer/shopinfo" []
  (session/put! :page :shopinfo))
(secretary/defroute
  "/customer/usercenter" []
  (session/put! :page :usercenter))
(secretary/defroute
  "/customer/userlikeshoplist" []
  (session/put! :page :userlikeshoplist))
(secretary/defroute
  "/customer/userlikegoodslist" []
  (session/put! :page :userlikegoodslist))
(secretary/defroute
  "/customer/search" []
  (session/put! :page :search))

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
