<?php
require __DIR__. '/parts/__connect_db.php';

$output = [
    'success' => false,
    'code' => 0,
    'error' => '帳號或密碼錯誤',
];

$account = $_POST['account'] ?? '';
$password = $_POST['password'] ?? '';

if(empty($account) or empty($password)){
    $output['error'] = '欄位資料不足';
    echo json_encode($output, JSON_UNESCAPED_UNICODE);
    exit;
}

$sql = sprintf("SELECT * FROM `admins` WHERE `account`=%s", $pdo->quote($account));

$row = $pdo->query($sql)->fetch();
if(empty($row) ){
    echo json_encode($output, JSON_UNESCAPED_UNICODE);
    exit;
}


if( password_verify($password, $row['password']) ){
    $output['success'] = true;
    $output['error'] = '';
    $_SESSION['admin'] = [
        'account' => $row['account'],
        'nickname' => $row['nickname'],
    ];
}



echo json_encode($output, JSON_UNESCAPED_UNICODE);




