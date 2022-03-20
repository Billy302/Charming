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

if(empty($_POST['user_id'])){
    echo json_encode($output, JSON_UNESCAPED_UNICODE);
    exit;
}

$output['postData'] = $_POST;  // 讓前端做資料查看,資料是否一致

// TODO: 欄位檢查

// if(! empty($_FILES) and ! empty($_FILES['img'])){
//     if (
//         move_uploaded_file(
//             $_FILES['img']['tmp_name'],
//             __DIR__. '/' . $_FILES['img']['name']
//             )
//     ){
//         echo 'ok';
//         exit;
//     }
// }
// echo 'fail';




$sql = "INSERT INTO `ds_comment`(
    `user_id`,
    `article_id`,
    `content`,
    `img`,
    `create_at`
    ) VALUES (?,?,?,?,NOW())";

$stmt = $pdo->prepare($sql);

$stmt->execute([
    $_POST['user_id'],
    $_POST['article_id'],
    $_POST['content'],
    $_POST['img'],
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

