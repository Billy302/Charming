<?php
require "../parts/connect.php";

$title = 'Collection_Update';
$pageName = 'Collection-Update';

$sid = isset($_GET['sid']) ? intval($_GET['sid']) : 0;

$sql = "SELECT * FROM Fake_data WHERE sid=$sid";
$row = $pdo->query($sql)->fetch();
if (empty($row)) {
    header('Location: Collection_Read.php'); 
    exit;
}
?>
<?php include "../parts/html-head.php"; ?>
<style>
    form .mb-3 .form-text {
        color: red;
    }
</style>
<div class="container">
    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">修改作品資料</h5>
                    
                    <form name="form1" method="post" novalidate onsubmit="checkForm(); return false;">
                        <input type="hidden" name="sid" value="<?= $row['sid'] ?>">

                        <div class="mb-3">
                            <label for="Nickname" class="form-label">暱稱 Nickname</label>
                            <input type="text" class="form-control" id="Nickname" name="Nickname" required value="<?= htmlentities($row['Nickname']) ?>">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="ProjectName" class="form-label">作品名 Project Name</label>
                            <input type="text" class="form-control" id="ProjectName" name="ProjectName" value="<?= htmlentities($row['Project Name']) ?>">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="Discription" class="form-label">內容介紹 Discription</label>
                            <input type="text" class="form-control" id="Discription" name="Discription" value="<?= htmlentities($row['Discription']) ?>">
                            <div class="form-text"></div>
                        </div>
                        


                        <div class="form-text"></div>

                        <div>
                            <button type="submit" class="btn btn-primary">修改</button>
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
        console.log(1);
        let isPass = true; 

        name_msg.innerText = ''; 
        mobile_msg.innerText = ''; 


        if (name.value.length < 2) {
            isPass = false;
            name_msg.innerText = '請填寫正確的姓名'
        }

        
        if (isPass) {
            console.log(2);
            const fd = new FormData(document.form1);

            fetch('Collection_Edit-api.php', {
                    method: 'POST',
                    body: fd
                }).then(r => r.json())
                .then(obj => {
                    console.log(obj);
                    if (obj.success) {
                        alert('修改成功');
                        location.href = 'Collection_Read.php';
                    } else {
                        alert('沒有修改');
                    }

                })


        }


    }

    
</script>
<?php include "../parts/html-foot.php"; ?>