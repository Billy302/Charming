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
});

blog.get('/article/:id', async (req, res) => {
    const sqlUpdate = `SELECT * FROM blog_article WHERE article_id = ${req.params.id}`;
    const [result] = await db.query(sqlUpdate).catch((e) => console.log(e));
    res.json(result);
});

blog.get('/comment/:id', async (req, res) => {
    const sqlUpdate = `SELECT * FROM blog_comments WHERE article_id = ${req.params.id}`;
    const [result] = await db.query(sqlUpdate).catch((e) => console.log(e));
    res.json(result);
});

blog.post('/insert/comment/:id', async (req, res) => {
    const sqlInsert = `INSERT INTO blog_comments
    (comments_desc, article_id, user_id) VALUES ("${req.body.userInput}",${req.params.id},1)`;
    const result = await db.query(sqlInsert).catch((e) => console.log(e));
    res.json(result);
});

// blog.get('/topic', async (req, res) => {
//     const sqlUpdate = 'SELECT * FROM `blog_topic`';
//     const [result] = await db.query(sqlUpdate).catch((e) => console.log(e));
//     res.json(result);
// });

// blog.get('/search/:desc', async (req, res) => {
//     const sqlUpdate = `SELECT * FROM blog_topictoblog WHERE topic_ID = ${req.params.category}`;
//     const [result] = await db.query(sqlUpdate).catch((e) => console.log(e));
//     res.json(result);
// });

blog.get('/search/:category', async (req, res) => {
    const sqlUpdate = `SELECT * FROM blog_topictoblog LEFT JOIN blog_article ON blog_topictoblog.article_ID = blog_article.article_id WHERE topic_ID = ${req.params.category};`;
    const [result] = await db.query(sqlUpdate).catch((e) => console.log(`${sqlUpdate} error`));
    res.json(result);
});

blog.get('/renderSearch', async (req, res) => {
    const sqlUpdate = `SELECT * FROM blog_topictoblog LEFT JOIN blog_article ON blog_topictoblog.article_ID = blog_article.article_id WHERE topic_ID = 1 LIMIT 6; 
    SELECT * FROM blog_topictoblog LEFT JOIN blog_article ON blog_topictoblog.article_ID = blog_article.article_id WHERE topic_ID = 2 LIMIT 6; 
    SELECT * FROM blog_topictoblog LEFT JOIN blog_article ON blog_topictoblog.article_ID = blog_article.article_id WHERE topic_ID = 3 LIMIT 6; 
    SELECT * FROM blog_topictoblog LEFT JOIN blog_article ON blog_topictoblog.article_ID = blog_article.article_id WHERE topic_ID = 4 LIMIT 6; 
    SELECT * FROM blog_topictoblog LEFT JOIN blog_article ON blog_topictoblog.article_ID = blog_article.article_id WHERE topic_ID = 5 LIMIT 6; 
    SELECT * FROM blog_topictoblog LEFT JOIN blog_article ON blog_topictoblog.article_ID = blog_article.article_id WHERE topic_ID = 6 LIMIT 6;`;
    const [result] = await db.query(sqlUpdate).catch((e) => console.log(`${sqlUpdate} error`));
    res.json(result);
});

// blog.get('/topic', async (res, req) => {
//     const sqlUpdate = 'SELECT * FROM `blog_article` WHERE 1 LIMIT 5';
//     const [result] = await db.query(sqlUpdate).catch((e) => console.log(e));
//     res.send(result);
// });

// app.get('/')

module.exports = blog;
