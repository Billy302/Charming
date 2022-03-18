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
                <a class="m-logo text-nowrap" href="../parts/homepage.php">
                    <img src="../parts/charming_logo.png" alt="" style="height: 40px;">
                    <h5>柴米Charming</h5>
                </a>

            </div>
        </nav>
    </div>
    <div class="d-flex">
        <aside class="asidestyle sticky-top">
            <ul class="s-active">
                <!-- 會員部分 -->
                <h5>會員</h5>
                
                <a href="#">
                    <!-- $pageName的部分要打自己取的pagename -->
                    <li class="astyle <?= $pageName == '' ? 'active' : '' ?>">
                        加入會員
                    </li>
                </a>
                <a href="#">
                    <li class="astyle <?= $pageName == '' ? 'active' : '' ?>">
                        會員資料修改
                    </li>
                </a>
            </ul>
            <ul>
                <!-- 首頁部分 -->
                <h5>首頁/活動頁</h5>
                <a href="place.php">
                    <li class="astyle <?= $pageName == 'place' ? 'active' : '' ?>">
                        縣市資料
                    </li>
                </a>
                <a href="search.php">
                    <li class="astyle <?= $pageName == 'search' ? 'active' : '' ?>">
                    熱門搜尋
                    </li>
                </a>
                <li class="astyle <?= $pageName == 'activity' ? 'active' : '' ?>">
                    <a href="activity.php">活動報名</a>
                </li>
            </ul>
            <ul>
                <!-- 工作部分 -->
                <h5>工作</h5>
                <a href="Service_add.php">
                    <li class="astyle <?= $pageName == '' ? 'active' : '' ?>">
                    新增服務
                    </li>
                </a>
                <a href="#">
                    <li class="astyle <?= $pageName == '' ? 'active' : '' ?>">
                        會員資料修改
                    </li>
                </a>
                <a href="#">
                    <li class="astyle <?= $pageName == '' ? 'active' : '' ?>">
                        會員資料修改
                    </li>
                </a>
                <a href="#">
                    <li class="astyle <?= $pageName == '' ? 'active' : '' ?>">
                        會員資料修改
                    </li>
                </a>
                <a href="#">
                    <li class="astyle <?= $pageName == '' ? 'active' : '' ?>">
                        會員資料修改
                    </li>
                </a>
                <a href="#">
                    <li class="astyle <?= $pageName == '' ? 'active' : '' ?>">
                        會員資料修改
                    </li>
                </a>
                <a href="#">
                    <li class="astyle <?= $pageName == '' ? 'active' : '' ?>">
                        會員資料修改
                    </li>
                </a>
            </ul>
            <ul>
                <!-- 部落格部分 -->
                <h5>官方部落格</h5>
                <a href="#">
                    <li class="astyle <?= $pageName == '' ? 'active' : '' ?>">
                        會員資料修改
                    </li>
                </a>
                <a href="#">
                    <li class="astyle <?= $pageName == '' ? 'active' : '' ?>">
                        會員資料修改
                    </li>
                </a>
                <a href="#">
                    <li class="astyle <?= $pageName == '' ? 'active' : '' ?>">
                        會員資料修改
                    </li>
                </a>
                <a href="#">
                    <li class="astyle <?= $pageName == '' ? 'active' : '' ?>">
                        會員資料修改
                    </li>
                </a>
                <a href="#">
                    <li class="astyle <?= $pageName == '' ? 'active' : '' ?>">
                        會員資料修改
                    </li>
                </a>
            </ul>
            <ul>
                <!-- 作品集部分 -->
                <h5>作品集</h5>
                <a href="#">
                    <li class="astyle <?= $pageName == '' ? 'active' : '' ?>">
                        會員資料修改
                    </li>
                </a>
                <a href="#">
                    <li class="astyle <?= $pageName == '' ? 'active' : '' ?>">
                        會員資料修改
                    </li>
                </a>
                <a href="#">
                    <li class="astyle <?= $pageName == '' ? 'active' : '' ?>">
                        會員資料修改
                    </li>
                </a>
                <a href="#">
                    <li class="astyle <?= $pageName == '' ? 'active' : '' ?>">
                        會員資料修改
                    </li>
                </a>
                <a href="#">
                    <li class="astyle <?= $pageName == '' ? 'active' : '' ?>">
                        會員資料修改
                    </li>
                </a>
                <a href="#">
                    <li class="astyle <?= $pageName == '' ? 'active' : '' ?>">
                        會員資料修改
                    </li>
                </a>
            </ul>
            <ul>
                <!-- 討論區 -->
                <h5>討論區</h5>
                <a href="#">
                    <li class="astyle <?= $pageName == '' ? 'active' : '' ?>">
                        會員資料修改
                    </li>
                </a>
                <a href="#">
                    <li class="astyle <?= $pageName == '' ? 'active' : '' ?>">
                        會員資料修改
                    </li>
                </a>
                <a href="#">
                    <li class="astyle <?= $pageName == '' ? 'active' : '' ?>">
                        會員資料修改
                    </li>
                </a>
                <a href="#">
                    <li class="astyle <?= $pageName == '' ? 'active' : '' ?>">
                        會員資料修改
                    </li>
                </a>
            </ul>
        </aside>