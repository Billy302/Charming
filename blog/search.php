<?php
require '../parts/connect.php';

$title="文章關鍵字查詢";
$pageName = 'list';

$keyword = $_POST['search'] ?? '';

if($keyword == "，" or $keyword == "" ){
    header('Location: articleList.php');
    exit();
}

// todo => 頁數
// try to do => 用ajax發到後端後做modal呈現

// $perPage = 10;

// $page = isset($_GET['page']) ? intval($_GET['page']) : 1;

// if($page <1){
//     header('Location: articleList.php');
//     exit();
// }

// $t_sql ="SELECT count(*) from blog WHERE blog_content LIKE '%$keyword%' OR blog_title LIKE '%$keyword%'";


// // 拿索引式陣列
// $totalRows=$pdo->query($t_sql)->fetch(PDO::FETCH_NUM)[0];

// $totalPages = ceil($totalRows/$perPage);



// if($page >$totalPages){
//     header('Location: search.php?page='.$totalPages);
//     exit();
// }


// $sql=sprintf("SELECT * from blog WHERE blog_content LIKE '%$keyword%' OR blog_title LIKE '%$keyword%' desc LIMIT %s, %s", ($page-1)*$perPage, $perPage);


// $sql=sprintf("SELECT * from blog WHERE blog_content LIKE '%s' OR blog_title LIKE '%s' asc LIMIT %s, %s", "%$keyword%","%$keyword%",0,10);

// $search = $pdo->query($sql)->fetchAll();

if(isset($keyword)){
$search = $pdo->query("SELECT * from blog WHERE blog_content LIKE '%$keyword%' OR blog_title LIKE '%$keyword%'")->fetchAll();
}

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
            <nav class="navstyle" style="justify-content: flex-end;">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="pagestyle disabled" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>

                    <li class="active"><a class="pagestyle" href="?page=">1</a></li>


                    <li class="page-item">
                        <a class="pagestyle disabled " href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>

                </ul>
            </nav>
        </div>
    </div>
    <div class="container">
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
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">＃</th>
                            <th scope="col">主題</th>
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
                            <td><a href="edit.php?id=<?= $s['blog_id']?>"><i class="fa-solid fa-pen-to-square"></i></a>
                            </td>
                            <td><a href="comment.php?id=<?= $s['blog_id']?>"><i class="fa-solid fa-comment-dots"></i>
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
<?php require '../parts/scripts.php' ?>
<?php require '../parts/html-foot.php' ?>