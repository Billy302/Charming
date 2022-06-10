var express = require("express");
var router = express.Router();
const multer = require("multer");
var upload = multer();

const app = express();
const db = require("../../modules/mysql_config");
// let bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(express.urlencoded({extended:false}));

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("<h1>後端正在監聽中</h1>");
});

// 上傳圖片
// const storage = multer.diskStorage({
//   destination:(req,file,cb) => {
//     cb(null,'../../fontend/public/avatar')
//   },
//   filename:(req,file,cb) =>{
//     cb(null,file.originalname)
//   },
// });

// const uploadImage = multer({storage: storage})

// router.post('/image', uploadImage.single('file'), async (req, res) => {
//   const userId = req.query.userid;
//   const image = req.file.originalname;
//   const updateImg = `INSERT INTO us_avatar(user_id, avatar) VALUES ('${userId}',?)`;
//   const [result] = await db.query(updateImg).catch((e) => console.log(`${updateImg} error`));
//   res.json(result);
// })

// app.listen(port, () => {
//   console.log(`listening at http://localhost:${port}`)
// })
// 查看所有user資料
//此寫法與下相同 router.route("/users").get(async (req, res, next) =>
// router.get("/users", async (req, res, next) => {
//   const sql = "SELECT * FROM us_user";
//   const [dates] = await db.query(sql);
//   res.json(dates);
// });

// 取得登入者 id=? 的使用者資料
router.get("/users", async (req, res, next) => {
  console.log(req.query.userId);
  const sql =
    "SELECT id,user_account,user_password,username,gender,DATE_FORMAT(birthday,'%Y-%m-%d') AS birthday,email,mobile,city,nickname,avatar,DATE_FORMAT(join_at,'%Y-%m-%d')AS join_at FROM `us_user` WHERE id=?";
  const [dates] = await db.query(sql, [req.query.userId]);
  console.log(dates);
  res.json(dates);
});

// 登入 (使用postman出現{} 查看postman格式是否非JSON)
// router.post("/signin", async (req, res, next) => {
//   console.log(req.body);
//   const sql = `SELECT * FROM us_user WHERE user_account='${req.body.account}' AND user_password='${req.body.password}'`;
//   const [sigin] = await db.query(sql).catch((error) => {
//     console.log(`執行Query:${sql}時錯誤`);
//   });
//   res.json(sigin);
//   // res.redirect("/sigin");
// });

// 登入驗證帳號密碼 ok
// router.post("/signin", async (req, res, next) => {
//   const verify = `SELECT COUNT(user_account) AS result FROM us_user WHERE user_account='${req.body.account}' AND user_password='${req.body.password}'`;
//    const [login] = await db.query(verify, [req.query.user_account]);
//   console.log(login[0].result);
// if(login[0].result == 1 ){
//   res.json({msg: "登入成功"})
//   // res.redirect('http://localhost:3000/account')
// }else{
//   res.json({msg:"帳號或密碼有誤"});
//   }

// 登入驗證
router.post("/signin", upload.none(), async (req, res, next) => {
  console.log(req.body);
  const verify = `SELECT * FROM us_user WHERE user_account='${req.body.account}' AND user_password='${req.body.password}'`;
  // console.log(verify);
  const [login] = await db.query(verify);
  console.log(login[0]);
  if (login[0] == undefined) {
    res.send("0");
    //  0 表示帳號或密碼有誤 登入失敗
  } else {
    let newData = [login[0]["id"], login[0]["username"]];
    res.json(newData);
    //  取得會員id,username
  }
  console.log(login[0]);
  // console.log(login[0].id);
  // res.json(login[0]);
});

// 檢查帳號是否已被使用(不能重複註冊) ok
router.get("/checkAccount", async (req, res, next) => {
  const sql = `SELECT Count(*) as total FROM us_user WHERE user_account=?`;
  const [datas] = await db.query(sql, [req.query.user_account]);
  console.log(req.query.user_account);
  res.json(datas[0]);
});

// 註冊 帳號密碼
// sql=使用MySQL語法及欄位,VALUE值放表單name=""
// router.post("/register", async (req, res, next) => {
//   console.log(req.body);
//   const sql = `INSERT INTO us_user(user_account,user_password,username,gender,birthday, email,mobile,city) VALUES ('${req.body.account}','${req.body.password}','${req.body.name}','${req.body.gender}','${req.body.birthday}','${req.body.email}','${req.body.mobile}','${req.body.city}')`;
//   const [user] = await db.query(sql).catch((error) => {
//     console.log(`執行Query:${sql}時錯誤`);
//   });
//   // res.json(user);
//   res.redirect("http://localhost:3000/signin");
// });
router.post("/register",upload.none(), async (req, res, next) => {
  console.log(req.body);
  const sql = `INSERT INTO us_user(user_account,user_password,username,gender,birthday, email,mobile,city) VALUES ('${req.body.account}','${req.body.password}','${req.body.name}','${req.body.gender}','${req.body.birthday}','${req.body.email}','${req.body.mobile}','${req.body.city}')`;
  const [user] = await db.query(sql).catch((error) => {
        console.log(`執行Query:${sql}時錯誤`);
      });
  console.log(user);
  console.log('註冊成功');
  res.send("1");
  // res.redirect("http://localhost:3000/signin");
});

// 測試註冊 透過form post 前端>資料庫 ok
// sql=使用MySQL語法及欄位,VALUE值放表單name=""
// router.post("/register", async (req, res, next) => {
//   console.log(req.body);
//   const sql = `INSERT INTO users(user_account,user_password) VALUES ('${req.body.account}','${req.body.password}')`;
//   const [user] = await db.query(sql).catch((error) => {
//     console.log(`執行Query:${sql}時錯誤`);
//   });
//   // res.json(user);
//   // 導向登入頁
//   res.redirect("http://localhost:3000/signin");
// });

module.exports = router;
