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
    $ar = [];
    for($i=1; $i<=42; $i++){
        $ar[] = $i;
    }

    echo implode(',', $ar) ;
    echo "\n";

    shuffle($ar);  // 亂數排序

    echo implode(',', $ar) ;

    ?>
    </pre>
</div>

</body>
</html>