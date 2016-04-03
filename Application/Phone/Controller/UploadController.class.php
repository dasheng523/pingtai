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
     * 上传文件
     */
    public function uploadFile(){
        $files = logic\MediaLogic::updateMedia();
        $mediaType = 0;
        $entityType = 0;
        $ids = array();
        foreach($files as &$file){
            $file['media_type'] = $mediaType;
            $file['entity_type'] = $entityType;
            $ids[] = logic\MediaLogic::addMediaInfo($file);
        }
        $this->success($ids);
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