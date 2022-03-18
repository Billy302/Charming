<?php
$title = '我的首頁';
$pageName = 'home';

?>
<?php include '../parts/html-head.php'; ?>
<?php include '../parts/navbar.php'; ?>
<div class="container">
    <div class="row">
        <div class="col">
            <a class="nav-link <?= $pageName == 'location' ? 'active' : '' ?>" href="place.php">位置資料庫</a>
            <a class="nav-link <?= $pageName == 'location' ? 'active' : '' ?>" href="activity.php">活動報名資料庫</a>
            <a class="nav-link <?= $pageName == 'location' ? 'active' : '' ?>" href="search.php">搜尋關鍵字資料庫</a>
        </div>
    </div>
</div>
<?php include '../parts/scripts.php'; ?>
<?php include '../parts/html-foot.php'; ?>