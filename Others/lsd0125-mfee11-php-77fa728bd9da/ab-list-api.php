<?php
require __DIR__. '/db_connect.php';

$pageName = 'ab-list';
$page = isset($_GET['page']) ? intval($_GET['page']) : 1;

$perPage = 5;
$t_sql = "SELECT COUNT(1) FROM address_book";
$totalRows = $pdo->query($t_sql)->fetch()['COUNT(1)'];
$totalPages = ceil($totalRows/$perPage);
if($page<1) $page=1;
if($page>$totalPages) $page=$totalPages;

$p_sql = sprintf("SELECT * FROM address_book 
    ORDER BY sid DESC LIMIT %s, %s",
    ($page-1)*$perPage,
    $perPage
);

$stmt = $pdo->query($p_sql);

$rows = $stmt->fetchAll();

$output = [
    'page' => $page,
    'perPage' => $perPage,
    'totalRows' => $totalRows,
    'totalPages' => $totalPages,
    'rows' => $rows,
];

echo json_encode($output, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);