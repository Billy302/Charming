<?php require "../parts/connect.php"; ?>
<?php
$title = '新增服務項目';
?>
<?php include "../parts/html-head.php"; ?>
<?php include "../parts/navbar.php"; ?>

<div class="container">
    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">新增服務項目</h5>
                    <form name="form1" method="post" novalidate onsubmit="checkForm(); return false;">
                        <div class="mb-3">
                            <label for="name" class="form-label">使用者名稱</label>
                            <input type="text" class="form-control" name="name" id="name">
                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label">*標題</label>
                            <input type="text" class="form-control" id="title" name="title" required>
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="items" class="form-label">*服務項目</label>
                            <input type="text" class="form-control" id="item1" name="item" required>
                            <div id="items_more">

                            </div>
                            <br>
                            <button class="btn btn-outline-secondary" type="button" id="items_add">更多</button>
                            <button class="btn btn-outline-secondary" type="button" id="items_cancel">取消</button>
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="hour" class="form-label">服務時間(預設9點至18點)</label>
                            <div>
                                <label for="hour" class="form-label">起始時間</label>
                                <select id="hour" name="hour">
                                    <option value="9">請選擇</option>
                                    <?php for ($starttime = 1; $starttime < 24; $starttime++) : ?>
                                        <option value="<?= $starttime ?>"><?= $starttime ?>點</option>
                                    <?php endfor; ?>
                                </select>
                                <label for="hour2" class="form-label">結束時間</label>
                                <select id="hour2" name="hour2">
                                    <option value="18">請選擇</option>
                                </select>
                            </div>

                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="fee" class="form-label">*費用</label>
                            <input type="text" class="form-control" id="fee" name="fee">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="production" class="form-label">*製作時間</label>
                            <label>選擇時間單位:</label>
                            <div>
                                <label><input type="checkbox" name="selectmonth" value="selectmonth">月</label>
                                <label><input type="checkbox" name="selectday" value="selectday">天</label>
                                <label><input type="checkbox" name="selecthour" value="selecthour">小時</label>
                            </div>

                            <select id="pro_month" name="pro_month">
                                <option value="0">請選擇</option>
                                <?php for ($selectmonth = 1; $selectmonth <= 12; $selectmonth++) : ?>
                                    <option value="<?= $selectmonth ?>"><?= $selectmonth ?>個月</option>
                                <?php endfor; ?>
                            </select>
                            <select id="pro_day" name="pro_day">
                                <option value="0">請選擇</option>
                                <?php for ($selectday = 1; $selectday <= 31; $selectday++) : ?>
                                    <option value="<?= $selectday ?>"><?= $selectday ?>天</option>
                                <?php endfor; ?>
                            </select>
                            <select id="pro_hour" name="pro_hour">
                                <option value="0">請選擇</option>
                                <?php for ($selecthour = 1; $selecthour < 24; $selecthour++) : ?>
                                    <option value="<?= $selecthour ?>"><?= $selecthour ?>小時</option>
                                <?php endfor; ?>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="modifications" class="form-label">*修改次數(預設為3次)</label>
                            <input type="text" class="form-control" name="modifications" id="modifications" value="3">
                        </div>
                        <button type="submit" class="btn btn-primary">確認</button>
                    </form>

                </div>
            </div>
        </div>
    </div>





</div>



<?php include "../parts/scripts.php"; ?>
<script>
    // 工作時間
    document.getElementById("hour").onchange = function() {
        let hour1 = document.getElementById("hour").value;
        let hour2 = document.getElementById("hour2").value;
        let hour2_control = document.getElementById("hour2");
        hour2_control.innerHTML = "<option>請選擇</option>";
        for (hour2 = Number(hour1) + 1; hour2 < 24; hour2++) {
            hour2_control.innerHTML += "<option value = \"" + hour2 + "\" > " + hour2 + "點 </option>";
        }
    }

    document.getElementById("items_cancel").onclick = function() {
        let items = document.getElementById("items_more")
        items.innerHTML = "";
    }
    document.getElementById("items_add").onclick = function() {
        let items = document.getElementById("items_more")
        let items_id = 1;
        if (items_id < 6) {
            items.innerHTML += '<br><input type="text" class="form-control" id="item' + items_id + '" name="item' + items_id + '" required>'
            items_id += 1;
        }
    }

    function checkForm() {
        const fd = new FormData(document.form1);
        fetch('Service-add-api.php', {
                method: 'POST',
                body: fd
            }).then(r => r.json())
            .then(obj => {
                console.log(obj);
                if (obj.success) {
                    alert('新增成功');
                    // location.href = 'ab-list.php';
                } else {
                    alert('新增失敗');
                }

            })
    }
</script>
<!-- 
<script>
    const mobile = document.form1.mobile; // DOM element
    const mobile_msg = mobile.closest('.mb-3').querySelector('.form-text');

    const name = document.form1.name;
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

        const mobile_re = /^09\d{2}-?\d{3}-?\d{3}$/; // new RegExp()
        if (mobile.value) {
            // 如果不是空字串就檢查格式
            if (!mobile_re.test(mobile.value)) {
                mobile_msg.innerText = '請輸入正確的手機號碼';
                isPass = false;
            }
        }

        if (isPass) {
            const fd = new FormData(document.form1);

            // 要問要問
            fetch('ab-add-api.php', {
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
</script> -->
<?php include "../parts/html-foot.php"; ?>