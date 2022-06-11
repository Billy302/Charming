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

// 查看所有user資料
//此寫法與下相同 router.route("/users").get(async (req, res, next) =>
router.get("/users", async (req, res, next) => {
  const sql = "SELECT * FROM us_user";
  const [dates] = await db.query(sql);
  res.json(dates);
});

// 取得 id=1 的使用者資料
router.get("/users/1", async (req, res, next) => {
  const sql = "SELECT * FROM us_user WHERE id=1";
  const [dates] = await db.query(sql);
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
  const [login] = await db.query(verify);

  if (login[0] == undefined) {
    res.send("0");
    //  0 表示帳號或密碼有誤 登入失敗
  } else {
    let newData = [login[0]["id"], login[0]["username"]];
    res.json(newData);
    //  res.redirect('/Account')
    //  取得會員id、會員名稱
  }
});

// 檢查帳號是否已被使用(不能重複註冊) ok
router.get("/checkAccount", async (req, res, next) => {
  const sql = `SELECT Count(*) as total FROM us_user WHERE user_account=?`;
  const [datas] = await db.query(sql, [req.query.user_account]);
  console.log(req.query.user_account);
  res.json(datas[0]);
});

// 註冊 帳號密碼 ok
// sql=使用MySQL語法及欄位,VALUE值放表單name=""
router.post("/register", async (req, res, next) => {
  console.log(req.body);
  const sql = `INSERT INTO us_user(user_account,user_password,user_name,gender,birthday, email,mobile,city) VALUES ('${req.body.account}','${req.body.password}','${req.body.name}','${req.body.gender}','${req.body.birthday}','${req.body.email}','${req.body.mobile}','${req.body.city}')`;
  const [user] = await db.query(sql).catch((error) => {
    console.log(`執行Query:${sql}時錯誤`);
  });
  // res.json(user);
  res.redirect("http://localhost:3000/signin");
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
