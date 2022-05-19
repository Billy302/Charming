<div>
<?php
//date_default_timezone_set('Asia/Taipei');
//date_default_timezone_set('UTC');
//date_default_timezone_set('Europe/London');


echo date("Y-m-d H:i:s");
echo '<br>';
echo time();
echo '<br>';
echo date("Y-m-d H:i:s", time()-7*24*60*60);


?>
</div>
