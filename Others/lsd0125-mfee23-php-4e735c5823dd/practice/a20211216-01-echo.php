<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title></title>
</head>
<body>
<?php

echo 123 + 456;
echo '<br>';
print '123'. 'ABC<br>';  // 字串串接 .

echo __DIR__. '<br>';
echo __FILE__. '<br>';
echo __LINE__. '<br>';


define('MY_CONST', 345);

echo MY_CONST;

?>
</body>
</html>