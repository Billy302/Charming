<?php
require '../parts/connect_db.php';
$title = 'Read List';
$pageName = 'Collection-Read';
$perPage = 4; 
$page = isset($_GET['page']) ? intval($_GET['page']) : 1;  // 用戶要看的頁碼
if ($page < 1) {
    header('Location: Collection_Read.php?page=1');
    exit;
}

$t_sql = "SELECT COUNT(1) FROM Fake_data";
// 取得總筆數
$totalRows = $pdo->query($t_sql)->fetch(PDO::FETCH_NUM)[0];
$rows = []; 
$totalPages = 0;
if ($totalRows) {
    // 總頁數
    $totalPages = ceil($totalRows / $perPage);
    if ($page > $totalPages) {
        header("Location: Collection_Read.php?page=$totalPages");
        exit;
    }

    $sql = sprintf("SELECT * FROM Fake_data ORDER BY sid DESC LIMIT %s, %s", ($page - 1) * $perPage, $perPage);
    $rows = $pdo->query($sql)->fetchAll(); // 拿到分頁資料
}

?>
<?php include "../parts/html-head.php"; ?>
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
                    <?php for($i=$page-3; $i<=$page+3; $i++): 
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
                        <th scope="col">#</th>
                        <th scope="col">暱稱 Nickname</th>
                        <th scope="col">作品名 Project Name</th>
                        <th scope="col">內容介紹 Discription</th>
                        
                        
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
                            <td><?= $r['Nickname'] ?></td>
                            <td><?= $r['Project Name'] ?></td>
                            <td><?= $r['Discription'] ?></td>
                           
                            <!--
                            <td><?= htmlentities($r['Link']) ?></td>
                            -->
                            <!-- <td><?= strip_tags($r['Link']) ?></td> -->
                            <td>
                                <a href="Collection_Update.php?sid=<?= $r['sid'] ?>">
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
<?php include __DIR__ . '/parts/scripts.php'; ?>
<script>
    function del_it(sid){
        if(confirm(`確定要刪除編號 ${sid} 的資料嗎?`)){

            location.href = 'Collection_Delete.php?sid=' + sid;
        }

    }
    


</script>
<?php include "../parts/html-foot.php"; ?>