<?php
require __DIR__. '/parts/__connect_db.php';

$sql = "SELECT * FROM address_book";

$rows = $pdo->query($sql)->fetchAll();


?>
<?php include __DIR__. '/parts/__html_head.php' ?>
<?php include __DIR__. '/parts/__navbar.php' ?>
<div class="container">

    <div class="row">
        <div class="col">
            <?php /*
            <table class="table table-striped table-bordered">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Birthday</th>
                    <th scope="col">Address</th>
                </tr>
                </thead>
                <tbody>
                <?php foreach($rows as $r): ?>
                    <tr>
                        <td><?= $r['sid'] ?></td>
                        <td><?= $r['name'] ?></td>
                        <td><?= $r['email'] ?></td>
                        <td><?= $r['mobile'] ?></td>
                        <td><?= $r['birthday'] ?></td>
                        <td><?= $r['address'] ?></td>
                    </tr>
                <?php endforeach;  ?>

                </tbody>

            </table>
            */ ?>
        </div>
    </div>


</div>

<?php include __DIR__. '/parts/__scripts.php' ?>
<script>
    const rows = <?= json_encode($rows) ?>;
</script>
<?php include __DIR__. '/parts/__html_foot.php' ?>



