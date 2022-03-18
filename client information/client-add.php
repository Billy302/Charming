<?php
$title = '新增資料';
$pageName = 'ab-add';
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
                    <h5 class="card-title">新增資料</h5>
                    <form name="form1" method="post" novalidate onsubmit="checkForm(); return false;">
                        <div class="mb-3">
                            <label for="name" class="form-label">* 中文姓名</label>
                            <input type="text" class="form-control" id="name" name="name" required>
                            <div class="form-text"></div>
                        </div>

                        <div class="mb-3">
                            <label for="email" class="form-label">電子信箱</label>
                            <input type="email" class="form-control" id="email" name="email">
                            <div class="form-text"></div>
                        </div>

                        <div class="mb-3">
                            <label for="mobile" class="form-label">手機號碼</label>
                            <input type="tel" class="form-control" id="mobile" name="mobile"
                                pattern="09\d{2}-?\d{3}-?\d{3}">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="birthday" class="form-label">生日 </label>
                            <input type="date" class="form-control" id="birthday" name="birthday">
                            <div class="form-text"></div>
                        </div>

                        <div class="mb-3">
                            <label for="gender" class="form-label">性別</label>
                            <input type="gender" class="form-control" id="gender" name="gender">
                            <div class="form-text"></div>
                        </div>

                        <div class="mb-3">
                            <label for="edu" class="form-label">最高學歷</label>
                            <input type="edu" class="form-control" id="edu" name="edu">
                            <div class="form-text"></div>
                        </div>


                        <div class="mb-3">
                            <label for="skill" class="form-label">專長</label>
                            <input type="skill" class="form-control" id="skill" name="skill">
                            <div class="form-text"></div>
                        </div>

                        <div class="mb-3">
                            <label for="work" class="form-label">工作項目</label>
                            <input type="work" class="form-control" id="work" name="work">
                            <div class="form-text"></div>
                        </div>

                        <div class="mb-3">
                            <label for="workhours" class="form-label">工作時數</label>
                            <input type="workhours" class="form-control" id="workhours" name="workhours">
                            <div class="form-text"></div>
                        </div>

                        <div class="mb-3">
                            <label for="bankaccount" class="form-label">銀行帳號</label>
                            <input type="bankaccount" class="form-control" id="bankaccount" name="bankaccount">
                            <div class="form-text"></div>
                        </div>


                        <div class="mb-3">
                            <label for="address" class="form-label">地址</label>
                            <textarea class="form-control" name="address"
                            id="address" 
                            cols="30" 
                            rows="3"></textarea>

                            <div class="form-text"></div>
                        </div>

                        <button type="submit" class="btn btn-primary">新增資料</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include __DIR__ . '/parts/scripts.php'; ?>
<script>
    const mobile = document.form1.mobile; // DOM element
    const mobile_msg = mobile.closest('.mb-3').querySelector('.form-text');

    const name = document.form1.name;
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

        const mobile_re = /^09\d{2}-?\d{3}-?\d{3}$/; // new RegExp()
        if(mobile.value){
            // 如果不是空字串就檢查格式
            if(! mobile_re.test(mobile.value)){
                mobile_msg.innerText = '請輸入正確的手機號碼';
                isPass = false;
            }
        }

        if(isPass){
            const fd = new FormData(document.form1);

            fetch('client-add-api.php', {
                method: 'POST',
                body: fd
            }).then(r => r.json())
            .then(obj => {
                console.log(obj);
                if(obj.success){
                    alert('新增成功');
                    // location.href = 'ab-list.php';
                } else {
                    alert('新增失敗');
                }
            })
        }
    }

</script>
<?php include '/parts/html-foot.php'; ?>