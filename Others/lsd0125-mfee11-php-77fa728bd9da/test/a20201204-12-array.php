<!doctype html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<div>
<pre>
<?php
    // 索引式陣列
    $ar1 = array(2,4,6,8);
    $ar2 = [2,4,6,8];
    // 關聯式陣列
    $ar3 = array(
        'name' => 'David',
        'age' => 25,
        100,
    );
    $ar4 = [
        'name' => 'David',
        'age' => 25,
    ];

    print_r($ar1);
    var_dump($ar2);

    print_r($ar3);
    var_dump($ar4);
    ?>
    </pre>
</div>

</body>
</html>