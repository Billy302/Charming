<?php
$output = [
    'files' => [],
];
$upload_folder = __DIR__. '/../uploads';
$ext_map = [
    'image/jpeg' => '.jpg',
    'image/png' => '.png',
    'image/gif' => '.gif',
];
// photos[]
if(!empty($_FILES) and  is_array($_FILES['photos']['name'])){

    foreach($_FILES['photos']['name'] as $i=>$name) {

        if($ext_map[   $_FILES['photos']['type'][$i]   ]){
            $filename = uniqid(). $ext_map[$_FILES['photos']['type'][$i]];

            if(move_uploaded_file(
                $_FILES['photos']['tmp_name'][$i],
                $upload_folder. '/'. $filename
            )){
                $output['files'][] = $filename;
            }
        }
    }
}
header('Content-Type: application/json');
echo json_encode($output, JSON_UNESCAPED_UNICODE);




