<?php
require "../parts/connect.php";

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


$output['postData'] = $_POST;  // 讓前端做資料查看,資料是否一致

// TODO: 欄位檢查

$sql ="INSERT INTO `work_service`(
    `title`, `service_ltems`, `service_hours`, `service_fee`, `production_time`, `modifications`, `user_ID`, `create_at`) 
    VALUES (?,?,?,?,?,?,?,Now())";

$stmt = $pdo->prepare($sql);

$stmt->execute([
    $_POST['title'],
    $_POST['items'],
    $_POST['hour'] ,
    $_POST['fee'] ,
    $_POST['production'] ,
    $_POST['name'] ,
    $_POST['modifications'] ,
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





