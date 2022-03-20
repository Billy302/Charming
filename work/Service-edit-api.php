<?php
require "../parts/connect.php";

header('Content-Type: application/json');
// 輸出的資料格式
$output = [
    'success' => false,
    'error' => '沒有表單資料',
    'code' => 0,
    'postData' => [],
    'rowCount' => 0,
];

$output['postData'] = $_POST;  // 讓前端做資料查看,資料是否一致

// TODO: 欄位檢查


$sql = "UPDATE `work_service` SET 
    `title`= ? ,
    `service_ltems`= ? ,
    `service_hours`= ? ,
    `service_fee`= ? ,
    `production_time`= ? ,
    `modifications`= ? ,
    `user_ID`= ?
    where `ID`= ?";

$stmt = $pdo->prepare($sql);



$stmt->execute([
    $_POST['title'],
    implode(',', $_POST['item']),
    str_pad($_POST['hour'], 2, "0", STR_PAD_LEFT) . ":00 ~ " . str_pad($_POST['hour2'], 2, "0", STR_PAD_LEFT).":00",
    $_POST['fee'],
    $_POST['pro_month'] . "," . $_POST['pro_day'] . "," . $_POST['pro_hour'],
    $_POST['modifications'],
    $_POST['user_ID'],
    $_POST['ID'],
]);


$output['rowCount'] = $stmt->rowCount(); // 修改資料的筆數
if ($stmt->rowCount()) {
    $output['error'] = '';
    $output['success'] = true;
} else {
    $output['error'] = '資料沒有修改';
}

echo json_encode($output);
