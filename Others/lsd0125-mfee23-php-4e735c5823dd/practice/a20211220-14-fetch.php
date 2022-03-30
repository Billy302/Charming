<?php require __DIR__. '/__html_head.php'; ?>
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="card" >

                    <div class="card-body">
                        <h5 class="card-title"></h5>

                    </div>
                </div>

            </div>
        </div>


    </div>
<?php include __DIR__. '/__scripts.php'; ?>
    <script>

        (async function(){
            try {
                const r = await fetch(`a20211220-08-xhr-api.php?a=10&b=20`);
                const txt = await r.text();
                document.querySelector('.card-title').innerHTML += txt + '<br>';
            } catch(ex){
                // 處理錯誤
            }
        })();

        (async () => {
            try {
                const r = await fetch(`a20211220-08-xhr-api.php?a=30&b=40`);
                const txt = await r.text();
                document.querySelector('.card-title').innerHTML += txt;
            } catch(ex){
                // 處理錯誤
            }
        })()


    </script>
<?php include __DIR__. '/__html_foot.php'; ?>