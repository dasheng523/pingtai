<?php
namespace Wechat\Model;
use Think\Model;

/**
 * Class UserModel
 * @package Wechat\Model
 * 用户模型
 */
class ShopModel extends Model {

    protected $_auto = array (
        array('ctime','time',1,'function'),
    );

}