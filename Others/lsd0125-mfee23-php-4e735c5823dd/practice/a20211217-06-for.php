<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        td {
            width: 40px;
            height: 40px;
        }
    </style>
</head>
<body>

<table>
    <tr>
        <?php for($i=0; $i<=255; $i+=17): ?>
        <td style="background-color: #0000<?= sprintf("%'02X", $i)?>">
        </td>
        <?php endfor; ?>
    </tr>
</table>




</body>
</html>