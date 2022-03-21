<?php
require  '../parts/connect.php';
$title = '通訊錄列表';
$pageName = 'ab-list';
$perPage = 5; // 每一頁有幾筆
$page = isset($_GET['page']) ? intval($_GET['page']) : 1;  // 用戶要看的頁碼
if ($page < 1) {
    header('Location: client-list.php?page=1');
    exit;
}

$t_sql = "SELECT COUNT(1) FROM address_book";
// 取得總筆數
$totalRows = $pdo->query($t_sql)->fetch(PDO::FETCH_NUM)[0];
$rows = []; // 預設沒有資料
$totalPages = 0;
if ($totalRows) {
    // 總頁數
    $totalPages = ceil($totalRows / $perPage);
    if ($page > $totalPages) {
        header("Location: client-list.php?page=$totalPages");
        exit;
    }

    $sql = sprintf("SELECT * FROM address_book ORDER BY sid DESC LIMIT %s, %s", ($page - 1) * $perPage, $perPage);
    $rows = $pdo->query($sql)->fetchAll(); // 拿到分頁資料
}

?>
<?php include   '../parts/html-head.php'; ?>

<div class="container">
    <div class="row">
        <div class="col">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item <?= $page==1 ? 'disabled' : '' ?>">
                        <a class="page-link" href="?page=<?= $page-1 ?>">
                            <i class="fas fa-arrow-alt-circle-left"></i>
                        </a>
                    </li>
                    <?php for($i=$page-5; $i<=$page+5; $i++): 
                        if($i>=1 and $i<=$totalPages):
                        ?>
                    <li class="page-item <?= $page==$i ? 'active' : '' ?>">
                        <a class="page-link" href="?page=<?= $i ?>"><?= $i ?></a>
                    </li>
                    <?php endif; endfor; ?>
                    <li class="page-item <?= $page==$totalPages ? 'disabled' : '' ?>">
                        <a class="page-link" href="?page=<?= $page+1 ?>">
                        <i class="fas fa-arrow-alt-circle-right"></i>
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
                        <th scope="col">
                            <i class="fas fa-trash-alt"></i>
                        </th>
                        <th scope="col">編號</th>
                        <th scope="col">姓名</th>
                        <th scope="col">電子信箱</th>
                        <th scope="col">手機號碼</th>
                        <th scope="col">生日</th>
                        <th scope="col">最高學歷</th>
                        <th scope="col">性別</th>

                        <th scope="col">專長</th>
                        <th scope="col">工作項目</th>
                        <th scope="col">工作時數</th>
                        <th scope="col">銀行帳號</th>
                        <th scope="col">地址</th>
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
                            <td><?= $r['name'] ?></td>
                            <td><?= $r['email'] ?></td>
                            <td><?= $r['mobile'] ?></td>
                            <td><?= $r['birthday'] ?></td>
                            <td><?= $r['Edu_level'] ?></td>
                            <td><?= $r['gender'] ?></td>
                            <td><?= $r['skill'] ?></td>
                            <td><?= $r['Work'] ?></td>
                            <td><?= $r['Workhours'] ?></td>
                            <td><?= $r['Bank_accnum'] ?></td>

                            <!--
                            <td><?= htmlentities($r['address']) ?></td>
                            -->
                            <td><?= strip_tags($r['address']) ?></td>
                            <td>
                                <a href="client-edit.php?sid=<?= $r['sid'] ?>">
                                    <i class="fas fa-edit"></i>
                                </a>
                            </td>
                        </tr>
                    <?php endforeach ?>
                </tbody>

            </table>
        </div>
    </div>
</div>

<?php include  '../parts/scripts.php'; ?>
<script>
    function del_it(sid){
        if(confirm(`確定要刪除編號為 ${sid} 的資料嗎?`)){

            location.href = 'client-delete.php?sid=' + sid;
        }

    }


</script>
<?php include  '../parts/html-foot.php'; ?>
