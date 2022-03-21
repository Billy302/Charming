<?php
include '../parts/connect.php';

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
if(empty($_POST['user_id'])){
    echo json_encode($output, JSON_UNESCAPED_UNICODE);
    exit;
}

$output['postData'] = $_POST;  // 讓前端做資料查看,資料是否一致

// TODO: 欄位檢查

$pig = $_POST['activity_id'];
$sql =
"UPDATE `activity_apply`SET`user_id`=?,`activity_id`=? WHERE`sid`=?;
UPDATE`activity` SET `apply` = `apply` +1 WHERE sid = $pig";

$stmt = $pdo->prepare($sql);

$stmt->execute([
    $_POST['user_id'],
    $_POST['activity_id'],
    $_POST['sid'],
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

