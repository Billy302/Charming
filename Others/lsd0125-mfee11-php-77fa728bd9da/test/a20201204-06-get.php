<?php

// $a = isset($_GET['a']) ? $_GET['a'] : '';
$a = $_GET['a'] ?? '';
echo "$a <br>";

// ?a=hh&b=76%208789
$b = isset($_GET['b']) ? intval($_GET['b']) : 0;
echo $b;

