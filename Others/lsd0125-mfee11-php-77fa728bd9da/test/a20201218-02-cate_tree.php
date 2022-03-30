<?php
require __DIR__. '/../db_connect.php';

function getCateTree($pdo) {
    $sql = "SELECT * FROM `categories` ORDER BY `parent_sid`, `sid`";
    $rows = $pdo->query($sql)->fetchAll();
    $dict = [];
    foreach($rows as $k=>$v){
        $dict[$v['sid']] = &$rows[$k];
    }
    $cateTree = [];
    foreach($dict as $sid=>$item){
        if($item['parent_sid']!=0){
            $dict[$item['parent_sid']]['children'][] = &$dict[$sid];
        } else {
            $cateTree[] = &$dict[$sid];
        }
    }
    return $cateTree;
}
$cate_cates = getCateTree($pdo);

header('Content-Type: application/json');
echo json_encode($cate_cates, JSON_UNESCAPED_UNICODE);




