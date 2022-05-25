var express = require('express');
var router = express.Router();
const app = express();
const db = require('../../modules/mysql_config');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.send('respond with a resource');
//   });

router
  .route("/")
  .get(async (req, res, next) => {
    const sql = "SELECT * FROM us_user";
    const [dates] = await db.query(sql);
    res.json(dates);
  })

 
 

  module.exports = router;