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

// if(empty($_POST['keyword'])){
//     echo json_encode($output, JSON_UNESCAPED_UNICODE);
//     exit;
// }
$output['postData'] = $_POST;  // 讓前端做資料查看,資料是否一致

// TODO: 欄位檢查

$city = $_POST['city'];
$keyword = $_POST['keyword'];

$sql = 
"INSERT INTO `search`(`city_id`,`keyword`) VALUES (?, ?);
UPDATE `search` SET `count` = `count` +1 WHERE city_id = '$city' AND keyword = '$keyword' ";
// $update = "UPDATE`search` SET `count` = `count` +1 WHERE `city_id` = $city AND`keyword` = $keyword";

$stmt = $pdo->prepare($sql);
// $stmt = $pdo->prepare($update);

$stmt->execute([
    $_POST['city'],
    $_POST['keyword'],
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

