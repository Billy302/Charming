<pre>
<?php

$str ='{"name":"李小明","age":19}';

$ar = json_decode($str, true);  // 轉換為陣列

$obj = json_decode($str);  // 轉換為物件

var_dump($ar);

var_dump($obj);

echo " {$ar['name']}  \n";
echo " {$obj -> name}  \n";

?>
</pre>
