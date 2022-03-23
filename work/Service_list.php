<?php require "../parts/connect.php"; ?>
<?php
$title = '服務項目總覽';
$pageName = 'Service_list';
$perPage = 10; // 每頁有幾筆
$page = isset($_GET['page']) ? intval($_GET['page']) : 1; //用戶要看的頁碼
$search = isset($_GET['search']) ? "service_ltems LIKE '%" . $_GET['search'] . "%' " : 1;
$select = isset($_GET['select']) ? $_GET['select'] : 'ID';
$sort = isset($_GET['sort']) ? $_GET['sort'] : 'ASC';


$t_sql = "SELECT count(1) FROM `work_service` ";
if ($page < 1) {
    header("Location: Service_list.php?page=1&select=$select&sort=$sort");
    exit;
}

$totalRows = $pdo->query($t_sql)->fetch(PDO::FETCH_NUM)[0];
$rows = [];
$totalPages = 0;


if ($totalRows) {
    // 總頁數
    $totalPages = ceil($totalRows / $perPage);
    if ($page > $totalPages) {
        header("Location: ab-list.php?page=$totalpages&select=$select&sort=$sort");
        exit;
    }
    $sql = sprintf("select ID, title, service_ltems, service_hours, service_fee, production_time, modifications, user_ID, create_at FROM work_service where %s order by %s %s limit %s ,%s", $search, $select, $sort, ($page - 1) * $perPage, $perPage);
    // $sql = sprintf("select ID, title, service_ltems, service_hours, service_fee, production_time, modifications, user_ID, create_at FROM work_service order by ID  limit %s ,%s", ($page - 1) * $perPage, $perPage);  
    // 拿到分頁資料
    $rows = $pdo->query($sql)->fetchAll();
}
?>
<style>
    .disabled {
        pointer-events: none;
    }

    th,
    td {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>
<?php include "../parts/html-head.php"; ?>

<div class="container liststyle">
    <div class="row">
        <div class="col">
            <nav class="navstyle" aria-label="Page navigation example">
                <ul class="d-flex pagination">
                    <li class="page-item <?= $page == 1 ? 'disabled' : '' ?> ">
                        <a class="pagestyle" href="?page=<?= $page - 1 ?>&select=<?= $select ?>&sort=<?= $sort ?>">
                            <i class="fas fa-arrow-circle-left text-align-center "></i>
                        </a>
                    </li>  
                    <?php for ($i = $page - 5; $i <= $page + 5; $i++) :
                        if ($i >= 1 and $i <= $totalPages) : ?>
                            <li class="page-item <?= $page == $i ? 'active' : '' ?>">
                                <a class="pagestyle" href="?page=<?= $i ?>&select=<?= $select ?>&sort=<?= $sort ?>"><?= $i ?></a>
                            </li>
                    <?php endif;
                    endfor; ?>
                    <li class="page-item <?= $page == $totalPages ? 'disabled' : '' ?>">
                        <a class="pagestyle" href="?page=<?= $page + 1 ?>&select=<?= $select ?>&sort=<?= $sort ?>">
                            <i class="fas fa-arrow-circle-right"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    <form name="searchbar" method="get" action="Service_list.php">
        <div class="input-group">
            <div class="form-outline">
                <input id="search-focus" type="teax" class="form-control" placeholder="服務項目，關鍵字搜尋" name="search" />
            </div>
            <button type="submit" class="newinfo">
                <i class="fas fa-search"></i>
            </button>
        </div>
    </form>
    <div class="row">
        <div class="col">
            <table class="table table-striped tablestyle">
                <thead>
                    <tr>
                        <th scope="col">刪除</th>
                        <th scope="col">
                            服務ID
                            <?php $select = "ID";
                            $sort = "ASC" ?>
                            <a id="sort_ID_ASC" href="?page=<?= $page ?>&select=<?= $select ?>&sort=<?= $sort ?>"><i class="fas fa-arrow-alt-circle-down"></i></a>
                            <?php $select = "ID";
                            $sort = "DESC" ?>
                            <a id="sort_ID_DESC" href="?page=<?= $page ?>&select=<?= $select ?>&sort=<?= $sort ?>"><i class="fas fa-arrow-alt-circle-up"></i></a>
                        </th>
                        <th scope="col">
                            使用者ID
                            <?php $select = "user_ID";
                            $sort = "ASC" ?>
                            <a id="sort_user_ID_ASC" href="?page=<?= $page ?>&select=<?= $select ?>&sort=<?= $sort ?>"><i class="fas fa-arrow-alt-circle-down"></i></a>
                            <?php $select = "user_ID";
                            $sort = "DESC" ?>
                            <a id="sort_user_ID_DESC" href="?page=<?= $page ?>&select=<?= $select ?>&sort=<?= $sort ?>"><i class="fas fa-arrow-alt-circle-up"></i></a>
                        </th>
                        <th scope="col">
                            標題
                            <?php $select = "title";
                            $sort = "ASC" ?>
                            <a id="sort_title_ASC" href="?page=<?= $page ?>&select=<?= $select ?>&sort=<?= $sort ?>"><i class="fas fa-arrow-alt-circle-down"></i></a>
                            <?php $select = "title";
                            $sort = "DESC" ?>
                            <a id="sort_title_DESC" href="?page=<?= $page ?>&select=<?= $select ?>&sort=<?= $sort ?>"><i class="fas fa-arrow-alt-circle-up"></i></a>
                        </th>
                        <th scope="col">
                            服務項目
                            <?php $select = "service_ltems";
                            $sort = "ASC" ?>
                            <a id="sort_service_ltems_ASC" href="?page=<?= $page ?>&select=<?= $select ?>&sort=<?= $sort ?>"><i class="fas fa-arrow-alt-circle-down"></i></a>
                            <?php $select = "service_ltems";
                            $sort = "DESC" ?>
                            <a id="sort_service_ltems_DESC" href="?page=<?= $page ?>&select=<?= $select ?>&sort=<?= $sort ?>"><i class="fas fa-arrow-alt-circle-up"></i></a>
                        </th>
                        <th scope="col">
                            服務時間
                            <?php $select = "service_hours";
                            $sort = "ASC" ?>
                            <a id="sort_service_hours_ASC" href="?page=<?= $page ?>&select=<?= $select ?>&sort=<?= $sort ?>"><i class="fas fa-arrow-alt-circle-down"></i></a>
                            <?php $select = "service_hours";
                            $sort = "DESC" ?>
                            <a id="sort_service_hours_DESC" href="?page=<?= $page ?>&selecst=<?= $select ?>&sort=<?= $sort ?>"><i class="fas fa-arrow-alt-circle-up"></i></a>
                        </th>
                        <th scope="col">
                            服務費用
                            <?php $select = "service_fee";
                            $sort = "ASC" ?>
                            <a id="sort_service_fee_ASC" href="?page=<?= $page ?>&select=<?= $select ?>&sort=<?= $sort ?>"><i class="fas fa-arrow-alt-circle-down"></i></a>
                            <?php $select = "service_fee";
                            $sort = "DESC" ?>
                            <a id="sort_service_fee_DESC" href="?page=<?= $page ?>&select=<?= $select ?>&sort=<?= $sort ?>"><i class="fas fa-arrow-alt-circle-up"></i></a>
                        </th>
                        <th scope="col">
                            製作時間
                            <?php $select = "production_time";
                            $sort = "ASC" ?>
                            <a id="sort_production_time_ASC" href="?page=<?= $page ?>&select=<?= $select ?>&sort=<?= $sort ?>"><i class="fas fa-arrow-alt-circle-down"></i></a>
                            <?php $select = "production_time";
                            $sort = "DESC" ?>
                            <a id="sort_production_time_DESC" href="?page=<?= $page ?>&select=<?= $select ?>&sort=<?= $sort ?>"><i class="fas fa-arrow-alt-circle-up"></i></a>
                        </th>
                        <th scope="col">
                            修改次數
                            <?php $select = "modifications";
                            $sort = "ASC" ?>
                            <a id="sort_modifications_ASC" href="?page=<?= $page ?>&select=<?= $select ?>&sort=<?= $sort ?>"><i class="fas fa-arrow-alt-circle-down"></i></a>
                            <?php $select = "modifications";
                            $sort = "DESC" ?>
                            <a id="sort_modifications_DESC" href="?page=<?= $page ?>&select=<?= $select ?>&sort=<?= $sort ?>"><i class="fas fa-arrow-alt-circle-up"></i></a>
                        </th>
                        <th scope="col">
                            建立時間
                            <?php $select = "create_at";
                            $sort = "ASC" ?>
                            <a id="sort_create_at_ASC" href="?page=<?= $page ?>&select=<?= $select ?>&sort=<?= $sort ?>"><i class="fas fa-arrow-alt-circle-down"></i></a>
                            <?php $select = "create_at";
                            $sort = "DESC" ?>
                            <a id="sort_create_at_DESC" href="?page=<?= $page ?>&select=<?= $select ?>&sort=<?= $sort ?>"><i class="fas fa-arrow-alt-circle-up"></i></a>
                        </th>
                        <th scope="col">修改</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($rows as $r) : ?>
                        <tr>
                            <td>
                                <a href="javascript: del_it(<?= $r['ID'] ?>)">
                                    <i class="fas fa-trash-alt"></i>
                                </a>
                            </td>
                            <td><?= htmlentities($r['ID']) ?></td>
                            <td><?= htmlentities($r['user_ID']) ?></td>
                            <td><?= htmlentities($r['title']) ?></td>
                            <td><?= htmlentities($r['service_ltems']) ?></td>
                            <td><?= htmlentities($r['service_hours']) ?></td>
                            <td><?= htmlentities($r['service_fee']) ?></td>
                            <td><?= htmlentities($r['production_time']) ?></td>
                            <td><?= htmlentities($r['modifications']) ?></td>
                            <td><?= htmlentities($r['create_at']) ?></td>
                            <td>
                                <a href="Service_edit.php?ID=<?= $r['ID'] ?>">
                                    <i class="fas fa-edit"></i>
                                </a>
                            </td>
                        </tr>
                    <?php endforeach ?>
                </tbody>

            </table>
        </div>
    </div>
</div>

<?php include "../parts/scripts.php"; ?>
<script>
    function del_it(ID) {
        if (confirm(`確定要刪除此筆的資料嗎 ?`)) {
            location.href = 'Service_delete.php?ID=' + ID;
        }
    }
</script>
<?php include "../parts/html-foot.php"; ?>