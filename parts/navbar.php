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
            <a class="navbar-brand h1" href="#">表單名稱</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapsed navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link <?= $pageName == 'home' ? 'active' : '' ?>" aria-current="page" href="home_.php">Home</a>
                    </li>
                    <!-- 此處連結要改 -->
                    <li class="nav-item">
                        <a class="nav-link <?= $pageName == 'location' ? 'active' : '' ?>" href="location.php">列表</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?= $pageName == 'addPage' ? 'active' : '' ?>" href="addPage.php">新增</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>