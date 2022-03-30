<?php
session_start();

echo json_encode($_SESSION, JSON_UNESCAPED_UNICODE);

