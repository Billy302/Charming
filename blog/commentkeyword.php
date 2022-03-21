<?php
require '../parts/connect.php';
$title="留言關鍵字查詢";
$i = 1;
$keyword = $_POST['search'] ?? '';

if($keyword == "，" or $keyword == "" ){
    header('Location: articleList.php');
    exit();
}

if(isset($keyword)){
$search = $pdo->query("SELECT * from blog_comments WHERE comments_desc LIKE '%$keyword%' ORDER by blog_ID asc")->fetchAll();

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
        <form name="searchbar" method="post" action="commentkeyword.php">
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
            <table class="table table-striped tablestyle">
                <thead>
                    <tr>
                        <th scope="col">留言編號</th>
                        <th scope="col">部落格編號</th>
                        <th scope="col">留言內容</th>
                        <th scope="col">刪除留言</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach($search as $s): ?>
                    <tr>
                        <td><?= $i++ ?></td>

                        <td> <a href="check.php?id=<?=$s['blog_ID'] ?>"><?= $s['blog_ID']?></a></td>
                        <td><?= $s['comments_desc']; ?></td>
                        <td><a href="javascript:delete_it(<?= $s['comments_ID']?>)"><i
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