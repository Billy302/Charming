<?php
$title = '新增看板';
$pageName = 'db-add';
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
                    <h5 class="card-title">新增看板</h5>
                    <form name="form1" method="post" novalidate onsubmit="checkForm(); return false;">
                        <div class="mb-3">
                            <label for="name" class="form-label">* 看板名稱</label>
                            <input type="text" class="form-control" id="name" name="board_name" required>
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
    const name = document.form1.name;
    const name_msg = name.closest('.mb-3').querySelector('.form-text');

    function checkForm(){
        // TODO: 表單資料送出之前, 要做格式檢查
        let isPass = true; // 有沒有通過檢查

        name_msg.innerText = '';  // 清空訊息

        if(name.value.length<2){
            isPass = false;
            name_msg.innerText = '請填寫名稱'
        }

        if(isPass){
            const fd = new FormData(document.form1);

            fetch('db-add-api.php', {
                method: 'POST',
                body: fd
            }).then(r => r.json())
            .then(obj => {
                console.log(obj);
                if(obj.success){
                    alert('新增成功');
                    location.href = 'db-list.php';
                } else {
                    alert('新增失敗');
                }

            })


        }


    }


</script>
<?php include '../parts/html-foot.php'; ?>