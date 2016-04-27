ALTER TABLE `goods` ADD COLUMN `original_price` VARCHAR(255) NULL AFTER `mtime`;

ALTER TABLE `shop` ADD COLUMN `coll_id`  int(11) NULL AFTER `user_id`;

ALTER TABLE `media`
ADD COLUMN `real_path`  varchar(255) NULL AFTER `path`;

ALTER TABLE `goods`
ADD COLUMN `is_hide`  smallint NULL AFTER `tags`;

ALTER TABLE `activity`
ADD COLUMN `sort`  int NULL COMMENT '排序，数字越大，越前面' AFTER `ctime`;