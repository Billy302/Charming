<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form name="p_form" onsubmit="return false;">
        <input type="text" id="pic" name="pic">

        <br>
        <img src="" alt="" id="myimg" width="200px">
        <br>
        <button type="button" onclick="avatar.click()">上傳大頭貼</button>
        <br>
        <input type="text">
        <br>
        <input type="submit">
    </form>


    <form name="avatar_form" onsubmit="return false;" style="display: none;">
        <input type="file" id="avatar" name="avatar" accept="image/jpeg,image/png">
    </form>

    <script>
        

        function sendData(){
            const fd = new FormData(document.avatar_form);

            fetch('upload-avatar.php', {
                method: 'POST',
                body: fd
            }).then(r=>r.json())
            .then(obj=>{
                console.log(obj);
                if(obj.success && obj.filename){
                    myimg.src = '/imgs/' + obj.filename;
                    pic.value = obj.filename;
                }
            });
        }

        avatar.onchange = sendData;
    </script>
</body>
</html>