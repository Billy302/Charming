<?php
require __DIR__. '/parts/__connect_db.php';

$output = [
    'success' => false,
    'code' => 0,
    'error' => '',
];

// 沒有登入管理帳號,就轉向
if(! isset($_SESSION['admin'])){
    $output['error'] = '請登入管理帳號';
    echo json_encode($output, JSON_UNESCAPED_UNICODE);
    exit;
}

$sid = isset($_POST['sid']) ? intval($_POST['sid']) : 0;
if(empty($sid)) {
    $output['code'] = 400;
    $output['error'] = '沒有 sid';
    echo json_encode($output, JSON_UNESCAPED_UNICODE); exit;
}

$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$mobile = $_POST['mobile'] ?? '';


// TODO: 檢查欄位資料
if(empty($name)) {
    $output['code'] = 401;
    $output['error'] = '請輸入正確的姓名';
    echo json_encode($output, JSON_UNESCAPED_UNICODE); exit;
}
if(empty($email) or !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $output['code'] = 405;
    $output['error'] = '請輸入正確的email';
    echo json_encode($output, JSON_UNESCAPED_UNICODE); exit;
}
if(empty($mobile) or !preg_match("/^09\d{2}-?\d{3}-?\d{3}$/", $mobile)) {
    $output['code'] = 407;
    $output['error'] = '請輸入正確的手機號碼';
    echo json_encode($output, JSON_UNESCAPED_UNICODE); exit;
}




$sql = "UPDATE `address_book` SET 
                          `name`=?,
                          `email`=?,
                          `mobile`=?,
                          `birthday`=?,
                          `address`=?
WHERE `sid`=?";

$stmt = $pdo->prepare($sql);

$stmt->execute([
    $name,
    $email,
    $mobile,
    empty($_POST['birthday']) ? NULL : $_POST['birthday'],
    $_POST['address'] ?? '',
    $sid
]);

if($stmt->rowCount()==0){
    $output['error'] = '資料沒有修改';
} else {
    $output['success'] = true;
}

echo json_encode($output, JSON_UNESCAPED_UNICODE);




