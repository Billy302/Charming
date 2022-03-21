<?php
require '../parts/connect.php';
// $tags = isset($_GET['tags']) ? intval($_GET['tags']) : 1;
$title="新增文章";

$tags = $pdo->query("SELECT * FROM `tags`")->fetchAll();


?>
<?php require '../parts/html-head.php' ?>
<style>
.topnavbar {
    display: flex;
    justify-content: flex-end;
}

.pagination-top {
    display: flex;
    justify-content: flex-end;
}
</style>
<div class="container liststyle">

    <div class="row">
        <div class="col">
            <form name="form1" onsubmit="sendData(); return false">
                <div class="mb-3">
                    <label for="title" class="form-label">文章標題</label>
                    <input type="text" class="form-control" id="blog_title" name="blog_title">
                    <div class="form-text titleLabel"></div>
                </div>

                <div class="mb-3">
                    <label for="content" class="form-label">內文</label>
                    <textarea class="form-control" name="blog_content" id="blog_content" rows="20"></textarea>
                    <div class="form-text contentLabel"></div>
                </div>

                <div class="mb-3">

                    <p>請選擇標籤</p>
                    <?php foreach($tags as $t): ?>
                    <div>
                        <input type="checkbox" class="checkbox" name="tags[]" value="<?= $t['tags_id']?>"
                            id="<?= $t['tags_id']?>">
                        <label for="<?= $t['tags_id']?>" class="form-label" id="haha"> <?= $t['tags_desc']?></label>
                    </div>
                    <? endforeach; ?>
                    <!-- <button class="insertNewTag">test</button> -->
                </div>

                <button type="submit" class="newinfo">新增</button>

            </form>
            <form action="articleList.php">
                <button class="newinfo">回到列表</button>
            </form>

        </div>
    </div>
</div>
<?php require '../parts/scripts.php' ?>
<script>
const title = document.querySelector('#blog_title');
const content = document.querySelector('#blog_content');
const titleLabel = document.querySelector('.titleLabel');
const contentLabel = document.querySelector('.contentLabel');
const checkbox = document.querySelector('.checkbox')
// const insertNewTag = document.querySelector(".insertNewTag");
// const input = document.createElement("input");
// const spaceForNewTag = document.querySelector("#haha")

// const modal = new bootstrap.Modal(document.querySelector('#exampleModalLabel'));

// 按下按鈕後會新增一格input讓使用者新增一個新的tag
// insertNewTag.addEventListener("click", function(e) {
//     e.preventDefault();
//     input.type = "text";
//     input.name = "inserttag[]"
//     input.value = input.value;
//     spaceForNewTag.append(input);
// })

// 這邊是做標題跟內文的前端驗證，下面會跳提示說還差幾個字達標最低標準

title.addEventListener('input', function() {
    if (!title.value || title.value.length >= 10) {
        titleLabel.innerText = ''
    };
    if (title.value.length === 0) {
        titleLabel.innerText = `標題字數最少需要10個字`
    };
    if (title.value.length < 10 && title.value.length !== 0) {
        titleLabel.innerText = `還需要${10 - title.value.length}字`
    };
});

title.addEventListener('focus', function() {
    if (!title.value) {
        titleLabel.innerText = '標題字數最少需要10個字'
    }
    // else {
    //     titleLabel.innerText = "標題字數最少需要10個字"
    // }
});

title.addEventListener('blur', function() {
    if (title.value.length < 10)
        titleLabel.innerText = `還需要${10 - title.value.length}字`
    if (title.value.length === 0) titleLabel.innerText = ``
});

content.addEventListener('input', function() {
    if (content.value.length === 350 || content.value.length >= 350) {
        contentLabel.innerText = ''

    };
    if (content.value.length === 0) {
        contentLabel.innerText = '內文最少需要350個字'

    };
    if (content.value.length < 350 && content.value.length !== 350) {
        contentLabel.innerText = `內文還需要${350 - content.value.length}字`

    };
});

content.addEventListener('focus', function() {
    if (!content.value) {
        contentLabel.innerText = '內文最少需要350個字'
    }
    // else {
    //     contentLabel.innerText = '內文最少需要350個字'
    // }
});

content.addEventListener('blur', function() {
    if (content.value.length < 10)
        contentLabel.innerText = `內文還需要${350 - content.value.length}字`
    if (content.value.length === 0) contentLabel.innerText = ``
});

// onclick的ajax

function sendData() {
    title.nextElementSibling.innerHTML = ""
    content.nextElementSibling.innerHTML = ""

    let isPass = true;

    if (title.value.length < 10 || content.value.length < 350) {
        isPass = false;
        alert("請輸入相對應的最低字數")
        // title.nextElementSibling.innerHTML = "標題最少需十個字"
    }

    // if () {
    //     isPass = false;
    //     alert("請輸入正確的內文字數")
    //     // content.nextElementSibling.innerHTML = "文章內容最少需350個字"
    // }

    // if (!checkbox.checked) {
    //     isPass = false;
    //     alert("請選擇tags!")
    // }

    if (isPass) {
        const fd = new FormData(document.form1);

        fetch("insertArticle-api.php", {
            method: 'POST',
            body: fd,
        }).then(res => res.json()).then(obj => {
            if (obj.success && obj.tagsCheck) {
                console.log(obj)
                // document.querySelector('.modal-body').innerHTML = "新增成功";
                alert("新增成功")
                location.href = "articleList.php";
            } else {
                alert(`${obj.error}`)
                // document.querySelector('.modal-body').innerHTML = obj.error || '資料新增發生錯誤';
                // modal.show();
            }
        })
    }
}
</script>
<?php require '../parts/html-foot.php' ?>