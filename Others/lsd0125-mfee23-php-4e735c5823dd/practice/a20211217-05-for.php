<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<table border="1">
    <tr>
        <?php for($i=0; $i<10; $i++): ?>
        <td>
            <?= $i ?>
        </td>
        <td>
            <?php printf('%s * %s = %s', $i, $i, $i*$i) ?>
        </td>
        <?php endfor; ?>
    </tr>
</table>




</body>
</html>