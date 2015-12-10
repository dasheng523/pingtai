(ns pingtai.view.shoper
  (:require [pingtai.common.bufferdata :as bufferdata]
            [pingtai.common.utils :as utils]
            [pingtai.common.messqueue :as queue]
            [pingtai.view.utils :as view-utils]
            [reagent.core :as reagent]))

(defn nav-shop []
  [:header
   (if (bufferdata/get-pagedata (utils/get-current-url) :show-back)
     [:a {:href "javascript:" :class "back-btn pull-left" :on-click #(.back js/history)}
      [:span {:class "glyphicon glyphicon-chevron-left"}]])
   [:h3 {:class "page-title"} (bufferdata/get-pagedata (utils/get-current-url) :title)]
   (if-let [nar-btn (bufferdata/get-pagedata (utils/get-current-url) :narbtn)]
     [:a {:href (if (:href nar-btn) (:href nar-btn) "javascript:") :class "right-btn pull-right" :on-click (:click nar-btn)}
      [:span (:text nar-btn)]])])


(defn index-container []
  (let [data (bufferdata/get-in-buffer [:remote :shop-info :data])]
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
      [:a {:class "btn btn-danger btn-block" :href "#/shop/goodsinfo"} "添加优惠商品"]]
     [:div {:class "panel panel-default"}
      [:div {:class "list-group"}
       [:a {:href "#/shop/goodslist"
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
       [:a {:href "#/shop/helpinfo-1"
            :class "list-group-item"}
        [:span {:class "pull-left glyphicon glyphicon-hand-right"
                :dangerouslySetInnerHTML {:__html "&nbsp;"}}]
        "帮助说明"
        [:span {:class "pull-right glyphicon glyphicon-chevron-right"}]]]]]))

(defn index-banner []
  (let [data (bufferdata/get-in-buffer [:remote :shop-info :data])]
    [:div {:class "banner" :style {:background (str "url(" (get-in data ["banner_media" "media_url"]) ")")}}
     [:div {:class "head-info"}
      [:img {:class "banner-head img-circle" :src (get data "head_url")}]
      [:span {:class "banner-text"} (get data "name")]]
     #_[:a {:class "other-info" :href "#"}
        "今日访客:"
        [:strong 3600]
        [:br]
        "粉丝数量:"
        [:strong 3600]]]))

(defn indexpage []
  [:div
   [index-banner]
   [index-container]
   [:div {:class "margin-footer"}]])

(defn yingxiangli []
  "影响力页面"
  (let [data (bufferdata/get-in-buffer [:remote :shop-score :data])
        task-data (bufferdata/get-in-buffer [:remote :task-info :data])]
    [:div {:class "animated bounceInRight"}
     [:div {:class "yingxiangli-banner"}
      [:div {:class "yingxiangli-score"} (get-in data ["score"])
       [:span {:class "yingxiangli-fen"} "分"]]
      [:div {:class "yingxiangli-desc"}
       [:p {:class "yingxiangli-beat"} "您今天提高了 "
        [:strong (+ (get-in data ["todayscore"]) 0)]
        " 点影响力"]
       #_[:p {:class "yingxiangli-beat"}
          "您在北流的排名是第 "
          [:strong 80]
          " 位"]]]
     [:div {:class "container"}
      [:div {:class "panel panel-default margin-top"}
       [:div.panel-heading "以下办法可提高影响力："]
       [:div {:class "list-group"}
        (for [info task-data]
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
        [:a.list-group-item {:href "#/shop/helpinfo-2"}
         [:span {:class "glyphicon glyphicon-list" :dangerouslySetInnerHTML {:__html "&nbsp;"}}]
         "帮助说明"
         [:span {:class "pull-right glyphicon glyphicon-chevron-right"}]]]]]]))

(defn goodslist []
  (let [data (bufferdata/get-in-buffer [:remote :goodslist :data])]
    [:div {:class "animated bounceInRight"}
     [:div.list-group
      (for [info data]
        ^{:key (get info "id")}
        [:div
         [:a {:class "goods-del" :on-click #(if (js/confirm "确定要删除吗？")
                                             (queue/put-mess! {:url "/del-goods" :id (get info "id")}))} "删除"]
         [:a {:href (str "#/shop/goodsinfo?id=" (get info "id")) :class "list-group-item shop-goods-item"}
          [:img {:src (get info "img_url") :class "shop-goods-img"}]
          [:div.shop-goods-info
           [:p.title (get info "goods_name")]
           [:p.info (str (get info "new_price") "元")]
           [:p.visitestate (if (get info "visit_count")
                             (str "今天有 " (get info "visit_count") " 人查看")
                             "今天没有人浏览")]]
          [:span.shop-goods-score (str (+ (get info "score") 0) "分")]]])]]))

