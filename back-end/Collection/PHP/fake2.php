<?php
require __DIR__ . '/parts/connect_db.php';

$sql = "INSERT INTO `address_book`(`name`, `email`, `mobile`, `birthday`, `address`, `created_at`) VALUES (?, ?, ?, ?, ?, NOW())";

// 避免 SQL injection 
$stmt = $pdo->prepare($sql);

for($i=0; $i<100; $i++){
    $stmt->execute([
        '陳小華'. $i,
        "wa{$i}@ttt.com",
        '0918'. rand(100000, 999999),
        date('Y-m-d', rand(315532800, 1104537600)),
        '高雄市'. $i,
    ]);

}
echo 'ok';


/*
'1980-01-01': 315532800
'2005-01-01': 1104537600
*/