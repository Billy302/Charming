<?php
require '../parts/connect.php';

if(isset($_GET['id'])){
    $id = intval($_GET['id']);
    $pdo->query("DELETE FROM `blog` WHERE blog_id = $id");
}

if(isset($_GET["commentid"])){
    $commentid = intval($_GET['commentid']);
    $pdo->query("DELETE FROM `blog_comments` WHERE comments_ID = $commentid");
}


// $come_from = $_SERVER['HTTP_REFERER'] ?? 'articleList.php';

header("Location: articleList.php");