-- phpMyAdmin SQL Dump
-- version 4.4.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-03-23 10:28:55
-- 服务器版本： 5.5.42-log
-- PHP Version: 5.4.41

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `pingtai`
--

-- --------------------------------------------------------

--
-- 表的结构 `collection`
--

CREATE TABLE IF NOT EXISTS `collection` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `intro` varchar(510) NOT NULL,
  `imglist` text NOT NULL COMMENT '图片列表',
  `ctime` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `collection`
--

INSERT INTO `collection` (`id`, `user_id`, `name`, `intro`, `imglist`, `ctime`) VALUES
(1, 1, '最美草莓园', '一个个聚集美味鲜果的圣地，一个个亲自采摘乐趣的果园，大人娱乐的胜地，孩纸们游玩的乐园，采草莓走起！！', 'http://192.168.23.105/pingtai/Public/images/caomei.jpg', 1458348726),
(2, 1, '百香果园', '百香果是一种很受欢迎的果类。正直秋高气爽，总爱摘几个百香果加点蜂蜜配合着秋风的凉爽，感觉既润喉又清爽。', 'http://192.168.23.105/pingtai/Public/images/baixiangguo.jpg', 1458348726);

-- --------------------------------------------------------

--
-- 表的结构 `collection_goods`
--

CREATE TABLE IF NOT EXISTS `collection_goods` (
  `id` int(11) NOT NULL DEFAULT '0',
  `collection_id` int(11) NOT NULL,
  `goods_id` int(11) NOT NULL,
  `ctime` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `collection_goods`
--

INSERT INTO `collection_goods` (`id`, `collection_id`, `goods_id`, `ctime`) VALUES
(1, 1, 41, 1111),
(5, 1, 36, 111),
(6, 1, 42, 111);

-- --------------------------------------------------------

--
-- 表的结构 `goods`
--

CREATE TABLE IF NOT EXISTS `goods` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `intro` varchar(1024) NOT NULL,
  `ctime` int(11) NOT NULL,
  `mtime` int(11) NOT NULL,
  `price` decimal(11,2) NOT NULL COMMENT '以分为单位',
  `tags` varchar(255) NOT NULL COMMENT '标签',
  `shop_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `goods`
--

INSERT INTO `goods` (`id`, `name`, `intro`, `ctime`, `mtime`, `price`, `tags`, `shop_id`) VALUES
(36, '我是什么', '自行车，又称脚踏车或单车，通常是二轮的小型陆上车辆。人骑上车后，以脚踩踏板为动力，是绿色环保的交通工具。英文bicycle。其中bi意指二，而cycle意指轮，即两轮车。在中国内地、台湾、新加坡，通常称其为“自行车”或“脚踏车”；在港澳则通常称其为“单车”（其实粤语通常都这么称呼）；而在日本称为“自転（转）车”。自行车种类很多，有单人自行车，双人自行车还有多人自行车。', 1457949389, 1458376339, '6.00', '', 2),
(41, '爱上范德萨地方', '自行车，又称脚踏车或单车，通常是二轮的小型陆上车辆。人骑上车后，以脚踩踏板为动力，是绿色环保的交通工具。英文bicycle。其中bi意指二，而cycle意指轮，即两轮车。在中国内地、台湾、新加坡，通常称其为“自行车”或“脚踏车”；在港澳则通常称其为“单车”（其实粤语通常都这么称呼）；而在日本称为“自転（转）车”。自行车种类很多，有单人自行车，双人自行车还有多人自行车。', 1458012481, 1458348669, '2132.00', '', 2),
(42, '的风格的风格', '玩423 ', 1458128790, 1458346864, '232.00', '', 2);

-- --------------------------------------------------------

--
-- 表的结构 `media`
--

CREATE TABLE IF NOT EXISTS `media` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL COMMENT '具体访问完整路径',
  `path` varchar(255) NOT NULL COMMENT '相对根目录物理路径',
  `media_id` varchar(255) NOT NULL COMMENT '微信那边的媒体ID',
  `media_type` smallint(5) NOT NULL COMMENT '媒体类型 1图片 2视频 3音乐',
  `entity_id` int(11) NOT NULL COMMENT '实体ID',
  `entity_type` int(11) NOT NULL COMMENT '实体类型 1店铺 2商品 3妙集'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `park`
--

CREATE TABLE IF NOT EXISTS `park` (
  `id` int(11) NOT NULL,
  `collection_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `intro` text NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `short_intro` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `address` varchar(255) NOT NULL,
  `imglist` text NOT NULL COMMENT '图片地址',
  `lat` decimal(10,7) NOT NULL,
  `lng` decimal(10,7) NOT NULL,
  `other_info` varchar(510) NOT NULL COMMENT '用json保存',
  `ctime` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COMMENT='园区';

--
-- 转存表中的数据 `park`
--

INSERT INTO `park` (`id`, `collection_id`, `name`, `intro`, `price`, `short_intro`, `phone`, `address`, `imglist`, `lat`, `lng`, `other_info`, `ctime`) VALUES
(1, 1, '勾漏洞草莓园', '<h4>收费说明</h4>\n                        <p>该草莓园入场每人需15块钱，可拆摘带出1斤草莓。不收其他费用。</p>\n                        <h4>园区简介</h4>\n                        <p>\n                            海白鹤草莓园（赵屯草莓基地）位于上海市青浦区赵屯镇地区，自1983年引进栽培草莓至今已有二十多年种植和科研历史，目前栽培面积稳定在1.2万亩， 占上海市草莓栽培面积的四分之一以上，草莓鲜果供应期长达半年，年总产量1.8万余吨，总产值1亿余元，荣获“中国草莓之乡”、“草莓名牌产 品”、“上海市著名商标”等殊荣。\n                        </p>', '15.00', '海白鹤草莓园（赵屯草莓基地）位于上海市青浦区赵屯镇地区，自1983年引进栽培草莓至今已有二十多年种植和科研历史，目前栽培面积稳定在1.2万亩， 占上海市草莓栽培面积的四分之一以上，草莓鲜果供应期长达半年，年总产量1.8万余吨，总产值1亿余元，荣获“中国草莓之乡”、“草莓名牌产 品”、“上海市著名商标”等殊荣。', '18938657523', '勾漏洞附近', 'http://192.168.23.105/pingtai/Public/images/yuandetail2.png;\nhttp://192.168.23.105/pingtai/Public/images/yuandetail2.png', '22.7449680', '110.4004070', '[{"name":"规模","val":"50平方米"},{"name":"环境","val":"很不错"}]', 0),
(2, 1, '罗政村村口草莓园', '<h4>收费说明</h4>\n                        <p>该草莓园入场每人需15块钱，可拆摘带出1斤草莓。不收其他费用。</p>\n                        <h4>园区简介</h4>\n                        <p>\n                            海白鹤草莓园（赵屯草莓基地）位于上海市青浦区赵屯镇地区，自1983年引进栽培草莓至今已有二十多年种植和科研历史，目前栽培面积稳定在1.2万亩， 占上海市草莓栽培面积的四分之一以上，草莓鲜果供应期长达半年，年总产量1.8万余吨，总产值1亿余元，荣获“中国草莓之乡”、“草莓名牌产 品”、“上海市著名商标”等殊荣。\n                        </p>', '15.00', '海白鹤草莓园（赵屯草莓基地）位于上海市青浦区赵屯镇地区，自1983年引进栽培草莓至今已有二十多年种植和科研历史，目前栽培面积稳定在1.2万亩， 占上海市草莓栽培面积的四分之一以上，草莓鲜果供应期长达半年，年总产量1.8万余吨，总产值1亿余元，荣获“中国草莓之乡”、“草莓名牌产 品”、“上海市著名商标”等殊荣。', '18938657523', '勾漏洞附近', 'http://192.168.23.105/pingtai/Public/images/yuandetail2.png;\nhttp://192.168.23.105/pingtai/Public/images/yuandetail2.png', '22.7449680', '22.7449680', '[{"name":"规模","val":"50平方米"},{"name":"环境","val":"很不错"}]', 0),
(3, 1, '隆胜草莓园', '<h4>收费说明</h4>\n                        <p>该草莓园入场每人需15块钱，可拆摘带出1斤草莓。不收其他费用。</p>\n                        <h4>园区简介</h4>\n                        <p>\n                            海白鹤草莓园（赵屯草莓基地）位于上海市青浦区赵屯镇地区，自1983年引进栽培草莓至今已有二十多年种植和科研历史，目前栽培面积稳定在1.2万亩， 占上海市草莓栽培面积的四分之一以上，草莓鲜果供应期长达半年，年总产量1.8万余吨，总产值1亿余元，荣获“中国草莓之乡”、“草莓名牌产 品”、“上海市著名商标”等殊荣。\n                        </p>', '10.00', '海白鹤草莓园（赵屯草莓基地）位于上海市青浦区赵屯镇地区，自1983年引进栽培草莓至今已有二十多年种植和科研历史，目前栽培面积稳定在1.2万亩， 占上海市草莓栽培面积的四分之一以上，草莓鲜果供应期长达半年，年总产量1.8万余吨，总产值1亿余元，荣获“中国草莓之乡”、“草莓名牌产 品”、“上海市著名商标”等殊荣。', '18938657523', '勾漏洞附近', 'http://192.168.23.105/pingtai/Public/images/yuandetail2.png;\nhttp://192.168.23.105/pingtai/Public/images/yuandetail2.png', '22.7449680', '22.7449680', '[{"name":"规模","val":"50平方米"},{"name":"环境","val":"很不错"}]', 0);

-- --------------------------------------------------------

--
-- 表的结构 `role`
--

CREATE TABLE IF NOT EXISTS `role` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `ctime` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `role`
--

INSERT INTO `role` (`id`, `name`, `ctime`) VALUES
(1, '普通顾客', 1457346822);

-- --------------------------------------------------------

--
-- 表的结构 `scope_business`
--

CREATE TABLE IF NOT EXISTS `scope_business` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `parent_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='经营范围';

-- --------------------------------------------------------

--
-- 表的结构 `shop`
--

CREATE TABLE IF NOT EXISTS `shop` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL COMMENT '店主',
  `name` varchar(255) NOT NULL,
  `intro` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `address` varchar(255) NOT NULL,
  `lng` decimal(10,5) NOT NULL COMMENT '纬度',
  `lat` decimal(10,5) NOT NULL COMMENT '经度',
  `ctime` int(11) NOT NULL,
  `scope_business` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `shop`
--

INSERT INTO `shop` (`id`, `user_id`, `name`, `intro`, `phone`, `address`, `lng`, `lat`, `ctime`, `scope_business`) VALUES
(2, 1, '夜声技术', '1111', '15655656561', '城北路花果山', '11.00000', '11.00000', 11, 0);

-- --------------------------------------------------------

--
-- 表的结构 `shop_score`
--

CREATE TABLE IF NOT EXISTS `shop_score` (
  `id` int(11) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `op_score` int(11) NOT NULL COMMENT '操作分数',
  `op_name` varchar(255) NOT NULL COMMENT '操作名称',
  `ctime` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `sysconfig`
--

CREATE TABLE IF NOT EXISTS `sysconfig` (
  `id` int(11) NOT NULL,
  `ckey` varchar(255) NOT NULL,
  `cvalue` text NOT NULL,
  `intro` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `sysconfig`
--

INSERT INTO `sysconfig` (`id`, `ckey`, `cvalue`, `intro`) VALUES
(1, 'Text_IsOpenShop', '您已开通过店铺，无需再次开通', ''),
(2, 'Num_validateCodeExpires', '300', '验证码过期时间'),
(3, 'Text_OpenShopSuccess', '恭喜你开店成功', '开店成功提示语'),
(4, 'Text_VerifyCodeError', '您的验证码错误', '验证码错误提示语'),
(5, 'PageSize', '10', '每页数量');

-- --------------------------------------------------------

--
-- 表的结构 `sys_mess`
--

CREATE TABLE IF NOT EXISTS `sys_mess` (
  `id` int(11) NOT NULL,
  `to_user_id` int(11) NOT NULL,
  `from_user_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `maincontent` text NOT NULL,
  `subtext` varchar(255) NOT NULL,
  `status` int(11) NOT NULL COMMENT '1已读 0未读',
  `ctime` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COMMENT='系统内部消息';

--
-- 转存表中的数据 `sys_mess`
--

INSERT INTO `sys_mess` (`id`, `to_user_id`, `from_user_id`, `title`, `maincontent`, `subtext`, `status`, `ctime`) VALUES
(1, 1, 0, '测试消息', '测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息', '测试消息测试消息', 1, 111);

-- --------------------------------------------------------

--
-- 表的结构 `task`
--

CREATE TABLE IF NOT EXISTS `task` (
  `id` int(11) NOT NULL,
  `entity_type` int(11) NOT NULL COMMENT '实体类型',
  `entity_id` int(11) NOT NULL COMMENT '实体ID',
  `name` varchar(255) NOT NULL COMMENT '名称',
  `intro` varchar(510) NOT NULL COMMENT '描述',
  `score` int(11) NOT NULL COMMENT '任务分值',
  `dones` int(11) NOT NULL COMMENT '完成次数',
  `out_time` int(11) NOT NULL COMMENT '过期时间',
  `repeat_type` smallint(6) NOT NULL COMMENT '重复类型 1每日重复，2每周重复，3一次性',
  `repeat_max` int(11) NOT NULL COMMENT '最多重复次数',
  `ctime` int(11) NOT NULL COMMENT '创建任务时间'
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `task`
--

INSERT INTO `task` (`id`, `entity_type`, `entity_id`, `name`, `intro`, `score`, `dones`, `out_time`, `repeat_type`, `repeat_max`, `ctime`) VALUES
(1, 1, 2, '每日登录', '每日登录可以获得更多积分', 10, 0, 1488127736, 1, 10, 222),
(2, 1, 2, '测试任务', '4564879', 30, 1, 1488127736, 1, 1, 1488127736);

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL,
  `ctime` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `ctime`) VALUES
(1, 1457346822),
(2, 1457402062),
(3, 1457435690),
(4, 1457482557),
(5, 1457655350);

-- --------------------------------------------------------

--
-- 表的结构 `user_info`
--

CREATE TABLE IF NOT EXISTS `user_info` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `realname` varchar(255) NOT NULL,
  `sex` smallint(3) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `language` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `province` varchar(50) NOT NULL,
  `headimgurl` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `mtime` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `user_info`
--

INSERT INTO `user_info` (`id`, `user_id`, `realname`, `sex`, `nickname`, `language`, `city`, `province`, `headimgurl`, `phone`, `mtime`) VALUES
(1, 1, '黄业生', 1, '夜声的世界', '', '5566', '5566', 'http://192.168.23.105/pingtai/Public/images/head.jpg', '18938657523', 0),
(2, 2, '', 1, '5566', '', '5566', '5566', '5566', '', 0),
(3, 11, '', 1, '5566', '', '5566', '5566', '5566', '', 0);

-- --------------------------------------------------------

--
-- 表的结构 `user_op_log`
--

CREATE TABLE IF NOT EXISTS `user_op_log` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `op` varchar(255) NOT NULL,
  `param` varchar(510) NOT NULL,
  `ctime` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `user_role`
--

CREATE TABLE IF NOT EXISTS `user_role` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `ctime` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `user_role`
--

INSERT INTO `user_role` (`id`, `user_id`, `role_id`, `ctime`) VALUES
(1, 1, 1, 1457346822),
(2, 2, 1, 1457402062),
(3, 3, 1, 1457435691),
(4, 4, 1, 1457482557),
(5, 5, 1, 1457655350);

-- --------------------------------------------------------

--
-- 表的结构 `user_score`
--

CREATE TABLE IF NOT EXISTS `user_score` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `op_score` int(11) NOT NULL,
  `op_name` varchar(255) NOT NULL,
  `citime` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `user_use_entity`
--

CREATE TABLE IF NOT EXISTS `user_use_entity` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `entity_id` int(11) NOT NULL,
  `entity_type` smallint(5) NOT NULL COMMENT '1店铺，2商品，3评论',
  `use_type` smallint(5) NOT NULL COMMENT '用途 1评论， 2喜欢',
  `ccontent` varchar(1024) NOT NULL,
  `ctime` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `user_use_entity`
--

INSERT INTO `user_use_entity` (`id`, `user_id`, `entity_id`, `entity_type`, `use_type`, `ccontent`, `ctime`) VALUES
(55, 1, 36, 2, 4, '', 1458376115),
(56, 1, 36, 2, 2, '', 1458376213),
(57, 1, 36, 2, 1, 'ceshi', 1458432169),
(58, 1, 36, 2, 1, 'ceshi', 1458432179),
(59, 1, 36, 2, 1, '????', 1458432207),
(60, 1, 5566, 2, 4, '', 1458432524),
(61, 1, 36, 2, 1, '测试', 1458432697),
(62, 1, 36, 2, 1, '测试', 1458432705),
(63, 1, 36, 2, 1, 's的方式地方', 1458432891),
(64, 1, 0, 2, 4, '', 1458450061),
(65, 1, 0, 4, 4, '', 1458469157),
(66, 1, 3, 4, 4, '', 1458469260),
(67, 1, 5566, 4, 4, '', 1458470045),
(68, 1, 1, 4, 4, '', 1458472469),
(70, 1, 1, 4, 2, '', 1458474118),
(71, 1, 1, 4, 1, 'sadfsdfsdf', 1458474266),
(72, 1, 1, 2, 4, '', 1458474673),
(73, 1, 41, 2, 4, '', 1458474719),
(74, 1, 41, 2, 2, '', 1458476176);

-- --------------------------------------------------------

--
-- 表的结构 `wechat`
--

CREATE TABLE IF NOT EXISTS `wechat` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `appid` varchar(255) NOT NULL,
  `app_secret` varchar(50) NOT NULL,
  `encodingaeskey` varchar(255) NOT NULL,
  `originid` varchar(255) NOT NULL,
  `mchid` varchar(255) NOT NULL,
  `paykey` varchar(255) NOT NULL,
  `ctime` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COMMENT='微信号的配置';

--
-- 转存表中的数据 `wechat`
--

INSERT INTO `wechat` (`id`, `name`, `token`, `appid`, `app_secret`, `encodingaeskey`, `originid`, `mchid`, `paykey`, `ctime`) VALUES
(1, '一妙集', '1907424487', 'wx0da9a07ff65da935', '9d514058e2abf4ac81a43f120f3e8205', 'M93SYG9v0uWMOyW94ocHLakTXkSF5P0i72mSvUa0C6y', '', '', '', 1457339289);

-- --------------------------------------------------------

--
-- 表的结构 `wechat_user`
--

CREATE TABLE IF NOT EXISTS `wechat_user` (
  `id` int(11) NOT NULL,
  `wechat_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `open_id` varchar(255) NOT NULL,
  `subscribe` smallint(3) NOT NULL,
  `subscribe_time` int(11) NOT NULL,
  `unionid` varchar(100) NOT NULL,
  `remark` varchar(255) NOT NULL,
  `groupid` int(11) NOT NULL COMMENT '微信里面的分组ID'
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `wechat_user`
--

INSERT INTO `wechat_user` (`id`, `wechat_id`, `user_id`, `open_id`, `subscribe`, `subscribe_time`, `unionid`, `remark`, `groupid`) VALUES
(1, 1, 1, '5566', 0, 0, '', '', 0),
(2, 1, 8, '5566', 0, 0, '', '', 0),
(3, 1, 11, '5566', 0, 0, '', '', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `collection`
--
ALTER TABLE `collection`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `collection_goods`
--
ALTER TABLE `collection_goods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `goods`
--
ALTER TABLE `goods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `park`
--
ALTER TABLE `park`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `scope_business`
--
ALTER TABLE `scope_business`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shop`
--
ALTER TABLE `shop`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shop_score`
--
ALTER TABLE `shop_score`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sysconfig`
--
ALTER TABLE `sysconfig`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sys_mess`
--
ALTER TABLE `sys_mess`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_info`
--
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_op_log`
--
ALTER TABLE `user_op_log`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_score`
--
ALTER TABLE `user_score`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_use_entity`
--
ALTER TABLE `user_use_entity`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wechat`
--
ALTER TABLE `wechat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wechat_user`
--
ALTER TABLE `wechat_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `collection`
--
ALTER TABLE `collection`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `goods`
--
ALTER TABLE `goods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=43;
--
-- AUTO_INCREMENT for table `media`
--
ALTER TABLE `media`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `park`
--
ALTER TABLE `park`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `scope_business`
--
ALTER TABLE `scope_business`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `shop`
--
ALTER TABLE `shop`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `shop_score`
--
ALTER TABLE `shop_score`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `sysconfig`
--
ALTER TABLE `sysconfig`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `sys_mess`
--
ALTER TABLE `sys_mess`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `user_info`
--
ALTER TABLE `user_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `user_op_log`
--
ALTER TABLE `user_op_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `user_role`
--
ALTER TABLE `user_role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `user_score`
--
ALTER TABLE `user_score`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `user_use_entity`
--
ALTER TABLE `user_use_entity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=75;
--
-- AUTO_INCREMENT for table `wechat`
--
ALTER TABLE `wechat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `wechat_user`
--
ALTER TABLE `wechat_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
