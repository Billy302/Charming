<?php
require __DIR__. '/is_admin.php';
require __DIR__. '/db_connect.php';

$output = [
    'success' => false,
    'code' => 0,
    'error' => '參數不足',
];

if(! isset($_POST['name']) or ! isset($_POST['email'])){
    echo json_encode($output, JSON_UNESCAPED_UNICODE);
    exit;
}

// TODO: 檢查欄位格式

$email_re = '/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i';
if(! preg_match($email_re, $_POST['email'])){
    $output['code'] = 400;
    $output['error'] = 'Email 格式錯誤';

    echo json_encode($output, JSON_UNESCAPED_UNICODE);
    exit;
}



$sql = "INSERT INTO `address_book`(
`name`, `email`, `mobile`, `birthday`, `address`, `created_at`
) VALUES (
    ?, ?, ?, ?, ?, NOW()
)";

$stmt = $pdo->prepare($sql);

$stmt->execute([
        $_POST['name'],
        $_POST['email'],
        $_POST['mobile'],
        empty($_POST['birthday']) ? NULL : $_POST['birthday'],
        $_POST['address'],
]);

$output['rowCount'] = $stmt->rowCount();
if($stmt->rowCount()){
    $output['success'] = true;
    unset($output['error']);
}

echo json_encode($output, JSON_UNESCAPED_UNICODE);







