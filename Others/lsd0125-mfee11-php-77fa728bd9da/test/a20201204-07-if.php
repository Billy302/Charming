<?php
$age = isset($_GET['age']) ? intval($_GET['age']) : 0;
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
<?php if ($age < 18) { ?>
    <img src="../imgs/kitten_vaccination_image.jpg" alt="">
<?php } else { ?>
    <img src="../imgs/d8180947d9fe2dd83f44c8058177232c.jpg" alt="">
<?php } ?>


<?php if ($age < 18): ?>
    <img src="../imgs/kitten_vaccination_image.jpg" alt="">
<?php else: ?>
    <img src="../imgs/d8180947d9fe2dd83f44c8058177232c.jpg" alt="">
<?php endif; ?>
</body>
</html>