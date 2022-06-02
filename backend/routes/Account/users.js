var express = require("express");
var router = express.Router();

const app = express();
const db = require("../../modules/mysql_config");

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

// router.post("/signin", async (req, res) => {
//   let { user_account, password } = req.body;
//   console.log(req.body);
//   try {
//     let foundUser = await db.query.findOne({ user_account });
//     if (!foundUser) {
//       res.send("Username not found");
//     } else {
//       if (password == foundUser.password) {
//         res.render("/");
//       } else {
//         res.send("密碼錯誤");
//       }
//     }
//   } catch (e) {
//     next(e);
//   }
// });

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

router.post("/signin", async (req, res, next) => {
  console.log(req.body.account);
  const myaccount = `SELECT COUNT(user_account) FROM us_user WHERE user_account='${req.body.account}'`;
  const pwd = `SELECT COUNT(user_password) FROM us_user WHERE user_password='${req.body.password}'`;
  console.log(!!myaccount);
  console.log(pwd);
  if(myaccount == true && pwd == true){
    res.send("登入成功")
  }else{
    res.send("帳號或密碼有誤");
    }

    // if(req.body.account == 'abc123' && req.body.password == '12345678'){
    //   res.send("登入成功")
    // }else{
    // res.send("帳號或密碼有誤");
    // }
  // res.redirect("/sigin");
});

// 檢查帳號是否已被使用(不能重複註冊)
router.get("/checkAccount", async (req, res, next) => {
  const sql = `SELECT Count(*) as total FROM us_user WHERE user_account=?`;
  const [datas] = await db.query(sql, [req.query.user_account]);
  console.log(req.query.user_account);
  res.json(datas[0]);
});

// 註冊帳號密碼
// sql=使用MySQL語法及欄位,VALUE值放表單name=""
router.post("/register", async (req, res, next) => {
  console.log(req.body);
  const sql = `INSERT INTO us_user(user_account,user_password,user_name,gender,birthday, email,mobile,city) VALUES ('${req.body.account}','${req.body.password}','${req.body.name}','${req.body.gender}','${req.body.birthday}','${req.body.email}','${req.body.mobile}','${req.body.city}')`;
  const [user] = await db.query(sql).catch((error) => {
    console.log(`執行Query:${sql}時錯誤`);
  });
  res.json(user);
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
