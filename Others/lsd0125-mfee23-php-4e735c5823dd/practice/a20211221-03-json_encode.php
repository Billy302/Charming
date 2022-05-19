<?php

$ar =[
    'name' => '李小明',
    'age' => 19,
];

echo json_encode($ar, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);