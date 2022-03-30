<?php
session_start();

if(isset($_POST['account']) and isset($_POST['password'])){

    if($_POST['account']=='shin' and $_POST['password']=='1234'){

        $_SESSION['user'] = 'shin';
    }
    // print_r($_POST);
    // exit;
}

?>
<?php require __DIR__. '/__html_head.php'; ?>
<div class="container">
    <div class="row">
        <div class="col-lg-6">
            <div class="card" >

                <div class="card-body">
                    <?php if(isset($_SESSION['user'])): ?>
                        <h5 class="card-title">Hello <?= $_SESSION['user'] ?></h5>
                    <p><a href="a20211222-03-logout-user.php">登出</a></p>
                    <?php else: ?>
                        <h5 class="card-title">Login</h5>

                        <form method="post">
                            <div class="mb-3">
                                <label for="account" class="form-label">Account</label>
                                <input type="text" class="form-control" id="account" name="account">
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" name="password">
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    <?php endif; ?>

                </div>
            </div>


        </div>
    </div>


</div>
<?php include __DIR__. '/__scripts.php'; ?>
<?php include __DIR__. '/__html_foot.php'; ?>