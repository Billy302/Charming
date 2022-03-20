<?php
require '../parts/connect.php';
$title = '文章列表';
$pageName = 'list';

$perPage = 10;

$page = isset($_GET['page']) ? intval($_GET['page']) : 1;

if($page <1){
    header('Location: articleList.php');
    exit();
}

$t_sql ="SELECT COUNT(1) FROM blog";


// 拿索引式陣列
$totalRows=$pdo->query($t_sql)->fetch(PDO::FETCH_NUM)[0];
$totalPages = ceil($totalRows/$perPage);
if($page >$totalPages){
    header('Location: articleList.php?page='. $totalPages);
    exit();
}


$sql=sprintf("SELECT * FROM blog ORDER BY blog_id desc LIMIT %s, %s", ($page-1)*$perPage, $perPage);

// $sql=sprintf("SELECT * FROM blog");

// 拿到所有資料的陣列
$rows = $pdo->query($sql)->fetchAll();

// $likes = sprintf("SELECT COUNT(*) FROM likes_at_blog ORDER BY blog_id desc LIMIT %s, %s",($page-1)*$perPage, $perPage);

// $like = $pdo->query($likes)->fetchAll();


// $likes =sprintf("SELECT COUNT(*) FROM `likes_at_blog` desc LIMIT %s, %s", ($page-1)*$perPage, $perPage);
// $rows = $pdo->query($sql)->fetch(PDO::FETCH_NUM)[0];

?>
<?php require '../parts/html-head.php' ?>
<style>
.topnavbar {
    display: flex;
    justify-content: flex-end;
}

.pagination-top {
    display: flex;
    justify-content: flex-end;
}

.style_for_link1 {
    border-radius: 10px;
    box-shadow: none;
    color: var(--maincolordark);
    background-color: rgb(255, 255, 255);
    height: 40px;
    border: 1px solid var(--bordercolor);
    margin-bottom: 20px;
    padding: 10px 10px;
}
</style>


<div class="container liststyle">
    <div class="topnavbar">
        <form name="searchbar" method="post" action="search.php">
            <div class="input-group">
                <div class="form-outline">
                    <input id="search-focus" type="teax" class="form-control" placeholder="關鍵字搜尋" name="search" />
                </div>
                <button type="submit" class="newinfo">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </form>
    </div>
    <div class="row">
        <div class="col">

            <!-- <span><a class="newinfo" href="insertArticle.php" role="button">新增文章</a></span> -->
            <nav class="navstyle" style="justify-content: flex-end;">
                <ul class="pagination-top">
                    <li class="page-item <?= $page === 1 ? 'disabled': '' ?>">
                        <a class="pagestyle" href="?page=<?= $page-1?>" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <?php for($i=1;$i<=$totalPages;$i++): ?>
                    <li class="page-item"><a class="pagestyle  <?= $i===$page? 'active':''?> "
                            href="?page=<?= $i ?>"><?= $i ?></a></li>
                    <?php endfor ?>
                    <li class="page-item <?= $page === 2 ? 'disabled': '' ?>">
                        <a class="pagestyle" href="?page=<?= $page+1?>" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    <div class="container">


        <div>
            <form action="insertArticle.php">
                <button class="newinfo">新增文章</button>
            </form>
        </div>
        <div class="row">
            <div class="col">
                <table class="table table-striped tablestyle">
                    <thead>
                        <tr>
                            <th scope="col">＃</th>
                            <th scope="col">主題</th>
                            <th scope="col">編輯</th>
                            <th scope="col">留言</th>
                            <th scope="col">刪除</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach($rows as $r): ?>

                        <tr>
                            <td><?= $r['blog_id']?></td>
                            <td> <a href="check.php?id=<?= $r['blog_id']?>">
                                    <?= $r['blog_title']?> </a>
                            </td>
                            <td>
                                <a href="edit.php?id=<?= $r['blog_id']?>">編輯
                                </a>
                            </td>
                            <td><a href="comment.php?id=<?= $r['blog_id']?>">留言
                                </a>
                            </td>
                            <td>
                                <a href="javascript:delete_it(<?= $r['blog_id']?>)" role="button">刪除</a>
                            </td>
                        </tr>
                        <?php endforeach;?>
                    </tbody>
                </table>
                <i class="fa-solid fa-pencil"></i>
            </div>
        </div>
    </div>
</div>
<?php require '../parts/scripts.php' ?>
<script>
function delete_it(id) {
    if (confirm(`您是否要刪除編號${id}的資料？`)) {
        location.href = `delete.php?id=${id}`;
    }
}
</script>
<?php require '../parts/html-foot.php' ?>