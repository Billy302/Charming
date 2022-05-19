<?php
    if(isset($_COOKIE['mycookie'])) {
        $myc = $_COOKIE['mycookie'] + 1;
    } else {
        $myc = 1;
    }
    setcookie("mycookie", $myc);
?>
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
<?= $myc ?>
</body>
</html>
