var express = require("express");
var router = express.Router();
// 上傳圖片
const multer = require("multer");
var upload = multer();
// 發送信件
var nodemailer = require("nodemailer");
// 連接資料庫
const db = require("../../modules/mysql_config");

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

// 登入 取得登入者 id=? 的使用者資料
router.get("/users", async (req, res, next) => {
  console.log(req.query.userId);
  const sql =
    "SELECT id,user_account,user_password,username,gender,DATE_FORMAT(birthday,'%Y-%m-%d') AS birthday,email,mobile,city,nickname,avatar,DATE_FORMAT(join_at,'%Y-%m-%d')AS join_at FROM `us_user` WHERE id=?";
  const [dates] = await db.query(sql, [req.query.userId]);
  // console.log(dates);
  res.json(dates);
});

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

// 修改密碼，
router.put("/signin", upload.none(), async (req, res, next) => {
  const sql = `UPDATE us_user SET user_password ='${req.body.password}' WHERE user_account = '${req.body.account}'`;
  const [data] = await db.query(sql).catch((error) => {
    console.log(`執行 Query : ${sql}時出錯 `);
  });
  res.send("1");
});

var mailTransport = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  tls: {
    rejectUnauthorized: false,
  },
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

// 忘記密碼發mail
// 當前測試只能用hotmail，無論發送者或接收者
router.post("/signforget", upload.none(), async (req, res, next) => {
  const sql = `SELECT COUNT(*) as total FROM us_user WHERE  user_account = '${req.body.account}' and email = '${req.body.email}'`;
  const [data] = await db.query(sql).catch((error) => {
    console.log(`執行 Query : ${sql}時出錯 `);
  });
  if (data[0]["total"] > 0) {
    mailTransport.sendMail({
      from: "sub0617@hotmail.com",
      // to: "sub0617@hotmail.com",
      to: req.body.email,
      subject: "Charming網，密碼重新設定",
      html: `<p>Click <a href="http://localhost:3000/signupdate">here</a> to reset your password</p>`,
    });
    res.json("success");
  } else {
    res.json("error");
  }
});

// 檢查帳號是否已被使用(不能重複註冊) ok
router.get("/checkAccount", async (req, res, next) => {
  const sql = `SELECT Count(*) as total FROM us_user WHERE user_account=?`;
  const [datas] = await db.query(sql, [req.query.user_account]);
  console.log(req.query.user_account);
  res.json(datas[0]);
});

// 註冊
router.post("/register", upload.none(), async (req, res, next) => {
  console.log(req.body);
  const sql = `INSERT INTO us_user(user_account,user_password,username,gender,birthday, email,mobile,city) VALUES ('${req.body.account}','${req.body.password}','${req.body.name}','${req.body.gender}','${req.body.birthday}','${req.body.email}','${req.body.mobile}','${req.body.city}')`;
  const [user] = await db.query(sql).catch((error) => {
    console.log(`執行Query:${sql}時錯誤`);
  });
  const sql2 = `SELECT  id ,join_at FROM us_user ORDER by join_at desc LIMIT 1`
  const [uer2] = await db.query(sql2).catch((error) => {
    console.log(`執行Query:${sql}時錯誤`);
  });

  const sql3 = `INSERT INTO user_pic_status(user_id) VALUES ('${uer2[0]["id"]}')`;
  const [result] = await db.query(sql3).catch((e) => console.log(e));

  console.log(user);
  console.log("註冊成功");
  res.send("1");
  // res.redirect("http://localhost:3000/signin");
});

module.exports = router;
