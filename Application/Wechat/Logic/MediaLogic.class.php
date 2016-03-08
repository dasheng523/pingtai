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
    const EntityType_Goods = 2; //店铺

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
     * 获取某个实体第一个图片
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
     * @return array
     * 获取某个实体的所有图片地址
     */
    public static function getEntityAllImgUrl($entityId, $entityType)
    {
        return self::getMediaUrl($entityId,$entityType,self::MediaType_Image);
    }
}