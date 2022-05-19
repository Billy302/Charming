<pre>
<?php

// 關聯式陣列
$ar = array(
    2 => 23,
    'name' => 'david',
    'age' => 20,
);
$ar2 = [
    2 => 23,
    'name' => 'david',
    'age' => 20,
    'shinder'
];

print_r($ar);  // 只用在陣列


$ar2[] = 'abc';  // array push
var_dump($ar2); // 任何類型

echo $ar['name'];

?>
</pre>

