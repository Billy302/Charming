<pre>
<?php


// 索引式陣列
$ar = array(2,3,4,5,6);

foreach($ar as $v){
    echo "$v \n";
}


// 關聯式陣列
$ar2 = [
    2 => 23,
    'name' => 'david',
    'age' => 20,
    'shinder'
];

foreach($ar2 as $key => $value){
    echo "$key => $value \n";
}
?>
</pre>

