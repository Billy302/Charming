<?php
include '../parts/connect.php';
// 總筆數、總頁數
$pageName = 'activity_apply';
$perPage = 10;
$t_sql = "SELECT COUNT(1) FROM activity_apply";
$totalRows = $pdo->query($t_sql)->fetch(PDO::FETCH_NUM)[0];
$totalPages = ceil($totalRows / $perPage);
$page = isset($_GET['page']) ? intval($_GET['page']) : 1;  // 預設頁碼
if ($page < 1) {
    header('location: activity_apply.php');
}
if ($page > $totalPages) {
    header('location: activity_apply.php');
}

$sql = sprintf("SELECT * FROM activity_apply LIMIT %s, %s", ($page - 1) * $perPage, $perPage);
$rows = $pdo->query($sql)->fetchAll();
?>

<?php include '../parts/html-head.php' ?>

<div class="container liststyle">
    <div class="row">
        <div class="col">
            <nav class="navstyle">
                <ul class="d-flex pagination">
                    <li>
                        <a href="?page=<?= $page - 1 ?>">
                            <i class="fas fa-arrow-circle-left"></i>
                        </a>
                    </li>

                    <?php for ($i = 1; $i <= $totalPages; $i++) : ?>

                        <li>
                            <a class="pagestyle <?= $i == $page ?  'active' : '' ?>" href="?page=<?= $i ?>">
                                <?= $i ?>
                            </a>
                        </li>

                    <?php endfor ?>

                    <li>
                        <a href="?page=<?= $page + 1 ?>">
                            <i class="fas fa-arrow-circle-right"></i>
                        </a>
                    </li>
                </ul>
                <input class="newinfo" type="button" value="新增資料" onclick="location.href='activity_apply-addPage.php'">
            </nav>

        </div>
    </div>
    <div class="row">
        <div class="col">
            <table class="tablestyle table table-striped">
                <thead>
                    <tr>
                        <th scope="col"><i class="fas fa-trash-alt"></i></th>
                        <th scope="col">報名編號</th>
                        <th scope="col">使用者ID</th>
                        <th scope="col">課程編號</th>
                        <th scope="col">報名時間</th>
                        <th scope="col">
                            <i class="fas fa-edit"></i>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($rows as $r) : ?>
                        <tr>
                            <td>
                                <?php /*
                                <a href="ab-delete.php?sid=<?= $r['sid'] ?>" onclick="return confirm(`確定要刪除編號為 <?= $r['sid'] ?> 的資料嗎?`)">
                                */ ?>
                                <a href="javascript: del_it(<?= $r['sid'] ?>)">
                                    <i class="fas fa-trash-alt"></i>
                                </a>
                            </td>
                            <td><?= $r['sid'] ?></td>
                            <td><?= $r['user_id'] ?></td>
                            <td><?= $r['activity_id'] ?></td>
                            <td><?= $r['apply_at'] ?></td>
                            <td>
                                <a href="activity_apply-edit.php?sid=<?= $r['sid'] ?>">
                                    <i class="fas fa-edit"></i>
                                </a>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>

            </table>
        </div>
    </div>
</div>
<?php include '../parts/scripts.php'; ?>
<script>
    function del_it(sid) {
        if (confirm(`確定要刪除編號為 ${sid} 的資料嗎?`)) {

            location.href = 'activity_apply-delete.php?sid=' + sid;
        }

    }
</script>
<?php include '../parts/scripts.php' ?>
<?php include '../parts/html-foot.php' ?>