(ns pingtai.view.customer)


(defn nav []
  [:div.yscontainer.navbarr.red
   [:a {:href "javascript:" :class "navbarr-back"}
    [:i {:class "icon-chevron-left"}]]
   [:span {:class "navbarr-title"} "我的主页"]
   [:a {:href "#/customer/search" :class "navbarr-more"}
    [:i {:class "icon-search"}]]])


#_(defn footer []
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


#_(defn page-old []
  [:div
   [nav]
   [:div.scroll-wrapper
    [:div.scroller
     [(session/get "mainpage") (session/get "mainpage-params")]]]
   [footer]])

(defn page []
  [:div
   "customer"])

(defn open-shoper []
  [])