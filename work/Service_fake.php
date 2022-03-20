<?php
require "../parts/connect.php"; 

$sql = "INSERT INTO `work_service`( `title`, `service_ltems`, 
`service_hours`, `service_fee`, `production_time`, 
`modifications`, `user_ID`, `create_at`) VALUES 
(?,?,?,?,?,?,?,now())";

$stmt = $pdo->prepare($sql);


for($i=0;$i<100;$i++){
    $stmt->execute([ 
        "我是標題，編號".$i,
        "我是服務項目".rand(0,100),
        str_pad(rand(1,12),2,"0",STR_PAD_LEFT).":00 ~ ".str_pad(rand(13,23),2,"0",STR_PAD_LEFT).":00",
        rand(10,3000),
        rand(0,1) . "," . rand(0,28)  . "," . rand(0,23),
        rand(2,5),
        rand(1,2),
    ]);
}


