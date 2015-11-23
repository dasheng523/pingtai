(ns pingtai.routes.services
  (:require [ring.util.http-response :refer :all]
            [compojure.api.sweet :refer :all]
            [schema.core :as s]
            [pingtai.business.customer :as customer]
            [pingtai.business.shoper :as shoper]
            [pingtai.business.common :as common]))



(s/defschema Thingie {:id Long
                      :hot Boolean
                      :tag (s/enum :kikka :kukka)
                      :chief [{:name String
                               :type #{{:id String}}}]})



(s/defschema ShopEdit {:name String
                       :mobile String
                       :address String
                       :banner_media String
                       :blicence_media String})

(defapi service-routes
        (ring.swagger.ui/swagger-ui
          "/api-ui")
        (swagger-docs
          {:info {:title "店多多接口API" :description "店多多各类接口说明书"}})

        (context* "/common" []
                  :tags ["通用接口"]
                  (POST* "/get-help" []
                         :summary "获得帮助说明"
                         :body-params [id :- String]
                         (ok (common/get-helper id))))

        (context* "/shoper" []
                  :tags ["店员端"]
                  (POST* "/update-shop-info" []
                         :summary     "更新店铺信息"
                         :body-params [udata :- ShopEdit shop_id :- String]
                         (ok (shoper/update-shop-info udata shop_id)))
                  (POST* "/get-shoper-task" []
                         :summary     "获取店员任务"
                         :body-params [shoper_id :- String]
                         (ok (shoper/get-shoper-task shoper_id)))
                  (POST* "/score-detail" []
                         :summary     "获得积分详情"
                         :body-params [shop_id :- String]
                         (ok (shoper/score-detail shop_id)))
                  (POST* "/get-goods-by-shop-id" []
                         :summary     "获取店铺的商品详情"
                         :body-params [shop_id :- String]
                         (ok (shoper/get-goods-by-shop-id shop_id)))
                  (POST* "/get-shop-index" []
                         :summary     "获取店员首页数据"
                         :body-params [userid :- String]
                         (ok (shoper/get-shop-index userid))))

        (context* "/customer" []
                  :tags ["顾客端"]
                  (POST* "/search" []
                         :summary     "搜索"
                         :body-params [kw :- String]
                         (ok (customer/search kw)))
                  (POST* "/get-user-task" []
                         :summary     "获取用户任务"
                         :body-params [userid :- String]
                         (ok (customer/get-user-task userid)))
                  (POST* "/get-user-info" []
                         :summary     "获取用户信息"
                         :body-params [userid :- String]
                         (ok (customer/get-user-info userid)))
                  (POST* "/share-goods!" []
                         :summary     "用户分享商品"
                         :body-params [goodsid :- String, userid :- String]
                         (ok (customer/like-goods! goodsid userid 2)))
                  (POST* "/share-shop!" []
                         :summary     "用户分享店铺"
                         :body-params [shopid :- String, userid :- String]
                         (ok (customer/like-shop! shopid userid 2)))
                  (POST* "/like-shop!" []
                         :summary     "用户喜欢店铺"
                         :body-params [id :- String, userid :- String]
                         (ok (customer/like-shop! id userid 1)))
                  (POST* "/like-goods!" []
                         :summary     "用户喜欢商品"
                         :body-params [id :- String, userid :- String]
                         (ok (customer/like-goods! id userid 1)))
                  (POST* "/get-goods-info" []
                         :summary     "获取商品具体信息"
                         :body-params [id :- String, userid :- String]
                         (ok
                           (do
                             (customer/like-goods! id userid 3)
                             (customer/get-goods-info id userid))))
                  (POST* "/get-shop-info" []
                         :summary     "获取店铺具体信息"
                         :body-params [id :- String, userid :- String]
                         (ok (do
                               (customer/like-shop! id userid 3)
                               (customer/get-shop-info id userid))))
                  (POST* "/get-shop-list" []
                         :summary     "获取店铺列表"
                         :body-params [page :- Integer, category_id :- String]
                         (ok (customer/get-shop-list page category_id)))
                  (POST* "/get-home-goods" []
                         :summary     "获得首页的商品信息"
                         :body-params [page :- Integer]
                         (ok (customer/get-home-goods page)))
                  (POST* "/create-category!" []
                         :summary     "创建一个分类"
                         :body-params [title :- String, intro :- String, parent_id :- String, sort_num :- Integer]
                         (ok (customer/create-category! {:title title :intro intro :parent_id parent_id :sort_num sort_num})))
                  (POST* "/get-all-cateogry" []
                         :summary     "获取所有分类"
                         (ok (customer/get-all-categorys)))
                  (POST* "/get-sub-category" []
                         :summary     "获取指定ID的子分类"
                         :body-params [parent_id :- String]
                         (ok (customer/get-sub-category parent_id))))











        (context* "/demo1" []
            :tags ["demo1"]

            (GET* "/plus" []
                  :return       Long
                  :query-params [x :- Long, {y :- Long 1}]
                  :summary      "x+y with query-parameters. y defaults to 1."
                  (ok (+ x y)))

            (POST* "/minus" []
                   :return      Long
                   :body-params [x :- Long, y :- Long]
                   :summary     "x-y with body-parameters."
                   (ok (- x y)))

            (GET* "/times/:x/:y" []
                  :return      Long
                  :path-params [x :- Long, y :- Long]
                  :summary     "x*y with path-parameters"
                  (ok (* x y)))

            (POST* "/divide" []
                   :return      Double
                   :form-params [x :- Long, y :- Long]
                   :summary     "x/y with form-parameters"
                   (ok (/ x y)))

            (GET* "/power" []
                  :return      Long
                  :header-params [x :- Long, y :- Long]
                  :summary     "x^y with header-parameters"
                  (ok (long (Math/pow x y))))

            (PUT* "/echo" []
                  :return   [{:hot Boolean}]
                  :body     [body [{:hot Boolean}]]
                  :summary  "echoes a vector of anonymous hotties"
                  (ok body))

            (POST* "/echo" []
                   :return   (s/maybe Thingie)
                   :body     [thingie (s/maybe Thingie)]
                   :summary  "echoes a Thingie from json-body"
                   (ok thingie)))

  (context* "/demo2" []
            :tags ["demo2"]
            :summary "summary inherited from context"
            (context* "/:kikka" []
                      :path-params [kikka :- s/Str]
                      :query-params [kukka :- s/Str]
                      (GET* "/:kakka" []
                            :path-params [kakka :- s/Str]
                            (ok {:kikka kikka
                                 :kukka kukka
                                 :kakka kakka})))))
