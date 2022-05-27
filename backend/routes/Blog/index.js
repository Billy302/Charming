var express = require('express');
var blog = express.Router();

var multer = require('multer');
var upload = multer();
var fs = require('fs');

const db = require('../../modules/mysql_config');

blog.get('/article', async (req, res) => {
    const sqlUpdate = 'SELECT * FROM `blog_article` WHERE 1 LIMIT 5';
    const [result] = await db.query(sqlUpdate).catch((e) => console.log(e));
    res.json(result);
    // db.query(sqlUpdate, (err, result, fields) => {
    //     if (err) throw err;
    //     res.json(result); // 得到的結果丟給瀏覽器
    // });
});

blog.get('/article/:id', async (req, res) => {
    const sqlUpdate = `SELECT * FROM blog_article WHERE article_id = ${req.params.id}`;
    const [result] = await db.query(sqlUpdate).catch((e) => console.log(e));
    res.json(result);
    // , (err, result, fields) => {});
    // if (err) throw err;
});

blog.get('/search/:desc', async (req, res) => {
    const sqlUpdate = `SELECT * FROM blog_comments WHERE article_id = ${req.params.desc}`;
    const [result] = await db.query(sqlUpdate).catch((e) => console.log(e));
    res.json(result);
    // db.query(sqlUpdate, (err, result, fields) => {
    //     if (err) throw err;
    // });
});

blog.get('/comment/:id', async (req, res) => {
    const sqlUpdate = `SELECT * FROM blog_comments WHERE article_id = ${req.params.id}`;
    const [rows, fields] = await db.query(sqlUpdate).catch((e) => console.log(e));
    res.json(result);
    // db.query(sqlUpdate, (err, result, fields) => {
    //     if (err) throw err;
    // });
});

blog.post('/insert/comment', async (req, res) => {
    // const commentDesc = ;
    console.log(req.body);
    // const sqlInsert = ` INSERT INTO blog_comments(comments_desc, article_id, user_id) VALUES ('${req.body.chatContext}',2,1)`;

    // db.query(sqlInsert, (err, result, fields) => {
    //     if (err) throw err;
    //     res.json(result);
    // });
    // res.send({ commentDesc });
});

// app.get('/')

module.exports = blog;