(defn goodsinfo []
  (let [goods-info (bufferdata/get-in-buffer [:pagedata "/shop/goodsinfo"])]
    [:div.container.margin-header {:class "animated bounceInRight"}
     [:div {:class "editform list-group"}
      [:div {:class "edit-item list-group-item"}
       [:span.edit-key "商品名称："]
       [:input.edit-value
        {:type "text" :placeholder "未输入"
         :value (-> goods-info (get-in [:goods-info "goods_name"]))
         :on-change #(queue/put-mess! {:url "/save-field" :ks [:pagedata "/shop/goodsinfo" :goods-info "goods_name"] :value (-> % .-target .-value)})}]]
      [:div {:class "edit-item list-group-item"}
       [:span.edit-key "原价："]
       [:input.edit-value
        {:type "number" :placeholder "未输入"
         :value (-> goods-info (get-in [:goods-info "origin_price"]))
         :on-change #(queue/put-mess! {:url "/save-field" :ks [:pagedata "/shop/goodsinfo" :goods-info "origin_price"] :value (-> % .-target .-value)})}]]
      [:div {:class "edit-item list-group-item"}
       [:span.edit-key "优惠价："]
       [:input.edit-value
        {:type "number" :placeholder "未输入"
         :value (-> goods-info (get-in [:goods-info "new_price"]))
         :on-change #(queue/put-mess! {:url "/save-field" :ks [:pagedata "/shop/goodsinfo" :goods-info "new_price"] :value (-> % .-target .-value)})}]]
      [:div {:class "edit-item list-group-item"}
       [:span.edit-key "说明："]
       [:textarea.edit-desc
        {:value (-> goods-info (get-in [:goods-info "describe"]))
         :on-change #(queue/put-mess! {:url "/save-field" :ks [:pagedata "/shop/goodsinfo" :goods-info "describe"] :value (-> % .-target .-value)})}]]
      [:div {:class "edit-item list-group-item"}
       [:span.edit-key "购买须知："]
       [:textarea.edit-desc
        {:value (-> goods-info (get-in [:goods-info "shop_notice"]))
         :on-change #(queue/put-mess! {:url "/save-field" :ks [:pagedata "/shop/goodsinfo" :goods-info "shop_notice"] :value (-> % .-target .-value)})}]]
      (let [medialist (get-in goods-info [:goods-info "medialist"])]
        [:div {:class "edit-item list-group-item"}
         [:span.edit-key "商品图片"]
         [:div.edit-value
          (if (nil? medialist) "未上传" "已上传")]
         [:div
          (for [media medialist]
            ^{:key (get media "id")}
            [:div
             [:a.edit-uploadimg-del {:href "javascript:"} [:span.glyphicon.glyphicon-remove "删除"]]
             [:a.edit-uploadimgbox
              [:img {:src (get media "media_url") :class "edit-uploadimg"}]
              [:span.glyphicon.glyphicon-cloud-upload.edit-icon "点击更改"]]])
          (if (<= (count medialist) 5)
            [:a.edit-uploadimgbox {:href "javascript:"}
             [:div { :class "edit-uploaddiv"}]
             [:span.glyphicon.glyphicon-cloud-upload.edit-icon "点击上传"]])]])]]))

(defn page-render []
  [:div
   [nav-shop]
   [:div.scroll-wrapper
    [:div.scroller
     (if-let [page-fn (bufferdata/get-buffer :cpage)]
       [page-fn])]]])

(defn page-did-mount [myscroll]
  (fn []
    (reset! myscroll (js/IScroll. ".scroll-wrapper" (clj->js
                                                      {:useTransform false
                                                       :click true})))
    (js/setTimeout #(.refresh @myscroll) 300)
    (.addEventListener js/document "touchmove" #(.preventDefault %) false)))

(defn page-did-update [myscroll]
  (fn []
    (js/setTimeout #(.refresh @myscroll) 300)))

(defn page []
  (let [myscroll (atom nil)]
    (reagent/create-class {:reagent-render page-render
                           :component-did-mount (page-did-mount myscroll)
                           :component-did-update (page-did-update myscroll)})))


(defn test1 []
  (let [respdata (bufferdata/get-buffer :respdata)]
    [:h1.margin-header "454545"]))