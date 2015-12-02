(ns pingtai.shopmanager
  (:require
    [reagent.session :as session]
    [pingtai.pagedata :as pagedata]
    [ajax.core :refer [GET POST]]
    [pingtai.common :as common]
    [pingtai.event :as event]))

;Index Page
(defn indexbanner [api]
  (let [data (pagedata/get-api-data api)]
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

(defn common-footer []
  [:div {:class "footer"}
   [:div {:class "btn-group btn-group-justified" :role "group"}
    [:a {:href "#" :class "btn btn-default"}
     "发优惠商品"]
    [:a {:href "#" :class "btn btn-default"}
     "发促销广告"]]])

(defn index-container [api]
  (let [data (pagedata/get-api-data api)]
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
       [:a {:href "#/shop/helpinfo-1"
            :class "list-group-item"}
        [:span {:class "pull-left glyphicon glyphicon-hand-right"
                :dangerouslySetInnerHTML {:__html "&nbsp;"}}]
        "帮助说明"
        [:span {:class "pull-right glyphicon glyphicon-chevron-right"}]]]]]))

(defn indexpage [apis]
  (session/put! "title" "店铺管理中心")
  [:div
   [indexbanner (first apis)]
   [index-container (first apis)]
   [:div {:class "margin-footer"}]
   [common-footer]])


