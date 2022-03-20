<?php
require '../parts/connect.php';
$title = '新增留言';
$pageName = 'cm-add';
?>
<?php include '../parts/html-head.php'; ?>
<?php include '../parts/navbar.php'; ?>
<style>
    form .mb-3 .form-text {
        color: red;
    }
</style>
<?php 
$sql = "SELECT ID,first_name FROM client_information";
$rows = $pdo->query($sql)->fetchALL();
?>

<div class="container">
    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">新增留言</h5>
                    <form name="form1" method="post" enctype="multipart/form-data" novalidate onsubmit="checkForm(); return false;">
                    <select name="user_id" id="user_id">
                        <option>選擇留言者</option>s
                        <?php foreach ($rows as $r) :?>
                            <option value="<?= htmlentities($r['ID'])?>"><?= htmlentities($r['first_name'])?></option>
                        <?php endforeach ?>
                    </select>
                        <!-- <div class="mb-3">
                            <label for="user_id" class="form-label">留言者</label>
                            <input type="text" class="form-control" id="user_id" name="user_id" required>
                            <div class="form-text"></div>
                        </div> -->
                        <div class="mb-3">
                            <label for="article_id" class="form-label">選擇文章</label>
                            <input type="text" class="form-control" id="article_id" name="article_id" required>
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="content" class="form-label">內文</label>
                            <textarea class="form-control" name="content" id="content" cols="30" rows="3"></textarea>
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="img" class="form-label">圖檔</label>
                            <input type="file" class="form-control" id="img" name="img" accept="image/*">
                            <div class="form-text"></div>
                        </div>

                        <button type="submit" class="btn btn-primary">新增</button>
                    </form>

                </div>
            </div>
        </div>
    </div>



</div>
<?php include '../parts/scripts.php'; ?>
<script>
    function checkForm() {
        // TODO: 表單資料送出之前, 要做格式檢查
        let isPass = true; // 有沒有通過檢查


        if (isPass) {
            const fd = new FormData(document.form1);

            fetch('cm-add-api.php', {
                    method: 'POST',
                    body: fd
                }).then(r => r.json())
                .then(obj => {
                    console.log(obj);
                    if (obj.success) {
                        alert('新增成功');
                        location.href = 'cm-list.php';
                    } else {
                        alert('新增失敗');
                    }

                })


        }


    }
</script>
<?php include '../parts/html-foot.php'; ?>