<?php
date_default_timezone_set('Asia/Taipei');

echo time();
echo '<br>';
echo date("Y-m-d H:i:s");
echo '<br>';

echo date("Y-m-d H:i:s", time()+30*24*60*60);
echo '<br>';

echo strtotime('2021/6/20');
echo '<br>';
echo date("Y-m-d", strtotime('2021/6/20'));
