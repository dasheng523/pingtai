## 简介

这是北流市本地信息发布平台，目的让北流市内商户在此发布信息。

## 部署

1. 先导入数据库，目录在`Data/pingtai.sql`。
2. 添加index.php文件到根目录，内容如下：
````
<?php
// 检测PHP环境
if(version_compare(PHP_VERSION,'5.3.0','<'))  die('require PHP > 5.3.0 !');
//域名配置
define('__ROOT__', 'http://192.168.23.105/pingtai');
//启动local配置
define('APP_STATUS','local');
// 开启调试模式 建议开发阶段开启 部署阶段注释或者设为false
define('APP_DEBUG',True);
// 定义应用目录
define('APP_PATH','./Application/');
// 引入ThinkPHP入口文件
require './ThinkPHP/ThinkPHP.php';

````
3. 修改`Application/Common/Conf/local.php`，将数据库连接信息配置好。
5. 新建Public/upload,Public/upload_real目录，并设置可读写权限。
4. 启动服务器。
