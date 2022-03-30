<pre>
<?php
$ar2 = [
    'name' => 'david',
    'age' => 20,
];

$ar3 = $ar2;  // 複製
$ar4 = &$ar2;  // 設定位址 (參照)

$ar2['name'] = 'peter';

print_r($ar2);
print_r($ar3);
print_r($ar4);


$a = 10;
$b = &$a;
$b = 5;

echo "$a \n";

?>
</pre>

