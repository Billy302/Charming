var express = require('express');
var router = express.Router();
const app = express();
const db = require('../../modules/mysql_config');

//此寫法與下相同 router.route("/").get(async (req, res, next) => 
// router.get("/",async(req,res,next) => {
//   const sql = "SELECT * FROM us_user";
//   const [dates] = await db.query(sql);
//   res.json(dates);
// })

/* GET users listing. */
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

 

  module.exports = router;