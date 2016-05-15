ALTER TABLE `goods` ADD COLUMN `original_price` VARCHAR(255) NULL AFTER `mtime`;

ALTER TABLE `shop` ADD COLUMN `coll_id`  int(11) NULL AFTER `user_id`;

ALTER TABLE `media`
ADD COLUMN `real_path`  varchar(255) NULL AFTER `path`;

ALTER TABLE `goods`
ADD COLUMN `is_hide`  smallint NULL AFTER `tags`;

ALTER TABLE `activity`
ADD COLUMN `sort`  int NULL COMMENT '排序，数字越大，越前面' AFTER `ctime`;

ALTER TABLE `shop` CHANGE `phone` `phone` VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL;
ALTER TABLE `shop` CHANGE `intro` `intro` TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL;

CREATE TABLE `famous_shop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shop_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
