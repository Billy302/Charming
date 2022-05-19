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
<pre>
<?php
print_r($_POST);
?>
</pre>
<form name="form1" action="" method="post">
    <input type="text" id="account" name="account" placeholder="帳號"><br>
    <input type="password" id="password" name="password" placeholder="密碼">
    <button type="button" onclick="changeType()">eye</button>
    <br>
    <input type="submit">
</form>
<script>
    const password = document.form1.password;
    function changeType(){
        const t = password.getAttribute('type');
        if(t==='password'){
            password.setAttribute('type', 'text');
        } else {
            password.setAttribute('type', 'password');
        }
    }
</script>
<!--
document.getElementById('password').value
document.querySelector('form > input[type=password]').value
document.querySelectorAll('input')[1].value

document.form1.password.value
document.forms[0].elements
document.forms[0].elements[1].value

-->
</body>
</html>