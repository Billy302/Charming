<?php
mb_internal_encoding("UTF-8");
require __DIR__. '/db_connect.php';

$str = "統一獅隊陳鏞基昨晚對富邦悍將隊完成生涯百盜";

function str_shuffle_unicode($str) {
    $tmp = preg_split("//u", $str, -1, PREG_SPLIT_NO_EMPTY);
    shuffle($tmp);
    return join("", $tmp);
}


$sql = "INSERT INTO `address_book`(
`name`, `email`, `mobile`, `birthday`, `address`, `created_at`
) VALUES (
    ?, ?, ?, ?, ?, NOW()
)";

$stmt = $pdo->prepare($sql);

for($i=0; $i<100; $i++) {
    $stmt->execute([
        mb_substr(str_shuffle_unicode($str), 0, 3),
        'test@gmail.com',
        '0918-444-777',
        '1990-10-10',
        '台北市',
    ]);
}

echo 'ok';







