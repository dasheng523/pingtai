<?php
return array(
	/* 数据库配置 */
    'DB_TYPE'   => 'mysql',     // 数据库类型
    'DB_HOST'   => 'localhost', // 服务器地址
    'DB_NAME'   => 'pingtai',      // 数据库名
    'DB_USER'   => 'root',      // 用户名
    'DB_PWD'    => 'a5235013',          // 密码
    'DB_PORT'   => '3306',      // 端口
    'DB_PREFIX' => '',          // 数据库表前缀
    'DB_CHARSET'=>'utf8' ,    //数据库编码

	'LOCAL_DEV' => true,	//本地开发模式

	'noAuthCtrList' => array('Phone/Oauth','Phone/Test','Wechat/Test'),	//不需要权限认证的控制器列表

    'UserCodeExpires' => 3600*24*7, //用户权限code有效期
	'DefaultWechatID' => 1,   //默认的微信公众号ID
	'CommonCustomer' => 1,	//常规的顾客角色ID

	'MediaType_Image' => 1,
	'MediaType_Video' => 2,
	'MediaType_Music' => 3,

	//实体类型
	'EntityType_Shop' => 1,
	'EntityType_Goods' => 2,
	'EntityType_Comment' => 3,
	'EntityType_Collection' => 4,
	'EntityType_User' => 5,

	//用途类型
	'UseType_Comment' => 1,
	'UseType_Like' => 2,
	'UseType_Collection' => 3,  //收藏
	'UseType_Visit' => 4,  //访问
);