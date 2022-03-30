<?php
$users = [
    'shin' => [
            'nickname' => '小新',
            'pw' => '1234',
    ],
    'john' => [
        'nickname' => '小強',
        'pw' => '7890'
    ],
    'bill' => [
        'nickname' => '比爾',
        'pw' => 'abcde'
    ],

];


session_start();
$badLogin = false;

if(isset($_POST['account']) and isset($_POST['password'])){
    $badLogin = true;

    if(isset($users[$_POST['account']])) {

        $item = $users[$_POST['account']];
        if($item['pw']==$_POST['password']){
            $_SESSION['user2'] = [
                    'account' => $_POST['account'],
                    'nickname' => $item['nickname']
            ];
            // $badLogin = false;
        }
    }
}

?>
<?php require __DIR__. '/__html_head.php'; ?>
<div class="container">
    <div class="row">
        <div class="col-lg-6">
            <div class="card" >

                <div class="card-body">
                    <?php if(isset($_SESSION['user2'])): ?>
                        <h5 class="card-title">Hello <?= $_SESSION['user2']['nickname'] ?></h5>
                    <p><a href="a20211222-03-logout-user.php">登出</a></p>
                    <?php else: ?>
                        <h5 class="card-title">Login</h5>
                        <?php if($badLogin): ?>
                            <div class="alert alert-danger" role="alert">
                                帳號或密碼錯誤
                            </div>
                        <?php endif; ?>

                        <form method="post">
                            <div class="mb-3">
                                <label for="account" class="form-label">Account</label>
                                <input type="text" class="form-control" id="account" name="account"
                                value="<?= isset($_POST['account']) ? htmlentities($_POST['account']) : '' ?>">
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" name="password"
                                       value="<?= isset($_POST['password']) ? htmlentities($_POST['password']) : '' ?>"
                                >
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