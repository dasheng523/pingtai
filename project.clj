(defproject pingtai "0.1.0-SNAPSHOT"

  :description "FIXME: write description"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [selmer "0.9.3"]
                 [com.taoensso/timbre "4.1.4"]
                 [com.taoensso/tower "3.0.2"]
                 [markdown-clj "0.9.77"]
                 [environ "1.0.1"]
                 [compojure "1.4.0"]
                 [ring-webjars "0.1.1"]
                 [ring/ring-defaults "0.1.5"]
                 [ring-ttl-session "0.3.0"]
                 [ring "1.4.0"
                  :exclusions [ring/ring-jetty-adapter]]
                 [metosin/ring-middleware-format "0.6.0"]
                 [metosin/ring-http-response "0.6.5"]
                 [bouncer "0.3.3"]
                 [prone "0.8.2"]
                 [org.clojure/tools.nrepl "0.2.11"]
                 [org.webjars/bootstrap "3.3.5"]
                 [org.webjars/jquery "2.1.4"]
                 [buddy "0.7.2"]
                 [migratus "0.8.7"]
                 [conman "0.2.3"]
                 [mysql/mysql-connector-java "5.1.34"]
                 [org.clojure/clojurescript "1.7.145" :scope "provided"]
                 [org.clojure/tools.reader "0.10.0"]
                 [reagent "0.5.1"]
                 [reagent-forms "0.5.13"]
                 [reagent-utils "0.1.5"]
                 [secretary "1.2.3"]
                 [org.clojure/core.async "0.2.371"]
                 [cljs-ajax "0.5.1"]
                 [metosin/compojure-api "0.23.1"]
                 [metosin/ring-swagger-ui "2.1.3"]
                 [org.slf4j/slf4j-log4j12 "1.6.6"]
                 [cc.qbits/jet "0.6.6"]
                 [cljsjs/fastclick "1.0.6-0"]]

  :min-lein-version "2.0.0"
  :uberjar-name "pingtai.jar"
  :jvm-opts ["-server"]
  :main pingtai.core
  :migratus {:store :database}

  :plugins [[lein-environ "1.0.1"]
            [migratus-lein "0.2.0"]
            [org.clojars.punkisdead/lein-cucumber "1.0.4"]
            [lein-cljsbuild "1.1.0"]
            [lein-uberwar "0.1.0"]]
  :cucumber-feature-paths ["test/features"]

  :uberwar
  {:handler pingtai.handler/app
   :init pingtai.handler/init
   :destroy pingtai.handler/destroy
   :name "pingtai.war"}

  :clean-targets ^{:protect false} [:target-path [:cljsbuild :builds :app :compiler :output-dir] [:cljsbuild :builds :app :compiler :output-to]]
  :cljsbuild
  {:builds
   {:app
    {:source-paths ["src-cljs"]
     :compiler
     {:output-to "resources/public/js/app.js"
      :output-dir "resources/public/js/out"
      :externs ["react/externs/react.js" "resources/externs.js"]
      :pretty-print true}}
    :release
    {:source-paths ["env/prod/cljs"]
     :compiler
                   {:output-to "target/cljsbuild/public/js/app.js"
                    :optimizations :advanced
                    :pretty-print false
                    :output-wrapper false
                    :externs ["react/externs/react.js" "resources/externs.js"]
                    :closure-warnings {:non-standard-jsdoc :off}}}}}

  :profiles
  {:uberjar {:omit-source true
             :env {:production true}
              :hooks [leiningen.cljsbuild]
              :cljsbuild
              {:builds
               {:app
                {:source-paths ["env/prod/cljs"]
                 :compiler {:optimizations :advanced :pretty-print false}}}}
             :aot :all}
   :dev           [:project/dev :profiles/dev]
   :test          [:project/test :profiles/test]
   :project/dev  {:dependencies [[ring/ring-mock "0.3.0"]
                                 [ring/ring-devel "1.4.0"]
                                 [pjstadig/humane-test-output "0.7.0"]
                                 [com.cemerick/piggieback "0.1.5"]
                                 [lein-figwheel "0.4.1"]
                                 [clj-webdriver/clj-webdriver "0.6.1"]
                                 [org.apache.httpcomponents/httpcore "4.4"]
                                 [org.clojure/core.cache "0.6.3"]
                                 [mvxcvi/puget "0.9.2"]]
                  :plugins [[lein-figwheel "0.4.1"]]
                   :cljsbuild
                   {:builds
                    {:app
                     {:source-paths ["env/dev/cljs"] :compiler {:source-map true}}}}
                  :figwheel
                  {:http-server-root "public"
                   :server-port 3449
                   :nrepl-port 7002
                   :nrepl-middleware ["cemerick.piggieback/wrap-cljs-repl"]
                   :css-dirs ["resources/public/css"]
                   :ring-handler pingtai.handler/app}

                  :repl-options {:init-ns pingtai.core}
                  :injections [(require 'pjstadig.humane-test-output)
                               (pjstadig.humane-test-output/activate!)]
                  :env {:dev        true
                        :port       3000
                        :nrepl-port 7000}}

   :project/test {:env {:test       true
                        :port       3001
                        :nrepl-port 7001}}
   :profiles/dev {}
   :profiles/test {}})
