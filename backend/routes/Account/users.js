var express = require("express");
var router = express.Router();
const multer = require("multer");
var upload = multer();

const app = express();
const db = require("../../modules/mysql_config");
// let bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(express.urlencoded({extended:false}));

//此寫法與下相同 router.route("/").get(async (req, res, next) => 
// router.get("/",async(req,res,next) => {
//   const sql = "SELECT * FROM us_user";
//   const [dates] = await db.query(sql);
//   res.json(dates);
// })

/* GET users listing. */
<<<<<<< HEAD
router.get('/', function(req, res, next) {
  // res.json(users);
  res.send("<h1>後端正在監聽中</h1>");
    // res.send('respond with a resource');
  });

// 登入
// router.post('/signin',function(req,res,next){
//   console.log(req.body);
//   // res.send('登入');
// const {username, password} = req.body;
// db.query(`SELECT * FROM us_user WHERE user_account='${username}' AND user_password='${password}'`,function(err,rows){
//   if (err) throw err;
//   console.log('Response:',rows);
// });
// })

// 註冊帳號密碼
// sql=使用MySQL語法及欄位,VALUE值放表單name=""
router.post('/register', async(req, res,next)=>{
  console.log(req.body);
  const sql = `INSERT INTO us_user(user_account,user_password,user_name,gender,birthday, email,mobile,city,interest_product,interest_collection,interest_article) VALUES ('${req.body.username}','${req.body.password}','${req.body.user_name}','${req.body.gender}','${req.body.birthday}','${req.body.email}','${req.body.mobile}','${req.body.city}','${req.body.interest_product}','${req.body.interest_collection}','${req.body.interest_article}')`;
  const [user] = await db.query(sql)
  res.json(user);
})

 
=======
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
  router.post("/signin",upload.none(), async (req, res, next) => { console.log(req.body);
    const verify = `SELECT * FROM us_user WHERE user_account='${req.body.account}' AND user_password='${req.body.password}'`;
    console.log(verify);
     const [login] = await db.query(verify);
     console.log(login);
     if(login[0] == undefined){
       res.send("0");
      //  0 表示帳號或密碼有誤 登入失敗
     }else{
       res.json(login[0].id);
      //  res.redirect('/Account')
      //  取得會員id
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

>>>>>>> 23d04c36c11044a97e803ae3df64f5a59838f249

module.exports = router;
