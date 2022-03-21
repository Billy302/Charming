<?php
require '../parts/connect.php';
$title="文章留言";

$id = $_GET['id'] ??  1 ;

$row = $pdo->query("SELECT * FROM `blog_comments` WHERE blog_ID=$id")->fetchAll();


$i = 1;

// $commentid = $pdo->query("SELECT COUNT(*) FROM `likes_at_comments` WHERE `comments_id`=1")->fetchAll();



// $commentid = $pdo->query("SELECT COUNT(*) FROM `likes_at_comments` INNER JOIN `blog_comments` ON `likes_at_comments`.`comments_id` = `blog_comments`.`comments_ID`and `blog_comments`.`comments_ID`= 22")->fetch();

// $commentsLike = $pdo->query("SELECT count(*) FROM `likes_at_comment` WHERE comments_id=$commentid")->fetch(PDO::FETCH_NUM)[0];


// print_r($row);


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
        <form name="searchbar" method="post" action="commentkeyword.php">
            <div class="input-group">
                <div class="form-outline">
                    <input id="search-focus" type="teax" class="form-control" placeholder="留言搜尋" name="search" />
                </div>
                <button type="submit" class="newinfo">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </form>
    </div>
    <div class="row">
        <div class="col">
            <table class="table table-striped tablestyle">
                <thead>
                    <tr>
                        <th scope="col">留言編號</th>
                        <th scope="col">留言內容</th>
                        <!-- <th scope="col">留言讚數</th> -->
                        <th scope="col">刪除留言</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach($row as $r): ?>
                    <tr>
                        <td><?= $i++ ?></td>
                        <td><?= $r['comments_desc']; ?></td>
                        <td><a href="javascript:delete_it(<?= $r['comments_ID']?>)"><i
                                    class="fa-solid fa-trash-can"></i></a></td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
            <form action="articleList.php">
                <button class="newinfo">回到列表</button>
            </form>
            <!-- <a class="newinfo" href="javascript:history.go(-1)" role="button">回上一頁</a> -->
        </div>

    </div>
    <?php require '../parts/scripts.php' ?>
    <script>
    function delete_it(commentid) {
        if (confirm(`您是否要刪除此則留言？`)) {
            location.href = `delete.php?commentid=${commentid}`;
        }
    }
    </script>
    <?php require '../parts/html-foot.php' ?>