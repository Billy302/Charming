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
// let a = 0;
// function sendTags() {
//     fetch(`send-tags-api.php?tags=${a}`)
// $t_sql = "SELECT * FROM `ds_article` WHERE board_id = $_get[]";
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
<div class="container">
<button type="button" class="btn btn-secondary">程式開發板</button>
<hr>
    <div class="row">
        <div class="col">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item <?= $page == 1 ? 'disabled' : '' ?>">
                        <a class="page-link" href="?page=<?= $page - 1 ?>">
                            <i class="fas fa-arrow-alt-circle-left"></i>
                        </a>
                    </li>
                    <?php for ($i = $page - 5; $i <= $page + 5; $i++) :
                        if ($i >= 1 and $i <= $totalPages) :
                    ?>
                            <li class="page-item <?= $page == $i ? 'active' : '' ?>">
                                <a class="page-link" href="?page=<?= $i ?>"><?= $i ?></a>
                            </li>
                    <?php endif;
                    endfor; ?>
                    <li class="page-item <?= $page == $totalPages ? 'disabled' : '' ?>">
                        <a class="page-link" href="?page=<?= $page + 1 ?>">
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
                        <th scope="col">文章ID</th>
                        <th scope="col">看板代碼</th>
                        <th scope="col">發文者代碼</th>
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