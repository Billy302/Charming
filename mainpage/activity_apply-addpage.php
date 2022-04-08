<?php
include '../parts/connect.php';
$title = '新增活動報名';
$pagename = 'activity_apply-addpage';
?>
<?php 
$sql = "SELECT `sid`,`class_name` FROM activity";
$rows = $pdo->query($sql)->fetchAll();
?>
<?php include '../parts/html-head.php' ?>
<div class="container">
    <div class="cardstyle">
        <h5 class="card-title">新增活動項目</h5>
        <form name="form1" method="post" novalidate onsubmit="checkForm(); return false;">
            <div class="mb-3">
                <label for="user_id" class="form-label">使用者ID</label>
                <input type="text" class="form-control" id="user_id" name="user_id" required>
            </div>
            <div class="mb-3">
                <label for="activity_id" class="form-label">課程</label>
                <select class="form-control" id="activity_id" name="activity_id" required>
                    <option>請選擇課程</option>
                    <?php foreach($rows as $r) : ?>
                    <option value="<?=htmlentities($r['sid']) ?>"><?= htmlentities($r['class_name']) ?></option>
                    <?php endforeach ?>
                </select>
                <!-- <input type="text" class="form-control" id="activity_id" name="activity_id" required> -->
            </div>
            <button type="submit" class="newinfo">新增</button>
        </form>

    </div>
</div>




</div>
<?php include '../parts/scripts.php'; ?>
<script>
    function checkForm() {
        let isPass = true; // 有沒有通過檢查


        // TODO: 表單資料送出之前, 要做格式檢查

        // if(name.value.length<2){
        //     isPass = false;
        //     name_msg.innerText = '請填寫正確的姓名'
        // }

        // const mobile_re = /^09\d{2}-?\d{3}-?\d{3}$/; // new RegExp()
        // if(mobile.value){
        //     // 如果不是空字串就檢查格式
        //     if(! mobile_re.test(mobile.value)){
        //         mobile_msg.innerText = '請輸入正確的手機號碼';
        //         isPass = false;
        //     }
        // }

        if (isPass) {
            const fd = new FormData(document.form1);

            fetch('activity_apply-addpage-api.php', {
                    method: 'POST',
                    body: fd
                }).then(r => r.json())
                .then(obj => {
                    console.log(obj);
                    if (obj.success) {
                        alert('新增成功');
                        location.href = 'activity_apply.php';
                    } else {
                        alert('新增失敗');
                    }

                })



        }
        // const class_name = document.form1.class_name; // DOM element
        // const class_name_msg = class_name.closest('.mb-3').querySelector('.form-text');

        // const class_time = document.form1.class_time;
        // const class_time_msg = name.closest('.mb-3').querySelector('.form-text');
        // class_name_msg.innerText = ''; // 清空訊息
        // class_time_msg.innerText = ''; // 清空訊息

    }
</script>
<?php include '../parts/html-foot.php'; ?>