<?php
if(!isset($_SESSION)){
    session_start();
}
if(!isset($_SESSION['n'])){
    $_SESSION['n'] = 0;
}
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
<?= ++ $_SESSION['n'] ?>
</body>
</html>
