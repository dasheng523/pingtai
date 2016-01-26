(ns pingtai.widget.scroller)

(defn create-scroll []
  "创建一个滚动条"
  (atom nil))

(defn init-scoller! [scoller node-class]
  "初始化滚动条"
  (let [refleshing (atom false)]
    (reset! scoller (js/IScroll.
                      node-class
                      (clj->js
                        {:useTransform false
                         :click true
                         :probeType 1})))
    (.on @scoller "scrollEnd" #(when @refleshing
                                  (.log js/console "reflesh")
                                  (reset! refleshing false)))
    (.on @scoller "scroll" #(when (and (>= (.-y @scoller) 30) (not @refleshing))
                             (reset! refleshing true)
                             (.log js/console "456")))
    (js/setTimeout #(.refresh @scoller) 300)
    (.addEventListener js/document "touchmove" #(.preventDefault %) false)))

(defn load! [scroller reflesh-fn readmore-fn]
  "刷新数据事件"
  (.on @scroller "scrollEnd"))


(defn reflesh-scoller! [scoller]
  "刷新滚动条"
  (js/setTimeout  #(.refresh @scoller) 300))

;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn create [node-class]
  (let [scroller (js/IScroll.
                   node-class
                   (clj->js
                     {:useTransform false
                      :click true
                      :probeType 1}))
        need-reflesh (atom false)
        need-readmore (atom false)
        reflesh (atom nil)
        readmore (atom nil)]
    (.on scroller "scrollEnd" (fn []
                                (when (and @need-reflesh @reflesh)
                                  (@reflesh)
                                  (reset! need-reflesh false))
                                (when (and @need-readmore @readmore)
                                  (@readmore)
                                  (reset! need-readmore false))))
    (.on scroller "scroll" #(when (and (>= (.-y scroller) 30))
                             (when (not @need-reflesh)
                               (reset! need-reflesh true))
                             (when-not @need-readmore)
                               (reset! need-readmore true)))
    (js/setTimeout #(.refresh scroller) 300)
    (.addEventListener js/document "touchmove" #(.preventDefault %) false)
    {:scroller scroller
     :reflesh reflesh
     :readmore readmore}))

(defn reflesh [scroller]
  (js/setTimeout  #(.refresh (:scroller scroller)) 300))

(defn load [scroller reflesh-fn readmore-fn]
  (let [reflesh (:reflesh scroller)
        readmore (:readmore scroller)]
    (reset! reflesh reflesh-fn)
    (reset! readmore readmore-fn)))