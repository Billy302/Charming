<?php
require "../parts/connect.php"; 

$sid = isset($_GET['ID']) ? intval($_GET['ID']) : '';

$sql = "DELETE FROM `work_service`  WHERE ID =$sid";

$stmt = $pdo->query($sql);



if(!empty($_SERVER['HTTP_REFERER'])){
    header('location:'.$_SERVER['HTTP_REFERER']);
}else{
    header('location:Service_list.php');
}
