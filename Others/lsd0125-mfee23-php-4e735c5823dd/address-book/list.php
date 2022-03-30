<?php
require __DIR__. '/parts/__connect_db.php';

// 沒有登入管理帳號,就轉向
if(! isset($_SESSION['admin'])){
    header('Location: list-no-admin.php');
    exit;
}
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
                    <th scope="col">
                        <input type="checkbox">
                    </th>
                    <th scope="col"><i class="fas fa-trash-alt"></i></th>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Birthday</th>
                    <th scope="col">Address</th>
                    <th scope="col"><i class="fas fa-edit"></i></th>
                </tr>
                </thead>
                <tbody>
                <?php foreach($rows as $r): ?>
                    <tr>
                        <td>
                            <input class="del" type="checkbox">
                        </td>
                        <td>
                            <!--
                            <a href="delete.php?sid=<?= $r['sid'] ?>" onclick="return confirm('確定要刪除這筆資料嗎?')">
                            -->
                            <a href="javascript: delete_it(<?= $r['sid'] ?>)">
                                <i class="fas fa-trash-alt"></i>
                            </a>
                        </td>
                        <td><?= $r['sid'] ?></td>
                        <td><?= $r['name'] ?></td>
                        <td><?= $r['email'] ?></td>
                        <td><?= $r['mobile'] ?></td>
                        <td><?= $r['birthday'] ?></td>
                        <td><?= htmlentities($r['address']) ?></td>
                        <td>
                            <a href="edit.php?sid=<?= $r['sid'] ?>">
                                <i class="fas fa-edit"></i>
                            </a>
                        </td>
                    </tr>
                <?php endforeach;  ?>

                </tbody>

            </table>
        </div>
    </div>


</div>

<?php include __DIR__. '/parts/__scripts.php' ?>
<script>
    function delete_it(sid){
        if(confirm(`確定要刪除編號為 ${sid} 的資料嗎?`)){
            location.href = `delete.php?sid=${sid}`;
        }
    }


</script>
<?php include __DIR__. '/parts/__html_foot.php' ?>



