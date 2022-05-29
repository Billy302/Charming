var express = require('express');
var router = express.Router();
const app = express();
const db = require('../../modules/mysql_config');

// users demo data
// const users = [
//   {
//     id: 1,
//     username: 'harry',
//     name: 'Harry Potter',
//     password: '12345',
//     role: 'user',
//     address: {
//       country: {
//         city: 'London',
//       },
//     },
//   },
//   {
//     id: 2,
//     username: 'eddy',
//     name:'Eddy',
//     password: '33333',
//     role: 'admin',
//     address: {
//       country: {
//         city: 'New Taipei City',
//       },
//     },
//   },
// ]

router
  .route("/")
  .get(async (req, res, next) => {
    const sql = "SELECT * FROM users";
    const [dates] = await db.query(sql);
    res.json(dates);
  })

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   console.log(users)
//   res.json(users);
//     // res.send('respond with a resource');
//   });

// 登入
router.post('/signin',function(req,res,next){
  console.log(req.body);
  res.send('登入');
// const {username, password} = req.body;
// db.query(`SELECT * FROM users WHERE username='${username}' AND pwd='${password}'`,function(err,rs){if (err) throw err;
//   console.log(rs);
//   console.log('OK');
// })
})

// 註冊帳號密碼
// router.post('/register',function(req, res,next){
//   console.log(req.body);
//   res.send("註冊成功");
// })

// 
  // router.get('/:userid', function (req, res, next) {
  //   const user = users.find((user) => String(user.id) === req.params.userid)
  
  //   if(user)
  //     res.json(user)
  //   else
  //     res.json({message:"no user"})
  // })




 
 

  module.exports = router;