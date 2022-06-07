var express = require('express');
var blog = express.Router();

var multer = require('multer');
var upload = multer();
var fs = require('fs');

const db = require('../../modules/mysql_config');

// render 首頁的本週熱門文章
blog.get('/article', async (req, res) => {
    const sqlUpdate = 'SELECT * FROM `blog_article` WHERE 1 LIMIT 5';
    const [result] = await db.query(sqlUpdate).catch((e) => console.log(e));
    res.json(result);
});

// render 文章，用後面的id來判讀是要讀哪一篇
blog.get('/article/:id', async (req, res) => {
    const sqlUpdate = `SELECT * FROM blog_article WHERE article_id = ${req.params.id}`;
    const [result] = await db.query(sqlUpdate).catch((e) => console.log(e));
    res.json(result);
});

// render comment ，用後面的id來判讀是讀哪篇文章的 comment
blog.get('/comment/:id', async (req, res) => {
    const sqlUpdate = `SELECT * FROM blog_comments WHERE article_id = ${req.params.id}`;
    const [result] = await db.query(sqlUpdate).catch((e) => console.log(e));
    res.json(result);
});

// insert comment ， 用後面的id來判斷是寫到哪篇文章裡面
blog.post('/insert/comment/:id', async (req, res) => {
    const sqlInsert = `INSERT INTO blog_comments
    (comments_desc, article_id, user_id) VALUES ("${req.body.userInput}",${req.params.id},1)`;
    const result = await db.query(sqlInsert).catch((e) => console.log(e));
    res.json(result);
});

// blog.get('/search/:desc', async (req, res) => {
//     const sqlUpdate = `SELECT * FROM blog_topictoblog WHERE topic_ID = ${req.params.category}`;
//     const [result] = await db.query(sqlUpdate).catch((e) => console.log(e));
//     res.json(result);
// });

// render search page ， 精選文章上面的抬頭點進去

blog.get('/search/:category', async (req, res) => {
    const sqlUpdate = `SELECT * FROM blog_topictoblog LEFT JOIN blog_article ON blog_topictoblog.article_ID = blog_article.article_id WHERE topic_ID = ${req.params.category};`;
    const [result] = await db.query(sqlUpdate).catch((e) => console.log(`${sqlUpdate} error`));
    res.json(result);
});

// render 精選文章裡面的六個主題資料
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

// 上傳banner

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './Blog');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const uploadImage = multer({ storage: storage });

blog.post('/image', uploadImage.single('file'), (req, res) => {
    // const insertImg = 'INSERT INTO blog_test(test_id, test_image) VALUES (1,'')'
    res.json({});
});

blog.get('/');

module.exports = blog;
