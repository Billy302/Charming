<!doctype html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        td {
            width: 30px;
            height: 30px;
        }
    </style>
</head>
<body>
<table>
    <?php for($i=0; $i<16; $i++): ?>
    <tr>
        <td style="background-color: #<?= sprintf("%x%x", $i, $i) ?>0;"> </td>
    </tr>
    <?php endfor; ?>
</table>

</body>
</html>