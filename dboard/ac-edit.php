<?php
require '../parts/connect.php';

$title = '修改文章';
$pageName = 'ac-edit';

//抓資料庫id,如果有,轉換成整數intval,沒有的話=編號0
$id = isset($_GET['id']) ? intval($_GET['id']) : 0;

//從table拿id
// $sql = "SELECT * FROM ds_article WHERE id=$id";
$sql = "select ds_article.* ,board_name, first_name, tag_name
from ds_article
join ds_board on ds_board.id = ds_article.board_id 
join client_information on client_information.ID = ds_article.user_id
join ds_tag on ds_tag.id = ds_article.tag_id
where ds_article.id= $id";

//讀每一筆資料
$row = $pdo->query($sql)->fetch();


//如果找不到資料,轉向回list,結束
if(empty($row)){
    header('Location: ac-list.php'); // 找不到資炓轉向列表頁
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
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">修改文章</h5>
                    <form name="form1" method="post" novalidate onsubmit="checkForm(); return false;">
                    <input type="hidden" name="id" value="<?= $row['id'] ?>">
                       
                        <div class="mb-3">
                            <label for="article" class="form-label">文章代碼</label>
                            <input readonly="readonly"  class="form-control" id="article" name="article"
                            value="<?= htmlentities($row['id']) ?>">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="board_id" class="form-label">看板類別</label>
                            <input readonly="readonly"  class="form-control" id="board_id" name="board_id"                             value="<?= htmlentities($row['board_name']) ?>">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="user_id" class="form-label">發文者</label>
                            <input readonly="readonly"  class="form-control" id="user_id" name="user_id"
                            value="<?= htmlentities($row['first_name']) ?>">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label">標題</label>
                            <input type="text" class="form-control" id="title" name="title"
                            value="<?= htmlentities($row['title']) ?>">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="content" class="form-label">內文</label>
                            <input type="text" class="form-control" id="content" name="content" cols="30" rows="3"
                            value="<?= htmlentities($row['content']) ?>">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="tag_id" class="form-label">標籤</label>
                            <input type="text" class="form-control" id="tag_id" name="tag_id"
                            value="<?= htmlentities($row['tag_id']) ?>">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="create_at" class="form-label">發文時間</label>
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
    
    // const title = document.form1.title;
    // const title_msg = title.closest('.mb-3').querySelector('.form-text');

    function checkForm(){
        let isPass = true; // 有沒有通過檢查

        // title_msg.innerText = '';  // 清空訊息

        // TODO: 表單資料送出之前, 要做格式檢查

        // if(name.value.length<2){
        //     isPass = false;
        //     name_msg.innerText = '請填寫正確的姓名'
        // }
        
        if(isPass){
            const fd = new FormData(document.form1);

            fetch('ac-edit-api.php', {
                method: 'POST',
                body: fd
            }).then(r => r.json())
            .then(obj => {
                console.log(obj);
                if(obj.success){
                    alert('修改成功');
                    location.href = 'ac-list.php';
                } else {
                    alert('沒有修改');
                    location.href = 'ac-list.php';
                }

            })


        }


    }


</script>
<?php include '../parts/html-foot.php'; ?>