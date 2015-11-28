(ns pingtai.shopmanager
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [pingtai.pagedata :as pagedata]))

;Index Page
(defn indexbanner [data]
  [:div {:class "banner" :style {:background (str "url(" (get-in data ["banner_media" "media_url"]) ")")}}
   [:div {:class "head-info"}
    [:img {:class "banner-head img-circle" :src (get data "head_url")}]
    [:span {:class "banner-text"} (get data "name")]]
   #_[:a {:class "other-info" :href "#"}
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

(defn index-container [data]
  [:div {:class "container"}
   [:div {:class "panel panel-default"}
    [:div {:class "panel-body"}
     [:h3 "北流影响力："
      [:strong {:style {:color "red"}} (get data "score")]]]
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

(defn indexpage [data]
  (session/put! "title" "店铺管理中心")
  [:div
   [indexbanner (:manager-shopinfo data)]
   [index-container (:manager-shopinfo data)]
   [:div {:class "margin-footer"}]
   [common-footer]])


;yingxiangli page
(defn yingxiangli [data]
  (session/put! "title" "店铺管理中心")
  [:div {:class "animated bounceInRight"}
   [:div {:class "yingxiangli-banner"}
    [:div {:class "yingxiangli-score"} (get-in data [:manager-scoredetail "score"])
     [:span {:class "yingxiangli-fen"} "分"]]
    [:div {:class "yingxiangli-desc"}
     [:p {:class "yingxiangli-beat"} "您今天提高了 "
      [:strong (+ (get-in data [:manager-scoredetail "todayscore"]) 0)]
      " 点影响力"]
     #_[:p {:class "yingxiangli-beat"}
      "您在北流的排名是第 "
      [:strong 80]
      " 位"]]]
   [:div {:class "container"}
    [:div {:class "panel panel-default margin-top"}
     [:div.panel-heading "以下办法可提高影响力："]
     [:div {:class "list-group"}
      (for [info (get-in data [:manager-shopertask])]
        ^{:key (get info "id")}
        [:a {:href "javascript:" :class "list-group-item"}
         (get info "title")
         [:small (str "（可得" (get info "score") "分）")]
         [:span.pull-right (str (get info "ready-done") "/" (get info "limit_amout"))]])]]
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
(defn shop-bargain [data]
  (session/put! "title" "我的优惠商品")
  (println data)
  [:div.container.margin-header {:class "animated bounceInRight"}
   [:div.list-group
    (for [info (get-in data [:manager-goods])]
      ^{:key (get info "id")}
      [:a {:href (str "#/shop/goodsinfo-" (get info "id")) :class "list-group-item shop-goods-item"}
       [:img {:src (get info "img_url") :class "shop-goods-img"}]
       [:div.shop-goods-info
        [:p.title (get info "goods_name")]
        [:p.info (str (get info "new_price") "元")]
        [:p.visitestate (if (get info "visit_count")
                          (str "今天有 " (get info "visit_count") " 人访问")
                          "今天没有人浏览")]]
       [:span.shop-goods-score (str (+ (get info "score") 0) "分")]])]])

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

(defn goodsinfo [data]
  (session/put! "title" "商品名称")
  (println data)
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
(defn helpinfo [data]
  (session/put! "title" "帮助信息")
  [:div.container.margin-header {:class "animated bounceInRight"}
   [:div {:class "panel panel-default"}
    [:div.panel-heading (get-in data [:manager-helpdata "title"])]
    [:div.panel-body (get-in data [:manager-helpdata "hcontent"])]]])

