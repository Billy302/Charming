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

if(empty($_POST['sid']) or empty($_POST['Nickname'])){
    echo json_encode($output, JSON_UNESCAPED_UNICODE);
    exit;
}



// TODO: 欄位檢查


$sql = "UPDATE `Fake_data` SET  
        `Nickname`=?,
        `Project Name`=?,
        `Discription`=?
        -- `Tags`=?,
        -- `Link`=?
        WHERE `sid`=?";

$stmt = $pdo->prepare($sql);

$stmt->execute([
    $_POST['Nickname'],
    $_POST['ProjectName'] ?? '',
    $_POST['Discription'] ?? '',
    // $_POST['Tags'] ?? '',
    // $_POST['Link'] ?? '',
    $_POST['sid'],
]);


$output['rowCount'] = $stmt->rowCount(); // 修改資料的筆數
if($stmt->rowCount()){
    $output['error'] = '';
    $output['success'] = true;
} else {
    $output['error'] = '資料沒有修改';
}


echo json_encode($output, JSON_UNESCAPED_UNICODE);

