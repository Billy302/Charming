<?php
require __DIR__. '/parts/__connect_db.php';

$output=[
    'success'=>false,
    'code' => 0,
    'error' => '',
    'tagsCheck' =>false,
];

$title = $_POST['blog_title'] ?? '';
$content = $_POST['blog_content'] ?? '';
$tagValue = $_POST['tags'] ?? '';
// $newTagFromhtml = $_POST['inserttag'] ?? '';

// if(isset($newTagFromhtml)){
//     $totalTags = $pdo->query("SELECT COUNT(*) from `tags`")->fetch(PDO::FETCH_NUM)[0];
//     $newestTags = intval($totalTags) + 1;
// }

$totalBlog = $pdo->query("SELECT COUNT(*) from `blog`")->fetch(PDO::FETCH_NUM)[0];
$newestBlog = intval($totalBlog) + 1;


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

if(empty($tagValue)){
    $output['code'] = 407;
    $output['error'] = "請選擇標籤";
    echo json_encode($output); exit;
}

// if(empty($newTagFromhtml)){
//     $output['code'] = 409;
//     $output['error'] = "請選擇標籤";
//     echo json_encode($output); exit;
// };

$sql = "INSERT INTO `blog`(`blog_id`,`blog_title`,`blog_content`)
                VALUES(?,?,?)";  

$stmt = $pdo->prepare($sql);

$stmt->execute([
   $newestBlog,
   $title,
   $content,
]);


//錯誤的

// $tagsInsert = "INSERT INTO `blog_tagtoblog`(`tags_ID`, `blog_ID`) VALUES (?,?)";

// $tagsInsert = sprintf("INSERT INTO `blog_tagtoblog`(`tags_ID`, `blog_ID`) VALUES ('%s', '%s')",
// $_POST['name'] ?? '',
// $_POST['email'] ?? '',
// $_POST['mobile'] ?? '',
// $_POST['birthday'] ?? '',
// $_POST['address'] ?? ''
// );

// $sql = sprintf("INSERT INTO `address_book`(
//     `name`, `email`, `mobile`, `birthday`, `address`, `created_at`
//     ) VALUES ('%s', '%s', '%s', '%s', '%s', NOW() )",
// $_POST['name'] ?? '',
// $_POST['email'] ?? '',
// $_POST['mobile'] ?? '',
// $_POST['birthday'] ?? '',
// $_POST['address'] ?? ''
// );

// $stmt = $pdo->query($sql);

// $sql = sprintf("INSERT INTO `address_book`(
//     `name`, `email`, `mobile`, `birthday`, `address`, `created_at`
//     ) VALUES ('%s', '%s', '%s', '%s', '%s', NOW() )",
// $_POST['name'] ?? '',
// $_POST['email'] ?? '',
// $_POST['mobile'] ?? '',
// $_POST['birthday'] ?? '',
// $_POST['address'] ?? ''
// );

// $stmt = $pdo->query($sql);

// $output['success'] = $stmt->rowCount()==1;
// $output['rowCount'] = $stmt->rowCount();

//錯誤得

// if(isset($newTagFromhtml)){
//     $tagsInsertByUser = "INSERT INTO `tags`(`tags_desc`) VALUES (?)";
    
//     $newTag = $pdo->prepare($tagsInsertByUser);
    
//     foreach($newTagFromhtml as $insertTagsByUser){
//       $newTag->execute([
//         $insertTagsByUser,
//      ]);
//     };
//     $lastInsertId = $pdo->lastInsertId();

//     $newTagsInsert = "INSERT INTO `blog_tagtoblog`(`tags_ID`, `blog_ID`) VALUES (?,?)";
   
//    $tags = $pdo->prepare($newTagsInsert);
   
//      $tags->execute([
//        $newTagsInsert,
//        $newestBlog,
//     ]);
   
//    echo  $lastInsertId;

//    $output['userCreateNewTag'] = 1;

//     };


$tagsInsert = "INSERT INTO `blog_tagtoblog`(`tags_ID`, `blog_ID`) VALUES (?,?)";

$tags = $pdo->prepare($tagsInsert);

foreach($tagValue as $value){
  $tags->execute([
    $value,
    $newestBlog,
 ]);
}



// insert into幾筆
$output['success'] = $stmt->rowCount() == 1;
$output['rowCount'] = $stmt->rowCount();
$output['tagsCheck'] = $tags->rowCount() >= 1 ? 1:0;
// $output['tagsCheck'] = $newTag->rowCount() >= 1? 1:0;

echo json_encode($output);