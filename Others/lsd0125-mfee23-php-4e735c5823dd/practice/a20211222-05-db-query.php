<?php

require __DIR__. '/__connect_db.php';

$sql = "SELECT * FROM address_book LIMIT 10";

$stmt = $pdo->query($sql);

// $row = $stmt->fetch();
// $row = $stmt->fetchAll(); // 所有資料筆數

while($row = $stmt->fetch()){
    echo "{$row['name']} <br>";
}



echo json_encode($row);  // 最後拿到的值是 false