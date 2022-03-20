<style>
    .navbar-light .navbar-nav .nav-link.active {
        background-color: #6969fc;
        color: white;
        border-radius: 5px;
        font-weight: 800;

    }
</style>
<div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <!-- 表單名稱 -->
            <a class="navbar-brand h1" href="">首頁/活動頁面</a>
        </div>
    </nav>
</div>
<div class="container">
    <div class="row">
        <div class="col-2">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <div>
                        <a class="nav-link <?= $pageName == 'location' ? 'active' : '' ?> " href="place.php">位置追蹤</a>
                        <hr>
                        <a class="nav-link <?= $pageName == 'location' ? 'active' : '' ?>" href="activity.php">活動報名</a>
                        <hr>
                        <a class="nav-link <?= $pageName == 'location' ? 'active' : '' ?>" href="search.php">搜尋關鍵字</a>
                    </div>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">

                    </div>
                </div>
            </div>
        </div>
        <div class="col-8">