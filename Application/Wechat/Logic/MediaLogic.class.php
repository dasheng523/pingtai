<?php
/**
 * Created by PhpStorm.
 * User: yesheng
 * Date: 16-3-8
 * Time: 上午10:27
 */

namespace Wechat\Logic;

/**
 * Class MediaLogic
 * @package Wechat\Logic
 * 媒体资源模块
 */
class MediaLogic
{

    const EntityType_SHOP = 1; //店铺
    const EntityType_Goods = 2; //商品
    const EntityType_Collection = 3; //妙集

    const MediaType_Image = 1;
    const MediaType_Video = 2;
    const MediaType_Music = 3;

    /**
     * @param $entityId
     * @param $entityType
     * @param $mediaType
     * @return array
     * 根据实体的ID和类型，返回媒体的url列表
     */
    public static function getMediaUrl($entityId, $entityType,$mediaType)
    {
        $list = D('Media')
            ->where(array('entity_id'=>$entityId,'entity_type'=>$entityType,'media_type'=>$mediaType))
            ->field('url')
            ->select();
        $urls = array_column($list,'url');
        return $urls;
    }

    /**
     * @param $entityId
     * @param $entityType
     * @return mixed
     * 获取某个实体第一个图片URL
     */
    public static function getEntityFirstImgUrl($entityId, $entityType)
    {
        $url = D('Media')
            ->where(array('entity_id'=>$entityId,'entity_type'=>$entityType,'media_type'=>self::MediaType_Image))
            ->order('id asc')
            ->getField('url');
        return $url;
    }

    /**
     * @param $entityId
     * @param $entityType
     * @return mixed
     * 获取某个实体的第一个图片实体
     */
    public static function getEntityFirstImg($entityId, $entityType)
    {
        return D('Media')
            ->where(array('entity_id'=>$entityId,'entity_type'=>$entityType,'media_type'=>self::MediaType_Image))
            ->order('id asc')
            ->find();
    }

    /**
     * @param $entityId
     * @param $entityType
     * @return array
     * 获取某个实体的所有图片地址
     */
    public static function getEntityAllImgUrl($entityId, $entityType)
    {
        return self::getMediaUrl($entityId,$entityType,self::MediaType_Image);
    }

    /**
     * @param $id
     * @return mixed
     * 删除制定ID的媒体
     */
    public static function delMediaById($id){
        $path = self::getMediaPathById($id);
        self::delMediaFile($path);
        return D('Media')
            ->where(array('id'=>$id))
            ->delete();
    }

    /**
     * @param $mediaId
     * @param $entityId
     * @return bool
     * 设置媒体的entityId
     */
    public static function setEntityId($mediaId,$entityId){
        return D('Media')
            ->where(array('id'=>$mediaId))
            ->save(array('entity_id'=>$entityId));
    }

    /**
     * @param $info
     * @return mixed
     * 添加商店图片数据
     */
    public static function addShopImg($info)
    {
        return self::addMedia(self::EntityType_SHOP,self::MediaType_Image,$info);
    }

    /**
     * @param $entityType
     * @param $mediaType
     * @param $info
     * @return mixed
     * 添加媒体数据
     */
    public static function addMedia($entityType,$mediaType,$info){
        $info['entity_type'] = $entityType;
        $info['mediaType'] = $mediaType;
        return D('Media')->data($info)->add();
    }

    /**
     * @param $info
     * @return mixed
     * 添加媒体数据
     */
    public static function addMediaInfo($info){
        return D('Media')->data($info)->add();
    }

    /**
     * @return array
     * 上传媒体
     */
    public static function updateMedia()
    {
        $uploadFiles = $_FILES;
        $rs = array();
        foreach($uploadFiles as $upload){
            $info = array();
            $info['fileName'] = ysuuid().'.png';
            $info['path'] = "Public/upload/".$info['fileName'];
            $info['url'] = __ROOT__ .'/' .$info['path'];
            if(!@move_uploaded_file($upload['tmp_name'],$info['path'])){
                echo "error";
            }
            $rs[] = $info;
        }
        return $rs;
    }

    /**
     * @param $id
     * @return mixed
     * 获取媒体路径
     */
    public static function getMediaPathById($id)
    {
        return D('Media')
            ->where(array('id'=>$id))
            ->getField('path');
    }


    /**
     * @param $path
     * 删除媒体文件
     */
    public static function delMediaFile($path)
    {
        //TODO 删除具体媒体文件
    }

    /**
     * @param $entityId
     * @param $entityType
     * @param $mediaType
     * @return mixed
     * 获取某个实体的所有媒体
     */
    public static function getEntityAllMedia($entityId, $entityType, $mediaType)
    {
        return D('Media')
            ->where(array('entity_id'=>$entityId,'entity_type'=>$entityType,'media_type'=>$mediaType))
            ->select();
    }
}