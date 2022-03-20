<!DOCTYPE html>
<html lang="zh">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../Plugins/bootstrap-5.1.3/css/bootstrap.css">
    <link rel="stylesheet" href="../Plugins/fontawsome-6.0.0/css/all.css">
    <link rel="stylesheet" href="../parts/m-style.css">
    <title><?= $title ?? '預設的抬頭' ?></title>
</head>

<body>
    <div>
        <nav class="navbar">
            <div class="d-flex">
                <!-- 表單名稱 -->
                <img src="../parts/charming_logo.png" alt="" style="height: 40px;">
                <a class="m-logo text-nowrap" href="../parts/homepage.php">
                   <h5> 柴米Charming</h5>
                </a>
            </div>
        </nav>
    </div>
    <div class="d-flex">
        <aside class="asidestyle sticky-top">
            <ul>
                <h5>會員</h5>
                <li>
                    <a href="#">加入會員</a>

                </li>
                <li>
                    <a href="#">會員資料修改</a>
                </li>
            </ul>
            <ul>
                <h5>首頁/活動頁</h5>
                <li>
                    <a href="../mainpage/place.php" class="astyle">位置追蹤</a>
                </li>
                <li>
                    <a href="../mainpage/search.php">熱門搜尋</a>
                </li>
                <li>
                    <a href="../mainpage/activity.php">活動報名</a>
                </li>
            </ul>
            <ul>
                <h5>工作</h5>
                <li>
                    <a href="#" class=" ">新增服務</a>
                </li>
                <li>
                    <a href="#" class=" ">修改刪除服務</a>
                </li>
                <li>
                    <a href="#" class=" ">新增案件(x)</a>
                </li>
                <li>
                    <a href="#" class=" ">修改刪除案件(x)</a>
                </li>
                <li>
                    <a href="#" class=" ">管理留言(x)</a>
                </li>
                <li>
                    <a href="#" class=" ">管理追蹤(x)</a>
                </li>
                <li>
                    <a href="#" class=" ">管理Like(x)</a>
                </li>
            </ul>
            <ul>
                <h5>官方部落格</h5>
                <li>
                    <a href="#">文章總覽</a>
                </li>
                <li>
                    <a href="#">新增文章</a>
                </li>
                <li>
                    <a href="#">留言管理</a>
                </li>
                <li>
                    <a href="#">標籤管理</a>
                </li>
                <li>
                    <a href="#">關鍵字搜尋</a>
                </li>
            </ul>
            <ul>
                <h5>作品集</h5>
                <li>
                    <a href="#">作品管理</a>
                </li>
                <li>
                    <a href="#">留言管理</a>
                </li>
                <li>
                    <a href="#">標籤管理</a>
                </li>
                <li>
                    <a href="#">按讚次數管理</a>
                </li>
                <li>
                    <a href="#">收藏管理</a>
                </li>
                <li>
                    <a href="#">觀看次數管理</a>
                </li>
            </ul>
            <ul>
                <h5>討論區</h5>
                <li>
                    <a href="#">看板管理</a>
                </li>
                <li>
                    <a href="#">文章管理</a>
                </li>
                <li>
                    <a href="#">留言管理</a>
                </li>
                <li>
                    <a href="#">標籤管理</a>
                </li>
            </ul>
        </aside>