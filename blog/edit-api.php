<?php
require __DIR__. '/parts/__connect_db.php';

$output=[
    'success'=>false,
    'code' => 0,
    'error' => '',
    'tagsCheck' =>false,
];

$id=isset($_POST['id']) ? intval($_POST['id']) : 0 ;
if(empty($id)) {
    $output['code'] = 400;
    $output['error'] = '沒有id';
    echo json_encode($output); exit;
}

$title = $_POST['blog_title'] ?? '';
$content = $_POST['blog_content'] ?? '';
$tagValue = $_POST['tags'] ?? '';
// $test = $_POST['inserttag'] ?? '';

if(empty($title)){
    $output['code'] = 401;
    $output['error'] = "請輸入文章標題";
    echo json_encode($output); exit;
}

if(empty($content)){
    $output['code'] = 405;
    $output['error'] = "請輸入文章內容";
    echo json_encode($output); exit;
}

$sql = "UPDATE `blog` SET `blog_title`=?, `blog_content`=?
                WHERE `blog_id`=?";  

$stmt = $pdo->prepare($sql);

$tagsDelete = "DELETE FROM `blog_tagtoblog` WHERE blog_ID=$id";
$pdo->query($tagsDelete);

$tagsInsert = "INSERT INTO `blog_tagtoblog`(`tags_ID`, `blog_ID`) VALUES (?,?)";

$tags = $pdo->prepare($tagsInsert);

foreach($tagValue as $value){
  $tags->execute([
    $value,
    $id,
 ]);
}

// $testInsert1 = "INSERT INTO `tags`(`tags_desc`) VALUES (?)";

// $testInsert2 = $pdo->prepare($testInsert1);

// foreach($test as $t){
//     $testInsert2->execute([
//         $t,
//      ]);
// }

$stmt->execute([
    $title,
    $content,
    $id,
 ]);

if($stmt->rowCount()==0 && $tags->rowCount()==0){
    $output['error'] = '資料沒有修改';
}
if ($stmt->rowCount()==1 || $tags->rowCount()==1){
    if($stmt->rowCount()==1){
    $output['success'] = $stmt->rowCount()==1;
}else{
    $output['tagsCheck'] = $tags->rowCount()===1;
}
}

echo json_encode($output);