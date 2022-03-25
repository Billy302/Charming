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
            <!-- 會員部分 -->
            <ul>
                <h5>會員</h5>

                <a href="../client information/client-add.php">
                    <li class="astyle <?= $pageName == ' client-add' ? 'active' : '' ?>">
                        加入會員
                    </li>
                </a>
                <a href="../client information/client-edit.php">
                    <li class="astyle <?= $pageName == ' client-edit' ? 'active' : '' ?>">
                        會員資料修改
                    </li>
                </a>
            </ul>
            <ul>
                <!-- 首頁部分 -->
                <h5>首頁/活動頁</h5>
                <a href="../mainpage/activity.php"> 
                    <li class="astyle <?= $pageName == 'activity' ? 'active' : '' ?>">
                        活動項目
                    </li>
                </a>
                <a href="../mainpage/activity_apply.php">
                    <li class="astyle <?= $pageName == 'activity_apply' ? 'active' : '' ?>">
                        活動報名
                    </li>
                </a>
                <a href="../mainpage/place.php">
                    <li class="astyle <?= $pageName == 'place' ? 'active' : '' ?>">
                        縣市資料
                    </li>
                </a>
                <a href="../mainpage/search.php">
                    <li class="astyle <?= $pageName == 'search' ? 'active' : '' ?>">
                        熱門搜尋
                    </li>
                </a>
            </ul>
            <ul>
                <!-- 工作部分 -->
                <h5>工作</h5>
                <a href="../work/Service_add.php">
                    <li class="astyle <?= $pageName == 'Service_add' ? 'active' : '' ?>">
                        新增服務項目
                    </li>
                </a>
                <a href="../work/Service_list.php">
                    <li class="astyle <?= $pageName == 'Service_list' ? 'active' : '' ?>">
                        管理服務
                    </li>
                </a>
            </ul>
            <ul>
                <!-- 部落格部分 -->
                <h5>官方部落格</h5>
                <a href="../blog/articleList.php">
                    <li class="astyle <?= $pageName == 'blog' ? 'active' : '' ?>">
                        文章列表
                    </li>
                </a>
            </ul>
            <ul>
                <!--作品集-->
                <h5>作品集</h5>
                    <a href="../Collection/Collection_Create.php">
                        <li class="astyle <?= $pageName == 'Collection_Create.php' ? 'active' : '' ?>">
                            新增作品
                        </li>
                    </a>
                    <a href="../Collection/Collection_Read.php">
                        <li class="astyle <?= $pageName == 'Collection_Read.php' ? 'active' : '' ?>">
                            作品列表
                        </li>
                    </a>
            </ul>
            <ul>
                <!-- 討論區 -->
                <h5>討論區</h5>
                <a href="../dboard/db-list.php">
                    <li class="astyle <?= $pageName == 'db-list' ? 'active' : '' ?>">
                        看板管理
                    </li>
                </a>
                <a href="../dboard/ac-list.php">
                    <li class="astyle <?= $pageName == 'ac-list' ? 'active' : '' ?>">
                        文章管理
                    </li>
                </a>
                <a href="../dboard/cm-list.php">
                    <li class="astyle <?= $pageName == 'cm-list' ? 'active' : '' ?>">
                        留言管理
                    </li>
                </a>
                <a href="../dboard/tag-list.php">
                    <li class="astyle <?= $pageName == 'tag-list' ? 'active' : '' ?>">
                        標籤管理
                    </li>
                </a>
            </ul>
        </aside>