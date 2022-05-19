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
    $ar1 = [1,3,5,7];

    $ar2 = $ar1; // 複製一份
    $ar1[2] = 100;

    print_r($ar2);
    ?>
    </pre>
</div>

</body>
</html>