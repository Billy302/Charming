<?php
$a = 5;
$b = 7;


echo $a && $b;  // true 輸出到頁面會變成 1
echo ! $a;  // false 輸出到頁面會變成空字串



$c = 0 or $b;  // 等號的優先權大於 or

echo $c ? '<br>TTTT' : '<br>FFF';


$c = 0 || $b;

echo $c ? '<br>ttt' : '<br>fff';
