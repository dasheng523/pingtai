(ns pingtai.shopmanager
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]))

;Index Page
(defn indexbanner []
  [:div {:class "banner"}
   [:div {:class "head-info"}
    [:img {:class "banner-head img-circle" :src "images/head.png"}]
    [:span {:class "banner-text"} "业翔美食店"]]
   [:a {:class "other-info" :href "#"}
    "今日访客:"
    [:strong 3600]
    [:br]
    "粉丝数量:"
    [:strong 3600]]])

(defn common-footer []
  [:div {:class "footer"}
   [:div {:class "btn-group btn-group-justified" :role "group"}
    [:a {:href "#" :class "btn btn-default"}
     "发优惠商品"]
    [:a {:href "#" :class "btn btn-default"}
     "发促销广告"]]])

(defn index-container []
  [:div {:class "container"}
   [:div {:class "panel panel-default"}
    [:div {:class "panel-body"}
     [:h3 "北流影响力："
      [:strong {:style {:color "red"}} 3600]]]
    [:div {:class "list-group"}
     [:a {:href "#/shop/yingxiangli"
          :class "list-group-item"}
      "查看详情"
      [:span {:class "pull-right glyphicon glyphicon-chevron-right"}]]]]
   [:div {:class "panel panel-default"}
    [:div {:class "list-group"}
     [:a {:href "#/shop/shopbargain"
          :class "list-group-item"}
      [:span {:class "pull-left glyphicon glyphicon-hand-right"
              :dangerouslySetInnerHTML {:__html "&nbsp;"}}]
      "我的商品"
      [:span {:class "pull-right glyphicon glyphicon-chevron-right"}]]
     [:a {:href "#"
          :class "list-group-item"}
      [:span {:class "pull-left glyphicon glyphicon-hand-right"
              :dangerouslySetInnerHTML {:__html "&nbsp;"}}]
      "促销广告"
      [:span {:class "pull-right glyphicon glyphicon-chevron-right"}]]
     [:a {:href "#/shop/shopinfo"
          :class "list-group-item"}
      [:span {:class "pull-left glyphicon glyphicon-hand-right"
              :dangerouslySetInnerHTML {:__html "&nbsp;"}}]
      "店铺信息"
      [:span {:class "pull-right glyphicon glyphicon-chevron-right"}]]
     [:a {:href "#/shop/helpinfo"
          :class "list-group-item"}
      [:span {:class "pull-left glyphicon glyphicon-hand-right"
              :dangerouslySetInnerHTML {:__html "&nbsp;"}}]
      "帮助说明"
      [:span {:class "pull-right glyphicon glyphicon-chevron-right"}]]]]])

(defn indexpage []
  (session/put! "title" "店铺管理中心")
  [:div
   [indexbanner]
   [index-container]
   [:div {:class "margin-footer"}]
   [common-footer]])



;yingxiangli page
(defn yingxiangli []
  [:div {:class "animated bounceInRight"}
   [:div {:class "yingxiangli-banner"}
    [:div {:class "yingxiangli-score"} "3600"
     [:span {:class "yingxiangli-fen"} "分"]]
    [:div {:class "yingxiangli-desc"}
     [:p {:class "yingxiangli-up"} "您今天提高了"
      [:strong 50]
      "点影响力"]
     [:p {:class "yingxiangli-beat"}
      "您在北流的排名是第 "
      [:strong 80]
      " 位"]]]
   [:div {:class "container"}
    [:div {:class "panel panel-default margin-top"}
     [:div.panel-heading "以下办法可提高影响力："]
     [:div {:class "list-group"}
      [:a {:href "#" :class "list-group-item"}
       "访客浏览店铺"
       [:small "（可得10分）"]
       [:span.pull-right "1/10"]]
      [:a {:href "#" :class "list-group-item"}
       "访客浏览商品"
       [:small "（可得50分）"]
       [:span.pull-right "1/50"]]
      [:a {:href "#" :class "list-group-item list-group-item-success"}
       "分享到朋友圈"
       [:small "（可得50分）"]
       [:span.pull-right "完成"]]
      [:a {:href "#" :class "list-group-item list-group-item-success"}
       "访客点赞"
       [:small "（可得50分）"]
       [:span.pull-right "完成"]]]]
    [:div {:class "panel panel-default margin-top"}
     [:div.list-group
      [:a.list-group-item {:href "#/shop/topshop"}
       [:span {:class "glyphicon glyphicon-list" :dangerouslySetInnerHTML {:__html "&nbsp;"}}]
       "影响力排行榜"
       [:span {:class "pull-right glyphicon glyphicon-chevron-right"}]]
      [:a.list-group-item {:href "/index.html#/customer/shoplist"}
       [:span {:class "glyphicon glyphicon-list" :dangerouslySetInnerHTML {:__html "&nbsp;"}}]
       "查看附近商家"
       [:span {:class "pull-right glyphicon glyphicon-chevron-right"}]]
      [:a.list-group-item {:href "#/customer/shoplist"}
       [:span {:class "glyphicon glyphicon-list" :dangerouslySetInnerHTML {:__html "&nbsp;"}}]
       "帮助说明"
       [:span {:class "pull-right glyphicon glyphicon-chevron-right"}]]]]]])

