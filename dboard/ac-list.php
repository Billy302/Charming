<?php
include '../parts/connect.php';
$title = '文章列表';
$pageName = 'ac-list';
$perPage = 5; // 每一頁有幾筆
$page = isset($_GET['page']) ? intval($_GET['page']) : 1;  // 用戶要看的頁碼
if ($page < 1) {
    header('Location: ac-list.php?page=1');
    exit;
}

$t_sql = "SELECT COUNT(1) FROM ds_article";
// 取得總筆數
$totalRows = $pdo->query($t_sql)->fetch(PDO::FETCH_NUM)[0];
$rows = []; // 預設沒有資料
$totalPages = 0;
if ($totalRows) {
    // 總頁數
    $totalPages = ceil($totalRows / $perPage);
    if ($page > $totalPages) {
        header("Location: ac-list.php?page=$totalPages");
        exit;
    }
/*
select a.*, b.board_name, ci.first_name
from ds_article a
join ds_board b on b.id = a.board_id 
join client_information ci on ci.ID = a.user_id
join ds_tag t on t.id = a.tag_id;
*/
    // $sql = sprintf("SELECT * FROM ds_article ORDER BY id LIMIT %s, %s", ($page - 1) * $perPage, $perPage);
    $sql = sprintf("
    select a.*, b.board_name, ci.first_name, t.tag_name
from ds_article a
join ds_board b on b.id = a.board_id 
join client_information ci on ci.ID = a.user_id
join ds_tag t on t.id = a.tag_id
    ORDER BY id DESC LIMIT %s, %s", ($page - 1) * $perPage, $perPage);
    $rows = $pdo->query($sql)->fetchAll(); // 拿到分頁資料
}

?>
<?php include '../parts/html-head.php'; ?>
<div class="container liststyle">
<a href="ac-db.php"><button type="button" class="newinfo">程式開發板</button></a>
<hr>
    <div class="row">
        <div class="col">
        <nav class="navstyle">
                <ul class="d-flex pagination">
                    <li class="page-item <?= $page == 1 ? 'disabled' : '' ?>">
                        <a href="?page=<?= $page - 1 ?>">
                            <i class="fas fa-arrow-alt-circle-left"></i>
                        </a>
                    </li>
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
            </nav>
        </div>
    </div>


    <div class="row">
        <div class="col">
            <table class="tablestyle table table-striped">
                <thead>
                    <tr>
                        <th scope="col">
                            <i class="fas fa-trash-alt"></i>
                        </th>
                        <th scope="col">文章ID</th>
                        <th scope="col">看板</th>
                        <th scope="col">發文者</th>
                        <th scope="col">標題</th>
                        <th scope="col">內文</th>
                        <th scope="col">標籤</th>
                        <th scope="col">發文時間</th>
                        <th scope="col">
                            <i class="fas fa-edit"></i>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($rows as $r) : ?>
                        <tr>
                            <td>
                                <a href="javascript: del_it(<?= $r['id'] ?>)">
                                    <i class="fas fa-trash-alt"></i>
                                </a>
                            </td>
                            <td><?= $r['id'] ?></td>
                            <td><?= $r['board_name'] ?></td>
                            <td><?= $r['first_name'] ?></td>
                            <td><?= $r['title'] ?></td>
                            <td><?= $r['content'] ?></td>
                            <td><?= $r['tag_name'] ?></td>
                            <td><?= $r['create_at'] ?></td>
                            <td>
                                <a href="ac-edit.php?id=<?= $r['id'] ?>">
                                    <i class="fas fa-edit"></i>
                                </a>
                            </td>
                        </tr>
                    <?php endforeach ?>

                </tbody>
            </table>
            <a href="ac-add.php">
                <i class="fas fa-plus-circle"></i>
            </a>

            
        </div>
    </div>
</div>
<?php include '../parts/scripts.php'; ?>
<script>
    function del_it(id) {
        if (confirm(`確定要刪除編號為 ${id} 的資料嗎?`)) {

            location.href = 'ac-delete.php?id=' + id;
        }

    }
</script>
<?php include '../parts/html-foot.php'; ?>