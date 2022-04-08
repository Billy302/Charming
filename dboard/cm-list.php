<?php
include '../parts/connect.php';
$title = '留言列表';
$pageName = 'cm-list';
$perPage = 5; // 每一頁有幾筆
$page = isset($_GET['page']) ? intval($_GET['page']) : 1;  // 用戶要看的頁碼
if ($page < 1) {
    header('Location: cm-list.php?page=1');
    exit;
}

$t_sql = "SELECT COUNT(1) FROM ds_comment";
// 取得總筆數
$totalRows = $pdo->query($t_sql)->fetch(PDO::FETCH_NUM)[0];
$rows = []; // 預設沒有資料
$totalPages = 0;
if ($totalRows) {
    // 總頁數
    $totalPages = ceil($totalRows / $perPage);
    if ($page > $totalPages) {
        header("Location: cm-list.php?page=$totalPages");
        exit;
    }

    // $sql = sprintf("SELECT * FROM ds_comment ORDER BY id LIMIT %s, %s", ($page - 1) * $perPage, $perPage);
    $sql = sprintf("select ds_comment.*, first_name, title
    from ds_comment
    join client_information on client_information.ID = ds_comment.user_id
    join ds_article on ds_article.id = ds_comment.article_id
    ORDER BY id DESC LIMIT %s, %s", ($page - 1) * $perPage, $perPage);
    $rows = $pdo->query($sql)->fetchAll(); // 拿到分頁資料
}

?>
<?php include '../parts/html-head.php'; ?>
<div class="container liststyle">
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
                        <th scope="col">留言代碼</th>
                        <th scope="col">文章標題</th>
                        <th scope="col">留言者</th>
                        <th scope="col">內文</th>
                        <th scope="col">圖片</th>
                        <th scope="col">留言時間</th>
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
                                <a href="ac-delete.php?sid=<?= $r['sid'] ?>" onclick="return confirm(`確定要刪除編號為 <?= $r['sid'] ?> 的資料嗎?`)">
                                */ ?>
                                <a href="javascript: del_it(<?= $r['id'] ?>)">
                                    <i class="fas fa-trash-alt"></i>
                                </a>
                            </td>
                            <td><?= $r['id'] ?></td>
                            <td><?= $r['title'] ?></td>
                            <td><?= $r['first_name'] ?></td>
                            <td><?= $r['content'] ?></td>
                            <td><?= $r['img'] ?></td>
                            <td><?= $r['create_at'] ?></td>
                            <td>
                                <a href="cm-edit.php?id=<?= $r['id'] ?>">
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
<?php include '../parts/scripts.php'; ?>
<script>
    function del_it(id) {
        if (confirm(`確定要刪除編號為 ${id} 的資料嗎?`)) {

            location.href = 'cm-delete.php?id=' + id;
        }

    }
</script>
<?php include '../parts/html-foot.php'; ?>