<?php

$db_host = 'localhost';
$db_name = 'mfee23';
$db_user = 'shinder';
$db_pass = 'admin';

$dsn = "mysql:host={$db_host};dbname={$db_name};charset=utf8";

$db_options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
];

try{
    $pdo = new PDO($dsn, $db_user, $db_pass, $db_options);
} catch (PDOException $ex){
    echo '**** *****'. $ex->getMessage();
}

$title = '';
$pageName = '';

if(! isset($_SESSION)) {
    session_start();
}