<?php
require '../parts/connect.php';
// $title = '文章列表';
$title ="標籤關聯查詢";
$pageName = 'list';

$keyword = $_GET['id'] ?? '';

$perPage = 10;

$page = isset($_GET['page']) ? intval($_GET['page']) : 1;

if($page <1){
    header('Location: articleList.php');
    exit();
}

$t_sql ="SELECT COUNT(*) FROM `blog` LEFT JOIN `blog_tagtoblog` on `blog`.`blog_id` = `blog_tagtoblog`.`blog_ID` WHERE tags_id = $keyword";


// 拿索引式陣列
$totalRows=$pdo->query($t_sql)->fetch(PDO::FETCH_NUM)[0];
$totalPages = ceil($totalRows/$perPage);
if($page >$totalPages){
    header('Location: articleList.php?page='. $totalPages);
    exit();
}


// $sql=sprintf("SELECT * FROM blog ORDER BY blog_id desc LIMIT %s, %s", ($page-1)*$perPage, $perPage);

// $sql=sprintf("SELECT * FROM blog");

// 拿到所有資料的陣列
// $rows = $pdo->query($sql)->fetchAll();






$search = $pdo->query("SELECT * FROM `blog` LEFT JOIN `blog_tagtoblog` on `blog`.`blog_id` = `blog_tagtoblog`.`blog_ID` WHERE tags_id = $keyword ORDER BY `blog`.`blog_id` ASC")->fetchAll();

$displayTag = $pdo->query("SELECT * FROM `tags` WHERE `tags_ID` = $keyword")->fetchAll();

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

.style_for_link {
    border-radius: 10px;
    box-shadow: none;
    color: var(--maincolordark);
    background-color: rgb(255, 255, 255);
    height: 20px;
    border: 1px solid var(--bordercolor);
    margin-bottom: 10px;
    padding: 5px 5px;
}
</style>

<!-- search bar -->
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

    <!-- search bar -->

    <div class="conatiner">
        <div class="col">
            <nav class="navstyle" style="justify-content: flex-end;">
                <ul class="pagination">
                    <li class="page-item disabled">
                        <a class="pagestyle" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item active"><a class="pagestyle" href="?page=">1</a></li>
                    <li class="page-item disabled">
                        <a class="pagestyle" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>

    <div class="container liststyle">
        <div class="d-flex">
            <form action="insertArticle.php">
                <button class="newinfo">新增文章</button>
            </form>
            <form action="articleList.php">
                <button class="newinfo">回到列表</button>
            </form>
        </div>
        <div class="row">
            <div class="col">
                <table class="table table-striped tablestyle">
                    <thead>
                        <tr>
                            <th scope="col">＃</th>
                            <th scope="col">

                                <?php foreach($displayTag as $d): ?>
                                <a class="style_for_link"><?= $d['tags_desc'] ?></a>
                                <?php endforeach;?>
                            </th>
                            <th scope="col">編輯</th>
                            <th scope="col">留言</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach($search as $s): ?>

                        <tr>
                            <td><?= $s['blog_id']?></td>
                            <td> <a href="check.php?id=<?= $s['blog_id']?>">
                                    <?= $s['blog_title']?> </a>
                            </td>
                            <td><a href="edit.php?id=<?= $s['blog_id']?>">編輯</a>
                            </td>
                            <td><a href="comment.php?id=<?= $s['blog_id']?>">留言</i>
                                </a>
                            </td>
                        </tr>
                        <?php endforeach;?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<?php include __DIR__. '/parts/__scripts.php';?>
<script>

</script>
<?php include __DIR__. '/parts/__html_footer.php'; ?>