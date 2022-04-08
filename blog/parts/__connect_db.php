<?php

$db_host="127.0.0.1";
$db_name="charming"; // 資料庫名稱
$db_user="root";
$db_pass="Password123!";

$dsn = "mysql:host={$db_host};dbname={$db_name};charset=utf8";

$pdo_options =[
    PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC,
    //沒有設定的話會給兩次array，一個索引一個關聯
    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"
];


$pdo = new PDO($dsn, $db_user, $db_pass, $pdo_options);