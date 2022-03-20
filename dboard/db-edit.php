<?php
require '../parts/connect.php';

$title = '修改';
$pageName = 'db-edit';

$id = isset($_GET['id']) ? intval($_GET['id']) : 0;

$sql = "SELECT * FROM ds_board WHERE id=$id";
$row = $pdo->query($sql)->fetch();
if(empty($row)){
    header('Location: db-list.php'); // 找不到資炓轉向列表頁
    exit;
}
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
                    <h5 class="card-title">修改</h5>
                    <form name="form1" method="post" novalidate onsubmit="checkForm(); return false;">
                        <input type="hidden" name="id" value="<?= $row['id'] ?>">

                        <div class="mb-3">
                            <label for="name" class="form-label">* 看板名稱</label>
                            <input type="text" class="form-control" id="name" name="board_name" required
                            value="<?= htmlentities($row['board_name']) ?>">
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
    
    const name = document.form1.name;
    const name_msg = name.closest('.mb-3').querySelector('.form-text');

    function checkForm(){
        let isPass = true; // 有沒有通過檢查

        name_msg.innerText = '';  // 清空訊息

        // TODO: 表單資料送出之前, 要做格式檢查

        // if(name.value.length<2){
        //     isPass = false;
        //     name_msg.innerText = '請填寫正確的姓名'
        // }
        
        if(isPass){
            const fd = new FormData(document.form1);

            fetch('db-edit-api.php', {
                method: 'POST',
                body: fd
            }).then(r => r.json())
            .then(obj => {
                console.log(obj);
                if(obj.success){
                    alert('修改成功');
                    location.href = 'db-list.php';
                } else {
                    alert('沒有修改');
                    location.href = 'db-list.php';
                }

            })


        }


    }


</script>
<?php include '../parts/html-foot.php'; ?>