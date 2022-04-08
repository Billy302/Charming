<?php
include '../parts/connect.php';

header('Content-Type: application/json');

$city = $_POST['city'];
$keyword = $_POST['keyword'];

$sqlSelect = $pdo->query("SELECT count(*) FROM search where city_id = '$city' AND keyword = '$keyword'")->fetch(PDO::FETCH_NUM)[0];

if ($sqlSelect > 0) {
    $update = "UPDATE `search` SET `count` = `count` +1 WHERE city_id = '$city' AND keyword = '$keyword'";
    $stmt = $pdo->prepare($update);
    $stmt->execute([
        $_POST['city'],
        $_POST['keyword'],
    ]);
} else {
    $sql = "INSERT INTO `search`(`city_id`,`keyword`) VALUES (?, ?)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        $_POST['city'],
        $_POST['keyword'],
    ]);
}

$output = [
    'success' => false,
    'error' => '沒有表單資料',
    'code' => 0,
    'postData' => [],
    'insertId' => 0,
    'rowCount' => 0,
];

if ($stmt->rowCount()) {
    $output['error'] = '';
    $output['success'] = true;
} else {
    $output['error'] = '資料沒有新增成功';
}
echo json_encode($output, JSON_UNESCAPED_UNICODE);
