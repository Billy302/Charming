<?php
include '../parts/connect.php';
// 總筆數、總頁數
// SELECT `sid`, `place`, `create_at` FROM `place` WHERE 1
// SELECT `sid`, `state`, `country`, `porder` FROM `place` WHERE 1
$pageName = 'place';
$perPage = 14;
$t_sql = "SELECT COUNT(1) FROM place";
$totalRows = $pdo->query($t_sql)->fetch(PDO::FETCH_NUM)[0];
$totalPages = ceil($totalRows / $perPage);
$page = isset($_GET['page']) ? intval($_GET['page']) : 1;  // 預設頁碼
if ($page < 1) {
    header('location: place.php');
}
if ($page > $totalPages) {
    header('location: place.php');
}

$sql = sprintf("
select `p`.`sid`,`state` ,`city` 
FROM `place` as `p`
JOIN `city` as `c`
ON `c`.`sid` = `p` . `porder` LIMIT %s, %s", ($page - 1) * $perPage, $perPage);
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
                    <?php /*
                        <ul class="pagination">
                    <li class="page-item <?=$page==1 ? 'disabled':'' ?>">
                        <a class="page-link" href="?page=<?=$page-1?>"><i class="fas fa-arrow-alt-circle-left"></i></a>
                    </li>
                
                    <?php
                        $i =  $page;

                        if($i%$eachpage==0){ //取餘數
                            $pagelevel = $i/$eachpage;
                            $pagepoint_start = $i-$eachpage+1;
                            $pagepoint_end = $i;
                        } else {
                            $pagelevel = floor($i/$eachpage);
                            $pagepoint_start = $pagelevel*$eachpage+1;
                            $pagepoint_end = ($pagelevel+1)*$eachpage;
                        }
                        $pagestart = $pagepoint_start;
                        $pageend = $pagepoint_end;

                        for($i=$pagestart;$i<=$pageend;$i++):
                            if($i>=1 and $i<=$AtotalPages):
                        
                    ?>
                    <li class="page-item <?=$page==$i ? 'active':'' ?>">
                        <a class="page-link" href="?page=<?= $i?>"><?= $i?></a>
                    </li>
                    <?php endif;endfor;?>
                    <li class="page-item <?=$page==$AtotalPages ? 'disabled':'' ?>"><a class="page-link" href="?page=<?= $page+1?>"><i class="fas fa-arrow-alt-circle-right"></i></a></li>
                </ul>
                    */ ?> 
                    <?php for ($i = 1; $i <= $totalPages; $i++) : ?>

                        <li>
                            <a class="pagestyle <?= $i == $page ?  'active' : '' ?>" href="?page=<?= $i ?>">
                                <?= $i ?>
                            </a>
                        </li>
                         <?php endfor ?>
                         <a href="?page=<?= $page + 1 ?>">
                            <i class="fas fa-arrow-circle-right"></i>
                        </a>

                </ul>
                <!-- <button class="newinfo">
                    <a class="text-decoration-none " href="place-addPage.php">新增資料</a>
                </button> -->
            </nav>
            <!-- 頁碼位置結束 -->
        </div>
    </div>
    <div class="row">
        <div class="col">
            <table class="tablestyle table table-striped">
                <thead>
                    <tr>
                        <!-- <th scope="col"><i class="fas fa-trash-alt"></i></th> -->
                        <th scope="col">郵遞區號</th>
                        <th scope="col">縣/市/區</th>
                        <th scope="col">直轄市</th>
                        <!-- <th scope="col">
                            <i class="fas fa-edit"></i>
                        </th> -->
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($rows as $r) : ?>
                        <tr>
                            <!-- <td>
                                <?php /*
                                <a href="ab-delete.php?sid=<?= $r['sid'] ?>" onclick="return confirm(`確定要刪除編號為 <?= $r['sid'] ?> 的資料嗎?`)">
                                */ ?>
                                <a href="javascript: del_it(<?= $r['sid'] ?>)">
                                    <i class="fas fa-trash-alt"></i>
                                </a>
                            </td> -->
                            <td><?= $r['sid'] ?></td>
                            <td><?= $r['state'] ?></td>
                            <td><?= $r['city'] ?></td>
                            <!-- <td>
                                <a href="place-edit.php?sid=<?= $r['sid'] ?>">
                                    <i class="fas fa-edit"></i>
                                </a>
                            </td> -->
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

            location.href = 'place-delete.php?sid=' + sid;
        }

    }
</script>
<?php include '../parts/scripts.php' ?>
<?php include '../parts/html-foot.php' ?>