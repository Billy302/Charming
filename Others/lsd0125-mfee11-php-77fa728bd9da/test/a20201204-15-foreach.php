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
    $ar1 = [
        'name' => 'flora',
        'age' => 23,
        100,
    ];

    $ar1[9] = 99;
    $ar1[3] = 33;

    foreach($ar1 as $k => $v){
        echo "$k : $v <br>";
    }
    ?>
    </pre>
</div>

</body>
</html>