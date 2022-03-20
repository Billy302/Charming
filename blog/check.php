<?php
require '../parts/connect.php';
$title="文章內容資訊";
$id = intval($_GET['id']);

$row = $pdo->query("SELECT * FROM `blog` WHERE blog_id=$id")->fetchAll();
$likes = $pdo->query("SELECT COUNT(*) FROM `likes_at_blog` WHERE blog_id=$id")->fetch(PDO::FETCH_NUM)[0];

$tags = $pdo->query("SELECT * FROM `tags` LEFT JOIN `blog_tagtoblog` on `tags`.`tags_id` = `blog_tagtoblog`.`tags_ID` WHERE blog_ID = $id ")->fetchAll();


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
    border: 1px solid var(--bordercolor);
    height: 40px;
    margin-bottom: 20px;
    padding: 10px 10px;
}

.style_for_link2 {
    border-radius: 10px;
    box-shadow: none;
    color: var(--maincolordark);
    background-color: rgb(255, 255, 255);
    border: 1px solid var(--bordercolor);
    margin-bottom: 20px;
    padding: 10px 10px;
    height: 40px;
}

.style_for_link1:hover {
    transform: translateY(-10px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
}
</style>
<div class="container liststyle">

    <span>標籤搜尋</span>
    <?php foreach($tags as $tag): ?>
    <a href="searchtag.php?id=<?= $tag['tags_id']?>" class="style_for_link1"><?= $tag['tags_desc'] ?></a>
    <?php endforeach;?>

    <div style="float:right;">
        <span class="style_for_link2">讚數 <?= $likes?></span>
    </div>
    <?php foreach($row as $r): ?>
    <div class="row">
        <div class="col-2 pb-3 pt-2">主題</div>
        <div class="col-10 pt-2"><?= $r['blog_title']?></div>
    </div>
    <div class="row">
        <div class="col-2">文章內容</div>
        <div class="col-10">
            <pre style="white-space: pre-wrap"><?= $r['blog_content']?></pre>
        </div>
    </div>

    <div class="row">
        <div class="col-2">留言</div>
        <div class="col-10"><a href="comment.php?id=<?= $r['blog_id']?>">留言區</a></div>
    </div>
    <div class="d-flex">
        <form action="javascript:history.go(-1)">
            <button class="newinfo">回上一頁</button>
        </form>
        <a class="style_for_link2" href="javascript:delete_it(<?= $r['blog_id']?>)">刪除</a>
        <a class="style_for_link2" href="edit.php?id=<?= $r['blog_id']?>" class="style_for_link">編輯</a>
        <form action="edit.php?id=<?= $r['blog_id']?>">
            <button class="newinfo">test</button>
        </form>
    </div>
    <?php endforeach;?>



</div>
<?php include __DIR__. '/parts/__scripts.php';?>
<script>
function delete_it(id) {
    if (confirm(`您是否要刪除編號${id}的資料？`)) {
        location.href = `delete.php?id=${id}`;
    }
}
</script>
<?php include __DIR__. '/parts/__html_footer.php'; ?>