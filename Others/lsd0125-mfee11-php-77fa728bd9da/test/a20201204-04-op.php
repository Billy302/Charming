<?php

$name = 'Bill';


if(isset($name)){
    echo "$name <br>";
} else {
    echo "noname <br>";
}

echo isset($name) ? $name : 'noname';
echo "<br>";

echo $name ?? 'noname';  // php 7
echo "<br>";

