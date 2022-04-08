<?php
include '../parts/connect.php';
$title = '新增活動報名';
$pagename = 'search-addpage';

$sql = "SELECT `sid`,`city` FROM city";
$rows = $pdo->query($sql)->fetchAll();
?>
<?php include '../parts/html-head.php' ?>
<style>
    form .mb-3 .form-text{
        color: red;
    }
    .gogo{
        color: red;
    }

</style>
<div class="container">
    <div class="cardstyle">
        <h5 class="card-title">新增搜尋</h5>
        <form name="form1" method="post" novalidate onsubmit="checkForm(); return false;">
            <div class="mb-3">
                <label for="city" class="form-label">地區</label>
                <select class="form-control" id="city" name="city" required>
                    <option>請選擇地區</option>
                    <?php foreach($rows as $r) : ?>
                    <option value="<?=htmlentities($r['sid']) ?>"><?= htmlentities($r['city']) ?></option>
                    <?php endforeach ?>
                </select>
                <div class="gogo"></div>
            </div>
            <div class="mb-3">
                <label for="keyword" class="form-label">關鍵字</label>
                <input type="text" class="form-control" id="keyword" name="keyword" required>
                <div class="form-text"></div>
            </div>
            <button type="submit" class="newinfo">新增</button>
        </form>
                        
    </div>
</div>
<?php include '../parts/scripts.php'; ?>
<script>
    // const keyword = document.form1.keyword; // DOM element
    
    // const mobile_msg = mobile.closest('.mb-3').querySelector('.form-text');

    // const name = document.form1.name;
  

    const keyword = document.form1.keyword; 
    const keyword_msg = keyword.closest('.mb-3').querySelector('.form-text');
    
    const city = document.form1.city;
    const city_msg = document.querySelector(".gogo");

    function checkForm() {
        let isPass = true; // 有沒有通過檢查

        keyword_msg.innerText = '';  // 清空訊息
        city_msg.innerText = '';  // 清空訊息

        // // TODO: 表單資料送出之前, 要做格式檢查
        if(city.value.length>=5){
            isPass = false;
            city_msg.innerText = '請選擇地區'
        }

        if(keyword.value.length<1 ){
            isPass = false;
            keyword_msg.innerText = '請填寫關鍵字'
        }
        

        // const mobile_re = /^09\d{2}-?\d{3}-?\d{3}$/; // new RegExp()
        // const keyword_re = /^09\d{2}-?\d{3}-?\d{3}$/; // new RegExp()
        const keyword_re = /\W/; // new RegExp()
        if(keyword.value){
            // 如果不是空字串就檢查格式
            if(keyword_re.test(keyword.value)){
                keyword_msg.innerText = '請勿輸入特殊符號';
                isPass = false;
            }
        }

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