;yingxiangli page
(defn yingxiangli [apis]
  (session/put! "title" "店铺管理中心")
  (let [data (pagedata/get-api-data (first apis))
        task-data (pagedata/get-api-data (last apis))]
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

;优惠商品
(defn shop-bargain [apis]
  (session/put! "title" "我的优惠商品")
  (let [data (pagedata/get-api-data (first apis))]
    [:div.container.margin-header {:class "animated bounceInRight"}
     [:div.list-group
      (for [info data]
        ^{:key (get info "id")}
        [:a {:href (str "#/shop/goodsinfo-" (get info "id")) :class "list-group-item shop-goods-item"}
         [:img {:src (get info "img_url") :class "shop-goods-img"}]
         [:div.shop-goods-info
          [:p.title (get info "goods_name")]
          [:p.info (str (get info "new_price") "元")]
          [:p.visitestate (if (get info "visit_count")
                            (str "今天有 " (get info "visit_count") " 人访问")
                            "今天没有人浏览")]]
         [:span.shop-goods-score (str (+ (get info "score") 0) "分")]])]]))

(defn topshop [apis]
  (session/put! "title" "店铺排行")
  (let [data (pagedata/get-api-data (first apis))]
    [:div.container.margin-header
     [:div.list-group
      (for [i (range (count data))
            :let [info (nth data i nil)]]
        ^{:key (get info "id")}
        [:a {:href "javascript:" :class "list-group-item topshop-item"}
         [:span.topnum (if (<= i 2) {:class "first"})  (+ i 1)]
         [:h4.title (get info "name") [:br] [:span.other-msg (clojure.string/join "," (get info "categorys"))]]
         [:span.yingxiang (str "影响力：" (get info "score"))]])]]))


(defn editbox [{:keys [title api field]}]
  "编辑框"
  (session/put! "title" title)
  (session/put!
    "narbtn"
    {:click (pingtai.event/save-goods-field api field)
     :text "确定"})
  (let [entity (pagedata/get-api-data api)]
    [:div.container.margin-header {:class "animated bounceInRight"}
     [:textarea {:class "editbox-textarea" :id "edit-box" :defaultValue (get entity field)}]]))


(defn goodsinfo [apis]
  (session/put! "title" "商品管理")
  (session/put!
    "narbtn"
    {:click (pingtai.event/save-goods apis)
     :text "保存"})
  (let [data (pagedata/get-api-data (first apis))]
    [:div.container.margin-header {:class "animated bounceInRight"}
     [:div {:class "editform list-group"}
      [:a {:class "edit-item list-group-item" :href "#/input"
           :on-click #(do
                       (session/put! "mainpage-params" {:title "商品名称" :api (first apis) :field "goods_name"})
                       (session/put! "mainpage" editbox))}
       [:span.edit-key "商品名称："]
       [:div.edit-value
        (or (get-in data ["goods_name"]) "未填写")]]
      [:a {:class "edit-item list-group-item" :href "#/input"
           :on-click #(do
                       (session/put! "mainpage-params" {:title "原价" :api (first apis) :field "origin_price"})
                       (session/put! "mainpage" editbox))}
       [:span.edit-key "原价："]
       [:div.edit-value
        (or (get-in data ["origin_price"]) "未填写")]]
      [:a {:class "edit-item list-group-item" :href "#/input"
           :on-click #(do
                       (session/put! "mainpage-params" {:title "优惠价" :api (first apis) :field "new_price"})
                       (session/put! "mainpage" editbox))}
       [:span.edit-key "优惠价："]
       [:div.edit-value
        (or (get-in data ["new_price"]) "未填写")]]
      [:a {:class "edit-item list-group-item" :href "#/input"
           :on-click #(do
                       (session/put! "mainpage-params" {:title "说明" :api (first apis) :field "describe" })
                       (session/put! "mainpage" editbox))}
       [:span.edit-key "说明："]
       [:div.edit-desc
        (or (get-in data ["describe"]) "未填写")]]
      [:a {:class "edit-item list-group-item" :href "#/input"
           :on-click #(do
                       (session/put! "mainpage-params" {:title "购买须知" :api (first apis) :field "shop_notice"})
                       (session/put! "mainpage" editbox))}
       [:span.edit-key "购买须知："]
       [:div.edit-desc
        (or (get-in data ["shop_notice"]) "未填写")]]
      (let [medialist (get-in data ["medialist"])]
        [:div {:class "edit-item list-group-item" :href "javascript:"}
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



;店铺信息
(defn shopinfo [apis]
  (println (pagedata/get-api-data (first apis)))
  (let [data (pagedata/get-api-data (first apis))
        post-url "http://localhost:3000/shoper/update-shop-info"
        post-data-fn (fn []
                       {:ystoken (common/get-ystoken)
                        :shop_id (str (get data "id"))
                        :udata {:name (get (pagedata/get-api-data (first apis)) "name")
                                :mobile (get (pagedata/get-api-data (first apis)) "mobile")
                                :address (get (pagedata/get-api-data (first apis)) "address")
                                :blicence_media (get (pagedata/get-api-data (first apis)) "blicence_media")
                                :banner_media (get (pagedata/get-api-data (first apis)) "banner_media")}})]
    [:div.container.margin-header {:class "animated bounceInRight"}
     [:div {:class "editform list-group"}
      [:a {:class "edit-item list-group-item" :href "#/temp"
           :on-click #(do
                       (session/put! "mainpage-params" {:title "店名" :api (first apis) :field "name" :post-url post-url :post-data-fn post-data-fn})
                       (session/put! "mainpage" editbox))}
       [:span.edit-key "店名"]
       [:div.edit-value
        (get data "name")]]
      [:a {:class "edit-item list-group-item" :href "#/temp"
           :on-click #(do
                       (session/put! "mainpage-params" {:title "电话" :api (first apis) :field "mobile" :post-url post-url :post-data-fn post-data-fn})
                       (session/put! "mainpage" editbox))}
       [:span.edit-key "电话"]
       [:div.edit-value
        (get data "mobile")]]
      [:a {:class "edit-item list-group-item" :href "#/temp"
           :on-click #(do
                       (session/put! "mainpage-params" {:title "地址" :api (first apis) :field "address" :post-url post-url :post-data-fn post-data-fn})
                       (session/put! "mainpage" editbox))}
       [:span.edit-key "地址"]
       [:div.edit-value
        (get data "address")]]
      (let [banner (get data "banner_url")]
        [:div {:class "edit-item list-group-item" :href "#/temp"}
         [:span.edit-key "店面相片"]
         [:div.edit-value
          (if banner "已上传" "未上传")]
         (if banner
           [:div
            [:a.edit-uploadimg-del {:href "javascript:"} [:span.glyphicon.glyphicon-remove "删除"]]
            [:a.edit-uploadimgbox {:href "javascript:"}
             [:img {:src banner :class "edit-uploadimg"}]
             [:span.glyphicon.glyphicon-cloud-upload.edit-icon "点击更改"]]]
           [:a.edit-uploadimgbox {:href "javascript:"}
            [:div { :class "edit-uploaddiv"}]
            [:span.glyphicon.glyphicon-cloud-upload.edit-icon "点击上传"]])])
      (let [blicence-url (get data "blicence_url")]
        [:div {:class "edit-item list-group-item" :href "javascript:"}
         [:span.edit-key "营业执照"]
         [:div.edit-value
          (if blicence-url "已上传" "未上传")]
         (if blicence-url
           [:div
            [:a.edit-uploadimg-del {:href "javascript:"} [:span.glyphicon.glyphicon-remove "删除"]]
            [:a.edit-uploadimgbox {:href "javascript:"}
             [:img {:src blicence-url :class "edit-uploadimg"}]
             [:span.glyphicon.glyphicon-cloud-upload.edit-icon "点击更改"]]]
           [:a.edit-uploadimgbox {:href "javascript:"}
            [:div { :class "edit-uploaddiv"}]
            [:span.glyphicon.glyphicon-cloud-upload.edit-icon "点击上传"]])])]]))

;帮助信息
(defn helpinfo [apis]
  (session/put! "title" "帮助信息")
  (let [data (pagedata/get-api-data (first apis))]
    [:div.container.margin-header {:class "animated bounceInRight"}
     [:div {:class "panel panel-default"}
      [:div.panel-heading (get-in data ["title"])]
      [:div.panel-body (get-in data ["hcontent"])]]]))

(defn error-page [data]
  (session/put! "title" "出错了")
  [:div.container.margin-header {:class "animated bounceInRight"}
   [:div {:class "panel panel-default"}
    [:div.panel-body data]]])
