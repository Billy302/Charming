<?php
$title = 'Create';
$pageName = 'Collection-Create';
?>
<?php include "../parts/html-head.php"; ?>
<style>
    form .mb-3 .form-text {
        color: red;
    }

    .row {
        padding-top: 50px;
    }
</style>
<div class="container">
    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body"><br>
                    <h3 class="card-title">作品新增</h3>
                    <br>

                    <form name="form1" method="post" novalidate onsubmit="checkForm(); return false;">

                        <button type="submit" class="btn btn-primary">新增</button>
                        <br>
                        <br>
                        <br>
                        <div class="mb-3">
                            <label for="Nickname" class="form-label">暱稱 Nickname</label>
                            <input type="text" class="form-control" id="Nickname" name="Nickname" required>
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="ProjectName" class="form-label">作品名 Project Name</label>
                            <input type="ProjectName" class="form-control" id="ProjectName" name="ProjectName">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="Discription" class="form-label">內容介紹 Discription</label>
                            <textarea class="form-control" placeholder="請說明作品內容" name="Discription" id="Discription" cols="30" rows="3"></textarea>
                            <div class="form-text">

                            </div>


                        </div>
                        
                            
                            
                            
                            
                        </form>
                        

                </div>
            </div>
        </div>
    </div>





</div>
<?php include "../parts/scripts.php"; ?>
<script>
    const mobile = document.form1.Discription; // DOM element
    const mobile_msg = mobile.closest('.mb-3').querySelector('.form-text');

    const name = document.form1.Nickname;
    const name_msg = name.closest('.mb-3').querySelector('.form-text');

    function checkForm() {
        let isPass = true; // 有沒有通過檢查

        name_msg.innerText = ''; // 清空訊息
        mobile_msg.innerText = ''; // 清空訊息

        // TODO: 表單資料送出之前, 要做格式檢查

        if (name.value.length < 2) {
            isPass = false;
            name_msg.innerText = '請填寫正確的姓名'
        }

        // const mobile_re = /^09\d{2}-?\d{3}-?\d{3}$/; // new RegExp()
        // if (mobile.value) {
        //     // 如果不是空字串就檢查格式
        //     if (!mobile_re.test(mobile.value)) {
        //         mobile_msg.innerText = '請輸入正確的手機號碼';
        //         isPass = false;
        //     }
        // }

        if (isPass) {
            const fd = new FormData(document.form1);

            fetch('Collection_Add-api.php', {
                    method: 'POST',
                    body: fd
                }).then(r => r.json())
                .then(obj => {
                    console.log(obj);
                    if (obj.success) {
                        alert('新增成功');
                        location.href = 'Collection_Read.php';
                    } else {
                        alert('新增失敗');
                    }

                })


        }

        

    }
</script>
<?php require '../parts/connect_db.php'; ?>