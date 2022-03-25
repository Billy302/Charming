<!-- 跳出視窗使用 -->
<!-- <script>
    function pop_up(url) {
        window.open(url, 'win2', 'status=no,toolbar=no,scrollbars=yes,titlebar=no,menubar=no,resizable=yes,width=1076,height=768,directories=no,location=no')
    }
</script> -->
<?php
include '../parts/connect.php';
// 總筆數、總頁數
$pageName = 'search';
$perPage = 5;
$t_sql = "SELECT COUNT(1) FROM search";
$totalRows = $pdo->query($t_sql)->fetch(PDO::FETCH_NUM)[0];
$totalPages = ceil($totalRows / $perPage);
$page = isset($_GET['page']) ? intval($_GET['page']) : 1;  // 預設頁碼
if ($page < 1) {
    header('location: search.php');
}
if ($page > $totalPages) {
    header('location: search.php');
}

// $sql = sprintf("SELECT * FROM search LIMIT %s, %s", ($page - 1) * $perPage, $perPage);
$sql = sprintf("
select `s`.* ,`city` 
FROM `search` as `s`
JOIN `city` as `c`
ON `c`.`sid` = `s` . `city_id` LIMIT %s, %s", ($page - 1) * $perPage, $perPage);
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
                            <i class="fas fa-arrow-circle-left text-align-center"></i>
                        </a>
                    </li>

                    <?php for ($i = 1; $i <= $totalPages; $i++) : ?>
                        <a class="pagestyle <?= $i == $page ?  'active' : '' ?>" href="?page=<?= $i ?>">
                            <li>

                                <?= $i ?>

                            </li>
                        </a>

                    <?php endfor ?>

                    <li>
                        <a href="?page=<?= $page + 1 ?>">
                            <i class="fas fa-arrow-circle-right"></i>
                        </a>
                    </li>
                </ul>
                <input class="newinfo" type="button" value="新增資料" onclick="location.href='search-addPage.php'">
            </nav>

        </div>
    </div>
    <div class="row">
        <div class="col">
            <table class="tablestyle table table-striped">
                <!-- SELECT `sid`, `keyword`, `place-id`, `create-at` FROM `search` WHERE 1 -->
                <thead>
                    <tr>
                        <th scope="col"><i class="fas fa-trash-alt"></i></th>
                        <th scope="col">編號</th>
                        <th scope="col">城市</th>
                        <th scope="col">關鍵字</th>
                        <th scope="col">數量</th>
                        <th scope="col">成立時間</th>
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
                            <td><?= $r['city'] ?></td>
                            <td><?= $r['keyword'] ?></td>
                            <td><?= $r['count'] ?></td>
                            <td><?= $r['create_at'] ?></td>



                            <td>
                                <a href="search-edit.php?sid=<?= $r['sid'] ?>">
                                    <i class="fas fa-edit"></i>
                                </a>
                            </td>

                            <!-- <input class='prompttest' type="button" value="按我"> -->
                            <!-- <p class='show'></p> -->

                            <?php /*<!-- 跳出視窗使用 -->
                            <td>
                                <a href="search-edit.php?sid=<?= $r['sid'] ?>"onclick="pop_up(this);">
                                    <i class="fas fa-edit"></i>
                                </a>
                            </td>
                            */ ?>
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

            location.href = 'search-delete.php?sid=' + sid;
        }

    }
</script>
<?php include '../parts/scripts.php' ?>
<?php include '../parts/html-foot.php' ?>