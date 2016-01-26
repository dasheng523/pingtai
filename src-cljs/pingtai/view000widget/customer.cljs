(ns pingtai.view000widget.customer
  (:require [pingtai.common.bufferdata :as bufferdata]
            [reagent.core :as reagent]
            [pingtai.common.utils :as utils]
            [pingtai.widget.scroller :as scroller]))


(defn nav []
  [:div.yscontainer.navbarr.red
   (if (bufferdata/get-pagedata (utils/get-current-url) :show-back)
     [:a {:href "javascript:" :class "navbarr-back" :on-click #(.back js/history)}
      [:i {:class "icon-chevron-left"}]])
   [:span {:class "navbarr-title"} "我的主页"]
   [:a {:href "#/customer/search" :class "navbarr-more"}
    [:i {:class "icon-search"}]]])

(defn footer []
    (let [items [{:url "#/" :name "特价" :icon "icon-money" :key "goods"}
                 {:url "#/customer/shoplist" :name "商家" :icon "icon-gift" :key "shop"}
                 {:url "#/customer/usercenter" :name "我的" :icon "icon-user" :key "user"}]
          #_currentpage #_(session/get :page)
          currenttag (some #(if (>= (.indexOf "/" (% :key)) 0) (% :key) nil) items)]
      (if true
        [:div.footer.flex-box
         [:div.flex-row
          (for [item items]
            ^{:key (item :name)}
            [:a {:href (item :url)
                 :class (str "flex-item footer-item " (if (= currenttag (item :key)) "current"))}
             [:i {:class (item :icon)}] [:br] (item :name)])]])))

(defn index []
  [:div {:class "animated bounceInRight"}
   [:div {:class "panel flex-box fastmenu"}
    [:div {:class "flex-row"}
     [:a {:href "javascript:" :class "flex-item fastmenu-item"} [:i {:class "icon-food"}] [:br] "饮食"]
     [:a {:href "javascript:" :class "flex-item fastmenu-item"} [:i {:class "icon-github-alt"}] [:br] "服装"]
     [:a {:href "javascript:" :class "flex-item fastmenu-item"} [:i {:class "icon-music"}] [:br] "娱乐"]
     [:a {:href "javascript:" :class "flex-item fastmenu-item"} [:i {:class "icon-reorder"}] [:br] "更多"]]]
   [:div {:class "panel margin-top"}
    [:div {:class "panel-title"}
     "特价商品"
     [:a {:class "panel-title-more" :href "javascript:"} "更多" [:i.icon-chevron-right]]]
    [:div {:class "list"}
     [:a {:class "list-item" :href "#/customer/goodsinfo"}
      [:img {:src "images/1.png" :class "list-item-img"}]
      [:div {:class "list-item-infobox"}
       [:h5.title "螺公堂螺狮粉555" [:span.local "<500m"]]
       [:p.desc "原味螺狮粉1份，免费WIFI，免预约WIFI，免预约WIFI，免预约"]
       [:p.morebox [:span.price "￥" "9.8"] [:span.oldprice "￥" "18"] [:span.likenum.pull-right "1088人喜欢"]]]]
     [:a {:class "list-item" :href "javascript:"}
      [:img {:src "images/1.png" :class "list-item-img"}]
      [:div {:class "list-item-infobox"}
       [:h5.title "螺公堂螺狮粉" [:span.local "<500m"]]
       [:p.desc "原味螺狮粉1份，免费WIFI，免预约"]
       [:p.morebox [:span.price "￥" "9.8"] [:span.oldprice "￥" "18"] [:span.likenum.pull-right "1088人喜欢"]]]]
     [:a {:class "list-item" :href "javascript:"}
      [:img {:src "images/1.png" :class "list-item-img"}]
      [:div {:class "list-item-infobox"}
       [:h5.title "螺公堂螺狮粉" [:span.local "<500m"]]
       [:p.desc "原味螺狮粉1份，免费WIFI，免预约"]
       [:p.morebox [:span.price "￥" "9.8"] [:span.oldprice "￥" "18"] [:span.likenum.pull-right "1088人喜欢"]]]]
     [:a {:class "list-item" :href "javascript:"}
      [:img {:src "images/1.png" :class "list-item-img"}]
      [:div {:class "list-item-infobox"}
       [:h5.title "螺公堂螺狮粉" [:span.local "<500m"]]
       [:p.desc "原味螺狮粉1份，免费WIFI，免预约"]
       [:p.morebox [:span.price "￥" "9.8"] [:span.oldprice "￥" "18"] [:span.likenum.pull-right "1088人喜欢"]]]]]]])

(defn goods-info []
  [:div {:class "animated bounceInRight"}
   [:a.shopbanner
    [:img {:src "images/1.png"}]
    [:span.piccount "5张"]]
   [:div
    [:div.panel
     [:div.list
      [:div.list-item.text-center "水果拼盘"]
      [:div.list-item.other-msg "价格：" [:span.primary-msg "￥5.9元"] [:span.other-msg " 每公斤"] [:span.default-msg.pull-right [:strong "5000"] "人喜欢"]]
      [:div.list-item.goodsbtn
       [:div.flex-box
        [:div.flex-row
         [:a.flex-item.text-center.info-text {:href "javascript:"} [:i.icon-heart-empty] " 喜欢"]
         [:a.flex-item.text-center.info-text {:href "javascript:"} [:i.icon-share-alt] " 分享"]]]]]]
    [:div.panel.margin-top
     [:div.panel-title "店铺信息"]
     [:div.list
      [:div.list-item.other-msg "店名：" [:span.default-msg "业翔鸭脚批发市场"] ]
      [:div.list-item.other-msg "地址：" [:span.default-msg "西门口二项50号二楼转角"] ]
      [:div.list-item
       [:div.flex-box.goodsbtn
        [:div.flex-row
         [:a.flex-item.text-center.primary-text {:href "tel:18938657523"} [:i.icon-phone] " 立即联系"]
         [:a.flex-item.text-center.info-text {:href "#/customer/shopinfo"} [:i.icon-home] " 查看店铺"]]]]]]
    [:div.panel.margin-top
     [:div.panel-title "说明"]
     [:div.list-item.default-msg
      "辣椒是在明末从美洲传入中国的，起初只是作为观赏作物和药物，进入中国菜谱的时间并不太长。辣椒强势进入中国后，掀起了一场不大不小的饮食革命，柳州人将之融入螺蛳粉并加以发挥，才有了螺蛳粉。很多吃过螺蛳粉质疑螺蛳粉里为什么一颗螺蛳也没有，据说螺蛳粉的螺汤由螺肉、猪骨、药材、天然香料等民间秘方熬制而成，熬过汤后的螺肉就会丢弃，因其精华都浓缩入汤里了"]]
    [:div.panel.margin-top
     [:div.panel-title "购买须知"]
     [:div.list-item.default-msg
      "辣椒是在明末从美洲传入中国的，起初只是作为观赏作物和药物，进入中国菜谱的时间并不太长。辣椒强势进入中国后，掀起了一场不大不小的饮食革命，柳州人将之融入螺蛳粉并加以发挥，才有了螺蛳粉。很多吃过螺蛳粉质疑螺蛳粉里为什么一颗螺蛳也没有，据说螺蛳粉的螺汤由螺肉、猪骨、药材、天然香料等民间秘方熬制而成，熬过汤后的螺肉就会丢弃，因其精华都浓缩入汤里了"]]]])

(defn shoplist []
  (let [show-cate (reagent/atom nil)]
    [:div {:class "animated bounceInRight"}
     [:div {:class "panel"}
      [:div {:class "panel-title"}
       "北流名店"
       [:a {:class "panel-title-more" :href "javascript:"} "更多" [:i.icon-chevron-right]]]
      [:div.famousshop.swiper-container.flex-box
       [:div.swiper-wrapper.flex-row
        (for [i (range 3)]
          ^{:key i}
          [:a.famousshop-item.flex-item {:href (str "#/shop/info?id=1")} [:img {:src (get (get nil i) "img-url") :class "famousshop-img"}] [:br] (get (get nil i) "name")])]
       [:div.swiper-wrapper.flex-row
        (for [i (range 3 6)]
          ^{:key i}
          [:a.famousshop-item.flex-item {:href (str "#/shop/info?id=2")} [:img {:src (get (get nil i) "img-url") :class "famousshop-img"}] [:br] (get (get nil i) "name")])]
       [:div.swiper-wrapper.flex-row
        (for [i (range 6 9)]
          ^{:key i}
          [:a.famousshop-item.flex-item {:href (str "#/shop/info?id=3")} [:img {:src (get (get nil i) "img-url") :class "famousshop-img"}] [:br] (get (get nil i) "name")])]
       [:div {:class "famousshop-ctrl swiper-pagination"}]]]
     #_[:div.panel.flex-box.categorybox
      [:div.flex-row
       [:a {:class "flex-item categorybox-item current" :href "javascript:" :on-click #(reset! show-cate true)} "全部分类 " [:i.icon-sort-down]]
       [:a {:class "flex-item categorybox-item" :href "javascript:"} "全城范围 " [:i.icon-sort-down]]]]
     #_(if @show-cate
       [:div.categorydetailbox.yscontainer
        [:div.categorydetailbox-left
         [:a {:class "categorydetailbox-item" :href "javascript:"} [:i.icon-map-marker] " 电影" [:i.icon-angle-right.pull-right]]
         [:a {:class "categorydetailbox-item" :href "javascript:"} [:i.icon-map-marker] " 电影" [:i.icon-angle-right.pull-right]]
         [:a {:class "categorydetailbox-item" :href "javascript:"} [:i.icon-map-marker] " 电影" [:i.icon-angle-right.pull-right]]
         [:a {:class "categorydetailbox-item" :href "javascript:"} [:i.icon-map-marker] " 电影"]]
        [:div.categorydetailbox-right
         [:a {:class "categorydetailbox-item" :href "javascript:"}  " 电影" ]
         [:a {:class "categorydetailbox-item" :href "javascript:"}  " 电影" ]
         [:a {:class "categorydetailbox-item" :href "javascript:"}  " 电影" ]
         [:a {:class "categorydetailbox-item" :href "javascript:"}  " 电影" ]]
        [:div.mask {:on-click #(reset! show-cate nil)}]])
     [:div.panel {:class "margin-top"}
      [:div {:class "panel-title"}
       "附近店铺"]
      [:div {:class "list"}
       [:a {:class "list-item" :href "#/customer/shopinfo"}
        [:img {:src "images/1.png" :class "list-item-img"}]
        [:div {:class "list-item-infobox"}
         [:h5.title "螺公堂螺狮粉店" ]
         [:p.desc "北流市城中路国展大厦（旧电影院对面）"]
         [:p.morebox [:span.likenum "影响力：50000"] [:span.likenum.pull-right "<500m"]]]]
       [:a {:class "list-item" :href "javascript:"}
        [:img {:src "images/1.png" :class "list-item-img"}]
        [:div {:class "list-item-infobox"}
         [:h5.title "螺公堂螺狮粉店" ]
         [:p.desc "北流市城中路国展大厦（旧电影院对面）"]
         [:p.morebox [:span.likenum "影响力：50000"] [:span.likenum.pull-right "<500m"]]]]
       [:a {:class "list-item" :href "javascript:"}
        [:img {:src "images/1.png" :class "list-item-img"}]
        [:div {:class "list-item-infobox"}
         [:h5.title "螺公堂螺狮粉店" ]
         [:p.desc "北流市城中路国展大厦（旧电影院对面）"]
         [:p.morebox [:span.likenum "影响力：50000"] [:span.likenum.pull-right "<500m"]]]]
       [:a {:class "list-item" :href "javascript:"}
        [:img {:src "images/1.png" :class "list-item-img"}]
        [:div {:class "list-item-infobox"}
         [:h5.title "螺公堂螺狮粉店" ]
         [:p.desc "北流市城中路国展大厦（旧电影院对面）"]
         [:p.morebox [:span.likenum "影响力：50000"] [:span.likenum.pull-right "<500m"]]]]
       [:a {:class "list-item" :href "javascript:"}
        [:img {:src "images/1.png" :class "list-item-img"}]
        [:div {:class "list-item-infobox"}
         [:h5.title "螺公堂螺狮粉店" ]
         [:p.desc "北流市城中路国展大厦（旧电影院对面）"]
         [:p.morebox [:span.likenum "影响力：50000"] [:span.likenum.pull-right "<500m"]]]]
       [:a {:class "list-item" :href "javascript:"}
        [:img {:src "images/1.png" :class "list-item-img"}]
        [:div {:class "list-item-infobox"}
         [:h5.title "螺公堂螺狮粉店" ]
         [:p.desc "北流市城中路国展大厦（旧电影院对面）"]
         [:p.morebox [:span.likenum "影响力：50000"] [:span.likenum.pull-right "<500m"]]]]
       [:a {:class "list-item" :href "javascript:"}
        [:img {:src "images/1.png" :class "list-item-img"}]
        [:div {:class "list-item-infobox"}
         [:h5.title "螺公堂螺狮粉店" ]
         [:p.desc "北流市城中路国展大厦（旧电影院对面）"]
         [:p.morebox [:span.likenum "影响力：50000"] [:span.likenum.pull-right "<500m"]]]]]]]))

(defn shopinfo []
  [:div {:class "animated bounceInRight"}
   [:div {:class "shopbanner"}
    [:img {:src "images/1.png"}]
    [:span {:class "piccount"} "20张"]]
   [:div {:class "panel shopinfobox"}
    [:div {:class "panel-title text-center"} "好味道" [:br]
     [:span.panel-title-other "影响力：" [:strong "5000"]]]
    [:div {:class "list"}
     [:a {:class "list-item infobox-item"} [:i.icon-phone {:style {:color "red" :margin-right "10px"}}] "0775-6234488" [:i.icon-angle-right.pull-right]]
     [:a {:class "list-item infobox-item"} [:i.icon-map-marker {:style {:color "red" :margin-right "10px"}}] "北流市城中路国展大厦（即旧电影院对面）"]]]
   [:div {:class "panel margin-top"}
    [:div {:class "panel-title"} "热门商品"]
    [:div {:class "list"}
     [:a {:class "list-item" :href "#/customer/shopinfo"}
      [:img {:src "images/1.png" :class "list-item-img"}]
      [:div {:class "list-item-infobox"}
       [:h5.title "双人麻辣烫，免预约" ]
       [:p.price "￥15.8"]
       [:p.morebox [:span.likenum "50000人喜欢"]]]]
     [:a {:class "list-item" :href "#/customer/shopinfo"}
      [:img {:src "images/1.png" :class "list-item-img"}]
      [:div {:class "list-item-infobox"}
       [:h5.title "双人麻辣烫，免预约" ]
       [:p.price "￥15.8"]
       [:p.morebox [:span.likenum "50000人喜欢"]]]]
     [:a {:class "list-item" :href "#/customer/shopinfo"}
      [:img {:src "images/1.png" :class "list-item-img"}]
      [:div {:class "list-item-infobox"}
       [:h5.title "双人麻辣烫，免预约" ]
       [:p.price "￥15.8"]
       [:p.morebox [:span.likenum "50000人喜欢"]]]]]]])

(defn usercenter []
  [:div {:class "animated bounceInRight"}
   [:div.usercenter-banner
    [:div.usercenter-userinfo
     [:img {:src "images/head.png"}] [:br]
     [:span {:class "usercenter-uname"} "夜声"]]]
   [:div.margin-top
    [:div.panel
     [:div.list
      [:div.list-item.text-center.primary-text "积分：" [:strong "288"] "分"]
      [:a.list-item [:i.icon-hand-right.primary-text] [:span.list-item-text.margin-left "积分兑换"] [:i.icon-angle-right.pull-right]]
      [:a.list-item {:href "#/customer/userlikeshoplist"} [:i.icon-heart-empty.primary-text] [:span.list-item-text.margin-left "我喜欢的店铺"]  [:i.icon-angle-right.pull-right]]
      [:a.list-item {:href "#/customer/userlikegoodslist"} [:i.icon-heart-empty.primary-text] [:span.list-item-text.margin-left "我喜欢的商品"]  [:i.icon-angle-right.pull-right]]]]
    [:div.panel.margin-top
     [:div.panel-title "每天积分"]
     [:div.list
      [:div.list-item.default-msg [:i.icon-hand-right.primary-text] [:span.list-item-text.margin-left "每天登录可获得10积分"] [:span.donetask.pull-right "已完成"]]
      [:div.list-item.default-msg [:i.icon-hand-right.primary-text] [:span.list-item-text.margin-left "每天登录可获得10积分"]]
      [:div.list-item.default-msg [:i.icon-hand-right.primary-text] [:span.list-item-text.margin-left "每天登录可获得10积分"]]
      [:div.list-item.default-msg [:i.icon-hand-right.primary-text] [:span.list-item-text.margin-left "每天登录可获得10积分"]]]]
    [:div.panel.margin-top
     [:div.list
      [:a.list-item.default-msg "更多信息" [:i.icon-angle-right.pull-right]]]]]])

(defn userlikegoodslist []
  [:div {:class "animated bounceInRight"}
   [:div {:class "panel margin-top"}
    [:div {:class "list"}
     [:a {:class "list-item" :href "#/customer/shopinfo"}
      [:img {:src "images/1.png" :class "list-item-img"}]
      [:div {:class "list-item-infobox"}
       [:h5.title "双人麻辣烫，免预约" ]
       [:p.price "￥15.8"]
       [:p.morebox [:span.likenum "50000人喜欢"]]]]
     [:a {:class "list-item" :href "#/customer/shopinfo"}
      [:img {:src "images/1.png" :class "list-item-img"}]
      [:div {:class "list-item-infobox"}
       [:h5.title "双人麻辣烫，免预约" ]
       [:p.price "￥15.8"]
       [:p.morebox [:span.likenum "50000人喜欢"]]]]
     [:a {:class "list-item" :href "#/customer/shopinfo"}
      [:img {:src "images/1.png" :class "list-item-img"}]
      [:div {:class "list-item-infobox"}
       [:h5.title "双人麻辣烫，免预约" ]
       [:p.price "￥15.8"]
       [:p.morebox [:span.likenum "50000人喜欢"]]]]]]])

(defn search []
  [:div {:class "animated bounceInRight"}
   [:div.search-field
    [:input {:type "text" :class "search-input" :placeholder "输入商家、分类或商品"}]
    [:span {:class "input-group-btn"} [:button {:class "search-btn"} "搜索"]]]
   [:div.searchbox
    [:span.searchbox-title "热门搜索"]
    [:div.searchbox-list
     [:a.searchbox-tag "牛奶"]
     [:a.searchbox-tag "童装"]
     [:a.searchbox-tag "5元衣服"]
     [:a.searchbox-tag "半价电源票"]
     [:a.searchbox-tag "5毛一斤马铃薯"]
     ]]
   [:div.search-logbox.panel.margin-top
    [:div.panel-title "搜索历史"]
    [:div.list
     [:a.list-item.default-msg {:href "#"} [:i.icon-hand-right] " " "牛奶"]
     [:a.list-item.default-msg {:href "#"} [:i.icon-hand-right] " 牛奶"]
     [:a.list-item.default-msg {:href "#"} [:i.icon-hand-right] " 牛奶"]
     [:a.list-item.default-msg {:href "#"} [:i.icon-hand-right] " 牛奶"]
     [:a.list-item.default-msg.text-center {:href "#"} "清除搜索历史"]]]])

(defn userlikeshoplist []
  [:div {:class "animated bounceInRight"}
   [:div.panel
    [:div {:class "list"}
     [:a {:class "list-item" :href "#/customer/shopinfo"}
      [:img {:src "images/1.png" :class "list-item-img"}]
      [:div {:class "list-item-infobox"}
       [:h5.title "螺公堂螺狮粉店" ]
       [:p.desc "北流市城中路国展大厦（旧电影院对面）"]
       [:p.morebox [:span.likenum "影响力：50000"] [:span.likenum.pull-right "<500m"]]]]
     [:a {:class "list-item" :href "javascript:"}
      [:img {:src "images/1.png" :class "list-item-img"}]
      [:div {:class "list-item-infobox"}
       [:h5.title "螺公堂螺狮粉店" ]
       [:p.desc "北流市城中路国展大厦（旧电影院对面）"]
       [:p.morebox [:span.likenum "影响力：50000"] [:span.likenum.pull-right "<500m"]]]]
     [:a {:class "list-item" :href "javascript:"}
      [:img {:src "images/1.png" :class "list-item-img"}]
      [:div {:class "list-item-infobox"}
       [:h5.title "螺公堂螺狮粉店" ]
       [:p.desc "北流市城中路国展大厦（旧电影院对面）"]
       [:p.morebox [:span.likenum "影响力：50000"] [:span.likenum.pull-right "<500m"]]]]
     [:a {:class "list-item" :href "javascript:"}
      [:img {:src "images/1.png" :class "list-item-img"}]
      [:div {:class "list-item-infobox"}
       [:h5.title "螺公堂螺狮粉店" ]
       [:p.desc "北流市城中路国展大厦（旧电影院对面）"]
       [:p.morebox [:span.likenum "影响力：50000"] [:span.likenum.pull-right "<500m"]]]]
     [:a {:class "list-item" :href "javascript:"}
      [:img {:src "images/1.png" :class "list-item-img"}]
      [:div {:class "list-item-infobox"}
       [:h5.title "螺公堂螺狮粉店" ]
       [:p.desc "北流市城中路国展大厦（旧电影院对面）"]
       [:p.morebox [:span.likenum "影响力：50000"] [:span.likenum.pull-right "<500m"]]]]
     [:a {:class "list-item" :href "javascript:"}
      [:img {:src "images/1.png" :class "list-item-img"}]
      [:div {:class "list-item-infobox"}
       [:h5.title "螺公堂螺狮粉店" ]
       [:p.desc "北流市城中路国展大厦（旧电影院对面）"]
       [:p.morebox [:span.likenum "影响力：50000"] [:span.likenum.pull-right "<500m"]]]]]]])


(defn commentlist []
  [:div {:class "animated bounceInRight"}
   [:div.container
    [:a {:class "pinglun-goods-detail list-group-item"}
     [:img {:src "images/1.png" :class "img-rounded pull-left"}]
     [:h5 "牛腩粉" [:br] [:small "业翔美食店"]]
     [:span {:class "glyphicon glyphicon-chevron-right pull-right"}]]
    [:div {:class "commentbox list-group"}
     [:h5 "精彩评论"]
     [:a {:class "comment-item list-group-item"}
      [:img {:src "images/head.png" :class "img-circle"}]
      [:div.comment-info
       [:p.comment-author "李木木"]
       [:span.comment-time "2014年11月5日"]
       [:p {:class "commnet-text margin-top"}
        "123456"]]]
     [:a {:class "comment-item list-group-item"}
      [:img {:src "images/head.png" :class "img-circle"}]
      [:div.comment-info
       [:p.comment-author "李木木"]
       [:span.comment-time "2014年11月5日"]
       [:p {:class "commnet-text margin-top"}
        "123456"]]]
     [:a {:class "comment-item list-group-item"}
      [:img {:src "images/head.png" :class "img-circle"}]
      [:div.comment-info
       [:p.comment-author "李木木"]
       [:span.comment-time "2014年11月5日"]
       [:p {:class "commnet-text margin-top"}
        "123456"]]]]]
   [:div.pinglun-edit
    [:div.input-group
     [:input {:type "text" :class "form-control" :placeholder "写评论"}]
     [:span.input-group-btn
      [:button {:class "btn btn-default" :type "button"} "发送"]]]]])

(defn page-render []
  [:div
   [nav]
   [:div.scroll-wrapper
    [:div.scroller
     (if-let [page-fn (bufferdata/get-buffer :cpage)]
       [page-fn])]]
   [footer]])

(defn scroller-mount []
  (let [myscroller (atom nil)]
    (letfn [(dispatch [k]
              (cond
                (= k :did-mount)
                (fn []
                  (reset! myscroller (scroller/create ".scroll-wrapper"))
                  (scroller/load
                    @myscroller
                    (bufferdata/get-pagedata (utils/get-current-url) :reflesh-fn)
                    (bufferdata/get-pagedata (utils/get-current-url) :readmore-fn)))
                (= k :did-update)
                (fn [] (scroller/reflesh @myscroller))))]
      dispatch)))


(defn page []
  (let [sc (scroller-mount)]
    (reagent/create-class {:reagent-render page-render
                           :component-did-mount  (sc :did-mount)
                           :component-did-update (sc :did-update)})))


