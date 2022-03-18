<?php require "../parts/connect.php"; ?>
<?php
$title = '修改服務內容';
?>
<?php include "../parts/html-head.php"; ?>
<?php include "../parts/navbar.php"; ?>
<?php

$sid = isset($_GET['ID']) ? intval($_GET['ID']) : 0;

$sql = "select work_service.* ,client_information.account as account from work_service join client_information on client_information.ID = work_service.user_ID where work_service.ID =$sid ";
$row = $pdo->query($sql)->fetch();
if (empty($row)) {
    header('Location: Service_list.php'); // 找不到資炓轉向列表頁
    exit;
}

$sql2 = "SELECT ID,account FROM client_information";
$rows2 = $pdo->query($sql2)->fetchAll();

$start_hour = intval(substr($row['service_hours'], 0, 2));
$end_hour = intval(substr($row['service_hours'], 8, 2));

$items_spilt = explode(",",htmlentities($row['service_ltems']));

?>





<div class="container">
    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">修改服務項目</h5>
                    <form name="form1" method="post" novalidate onsubmit="checkForm(); return false;">
                        <div class="mb-3">
                            <input id="service_ID" type="hidden" name="ID" value="<?= $row['ID'] ?>"></input>
                            <label for="name" class="form-label">使用者名稱(當前會員功能未完善，只能先手動選)</label>
                            <div>
                                <select id="user_ID" name="user_ID">
                                    <?php foreach ($rows2 as $r2) : ?>
                                        <?php if (htmlentities($r2['ID']) == htmlentities($row['user_ID'])) { ?>
                                            <option value="<?= htmlentities($r2['ID']) ?>" selected><?= htmlentities($r2['account']) ?></option>
                                        <?php } else { ?>
                                            <option value="<?= htmlentities($r2['ID']) ?>"><?= htmlentities($r2['account']) ?></option>
                                    <?php }
                                    endforeach ?>
                                </select>
                            </div>
                            <div class="form-text"></div>

                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label">*標題</label>
                            <input type="text" class="form-control" id="title" name="title" value="<?= htmlentities($row['title']) ?>" required>
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="items" class="form-label">*服務項目</label>
                            <p id="total_items" hidden="hidden" data-value="<?= htmlentities($row['service_ltems']) ?>"></p>
                            <input type="text" class="form-control" id="item1" name="item[]" value="<?= $items_spilt[0] ?>" required>
                            <div id="items_more"></div>
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

                                    <?php for ($starttime = 1; $starttime < 24; $starttime++) : ?>
                                        <?php if ($starttime == $start_hour + 1) {  ?>
                                            <option value="<?= $starttime ?>" selected><?= $starttime ?>點</option>
                                        <?php } else { ?>
                                            <option value="<?= $starttime ?>"><?= $starttime ?>點</option>
                                    <?php }
                                    endfor; ?>
                                </select>
                                <label for="hour2" class="form-label">結束時間</label>
                                <select id="hour2" name="hour2">
                                    <option value="<?= $end_hour ?>"><?= $end_hour ?>點</option>
                                </select>
                            </div>

                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="fee" class="form-label">*費用(台幣)</label>
                            <input type="text" class="form-control" id="fee" name="fee" value="<?= htmlentities($row['service_fee']) ?>" pattern="/^[1-9][0-9]*$/">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="production" class="form-label">*製作時間</label>
                            <p id="spend_time" hidden="hidden" data-value="<?= $row['production_time'] ?>"></p>
                            <div>
                                <label>選擇時間單位: </label>
                                <label><input type="checkbox" name="selectmonth" id="selectmonth">月</label>
                                <label><input type="checkbox" name="selectday" id="selectday">天</label>
                                <label><input type="checkbox" name="selecthour" id="selecthour">小時</label>
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
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="modifications" class="form-label">*修改次數(預設為3次)</label>
                            <input type="text" class="form-control" name="modifications" id="modifications" value="<?= htmlentities($row['modifications']) ?>">
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
    // 結束時間
    let hour2 = document.getElementById("hour2").value;
    let hour2_control = document.getElementById("hour2");
    for (let end_hour = Number(hour2) + 1; end_hour < 24; end_hour++) {
        hour2_control.innerHTML += "<option value = \"" + end_hour + "\" > " + end_hour + "點 </option>";
    }
    // 當起始時間修改後，結束時間連動
    document.getElementById("hour").onchange = function() {
        let hour1 = document.getElementById("hour").value;
        let hour2 = document.getElementById("hour2").value;
        let hour2_control = document.getElementById("hour2");
        hour2_control.innerHTML = "<option>請選擇</option>";
        for (hour2 = Number(hour1) + 1; hour2 < 24; hour2++) {
            hour2_control.innerHTML += "<option value = \"" + hour2 + "\" > " + hour2 + "點 </option>";
        }
    };

    // 製作時間
    // 取得每種時間單位的數值
    let spend_time_value = document.querySelector("#spend_time").dataset.value;
    let spend_time = spend_time_value.split(',')
    // 取得每種時間單位的option數量
    let spend_month = document.getElementById("pro_month").getElementsByTagName('option');
    let spend_day = document.getElementById("pro_day").getElementsByTagName('option');
    let spend_hour = document.getElementById("pro_hour").getElementsByTagName('option');
    // 協助判斷是否有被選取到
    let month_status = 0;
    let day_status = 0;
    let hour_status = 0;

    // 取得時間單位的選取狀態
    if (spend_time[0] != "0") {
        $("#selectmonth").attr("checked", true);
        spend_month[spend_time[0]].selected = true;
        month_status = 1;
    } else {
        $("#pro_month").hide();
    };

    if (spend_time[1] != "0") {
        $("#selectday").attr("checked", true);
        spend_day[spend_time[1]].selected = true;
        day_status = 1;
    } else {
        $("#pro_day").hide();
    };

    if (spend_time[2] != "0") {
        $("#selecthour").attr("checked", true);
        spend_hour[spend_time[2]].selected = true;
        hour_status = 1;
    } else {
        $("#pro_hour").hide();
    };

    // 當時間單位被選取時觸發
    $("#selectmonth").change(function() {
        if (this.checked) {
            $("#pro_month").show();
            month_status = 1;
        } else {
            $("#pro_month").hide();
            month_status = 0;
        }
    })

    $("#selectday").change(function() {
        if (this.checked) {
            $("#pro_day").show();
            day_status = 1;
        } else {
            $("#pro_day").hide();
            day_status = 0;
        }
    })

    $("#selecthour").change(function() {
        if (this.checked) {
            $("#pro_hour").show();
            hour_status = 1;

        } else {
            $("#pro_hour").hide();
            hour_status = 0;
        }
    });
    // 服務項目- 取得資料
    let total_items_value = document.querySelector("#total_items").dataset.value;
    let total_items = total_items_value.split(',')
    console.log(total_items);
    for (let itmes_num = 1; itmes_num < total_items.length; itmes_num++) {
        if (total_items[itmes_num] != "") {
            document.getElementById("items_more").innerHTML += '<br> <input type="text" class="form-control" id="item+' + (itmes_num + 1) + '" name="item' + (itmes_num + 1) + '" value="' + total_items[itmes_num] + '" required>';
        }
    }
    // 服務項目- 新增欄位
    let items_id = 2;
    document.getElementById("items_add").onclick = function() {
        let items = document.getElementById("items_more");
        if (items_id < 6) {
            items.innerHTML += '<br> <input type="text" class="form-control" id="item' + items_id + '" name="item[]" required>'
            items_id = items_id + 1;
        }
    }
    // 服務項目- 取消欄位
    document.getElementById("items_cancel").onclick = function() {
        let items = document.getElementById("items_more")
        items.innerHTML = "";
    }

    const User_get = document.form1.user_ID;
    const User_msg = User_get.closest('.mb-3').querySelector('.form-text');

    const Title_get = document.form1.title;
    const Title_msg = Title_get.closest('.mb-3').querySelector('.form-text');

    const Item_get = document.getElementById("item1");
    const Item_msg = Item_get.closest('.mb-3').querySelector('.form-text');

    const Item_num = document.getElementById("items_more");
    let Item_total = Item_num.getElementsByTagName('input');

    const Fee_get = document.getElementById("fee");
    const Fee_msg = Fee_get.closest('.mb-3').querySelector('.form-text');

    const month_get = document.getElementById("pro_month");
    const day_get = document.getElementById("pro_day");
    const hour_get = document.getElementById("pro_hour");
    const production_msg = document.getElementById("selectmonth").closest('.mb-3').querySelector('.form-text');

    let service_ID_value = document.querySelector("#service_ID").dataset.value;


    // 送出表單
    function checkForm() {
        let isPass = true;
        User_msg.innerHTML = '';
        Title_msg.innerHTML = '';
        Item_msg.innerHTML = '';
        Fee_msg.innerHTML = '';
        production_msg.innerHTML = '';

        if (User_get.value == "請選擇") {
            isPass = false;
            User_msg.innerHTML = '<b>請選擇使用者名稱</b>';
        }

        if (Title_get.value == "") {
            isPass = false;
            Title_msg.innerHTML = "<b>請輸入標題</b>";
        }

        if (Item_get.value == "") {
            isPass = false;
            Item_msg.innerHTML = "<b>請輸入服務項目</b>";
        }

        for (let i = 0; i < Item_total.length; i++) {
            if (Item_total[i].value == "") {
                isPass = false;
                Item_msg.innerHTML = "<b>請輸入服務項目</b>";
            }
        }

        let Fee_format = /^[1-9][0-9]*$/;
        if (Fee_get.value == "") {
            isPass = false;
            Fee_msg.innerHTML = '<b>請輸入費用</b>';
        } else {
            if (!Fee_format.test(Fee_get.value)) {
                isPass = false;
                Fee_msg.innerHTML = '<b>請輸入數字</b>';
            }
        }

        if (month_status == 0 && day_status == 0 && hour_status == 0) {
            isPass = false;
            production_msg.innerHTML = "<b>請選擇時間單位</b>";
        } else {
            if (month_status == 1 && month_get.value == "0") {
                isPass = false;
                production_msg.innerHTML = "<b>請選擇時間</b>";
            } else if (day_status == 1 && day_get.value == "0") {
                isPass = false;
                production_msg.innerHTML = "<b>請選擇時間單位</b>";
            } else if (hour_status == 1 && hour_get.value == "0") {
                isPass = false;
                production_msg.innerHTML = "<b>請選擇時間單位</b>";
            }
        }

        if (isPass) {
            const fd = new FormData(document.form1);
            fetch('Service-edit-api.php', {
                    method: 'POST',
                    body: fd
                }).then(r => r.json())
                .then(obj => {
                    console.log(obj);
                    if (obj.success) {
                        alert('修改成功');
                        location.href = 'Service_list.php';
                    } else {
                        alert('修改成功');
                    }
                })
        }
    }
</script>

<?php include "../parts/html-foot.php"; ?>