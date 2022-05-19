<?php
require __DIR__ . '/parts/connect_db.php';

$stmt = $pdo->query("SELECT * FROM categories");
$raw_data = $stmt->fetchAll();

$first = [];

//把第一層的資料放到陣列裡
foreach($raw_data as $row) {
    if($r['parent_sid']==0){
        $first[] = $r;
    }
}
//parent_sid = 0 為第一層，只有一層迴圈

//把第二層的資料放到陣列裡
foreach($first as $f) {
    foreach($raw_data as $r){
        if($f['sid']==$r['parent_sid']){
            &$f['children'][] = $r;
        }
    }
    
}
//把剛剛放進去的一個一個拿出來，再把所有東西再跑一次迴圈
//如果children與parent_sid有相同的，則為他的子層
echo json_encode($first);
    

