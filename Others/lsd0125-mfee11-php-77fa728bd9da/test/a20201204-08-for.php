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
<table border="1">
    <?php for($i=1; $i<10; $i++): ?>
    <tr>
        <?php for($k=1; $k<10; $k++): ?>
        <td><?= $i*$k ?></td>
        <?php endfor; ?>
    </tr>
    <?php endfor; ?>
</table>
<?php
$a = 10;
$b = 7;

printf("---%s---%s-------<br>", $a, $b);
printf("---%d---%d-------<br>", $b, $a);



?>
</body>
</html>