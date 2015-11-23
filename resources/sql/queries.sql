-- name: get-home-goods
-- 获得首页的商品信息，按活跃度排序.
SELECT shops.id,shops.name,medias.media_url
FROM shops
  LEFT JOIN medias
    on medias.id=shops.banner_media
ORDER BY score DESC
LIMIT 9

-- name: create-category!
-- 创建一个分类
INSERT INTO categorys
(id, title, intro, parent_id, sort_num)
VALUES (:id, :title, :intro, :parent_id, :sort_num)

-- name: get-all-categorys
-- 获得所有分类
SELECT *
FROM categorys
ORDER BY sort_num DESC

-- name: get-category-by-id
-- 根据ID获取一个分类
SELECT *
FROM categorys
WHERE id=:id

-- name: get-sub-category
-- 获取子分类
SELECT *
FROM categorys
WHERE parent_id=:parent_id

-- name: get-top9-shop
-- 获取前九个店铺，按积分排序.
SELECT shops.id,shops.name,medias.media_url
FROM shops
LEFT JOIN medias
on medias.id=shops.banner_media
ORDER BY score DESC
LIMIT 9





















-- name: create-user!
-- creates a new user record
INSERT INTO users
(id, first_name, last_name, email, pass)
VALUES (:id, :first_name, :last_name, :email, :pass)

-- name: update-user!
-- update an existing user record
UPDATE users
SET first_name = :first_name, last_name = :last_name, email = :email
WHERE id = :id

-- name: get-user
-- retrieve a user given the id.
SELECT * FROM users
WHERE id = :id

-- name: delete-user!
-- delete a user given the id
DELETE FROM users
WHERE id = :id
