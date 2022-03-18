<?php
require '../parts/connect.php';

$title = '修改資料';
$pageName = 'activity-edit';

$sid = isset($_GET['sid']) ? intval($_GET['sid']) : 0;

$sql = "SELECT * FROM activity WHERE sid=$sid";
$row = $pdo->query($sql)->fetch();
if (empty($row)) {
    header('Location: activity.php'); // 找不到資炓轉向列表頁
    exit;
}
?>
<?php include '../parts/html-head.php'; ?>

<div class="container">
    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">修改資料</h5>
                    <form name="form1" method="post" novalidate onsubmit="checkForm(); return false;">
                        <input type="hidden" name="sid" value="<?= $row['sid'] ?>">
                        <div class="mb-3">
                            <label for="name" class="class_name">* 課程名稱</label>
                            <input type="text" class="form-control" id="class_name" name="class_name" required value="<?= htmlentities($row['class_name']) ?>">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="class_time" class="form-label">課程時間</label>
                            <input type="date" class="form-control" id="class_time" name="class_time" value="<?= htmlentities($row['class_time']) ?>">
                            <div class="form-text"></div>
                        </div>

                        <div class="mb-3">
                            <label for="user_id" class="form-label">user_id</label>
                            <input type="text" class="form-control" id="user_id" name="user_id" value="<?= htmlentities($row['user_id']) ?>">
                            <div class="form-text"></div>
                        </div>
                        <button type="submit" class="btn btn-primary">確認修改</button>
                    </form>

                </div>
            </div>
        </div>
    </div>
</div>
<?php include '../parts/scripts.php'; ?>
<script>
    // const creat = document.form1.creat; // DOM element
    // const creat_msg = creat.closest('.mb-3').querySelector('.form-text');

    // const place = document.form1.place;
    // const place_msg = place.closest('.mb-3').querySelector('.form-text');

    function checkForm() {
            let isPass = true; // 有沒有通過檢查

            // place_msg.innerText = '';  // 清空訊息
            // creat_msg.innerText = '';  // 清空訊息

        // TODO: 表單資料送出之前, 要做格式檢查

        // if(place.value.length<2){
        //     isPass = false;
        //     place_msg.innerText = '請填寫正確的地區'
        // }

        // const creat_re = /^09\d{2}-?\d{3}-?\d{3}$/; // new RegExp()
        // if(creat.value){
        //     // 如果不是空字串就檢查格式
        //     if(! creat_re.test(creat.value)){
        //         creat_msg.innerText = '請輸入創建時間';
        //         isPass = false;
        //     }
        // }

        if (isPass) {
            const fd = new FormData(document.form1);

            fetch('activity-edit-api.php', {
                    method: 'POST',
                    body: fd
                }).then(r => r.json())
                .then(obj => {
                    console.log(obj);
                    if (obj.success) {
                        alert('修改成功');
                        location.href = 'activity.php';
                    } else {
                        alert('沒有修改');
                    }

                })
            

        }


    }
</script>
<?php include '../parts/html-foot.php'; ?>