;优惠商品
(defn shop-bargain []
  [:div.container.margin-header {:class "animated bounceInRight"}
   [:div.list-group
    [:a {:href "#/shop/goodsinfo" :class "list-group-item shop-goods-item"}
     [:img {:src "images/1.png" :class "shop-goods-img"}]
     [:div.shop-goods-info
      [:p.title "业翔砂锅粉业翔砂锅粉"]
      [:p.info "10000元/碗"]
      [:p.visitestate "今天没有人浏览"]]
     [:span.shop-goods-score "500分"]]

    [:a {:href "/index.html#/goodsinfo" :class "list-group-item shop-goods-item"}
     [:img {:src "images/1.png" :class "shop-goods-img"}]
     [:div.shop-goods-info
      [:p.title "业翔砂锅粉业翔砂锅粉"]
      [:p.info "10000元/碗"]
      [:p.visitestate "今天有 " [:strong {:class "text-danger"} "4"] " 人访问"]]
     [:span.shop-goods-score "500分"]]

    [:a {:href "/index.html#/customer/goods" :class "list-group-item shop-goods-item"}
     [:img {:src "images/1.png" :class "shop-goods-img"}]
     [:div.shop-goods-info
      [:p.title "业翔砂锅粉业翔砂锅粉"]
      [:p.info "10000元/碗"]
      [:p.visitestate "今天有 " [:strong {:class "text-danger"} "4"] " 人访问"]]
     [:span.shop-goods-score "500分"]]
    ]])

(defn topshop []
  [:div.container.margin-header
   [:div.list-group
    [:a {:href "javascript:" :class "list-group-item topshop-item"}
     [:span.topnum.first "1"]
     [:h4.title "业翔大排档" [:br] [:span.other-msg "美食，烧烤，宵夜"]]
     [:span.yingxiang "影响力：12313"]]
    [:a {:href "javascript:" :class "list-group-item topshop-item"}
     [:span.topnum.first "2"]
     [:h4.title "业翔大排档" [:br] [:span.other-msg "美食，烧烤，宵夜"]]
     [:span.yingxiang "影响力：12313"]]
    [:a {:href "javascript:" :class "list-group-item topshop-item"}
     [:span.topnum.first "3"]
     [:h4.title "业翔大排档" [:br] [:span.other-msg "美食，烧烤，宵夜"]]
     [:span.yingxiang "影响力：12313"]]
    [:a {:href "javascript:" :class "list-group-item topshop-item"}
     [:span.topnum "4"]
     [:h4.title "业翔大排档" [:br] [:span.other-msg "美食，烧烤，宵夜"]]
     [:span.yingxiang "影响力：12313"]]
    [:a {:href "javascript:" :class "list-group-item topshop-item"}
     [:span.topnum "5"]
     [:h4.title "业翔大排档" [:br] [:span.other-msg "美食，烧烤，宵夜"]]
     [:span.yingxiang "影响力：12313"]]
    [:a {:href "javascript:" :class "list-group-item topshop-item"}
     [:span.topnum "6"]
     [:h4.title "业翔大排档" [:br] [:span.other-msg "美食，烧烤，宵夜"]]
     [:span.yingxiang "影响力：12313"]]
    [:a {:href "javascript:" :class "list-group-item topshop-item"}
     [:span.topnum "7"]
     [:h4.title "业翔大排档" [:br] [:span.other-msg "美食，烧烤，宵夜"]]
     [:span.yingxiang "影响力：12313"]]
    [:a {:href "javascript:" :class "list-group-item topshop-item"}
     [:span.topnum "8"]
     [:h4.title "业翔大排档" [:br] [:span.other-msg "美食，烧烤，宵夜"]]
     [:span.yingxiang "影响力：12313"]]
    ]])

