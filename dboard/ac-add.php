<?php
require '../parts/connect.php';
$title = '新增文章';
$pageName = 'ac-add';
?>
<?php include '../parts/html-head.php'; ?>
<style>
    form .mb-3 .form-text {
        color: red;
    }
</style>

<?php
$sql = "SELECT id,board_name FROM ds_board";
$rows = $pdo->query($sql)->fetchALL();
?>

<div class="container liststyle">
    <div class="row">
        <div class="col-lg-6 ">
            <div class="card tablestyle">
                <div class="card-body">
                    <h5 class="card-title">新增文章</h5>
                    <form name="form1" method="post" novalidate onsubmit="checkForm(); return false;">
                        <div class="mb-3">
                            <label for="user_id" class="form-label">發文者</label>
                            <input type="text" class="form-control" id="user_id" name="user_id" required>
                            <div class="form-text"></div>
                        </div>
                        <select name="board_id" id="board_id">
                            <option>選擇看板</option>s
                            <?php foreach ($rows as $r) : ?>
                                <option value="<?= htmlentities($r['id']) ?>"><?= htmlentities($r['board_name']) ?></option>
                            <?php endforeach ?>
                        </select>

                        <div class="mb-3">
                            <label for="title" class="form-label">標題</label>
                            <input type="title" class="form-control" id="title" name="title">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="content" class="form-label">內文</label>
                            <textarea class="form-control" name="content" id="content" cols="30" rows="3"></textarea>
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="tag_id" class="form-label">標籤</label>
                            <input type="tag_id" class="form-control" id="tag_id" name="tag_id">
                            <div class="form-text"></div>
                        </div>

                        <button type="submit" class="newinfo">新增</button>
                    </form>

                </div>
            </div>
        </div>
    </div>



</div>
<?php include '../parts/scripts.php'; ?>
<script>
    function checkForm() {
        // TODO: 表單資料送出之前, 要做格式檢查
        let isPass = true; // 有沒有通過檢查


        if (isPass) {
            const fd = new FormData(document.form1);

            fetch('ac-add-api.php', {
                    method: 'POST',
                    body: fd
                }).then(r => r.json())
                .then(obj => {
                    console.log(obj);
                    if (obj.success) {
                        alert('新增成功');
                        location.href = 'ac-list.php';
                    } else {
                        alert('新增失敗');
                    }

                })


        }


    }
</script>
<?php include '../parts/html-foot.php'; ?>