ALTER TABLE `goods` ADD COLUMN `original_price` VARCHAR(255) NULL AFTER `mtime`;

ALTER TABLE `shop` ADD COLUMN `coll_id`  int(11) NULL AFTER `user_id`;

ALTER TABLE `media`
ADD COLUMN `real_path`  varchar(255) NULL AFTER `path`;
