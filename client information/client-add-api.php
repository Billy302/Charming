<?php
require '../parts/connect.php';

header('Content-Type: application/json');
// 輸出的資料格式
$output = [
    'success' => false,
    'error' => '沒有表單資料',
    'code' => 0,
    'postData' => [],
    'insertId' => 0,
    'rowCount' => 0,
];

if(empty($_POST['name'])){
    echo json_encode($output, JSON_UNESCAPED_UNICODE);
    exit;
}

$output['postData'] = $_POST;  // 讓前端做資料查看,資料是否一致

// TODO: 欄位檢查


$sql = "INSERT INTO `address_book`(
    `name`, `email`, `mobile`, `birthday`, `gender`, `skill`, 
    `address`, `created_at`
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())";

$stmt = $pdo->prepare($sql);

$stmt->execute([
    $_POST['name'],
    $_POST['email'] ?? '',
    $_POST['mobile'] ?? '',
    $_POST['birthday'] ?? null,
    // $_POST['Edu_level'] ?? '',
    $_POST['gender'] ?? '',
    $_POST['skill'] ?? '',
    // $_POST['Work'] ?? '',
    // $_POST['Workhours'] ?? '',
    // $_POST['Bank_accnum'] ?? '',
    $_POST['address'] ?? ''
]);

$output['insertId'] = $pdo->lastInsertId(); // 取得最近加入資料的 PK
$output['rowCount'] = $stmt->rowCount(); // 新增資料的筆數
if($stmt->rowCount()){
    $output['error'] = '';
    $output['success'] = true;
} else {
    $output['error'] = '資料沒有新增成功';
}


echo json_encode($output, JSON_UNESCAPED_UNICODE);

