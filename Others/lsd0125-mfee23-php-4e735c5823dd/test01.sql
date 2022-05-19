SELECT *
FROM `products`
         JOIN `categories` ON `products`.`category_sid` = `categories`.`sid`;

SELECT products.*, categories.name
FROM `products`
         JOIN `categories` ON `products`.`category_sid` = `categories`.`sid`;

SELECT p.*, c.name AS `分類名稱`
FROM `products` AS p
         JOIN `categories` AS c
              ON p.`category_sid` = c.`sid`;

-- **********************************
SELECT p.*, c.name `分類名稱`
FROM `products` p
         JOIN `categories` c
              ON p.`category_sid` = c.`sid`;


SELECT p.*, c.name `分類名稱`
FROM `categories` c
         JOIN `products` p
              ON p.`category_sid` = c.`sid`;
-- **********************************


SELECT p.*, c.name `分類名稱`
FROM `products` p
         LEFT JOIN `categories` c
                   ON p.`category_sid` = c.`sid`;

SELECT c.name `分類名稱`, p.*
FROM `categories` c
         LEFT JOIN `products` p
                   ON p.`category_sid` = c.`sid`;
-- **********************************


-- recordset 資料集

SELECT *
FROM `products`
GROUP BY `category_sid`;

SELECT *, COUNT(1) num
FROM `products`
GROUP BY `category_sid`;


SELECT DISTINCT `category_sid`
FROM `products`;

SELECT COUNT(DISTINCT `category_sid`)
FROM `products`


SELECT p.`category_sid`, c.`name`, COUNT(1) num
FROM `products` p
         JOIN `categories` c
              ON p.`category_sid` = c.`sid`
GROUP BY p.`category_sid`;



SELECT p.`category_sid`, c.`name`, COUNT(1) num
FROM `products` p
         LEFT JOIN `categories` c
                   ON p.`category_sid` = c.`sid`
GROUP BY p.`category_sid`;


SELECT od.`price`, p.bookname, od.quantity
FROM `orders` o
         JOIN `order_details` od
              ON o.sid = od.order_sid
         JOIN `products` p
              ON p.sid = od.product_sid
WHERE o.sid = 10;

SELECT c1.*, c2.name cate_name
FROM `categories` c1
         LEFT JOIN `categories` c2
                   ON c1.parent_sid = c2.sid;

-- sub-query 子查詢

SELECT * FROM `products` WHERE `sid` IN (
    SELECT `product_sid` FROM `order_details` WHERE `order_sid`=10
);

SELECT * FROM `products` p
    JOIN (
        SELECT `product_sid`, `price` od_price, `quantity` FROM `order_details` WHERE `order_sid`=10
    ) od ON p.`sid`=od.`product_sid`;

----

-- 資料表結構 `admins`
CREATE TABLE `admins` (
                          `sid` int(11) NOT NULL,
                          `account` varchar(255) NOT NULL,
                          `password` varchar(255) NOT NULL,
                          `nickname` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `admins` (`sid`, `account`, `password`, `nickname`) VALUES
    (1, 'shinder', '7c4a8d09ca3762af61e59520943dc26494f8941b', '小新');

ALTER TABLE `admins`
    ADD PRIMARY KEY (`sid`),
  ADD UNIQUE KEY `account` (`account`);

ALTER TABLE `admins`
    MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
 ----
SELECT * FROM `admins` WHERE `account`='shinder' AND `password`=SHA1('123456');



