<?php require "../parts/connect.php"; ?>
<?php
$title = '服務項目總覽';
$perPage = 10; // 每頁有幾筆
$page = isset($_GET['page']) ? intval($_GET['page']) : 1; //用戶要看的頁碼

$t_sql = "SELECT count(1) FROM `work_service` ";
if ($page < 1) {
    header('Location: Service-list.php?page=1');
    exit;
}

$totalRows = $pdo->query($t_sql)->fetch(PDO::FETCH_NUM)[0];
$rows = [];
$totalPages = 0;

if ($totalRows) {
    // 總頁數
    $totalPages = ceil($totalRows / $perPage);
    if ($page > $totalPages) {
        header("Location: ab-list.php?page=$totalpages");
        exit;
    }
    $sql = sprintf("select ID, title, service_ltems, service_hours, service_fee, production_time, modifications, user_ID, create_at FROM work_service order by ID  limit %s ,%s", ($page - 1) * $perPage, $perPage);
    // 拿到分頁資料
    $rows = $pdo->query($sql)->fetchAll();
}
?>

<?php include "../parts/html-head.php"; ?>
<?php include "../parts/navbar.php"; ?>

<div class="container-xxl">
    <div class="roW">
        <div class="col">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item <?= $page == 1 ? 'disabled' : '' ?>">
                        <a class="page-link" href="?page=<?= $page - 1 ?>">
                            << </a>
                    </li>
                    <?php for ($i = $page - 5; $i <= $page + 5; $i++) :
                        if ($i >= 1 and $i <= $totalPages) : ?>
                            <li class="page-item <?= $page == $i ? 'active' : '' ?>">
                                <a class="page-link" href="?page=<?= $i ?>"><?= $i ?></a>
                            </li>
                    <?php endif;
                    endfor; ?>
                    <li class="page-item <?= $page == $totalPages ? 'disabled' : '' ?>">
                        <a class="page-link" href="?page=<?= $page + 1 ?>">
                            >>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <table class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">刪除</th>
                        <th scope="col">服務ID</th>
                        <th scope="col">使用者ID</th>
                        <th scope="col">標題</th>
                        <th scope="col">服務項目</th>
                        <th scope="col">服務時間</th>
                        <th scope="col">服務費用</th>
                        <th scope="col">製作時間</th>
                        <th scope="col">修改次數</th>
                        <th scope="col">建立時間</th>
                        <th scope="col">修改</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($rows as $r) : ?>
                        <tr>
                            <td>
                                <a href="javascript: del_it(<?= $r['ID'] ?>)">
                                   刪除
                                </a>
                            </td>
                            <td><?= htmlentities($r['ID']) ?></td>
                            <td><?= htmlentities($r['user_ID']) ?></td>
                            <td><?= htmlentities($r['title']) ?></td>
                            <td><?= htmlentities($r['service_ltems']) ?></td>
                            <td><?= htmlentities($r['service_hours']) ?></td>
                            <td><?= htmlentities($r['service_fee']) ?></td>
                            <td><?= htmlentities($r['production_time']) ?></td>
                            <td><?= htmlentities($r['modifications']) ?></td>
                            <td><?= htmlentities($r['create_at']) ?></td>
                            <td>
                                <a href="Service_edit.php?ID=<?= $r['ID'] ?>">
                                    修改
                                </a>
                            </td>
                        </tr>
                    <?php endforeach ?>
                </tbody>

            </table>
        </div>
    </div>
</div>

<?php include "../parts/scripts.php"; ?>
<script>
    function del_it(ID) {
        if (confirm(`確定要刪除此筆的資料嗎 ?`)) {
            location.href = 'Service_delete.php?ID=' + ID;
        }
    }
</script>
<?php include "../parts/html-foot.php"; ?>