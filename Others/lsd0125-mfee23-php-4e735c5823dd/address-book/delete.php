<?php
require __DIR__. '/parts/__connect_db.php';

// 沒有登入管理帳號,就轉向
if(! isset($_SESSION['admin'])){
    header('Location: index_.php');
    exit;
}

if(isset($_GET['sid'])){
    $sid = intval($_GET['sid']);
    $pdo->query("DELETE FROM `address_book` WHERE sid=$sid");
}

$come_from = $_SERVER['HTTP_REFERER'] ?? 'list.php';

header("Location: $come_from");

