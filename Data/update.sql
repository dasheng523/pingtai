ALTER TABLE `goods` ADD `original_price` VARCHAR(255) NULL AFTER `mtime`;

ALTER TABLE `shop` ADD COLUMN `coll_id`  int(11) NULL AFTER `user_id`;