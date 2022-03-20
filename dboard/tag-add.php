<?php
$title = '新增標籤';
$pageName = 'tag-add';
?>
<?php include '../parts/html-head.php'; ?>
<style>
    form .mb-3 .form-text {
        color: red;
    }
</style>
<div class="container liststyle">
    <div class="row">
        <div class="col-lg-6">
            <div class="card tablestyle">
                <div class="card-body">
                    <h5 class="card-title">新增標籤</h5>
                    <form name="form1" method="post" novalidate onsubmit="checkForm(); return false;">
                        <div class="mb-3">
                            <label for="tag_name" class="form-label">標籤名稱</label>
                            <input type="text" class="form-control" id="tag_name" name="tag_name" required>
                            <div class="form-text"></div>
                        </div>

                        <button type="submit" class="newinfo">新增</button>
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

            fetch('tag-add-api.php', {
                    method: 'POST',
                    body: fd
                }).then(r => r.json())
                .then(obj => {
                    console.log(obj);
                    if (obj.success) {
                        alert('新增成功');
                        location.href = 'tag-list.php';
                    } else {
                        alert('新增失敗');
                    }

                })


        }


    }
</script>
<?php include '../parts/html-foot.php'; ?>