<pre>
<?php
$ar2 = [
    'name' => 'david',
    'age' => 20,
];

foreach($ar2 as &$v) {
    $v .= '---';
}

print_r($ar2);
?>
</pre>

