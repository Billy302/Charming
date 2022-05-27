var express = require('express');
var router = express.Router();
// const app = express();
// const db = require('../../modules/mysql_config');

// users demo data
const users = [
  {
    id: 1,
    username: 'harry',
    name: 'Harry Potter',
    password: '12345',
    role: 'user',
    address: {
      country: {
        city: 'London',
      },
    },
  },
  {
    id: 2,
    username: 'eddy',
    name:'Eddy',
    password: '33333',
    role: 'admin',
    address: {
      country: {
        city: 'New Taipei City',
      },
    },
  },
]


/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(users)
  res.json(users);
    // res.send('respond with a resource');
  });

  router.get('/:userid', function (req, res, next) {
    const user = users.find((user) => String(user.id) === req.params.userid)
  
    if(user)
      res.json(user)
    else
      res.json({message:"no user"})
  })

// app.post("/sigin",(req,res) => {

router
  .route("/")
  .get(async (req, res, next) => {
    const sql = "SELECT * FROM us_user";
    const [dates] = await db.query(sql);
    res.json(dates);
  })

 
 

  module.exports = router;