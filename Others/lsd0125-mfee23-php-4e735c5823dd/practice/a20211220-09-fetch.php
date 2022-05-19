<?php require __DIR__. '/__html_head.php'; ?>
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="card" >

                    <div class="card-body">
                        <h5 class="card-title"></h5>

                        <form name="form1" onsubmit="sendData(); return false;">
                            <div class="mb-3">
                                <label for="a" class="form-label">a</label>
                                <input type="number" class="form-control" id="a" name="a">
                            </div>
                            <div class="mb-3">
                                <label for="b" class="form-label">b</label>
                                <input type="number" class="form-control" id="b" name="b">
                            </div>

                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>

            </div>
        </div>


    </div>
<?php include __DIR__. '/__scripts.php'; ?>
    <script>
        function sendData(){
            const a = document.form1.a.value;
            const b = document.form1.b.value;

            // https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API/Using_Fetch

            fetch(`a20211220-08-xhr-api.php?a=${a}&b=${b}`)
                .then(r=>r.text())
                .then(txt=>{
                    document.querySelector('.card-title').innerHTML = txt;
                });

        }
    </script>
<?php include __DIR__. '/__html_foot.php'; ?>