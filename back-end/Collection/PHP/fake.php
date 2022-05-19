<?php
require __DIR__ . '/parts/connect_db.php';

$sql = "INSERT INTO `address_book`(`name`, `email`, `mobile`, `birthday`, `address`, `created_at`) VALUES (?, ?, ?, ?, ?, NOW())";

// 避免 SQL injection 
$stmt = $pdo->prepare($sql);

$stmt->execute([
    '陳小華',
    'wa@ttt.com',
    '0918111222',
    '1995-02-28',
    '高雄市',
]);

echo $pdo->lastInsertId();  // 取得最新新增資料的PK
