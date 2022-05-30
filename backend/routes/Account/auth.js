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

  router.post("/register",(req, res) => {
      console.log("註冊!!");
        console.log(req.body);
        // res.json({msg:123})

      
    });
    
  module.exports = router;