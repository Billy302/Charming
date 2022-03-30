INSERT INTO address_book (
    `sid`, `name`, `email`, `mobile`,
    `birthday`, `address`, `created_at`
    ) VALUES
( NULL, '李小明3', 'kjsdfka@jsfks.com', '0918333444', '1990-01-03', '台北市', '2020-12-08 10:24:32'),
( NULL, '李小明4', 'kjsdfka@jsfks.com', '0918333444', '1990-01-03', '台北市', '2020-12-08 10:24:32'),
( NULL, '李小明5', 'kjsdfka@jsfks.com', '0918333444', '1990-01-03', '台北市', '2020-12-08 10:24:32'),
( NULL, '李小明6', 'kjsdfka@jsfks.com', '0918333444', '1990-01-03', '台北市', '2020-12-08 10:24:32'),
( NULL, '李小明7', 'kjsdfka@jsfks.com', '0918333444', '1990-01-03', '台北市', '2020-12-08 10:24:32'),
( NULL, '李小明8', 'kjsdfka@jsfks.com', '0918333444', '1990-01-03', '台北市', '2020-12-08 10:24:32'),
( NULL, '李小明9', 'kjsdfka@jsfks.com', '0918333444', '1990-01-03', '台北市', '2020-12-08 10:24:32');

UPDATE `address_book` SET `email` = 'bbb@jsfks.com' WHERE `sid` = 3;
UPDATE `address_book` SET `email` = 'bbb@jsfks.com';


SELECT `products`.*, `categories`.`name` FROM `categories` JOIN `products` ON `categories`.`sid`=`products`.`category_sid`;

SELECT p.*, c.`name`
    FROM `categories` AS c
    JOIN `products` AS p ON c.`sid`=p.`category_sid`;

SELECT p.*, c.`name` cate_name
    FROM `categories` c
    JOIN `products` p ON c.`sid`=p.`category_sid`;


SELECT p.*, c.`name` cate_name
    FROM `categories` c
    LEFT JOIN `products` p ON c.`sid`=p.`category_sid`;

SELECT p.*, c.`name` cate_name
    FROM `products` p
    LEFT JOIN  `categories` c ON c.`sid`=p.`category_sid`;

SELECT * FROM `products` WHERE `author` LIKE '陳';
SELECT * FROM `products` WHERE `author`='陳';

SELECT * FROM `products` WHERE sid IN (10,14,21,6);

SELECT * FROM `products` WHERE sid IN (10,14,21,6) ORDER BY sid DESC;

SELECT * FROM `products` WHERE sid IN (10,14,21,6) ORDER BY RAND();

SELECT * FROM `products` GROUP BY `category_sid`;

SELECT *, COUNT(1) FROM `products` GROUP BY `category_sid`;

SELECT category_sid, COUNT(1), c.name cate_name
FROM `products` p
JOIN `categories` c
ON p.category_sid=c.sid
GROUP BY p.`category_sid`;

