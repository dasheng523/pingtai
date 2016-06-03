<?php
/**
 * Created by PhpStorm.
 * User: yesheng
 * Date: 16-2-21
 * Time: 上午10:23
 */

namespace Phone\Controller;
use Think\Controller;
use \Wechat\Logic as logic;

/**
 * Class UploadController
 * @package Phone\Controller
 * 上传模块
 */
class UploadController extends Controller {

    /**
     * 上传文件 如果这里出现问题，那看看有没有upload这个文件夹
     */
    public function uploadFile(){
        $mediaType = I('post.mediaType');
        $entityType = I('post.entityType');

        $files = logic\MediaLogic::updateMedia();

        $ids = array();
        foreach($files as &$file){
            $file['media_type'] = $mediaType;
            $file['entity_type'] = $entityType;
            //缩略图规格
            $suolveMap = array(
                C('EntityType_Activity') => array('width'=>350,'height'=>200),
                C('EntityType_Goods') => array('width'=>300,'height'=>400),
                C('EntityType_Shop') => array('width'=>350,'height'=>200),
                C('EntityType_AdMsg') => array('width'=>350,'height'=>200),
            );

            if($mediaType == C('MediaType_Image')){
                $kuai = $suolveMap[$entityType];
                //生成缩略图
                logic\MediaLogic::resizePic($file['path'],$file['path'],$kuai['width'],$kuai['height']);
            }
            $file['name'] = 's';
            $ids[] = logic\MediaLogic::addMediaInfo($file);
        }
        $this->success($ids);
    }


    /**
     *
     * 使用微信serverId上传图片
     */
    public function uploadWechatPic(){
        $mediaType = I('post.mediaType');
        $entityType = I('post.entityType');
        $serverId = I('post.serverId');

        $weObj = logic\WechatLogic::initDefaultWechat();
        $img = $weObj->getMedia($serverId);
        $ids = array();
        if($img){
            $file['fileName'] = ysuuid().'.png';
            $file['path'] = "Public/upload/".$file['fileName'];
            $file['url'] = __ROOT__ .'/' .$file['path'];
            $file['real_path'] = "Public/upload_real/".$file['fileName'];
            $file['media_type'] = $mediaType;
            $file['entity_type'] = $entityType;
            $file['name'] = 'wechat';
            $file['media_id'] = $serverId;
            //保存图片
            file_put_contents($file['path'],$img);
            file_put_contents($file['real_path'],$img);
            //入库
            $ids[] = logic\MediaLogic::addMediaInfo($file);
            $this->success($ids);
        }
        else{
            $this->error($weObj->errMsg);
        }
    }


    /**
     * 删除媒体文件
     */
    public function delFile(){
        $id = I('post.id');
        $rs = logic\MediaLogic::delMediaById($id);
        $this->success($rs);
    }
}