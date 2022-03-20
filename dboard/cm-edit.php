<?php
require '../parts/connect.php';

$title = '修改留言';
$pageName = 'cm-edit';

//抓資料庫id,如果有,轉換成整數intval,沒有的話=編號0
$id = isset($_GET['id']) ? intval($_GET['id']) : 0;

//從table拿id
// $sql = "SELECT * FROM ds_comment WHERE id=$id";
$sql = "select ds_comment.*, first_name, title
from ds_comment
join client_information on client_information.ID = ds_comment.user_id
join ds_article on ds_article.id = ds_comment.article_id
where ds_comment.id=$id";

//讀每一筆資料
$row = $pdo->query($sql)->fetch();

//如果找不到資料,轉向回list,結束
if(empty($row)){
    header('Location: cm-list.php'); // 找不到資炓轉向列表頁
    exit;
}
//通過上面表示找到資料,下面做value=php輸出資料
?>

<?php include '../parts/html-head.php'; ?>
<style>
    form .mb-3 .form-text{
        color: red;
    }

</style>
<div class="container liststyle">
    <div class="row">
        <div class="col-lg-6">
            <div class="card tablestyle">
                <div class="card-body">
                    <h5 class="card-title">修改留言</h5>
                    <form name="form1" method="post" novalidate onsubmit="checkForm(); return false;">
                    <input type="hidden" name="id" value="<?= $row['id'] ?>">
                       
                        <div class="mb-3">
                            <label for="comment" class="form-label">留言代碼</label>
                            <input readonly="readonly"  class="form-control" id="comment" name="comment"
                            value="<?= htmlentities($row['id']) ?>">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label">文章標題</label>
                            <input readonly="readonly"  class="form-control" id="title" name="title"                           value="<?= htmlentities($row['title']) ?>">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="first_name" class="form-label">留言者</label>
                            <input readonly="readonly"  class="form-control" id="first_name" name="first_name"
                            value="<?= htmlentities($row['first_name']) ?>">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="content" class="form-label">內文</label>
                            <input type="text" class="form-control" id="content" name="content"
                            value="<?= htmlentities($row['content']) ?>">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="img" class="form-label">圖片</label>
                            <input type="text" class="form-control" id="img" name="img"
                            value="<?= htmlentities($row['img']) ?>">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="create_at" class="form-label">留言時間</label>
                            <input readonly="readonly"  class="form-control" id="create_at" name="create_at"
                            value="<?= htmlentities($row['create_at']) ?>">
                            <div class="form-text"></div>
                        </div>

                        <button type="submit" class="newinfo">更新</button>
                    </form>

                </div>
            </div>
        </div>
    </div>





</div>
<?php include '../parts/scripts.php'; ?>
<script>
    
    function checkForm(){
        let isPass = true; // 有沒有通過檢查
        
        if(isPass){
            const fd = new FormData(document.form1);

            fetch('cm-edit-api.php', {
                method: 'POST',
                body: fd
            }).then(r => r.json())
            .then(obj => {
                console.log(obj);
                if(obj.success){
                    alert('修改成功');
                    location.href = 'cm-list.php';
                } else {
                    alert('沒有修改');
                    location.href = 'cm-list.php';
                }

            })


        }


    }


</script>
<?php include '../parts/html-foot.php'; ?>