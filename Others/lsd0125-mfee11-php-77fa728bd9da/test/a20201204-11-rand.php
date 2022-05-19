<?php

for($i=0; $i<10; $i++){
    echo rand(100, 999). '<br>';
}
echo '-----------------<br>';
for($i=0; $i<10; $i++){
    printf("%'.07d<br>", rand(1, 100000));
}