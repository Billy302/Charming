<?php require __DIR__. '/__html_head.php'; ?>
<div class="container">
    <div class="row">
        <div class="col-lg-6">
            <div class="card" >

                <div class="card-body">
                    <h5 class="card-title">Card title</h5>

                    <form method="post" action="a20211220-06-form_.php">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" name="email">
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" name="password">
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" name="cb1" value="hello">
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>


                </div>
            </div>


        </div>
    </div>


</div>
<?php include __DIR__. '/__scripts.php'; ?>
<?php include __DIR__. '/__html_foot.php'; ?>