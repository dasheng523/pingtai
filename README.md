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
5. 新建Public/upload目录，并设置可写权限。
4. 启动服务器。

## 商业友好的开源协议

pingtai遵循Apache2开源协议发布。Apache Licence是著名的非盈利开源组织Apache采用的协议。该协议和BSD类似，鼓励代码共享和尊重原作者的著作权，同样允许代码修改，再作为开源或商业软件发布。
