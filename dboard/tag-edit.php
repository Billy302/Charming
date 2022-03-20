<?php
require '../parts/connect.php';

$title = '修改標籤';
$pageName = 'tag-edit';

//抓資料庫id,如果有,轉換成整數intval,沒有的話=編號0
$id = isset($_GET['id']) ? intval($_GET['id']) : 0;

//從table拿id
$sql = "SELECT * FROM ds_tag WHERE id=$id";

//讀每一筆資料
$row = $pdo->query($sql)->fetch();

//如果找不到資料,轉向回list,結束
if(empty($row)){
    header('Location: tag-list.php'); // 找不到資炓轉向列表頁
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
                    <h5 class="card-title">修改標籤</h5>
                    <form name="form1" method="post" novalidate onsubmit="checkForm(); return false;">
                    <input type="hidden" name="id" value="<?= $row['id'] ?>">
                       
                        <div class="mb-3">
                            <label for="tag_id" class="form-label">標籤代碼</label>
                            <input readonly="readonly"  class="form-control" id="tag_id" name="tag_id"
                            value="<?= htmlentities($row['id']) ?>">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="tag_name" class="form-label">標籤名稱</label>
                            <input type="text" class="form-control" id="tag_name" name="tag_name"                           value="<?= htmlentities($row['tag_name']) ?>">
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

            fetch('tag-edit-api.php', {
                method: 'POST',
                body: fd
            }).then(r => r.json())
            .then(obj => {
                console.log(obj);
                if(obj.success){
                    alert('修改成功');
                    location.href = 'tag-list.php';
                } else {
                    alert('沒有修改');
                    location.href = 'tag-list.php';
                }

            })


        }


    }


</script>
<?php include '../parts/html-foot.php'; ?>