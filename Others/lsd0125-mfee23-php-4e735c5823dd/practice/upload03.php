<?php
// 上傳多個圖檔
header('Content-Type: application/json');

$upload_folder = __DIR__. '/uploaded';

$exts = [
    'image/jpeg' => '.jpg',
    'image/png' => '.png',
    'image/gif' => '.gif',
];


$output = [
    'success' => 0,
    'error' => [],
    'files' => [],
];

if(! empty($_FILES['myfiles']) and !empty($_FILES['myfiles']['name'])) {

    foreach($_FILES['myfiles']['name'] as $i=>$name){

        $ext = $exts[$_FILES['myfiles']['type'][$i]] ?? '';  // 拿到對應的副檔名
        if(! empty( $ext )){

            $filename = sha1($name. rand()). $ext;

            $target = $upload_folder. '/'. $filename;
            if( move_uploaded_file($_FILES['myfiles']['tmp_name'][$i], $target)){
                $output['success'] ++;
                $output['files'][] = $filename;  // push 檔名
                // TODO: 可以將檔案寫入資料表
            } else {
                // $output['error'] = '無法移動檔案';
            }

        } else {
            // $output['error'] = '不合法的檔案類型';
        }
    }
} else {
    $output['error'] = '沒有上傳檔案';
}


echo json_encode($output, JSON_UNESCAPED_UNICODE);