<?php
require '../parts/connect.php';

$title = '修改資料';
$pageName = 'search-edit';

$sid = isset($_GET['sid']) ? intval($_GET['sid']) : 0;

$sql = "SELECT * FROM search WHERE sid=$sid";
$row = $pdo->query($sql)->fetch();
if (empty($row)) {
    header('Location: search.php'); // 找不到資炓轉向列表頁
    exit;
}
?>
<?php include '../parts/html-head.php'; ?>

<div class="container">
    <div class="cardstyle">
        <div class="card-body">
            <h5 class="card-title">修改資料</h5>
            <form name="form1" method="post" novalidate onsubmit="checkForm(); return false;">
                <input type="hidden" name="sid" value="<?= $row['sid'] ?>">
                <div class="mb-3">
                    <label for="name" class="keyword">* 關鍵字</label>
                    <input type="text" class="form-control" id="keyword" name="keyword" required value="<?= htmlentities($row['keyword']) ?>">
                    <div class="form-text"></div>
                </div>
                <button type="submit" class="btn btn-primary">確認修改</button>
            </form>

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

                fetch('search-edit-api.php', {
                        method: 'POST',
                        body: fd
                    }).then(r => r.json())
                    .then(obj => {
                        console.log(obj);
                        if (obj.success) {
                            alert('修改成功');
                            location.href = 'search.php';
                        } else {
                            alert('沒有修改');
                        }

                    })


            }


        }
    </script>
    <?php include '../parts/html-foot.php'; ?>