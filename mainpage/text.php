
<?php
include '../parts/connect.php';
// $city = $_POST['city'];
// $keyword = $_POST['keyword'];

// $sqlSelect = "SELECT count(*) FROM search where city_id = $city AND keyword = '$keyword'";
// $total =$pdo->query($sqlSelect);

$totalBlog = $pdo->query("SELECT COUNT(*) FROM `search`where city_id = ? AND keyword = '?'")->fetch(PDO::FETCH_NUM)[0];
$newestBlog = intval($totalBlog) + 1;


// $t_sql = "SELECT COUNT(1) FROM search";
// $totalRows = $pdo->query($t_sql)->fetch(PDO::FETCH_NUM)[0];

// $sqlSelect = "SELECT count(*) FROM search where city_id = $city AND keyword = '$keyword'";
// $total = $pdo->query($sqlSelect)->fetch(PDO::FETCH_NUM)[0];
    $total->execute([
        $_POST['city'],
        $_POST['keyword'],
    ]);
?>