<?php
include '../parts/connect.php';
$title = '新增活動報名';
$pagename = 'search-addpage';

$sql = "SELECT `sid`,`city` FROM city";
$rows = $pdo->query($sql)->fetchAll();
?>
<?php include '../parts/html-head.php' ?>
<div class="container">
    <div class="cardstyle">
        <h5 class="card-title">新增搜尋</h5>
        <form name="form1" method="post" novalidate onsubmit="checkForm(); return false;">
            <div class="mb-3">
                <label for="city" class="form-label">位置</label>
                <select class="form-control" id="city" name="city" required>
                    <option>請選擇位置</option>
                    <?php foreach($rows as $r) : ?>
                    <option value="<?=htmlentities($r['sid']) ?>"><?= htmlentities($r['city']) ?></option>
                    <?php endforeach ?>
                </select>
            </div>
            <div class="mb-3">
                <label for="keyword" class="form-label">關鍵字</label>
                <input type="text" class="form-control" id="keyword" name="keyword" required>
            </div>
            <button type="submit" class="btn btn-primary">新增</button>
        </form>

    </div>
</div>
<?php include '../parts/scripts.php'; ?>
<script>
    // const mobile = document.form1.mobile; // DOM element
    // const mobile_msg = mobile.closest('.mb-3').querySelector('.form-text');

    // const name = document.form1.name;
    // const name_msg = name.closest('.mb-3').querySelector('.form-text');

    function checkForm() {
        let isPass = true; // 有沒有通過檢查

        // name_msg.innerText = '';  // 清空訊息
        // mobile_msg.innerText = '';  // 清空訊息

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

            fetch('search-addpage-api.php', {
                    method: 'POST',
                    body: fd
                }).then(r => r.json())
                .then(obj => {
                    console.log(obj);
                    if (obj.success) {
                        alert('新增成功');
                        location.href = 'search.php';
                    } else {
                        alert('新增失敗');
                    }

                })
        }
    }
</script>
<?php include '../parts/html-foot.php'; ?>