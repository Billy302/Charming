<?php
session_start();

unset($_SESSION['user']);
unset($_SESSION['user2']);

// header("Location: a20211222-02-login-form.php");
header("Location: ". ($_SERVER['HTTP_REFERER'] ?? 'a20211222-04-login-form.php'));

