<?php
require __DIR__ . '/parts/connect_db.php';

$title = 'UpNDel';
$pageName = 'ab-edit';

$sid = isset($_GET['sid']) ? intval($_GET['sid']) : 0;

$sql = "SELECT * FROM address_book WHERE sid=$sid";
$row = $pdo->query($sql)->fetch();
if(empty($row)){
    header('Location: 2.Read.php'); // 找不到資炓轉向列表頁
    exit;
}
?>
<?php include __DIR__ . '/parts/html-head.php'; ?>
<?php include __DIR__ . '/parts/navbar.php'; ?>
<style>
    form .mb-3 .form-text{
        color: red;
    }

</style>
<div class="container">
    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">修改資料</h5>
                    <form name="form1" method="post" novalidate onsubmit="checkForm(); return false;">
                        <input type="hidden" name="sid" value="<?= $row['sid'] ?>">

                        <div class="mb-3">
                            <label for="Nickname" class="form-label">暱稱 Nickname</label>
                            <input type="text" class="form-control" id="Nickname" name="Nickname" required
                            value="<?= htmlentities($row['Nickname']) ?>">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="Project Name" class="form-label">作品名 Project Name</label>
                            <input type="text" class="form-control" id="Project Name" name="Project Name"
                            value="<?= htmlentities($row['Project Name']) ?>">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="Discription" class="form-label">內容介紹 Discription</label>
                            <input type="text" class="form-control" id="Discription" name="Discription"
                                value="<?= htmlentities($row['Discription']) ?>"
                                >
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="Tags" class="form-label">作品標籤 Tags</label>
                            <input type="text" class="form-control" id="Tags" name="Tags"
                            value="<?= $row['Tags'] ?>">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="Link" class="form-label">作品連結 Link</label>
                            <textarea class="form-control" name="Link"
                            id="Link" 
                            cols="30" 
                            rows="3"><?= $row['Link'] ?></textarea>

                            <div class="form-text"></div>
                        </div>



                        <button type="submit" class="btn btn-primary">修改</button>
                    </form>

                </div>
            </div>
        </div>
    </div>





</div>
<?php include __DIR__ . '/parts/scripts.php'; ?>
<script>
    const mobile = document.form1.Discription; // DOM element
    const mobile_msg = mobile.closest('.mb-3').querySelector('.form-text');

    const name = document.form1.Nickname;
    const name_msg = name.closest('.mb-3').querySelector('.form-text');

    function checkForm(){
        let isPass = true; // 有沒有通過檢查

        name_msg.innerText = '';  // 清空訊息
        mobile_msg.innerText = '';  // 清空訊息

        // TODO: 表單資料送出之前, 要做格式檢查

        if(name.value.length<2){
            isPass = false;
            name_msg.innerText = '請填寫正確的姓名'
        }

        // const mobile_re = /^09\d{2}-?\d{3}-?\d{3}$/; // new RegExp()
        // if(mobile.value){
        //     // 如果不是空字串就檢查格式
        //     if(! mobile_re.test(mobile.value)){
        //         mobile_msg.innerText = '請輸入正確的手機號碼';
        //         isPass = false;
        //     }
        // }

        if(isPass){
            const fd = new FormData(document.form1);

            fetch('4.edit-api.php', {
                method: 'POST',
                body: fd
            }).then(r => r.json())
            .then(obj => {
                console.log(obj);
                if(obj.success){
                    alert('修改成功');
                    location.href = '2.Read.php';
                } else {
                    alert('沒有修改');
                }

            })


        }


    }


</script>
<?php include __DIR__ . '/parts/html-foot.php'; ?>