<?php
require __DIR__. '/db_connect.php';

if(! isset($_SESSION['admin'])){
    include __DIR__. '/ab-list-noadmin.php';
    exit;
}


$pageName = 'ab-list';
$page = isset($_GET['page']) ? intval($_GET['page']) : 1;
$search = isset($_GET['search']) ? $_GET['search'] : '';
$params = [];

$where = ' WHERE 1 ';
if(! empty($search)){
    $where .= sprintf(" AND `name` LIKE %s ", $pdo->quote('%'. $search. '%'));
    $params['search'] = $search;
}



$perPage = 5;
$t_sql = "SELECT COUNT(1) FROM address_book $where";
$totalRows = $pdo->query($t_sql)->fetch()['COUNT(1)'];
$totalPages = ceil($totalRows/$perPage);

if($page>$totalPages) $page=$totalPages;
if($page<1) $page=1;

$p_sql = sprintf("SELECT * FROM address_book %s
    ORDER BY sid DESC LIMIT %s, %s",
    $where,
    ($page-1)*$perPage,
    $perPage
);

echo '<!-- ';
echo $p_sql;
echo ' -->';

$stmt = $pdo->query($p_sql);

$rows = $stmt->fetchAll();
//echo json_encode($row, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
?>
<?php include __DIR__. '/parts/html-head.php'; ?>
<?php include __DIR__. '/parts/navbar.php'; ?>
<style>
    .remove-icon a i{
        color: red;
    }
</style>
<div class="container">
    <div class="row ">
        <div class="col">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item <?= $page==1 ? 'disabled' : '' ?>">
                        <a class="page-link" href="?<?php
                        $params['page'] = 1;
                        echo http_build_query($params);
                        ?>">
                            <i class="fas fa-arrow-alt-circle-left"></i>
                        </a>
                    </li>
                    <li class="page-item <?= $page==1 ? 'disabled' : '' ?>">
                        <a class="page-link" href="?<?php $params['page']=$page-1; echo http_build_query($params); ?>">
                            <i class="far fa-arrow-alt-circle-left"></i>
                        </a>
                    </li>
                    <?php for($i=$page-5; $i<=$page+5; $i++):
                        if($i>=1 and $i<=$totalPages):
                        ?>
                    <li class="page-item <?= $page==$i ? 'active' : '' ?>">
                        <a class="page-link" href="?<?php $params['page']=$i; echo http_build_query($params);  ?>">
                            <?= $i ?>
                        </a>
                    </li>
                    <?php endif;
                    endfor ?>

                    <li class="page-item <?= $page==$totalPages ? 'disabled' : '' ?>">
                        <a class="page-link" href="?<?php $params['page']=$page+1; echo http_build_query($params); ?>">
                            <i class="far fa-arrow-alt-circle-right"></i>
                        </a>
                    </li>
                    <li class="page-item <?= $page==$totalPages ? 'disabled' : '' ?>">
                        <a class="page-link" href="?<?php $params['page']=$totalPages; echo http_build_query($params); ?>">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="col d-flex flex-row-reverse bd-highlight">
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" name="search"
                       value="<?= htmlentities($search) ?>"
                       placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </div>
    <div class="row">
        <div class="col">
        <table class="table table-striped table-bordered">
        <thead>
        <tr>
            <th scope="col">
                <i class="fas fa-minus-circle"></i>
            </th>
            <th scope="col">sid</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">mobile</th>
            <th scope="col">birthday</th>
            <th scope="col">address</th>
            <th scope="col">
                <i class="fas fa-edit"></i>
            </th>
        </tr>
        </thead>
        <tbody>
        <?php foreach($rows as $r): ?>
        <tr>
            <td class="remove-icon">
                <a href="javascript: del_it(<?= $r['sid'] ?>)">
                    <i class="fas fa-minus-circle"></i>
                </a>
            </td>
            <td><?= $r['sid'] ?></td>
            <td><?= $r['name'] ?></td>
            <td><?= $r['email'] ?></td>
            <td><?= $r['mobile'] ?></td>
            <td><?= $r['birthday'] ?></td>
            <td>
                <!--
                <?= strip_tags($r['address']) ?>
                -->
                <?= htmlentities($r['address']) ?>
            </td>
            <td>
                <a href="ab-edit.php?sid=<?= $r['sid'] ?>">
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



<?php include __DIR__. '/parts/scripts.php'; ?>
<script>
    // function removeItem(event){
    //     const t = event.target;
    //     t.closest('tr').remove();
    // }

    function del_it(sid){
        if(confirm(`是否要刪除編號為 ${sid} 的資料?`)){
            location.href = 'ab-delete.php?sid=' + sid;
        }
    }

</script>
<?php include __DIR__. '/parts/html-foot.php'; ?>

