<?php
// 錯誤的 email 格式
var_dump(filter_var('bob@example', FILTER_VALIDATE_EMAIL));
