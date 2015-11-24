/*
Navicat MySQL Data Transfer

Source Server         : 开发服
Source Server Version : 50624
Source Host           : 192.168.23.105:3306
Source Database       : pingtai_dev

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2015-11-24 10:48:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for categorys
-- ----------------------------
DROP TABLE IF EXISTS `categorys`;
CREATE TABLE `categorys` (
  `id` varchar(50) NOT NULL,
  `title` varchar(255) DEFAULT NULL COMMENT '分类名称',
  `intro` varchar(255) DEFAULT NULL COMMENT '说明',
  `parent_id` varchar(50) DEFAULT NULL,
  `sort_num` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of categorys
-- ----------------------------
INSERT INTO `categorys` VALUES ('1', '熟食', '肉类熟食，凉伴肉菜', null, '1');
INSERT INTO `categorys` VALUES ('2', '杂食类', '粉，饭，小炒，面，包子等', null, '2');
INSERT INTO `categorys` VALUES ('3', '粉类', '北流特色沙锅粉，螺丝粉，桂林米粉', null, '3');
INSERT INTO `categorys` VALUES ('3d1c78d3-74ed-4051-a67a-cee44af749f6', 'string', '测test', 'string', '0');
INSERT INTO `categorys` VALUES ('4', '面类', '面食，面包，汤面，凉伴面等', null, '4');
INSERT INTO `categorys` VALUES ('4a3360f3-6829-43e8-a5c2-46a4607b3e36', 'string', 'string', '??', '0');
INSERT INTO `categorys` VALUES ('5', '花类', '各种鲜花', null, '5');
INSERT INTO `categorys` VALUES ('6', '服装类', '各种类型的衣服', null, '6');
INSERT INTO `categorys` VALUES ('617c1ee7-d5f1-41e7-af77-7a733a2e3572', 'string', 'string', 'string', '0');
INSERT INTO `categorys` VALUES ('7', '水果类', '各种水果', null, '7');
INSERT INTO `categorys` VALUES ('8', '米饭', '饭食', null, '8');
INSERT INTO `categorys` VALUES ('9', '小吃', '姜饼，炒螺，鱿鱼串等', null, '9');
INSERT INTO `categorys` VALUES ('eb8d71b9-2c38-4042-b335-ea8ae5eea369', 'dd', 'ss', 'ss', '22');
INSERT INTO `categorys` VALUES ('edc07d2a-1d0a-4686-9410-d9ff5e5f7060', '打发士大夫', '测test', '大苏打实打实', '0');
INSERT INTO `categorys` VALUES ('f7fad2bb-eb4a-4ebf-897b-997a4fa40809', 'string', 'string', '??', '0');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` varchar(50) NOT NULL,
  `goods_name` varchar(255) DEFAULT NULL COMMENT '商号名称',
  `origin_price` int(11) DEFAULT NULL COMMENT '原始价格',
  `new_price` int(11) DEFAULT NULL COMMENT '折扣价',
  `describe` varchar(255) DEFAULT NULL COMMENT '商品描述',
  `shop_notice` varchar(255) DEFAULT NULL COMMENT '购买须知',
  `shop_id` varchar(50) DEFAULT NULL COMMENT '店铺ID',
  `category_id` varchar(50) DEFAULT NULL COMMENT '分类ID',
  `visit_count` int(11) DEFAULT NULL COMMENT '浏览人数',
  `ctime` datetime DEFAULT NULL,
  `mtime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('5', '222', '2', '2', '2', '2', '1', '2', '50', '2015-11-22 16:50:03', '2015-11-22 16:50:06');
INSERT INTO `goods` VALUES ('6', '221', '223', '2', '1', '4', '6', '7', '997', '2015-11-22 16:50:08', '2015-11-22 16:50:12');

-- ----------------------------
-- Table structure for helpers
-- ----------------------------
DROP TABLE IF EXISTS `helpers`;
CREATE TABLE `helpers` (
  `id` varchar(50) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL,
  `hcontent` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of helpers
-- ----------------------------
INSERT INTO `helpers` VALUES ('1', '111', '11', '1111');

-- ----------------------------
-- Table structure for medias
-- ----------------------------
DROP TABLE IF EXISTS `medias`;
CREATE TABLE `medias` (
  `id` varchar(50) NOT NULL,
  `md5` varchar(50) DEFAULT NULL COMMENT '媒体MD5',
  `media_url` varchar(255) DEFAULT NULL COMMENT '媒体访问地址',
  `media_path` varchar(255) DEFAULT NULL COMMENT '媒体物理路径',
  `media_id_wechat` varchar(255) DEFAULT NULL COMMENT '微信媒体ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of medias
-- ----------------------------
INSERT INTO `medias` VALUES ('1', '1', '11.jpg', 'A', '1');
INSERT INTO `medias` VALUES ('10', '10', '110.jpg', 'K', '10');
INSERT INTO `medias` VALUES ('11', '11', '111.jpg', 'm', '11');
INSERT INTO `medias` VALUES ('12', '12', '12.jpg', 'n', '12');
INSERT INTO `medias` VALUES ('13', '13', '13.jpg', 'v', '13');
INSERT INTO `medias` VALUES ('14', '14', '14.JPG', 'Z', '14');
INSERT INTO `medias` VALUES ('15', '15', '15.JPG', 'C', '15');
INSERT INTO `medias` VALUES ('16', '16', '16.JPG', 'T', '16');
INSERT INTO `medias` VALUES ('2', '2', '2.jpg', 'B', '2');
INSERT INTO `medias` VALUES ('3', '3', '32.jpg', 'C', '3');
INSERT INTO `medias` VALUES ('4', '4', '44.jpg', 'D', '4');
INSERT INTO `medias` VALUES ('5', '5', '55.jpg', 'E', '5');
INSERT INTO `medias` VALUES ('6', '6', '66.jpg', 'F', '6');
INSERT INTO `medias` VALUES ('7', '7', '77.jpg', 'G', '7');
INSERT INTO `medias` VALUES ('8', '8', '88.jpg', 'H', '8');
INSERT INTO `medias` VALUES ('9', '9', '99.jpg', 'J', '9');

-- ----------------------------
-- Table structure for objs_medias
-- ----------------------------
DROP TABLE IF EXISTS `objs_medias`;
CREATE TABLE `objs_medias` (
  `id` varchar(50) NOT NULL,
  `obj_id` varchar(50) DEFAULT NULL COMMENT '对象ID',
  `media_id` varchar(50) DEFAULT NULL COMMENT '媒体ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of objs_medias
-- ----------------------------
INSERT INTO `objs_medias` VALUES ('asd', '5', '1');
INSERT INTO `objs_medias` VALUES ('asdasd', '5', '3');
INSERT INTO `objs_medias` VALUES ('dcds', '6', '2');
INSERT INTO `objs_medias` VALUES ('hh', '1', '8');
INSERT INTO `objs_medias` VALUES ('vg', '8', '1');

-- ----------------------------
-- Table structure for shops
-- ----------------------------
DROP TABLE IF EXISTS `shops`;
CREATE TABLE `shops` (
  `id` varchar(50) NOT NULL,
  `name` varchar(255) DEFAULT NULL COMMENT '店铺名称',
  `address` varchar(255) DEFAULT NULL COMMENT '店铺地址',
  `mobile` varchar(11) DEFAULT NULL COMMENT '电话',
  `ower_id` varchar(50) DEFAULT NULL COMMENT '所属人',
  `status` bit(1) DEFAULT NULL COMMENT '是否有效，1使用，0禁用',
  `banner_media` varchar(50) DEFAULT NULL COMMENT '招牌图片的ID',
  `blicence_media` varchar(50) DEFAULT NULL COMMENT '营业执照的ID',
  `score` int(11) DEFAULT NULL COMMENT '店铺影响力',
  `lat` decimal(15,10) DEFAULT NULL COMMENT '纬度',
  `lng` decimal(15,10) DEFAULT NULL COMMENT '经度',
  `visit_count` int(11) DEFAULT NULL COMMENT '浏览人数',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shops
-- ----------------------------
INSERT INTO `shops` VALUES ('1', 'string', 'string', 'string', '1', '', 'string', 'string', '500', '1.0000000000', '1.0000000000', null);
INSERT INTO `shops` VALUES ('10', '北流特色小吃', '城西一号', '1873890123', '10', '', '10', '1', '1000', '1.0000000000', '1.0000000000', null);
INSERT INTO `shops` VALUES ('11', '北流沙锅粉', '城北7号', '1892345678', '11', '', '11', '1', '330', '1.0000000000', '1.0000000000', '1');
INSERT INTO `shops` VALUES ('12', '北流沙锅面', '城北8号', '1345678901', '12', '', '12', '1', '231', '1.0000000000', '1.0000000000', '1');
INSERT INTO `shops` VALUES ('13', '红蜻蜓', '城南4号', '1312345678', '13', '', '13', '1', '345', '1.0000000000', '1.0000000000', '12');
INSERT INTO `shops` VALUES ('14 ', '都市丽人', '城南5号', '1357890123', '14', '', '14', '1', '456', '1.0000000000', '1.0000000000', '13');
INSERT INTO `shops` VALUES ('15', '达芙妮', '城南6号', '1892345678', '15', '', '1', '1', '321', '1.0000000000', '1.0000000000', '34');
INSERT INTO `shops` VALUES ('2', '青青水果店', '城南1号', '1314567890', '2', '', '2', '1', '600', '2.0000000000', '3.0000000000', null);
INSERT INTO `shops` VALUES ('3', '暖暖服装店', '城南2号', '1871234567', '3', '', '3', '1', '200', '2.0000000000', '1.0000000000', null);
INSERT INTO `shops` VALUES ('4', '甜甜蛋糕店', '城南3号', '1345678678', '4', '', '4', '1', '300', '2.0000000000', '1.0000000000', null);
INSERT INTO `shops` VALUES ('5', '美美鲜花店', '城北2号', '1314567890', '5', '', '5', '1', '100', '1.0000000000', '1.0000000000', null);
INSERT INTO `shops` VALUES ('6', '柳州螺丝粉', '城北3号', '1892345678', '6', '', '6', '1', '400', '3.0000000000', '1.0000000000', null);
INSERT INTO `shops` VALUES ('7', '桂林米粉', '城北4号', '1314562789', '7', '', '7', '1', '700', '2.0000000000', '1.0000000000', null);
INSERT INTO `shops` VALUES ('8', '陆川猪脚', '城北5号', '1893876890', '8', '', '8', '1', '800', '2.0000000000', '1.0000000000', null);
INSERT INTO `shops` VALUES ('9', '北流沙锅饭', '城北6号', '1895643123', '9', '', '9', '1', '900', '1.0000000000', '1.0000000000', null);

-- ----------------------------
-- Table structure for shops_categorys
-- ----------------------------
DROP TABLE IF EXISTS `shops_categorys`;
CREATE TABLE `shops_categorys` (
  `id` varchar(50) NOT NULL,
  `shop_id` varchar(50) DEFAULT NULL COMMENT '店铺ID',
  `category_id` varchar(50) DEFAULT NULL COMMENT '分类ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shops_categorys
-- ----------------------------
INSERT INTO `shops_categorys` VALUES ('1', '1', '1');
INSERT INTO `shops_categorys` VALUES ('10', '3', '6');
INSERT INTO `shops_categorys` VALUES ('12', '5', '5');
INSERT INTO `shops_categorys` VALUES ('13', '9', '8');
INSERT INTO `shops_categorys` VALUES ('14', '7', '3');
INSERT INTO `shops_categorys` VALUES ('15', '6', '3');
INSERT INTO `shops_categorys` VALUES ('16', '10', '9');
INSERT INTO `shops_categorys` VALUES ('2', '2', '7');
INSERT INTO `shops_categorys` VALUES ('4', '4', '2');
INSERT INTO `shops_categorys` VALUES ('7', '4', '4');
INSERT INTO `shops_categorys` VALUES ('9', '8', '1');
INSERT INTO `shops_categorys` VALUES ('a', '1', '6');

-- ----------------------------
-- Table structure for tasks
-- ----------------------------
DROP TABLE IF EXISTS `tasks`;
CREATE TABLE `tasks` (
  `id` varchar(50) NOT NULL,
  `title` varchar(255) DEFAULT NULL COMMENT '任务名称',
  `intro` varchar(255) DEFAULT NULL COMMENT '任务说明',
  `score` int(11) DEFAULT NULL COMMENT '单次完成任务可得积分',
  `task_type` int(5) DEFAULT NULL COMMENT '任务类型：1 每天；2 每周；3 一次性',
  `stime` datetime DEFAULT NULL COMMENT '任务有效时间 起始',
  `etime` datetime DEFAULT NULL COMMENT '任务有效时间 终止',
  `limit_amout` int(11) DEFAULT NULL COMMENT '最多可完成次数',
  `task_role` smallint(6) DEFAULT NULL COMMENT '任务的角色\r\n1：顾客 2：店员',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tasks
-- ----------------------------
INSERT INTO `tasks` VALUES ('1', '1', '1', '1', '1', '2015-11-04 11:14:32', '2015-12-26 11:14:36', '1', '1');
INSERT INTO `tasks` VALUES ('2', '2', '2', '2', '2', '2015-11-09 11:14:49', '2015-12-18 11:14:53', '2', '1');
INSERT INTO `tasks` VALUES ('3', '3', '3', '3', '3', '2015-11-10 11:14:57', '2015-11-29 11:15:02', '3', '1');
INSERT INTO `tasks` VALUES ('4', '每日访问', '每日访问', '50', '1', '2015-11-23 20:58:36', '2015-12-27 20:58:40', '5', '2');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` varchar(20) NOT NULL,
  `score` int(20) NOT NULL COMMENT '可用积分',
  `phone` int(20) DEFAULT NULL COMMENT '电话',
  `nickname` varchar(255) DEFAULT NULL,
  `sex` bit(1) DEFAULT NULL,
  `headimg` varchar(50) DEFAULT NULL,
  `ctime` int(11) DEFAULT NULL COMMENT '创建时间',
  `utime` int(11) DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '500', '1893865752', '拓跋', '', '1', '1', '1');

-- ----------------------------
-- Table structure for users_like_goods
-- ----------------------------
DROP TABLE IF EXISTS `users_like_goods`;
CREATE TABLE `users_like_goods` (
  `id` varchar(50) NOT NULL,
  `user_id` varchar(50) NOT NULL,
  `goods_id` varchar(50) NOT NULL,
  `ctime` datetime NOT NULL COMMENT '记录的创建时间',
  `relation_type` smallint(6) DEFAULT NULL COMMENT '1:喜欢 2:分享 3:访问',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of users_like_goods
-- ----------------------------
INSERT INTO `users_like_goods` VALUES ('4c091453-90e4-4c69-8ede-2ee79d7fe6d3', '5', '5', '2015-11-23 09:38:15', null);
INSERT INTO `users_like_goods` VALUES ('4fd4adda-40f5-4ddd-9012-5074c05add57', 'string', 'string', '2015-11-23 10:24:16', '2');

-- ----------------------------
-- Table structure for users_like_shops
-- ----------------------------
DROP TABLE IF EXISTS `users_like_shops`;
CREATE TABLE `users_like_shops` (
  `id` varchar(50) NOT NULL,
  `user_id` varchar(50) NOT NULL,
  `shop_id` varchar(50) NOT NULL,
  `ctime` datetime NOT NULL COMMENT '记录的创建时间',
  `relation_type` smallint(6) DEFAULT NULL COMMENT '1:喜欢 2:分享 3:访问',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users_like_shops
-- ----------------------------
INSERT INTO `users_like_shops` VALUES ('a06ecc8f-1af2-47a6-bbd3-b04caf65ea4e', '3', '7', '2015-11-23 09:41:43', null);

-- ----------------------------
-- Table structure for users_tasks
-- ----------------------------
DROP TABLE IF EXISTS `users_tasks`;
CREATE TABLE `users_tasks` (
  `id` varchar(50) NOT NULL,
  `user_id` varchar(50) DEFAULT NULL,
  `task_id` varchar(50) DEFAULT NULL,
  `ctime` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users_tasks
-- ----------------------------
INSERT INTO `users_tasks` VALUES ('0', '1', '1', '2015-11-24 09:37:18');
INSERT INTO `users_tasks` VALUES ('1', '1', '2', '2015-11-23 14:46:12');
INSERT INTO `users_tasks` VALUES ('2', '1', '3', '2015-11-22 14:46:15');
INSERT INTO `users_tasks` VALUES ('3', '1', '3', '2015-11-06 14:46:19');
INSERT INTO `users_tasks` VALUES ('4', '1', '4', '2015-11-01 14:46:24');
INSERT INTO `users_tasks` VALUES ('5', '1', '3', '2015-11-05 14:46:27');
INSERT INTO `users_tasks` VALUES ('6', '1', '2', '2015-11-23 20:59:02');
INSERT INTO `users_tasks` VALUES ('7', '1', '2', '2015-11-23 20:59:21');
INSERT INTO `users_tasks` VALUES ('8', '1', '4', '2015-11-24 10:36:59');

-- ----------------------------
-- Table structure for users_wechats
-- ----------------------------
DROP TABLE IF EXISTS `users_wechats`;
CREATE TABLE `users_wechats` (
  `id` varchar(50) NOT NULL,
  `user_id` varchar(50) DEFAULT NULL,
  `wechat_id` varchar(50) DEFAULT NULL,
  `open_id` varchar(50) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `sex` varchar(255) NOT NULL,
  `city` varchar(20) NOT NULL,
  `country` varchar(20) NOT NULL,
  `province` varchar(20) NOT NULL,
  `language` varchar(50) DEFAULT NULL,
  `headimgurl` varchar(255) NOT NULL,
  `subscribe_time` int(20) NOT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `groupid` varchar(50) NOT NULL,
  `unionid` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of users_wechats
-- ----------------------------

-- ----------------------------
-- Table structure for wechats
-- ----------------------------
DROP TABLE IF EXISTS `wechats`;
CREATE TABLE `wechats` (
  `id` varchar(50) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `appid` varchar(50) DEFAULT NULL,
  `appsecret` varchar(255) DEFAULT NULL COMMENT '秘密',
  `token` varchar(50) DEFAULT NULL COMMENT '标识',
  `original_id` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wechats
-- ----------------------------
