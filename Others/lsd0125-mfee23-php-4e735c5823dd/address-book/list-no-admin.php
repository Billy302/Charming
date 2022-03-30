<?php
require __DIR__. '/parts/__connect_db.php';
$title = '通訊錄列表';
$pageName = 'list';

$perPage = 5;

$page = isset($_GET['page']) ? intval($_GET['page']) : 1;
if($page < 1){
    header('Location: list.php');
    exit;
}


$t_sql = "SELECT COUNT(1) FROM address_book";

// 總筆數
$totalRows = $pdo->query($t_sql)->fetch(PDO::FETCH_NUM)[0];
$totalPages = ceil($totalRows/$perPage);
if($page > $totalPages){
    header('Location: list.php?page='. $totalPages);
    exit;
}


$sql = sprintf("SELECT * FROM address_book ORDER BY sid DESC LIMIT %s, %s", ($page-1)*$perPage, $perPage);

$rows = $pdo->query($sql)->fetchAll();


?>
<?php include __DIR__. '/parts/__html_head.php' ?>
<?php include __DIR__. '/parts/__navbar.php' ?>
<div class="container">
    <div class="row">
        <div class="col">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item <?= 1==$page ? 'disabled' : '' ?>"><a class="page-link" href="?page=<?= $page-1 ?>">
                            <i class="fas fa-arrow-circle-left"></i>
                        </a></li>
                    <?php for($i=$page-2; $i<=$page+2; $i++)
                        if($i>=1 && $i<=$totalPages):
                            ?>
                        <li class="page-item <?= $i==$page ? 'active' : '' ?>">
                            <a class="page-link" href="?page=<?= $i ?>"><?= $i ?></a>
                        </li>
                    <?php endif; ?>
                    <li class="page-item <?= $totalPages==$page ? 'disabled' : '' ?>"><a class="page-link" href="?page=<?= $page+1 ?>">
                            <i class="fas fa-arrow-circle-right"></i>
                        </a></li>
                </ul>
            </nav>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <table class="table table-striped table-bordered">
                <thead>
                <tr>

                    <th scope="col">#</th>
                    <th scope="col">Name</th>

                </tr>
                </thead>
                <tbody>
                <?php foreach($rows as $r): ?>
                    <tr>

                        <td><?= $r['sid'] ?></td>
                        <td><?= $r['name'] ?></td>


                    </tr>
                <?php endforeach;  ?>

                </tbody>

            </table>
        </div>
    </div>


</div>

<?php include __DIR__. '/parts/__scripts.php' ?>

<?php include __DIR__. '/parts/__html_foot.php' ?>



