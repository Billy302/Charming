var express = require('express');
const router = express.Router();
const db = require('../../modules/mysql_config');

// const registerValidation = require("../../validation").registerValidation;
// const loginValidation = require("../../validation").loginValidation;

router.use((req,res,next) => {
    console.log("A request is coming in to auth.js");
    next();
  });
  
  router.get("/testAPI",(req,res) =>{
    const msgObj = {
      message: "Test API is working.",
    };
    return res.json(msgObj);
  });

<<<<<<< HEAD
  router.post("/register",(req, res) => {
      console.log("註冊!!");
        console.log(req.body);
        // res.json({msg:123})

      
    });
=======
  // router.post("/register",(req, res) => {
  //     console.log("註冊!!");
  //       console.log(req.body);
  //       res.json({msg:123})

      
  //   });

    // router.post("/register", async (req, res, next) => {
    //   console.log(req.body);
    //   const sql = `INSERT INTO users(username,password) VALUES ('${req.body.username}','${req.body.password}')`;
    //   const [user] = await db.query(sql).catch((error) => {
    //     console.log(`執行Query:${sql}時錯誤`);
    //   });
    //   res.json(user);
    // });
>>>>>>> 23d04c36c11044a97e803ae3df64f5a59838f249
    
  module.exports = router;