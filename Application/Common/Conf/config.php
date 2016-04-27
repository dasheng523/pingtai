<?php
return array(
	'noAuthCtrList' => array('Phone/Oauth','Phone/Test','Phone/Wechat','Wechat/Test','Phone/Public'),	//不需要权限认证的控制器列表

    'UserCodeExpires' => 3600*24*7, //用户权限code有效期
	'DefaultWechatID' => 1,   //默认的微信公众号ID
	'CommonCustomer' => 1,	//常规的顾客角色ID
	'ShopCateId' => 20,

	'MediaType_Image' => 1,
	'MediaType_Video' => 2,
	'MediaType_Music' => 3,

	//实体类型
	'EntityType_Park' => 111,
	'EntityType_Activity' => 222,
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

	'SESSION_OPTIONS'=> array(
		'expire'=>24*3600*15,
	),
	'Version' => 115,
);