(defn goodsinfo []
  [:div.container.margin-header {:class "animated bounceInRight"}
   [:div {:class "editform list-group"}
    [:a {:class "edit-item list-group-item" :href "javascript:"}
     [:span.edit-key "商品名称："]
     [:div.edit-value
      "业翔云吞面"]]
    [:a {:class "edit-item list-group-item" :href "javascript:"}
     [:span.edit-key "原价："]
     [:div.edit-value
      "15" "元"]]
    [:a {:class "edit-item list-group-item" :href "javascript:"}
     [:span.edit-key "优惠价："]
     [:div.edit-value
      "10" "元"]]
    [:a {:class "edit-item list-group-item" :href "javascript:"}
     [:span.edit-key "说明："]
     [:div.edit-desc
      "北流市铜州市场北流市铜州市场北流市铜州市场北流市铜州市场北流市铜州市场北流市铜州市场北流市铜州市场北流市铜州市场"]]
    [:a {:class "edit-item list-group-item" :href "javascript:"}
     [:span.edit-key "购买须知："]
     [:div.edit-desc
      "北流市铜州市场北流市铜州市场北流市铜州市场北流市铜州市场北流市铜州市场北流市铜州市场北流市铜州市场北流市铜州市场"]]
    [:div {:class "edit-item list-group-item" :href "javascript:"}
     [:span.edit-key "商品图片"]
     [:div.edit-value
      "已上传"]
     [:div
      [:a.edit-uploadimg-del {:href "javascript:"} [:span.glyphicon.glyphicon-remove "删除"]]
      [:a.edit-uploadimgbox {:href "javascript:"}
       [:img {:src "images/1.png" :class "edit-uploadimg"}]
       [:span.glyphicon.glyphicon-cloud-upload.edit-icon "点击更改"]]

      [:a.edit-uploadimg-del {:href "javascript:"} [:span.glyphicon.glyphicon-remove "删除"]]
      [:a.edit-uploadimgbox
       [:img {:src "images/2.png" :class "edit-uploadimg"}]
       [:span.glyphicon.glyphicon-cloud-upload.edit-icon "点击更改"]]

      [:a.edit-uploadimg-del {:href "javascript:"} [:span.glyphicon.glyphicon-remove "删除"]]
      [:a.edit-uploadimgbox
       [:img {:src "images/3.png" :class "edit-uploadimg"}]
       [:span.glyphicon.glyphicon-cloud-upload.edit-icon "点击更改"]]

      [:a.edit-uploadimg-del {:href "javascript:"} [:span.glyphicon.glyphicon-remove "删除"]]
      [:a.edit-uploadimgbox
       [:img {:src "images/4.png" :class "edit-uploadimg"}]
       [:span.glyphicon.glyphicon-cloud-upload.edit-icon "点击更改"]]]]]])

;店铺信息
(defn shopinfo []
  [:div.container.margin-header {:class "animated bounceInRight"}
   [:div {:class "editform list-group"}
    [:a {:class "edit-item list-group-item" :href "javascript:"}
     [:span.edit-key "头像"]
     [:div.edit-value
      [:img {:src "images/head.png" :class "img-circle"}]]]
    [:a {:class "edit-item list-group-item" :href "javascript:"}
     [:span.edit-key "店名"]
     [:div.edit-value
      "业翔美食店"]]
    [:a {:class "edit-item list-group-item" :href "javascript:"}
     [:span.edit-key "电话"]
     [:div.edit-value
      "18938657523"]]
    [:a {:class "edit-item list-group-item" :href "javascript:"}
     [:span.edit-key "地址"]
     [:div.edit-value
      "北流市铜州市场"]]
    [:div {:class "edit-item list-group-item" :href "javascript:"}
     [:span.edit-key "店面相片"]
     [:div.edit-value
      "正在审核"]
     [:div
      [:a.edit-uploadimg-del {:href "javascript:"} [:span.glyphicon.glyphicon-remove "删除"]]
      [:a.edit-uploadimgbox {:href "javascript:"}
       [:img {:src "images/1.png" :class "edit-uploadimg"}]
       [:span.glyphicon.glyphicon-cloud-upload.edit-icon "点击更改"]]]]
    [:div {:class "edit-item list-group-item" :href "javascript:"}
     [:span.edit-key "营业执照"]
     [:div.edit-value
      "正在审核"]
     [:div
      [:a.edit-uploadimg-del {:href "javascript:"} [:span.glyphicon.glyphicon-remove "删除"]]
      [:a.edit-uploadimgbox {:href "javascript:"}
       [:img {:src "images/1.png" :class "edit-uploadimg"}]
       [:span.glyphicon.glyphicon-cloud-upload.edit-icon "点击更改"]]]]]])

;帮助信息
(defn helpinfo []
  [:div.container.margin-header {:class "animated bounceInRight"}
   [:div {:class "panel panel-default"}
    [:div.panel-heading "以下办法可提高影响力："]
    [:div.panel-body "123456"]]])

