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
    const sqlSelect = `SELECT * FROM blog_article LEFT JOIN blog_author ON blog_article.article_author = blog_author.author_id where article_id = ${req.params.id}`;
    const [result] = await db.query(sqlSelect).catch((e) => console.log(e));
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
    const sqlInsert = `INSERT INTO blog_comments(comments_desc, article_id, user_id) VALUES ("${req.body.userInput}",${req.params.id},1)`;
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

// 上傳banner，並把圖片存到前端資料夾

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../fontend/public/Blog/upload/banner');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const uploadImage = multer({ storage: storage });

// 因為一個使用者只能有一個 banner ，所以先把舊的刪掉，在insert一張新的
blog.post('/image', uploadImage.single('file'), async (req, res) => {
    const userId = req.query.userid;
    const image = req.file.originalname;
    const updateImg = `DELETE FROM us_banner_pic WHERE user_id = ${userId} ;
    INSERT INTO us_banner_pic(user_id, banner_file) VALUES ('${userId}','${image}')`;
    const [result] = await db.query(updateImg).catch((e) => console.log(`${updateImg} error`));
    res.json(result);
});

// 讀取user的banner
blog.get('/image/render', async (req, res) => {
    const userId = req.query.userid;
    const sqlSelect = `select * from us_banner_pic where user_id = ${userId}`;
    const [result] = await db.query(sqlSelect).catch((e) => console.log(`${sqlSelect} error`));
    res.json(result);
});

// 把文章加入我的最愛，以及刪除

blog.get('/insert/fav', async (req, res) => {
    const articleId = req.query.id;
    const userId = req.query.userid;
    const sqlInsert = `INSERT INTO blog_fav(fav_user, fav_article) VALUES ('${userId}','${articleId}')`;
    const result = await db.query(sqlInsert).catch((e) => console.log(`${sqlInsert} error`));
    res.json(result);
});

blog.get('/delete/fav', async (req, res) => {
    const articleId = req.query.id;
    const userId = req.query.userid;
    const sqlDelete = `DELETE FROM blog_fav WHERE fav_article = ${articleId} and fav_user = ${userId}`;
    const result = await db.query(sqlDelete).catch((e) => console.log(`${sqlDelete} error`));
    res.json(result);
});

// 追蹤作者以及刪除

blog.get('/follow/author', async (req, res) => {
    const authorId = req.query.author;
    const userId = req.query.userid;
    const sqlInsert = `INSERT INTO blog_follow(follow_user, follow_author) VALUES ('${userId}','${authorId}');`;
    const [result] = await db.query(sqlInsert).catch((e) => console.log(e));
    res.json(result);
});

blog.get('/unfollow/author', async (req, res) => {
    const authorId = req.query.author;
    const userId = req.query.userid;
    const sqlDelete = `delete from blog_follow where follow_author = ${authorId} and follow_user =${userId}`;
    const [result] = await db.query(sqlDelete).catch((e) => console.log(e));
    res.json(result);
});

// 看當前的user有沒有收藏這篇文章

blog.get('/fav/render', async (req, res) => {
    const userId = req.query.userid;
    const articleId = req.query.article;
    const sqlSelect = `SELECT * FROM blog_fav WHERE fav_user=${userId} and fav_article = ${articleId};`;
    const [result] = await db.query(sqlSelect).catch((e) => console.log(e));
    res.json(result);
});

// 看當前的user有沒有追蹤這位作者

blog.get('/follow/render', async (req, res) => {
    const userId = req.query.userid;
    const authorId = req.query.author;
    const sqlSelect = `SELECT * FROM blog_follow WHERE follow_user=${userId}`;
    const [result] = await db.query(sqlSelect).catch((e) => console.log(e));
    res.json(result);
});
//and follow_author = ${authorId};

// render 當前 user 收藏的文章

blog.get('/fav/all', async (req, res) => {
    const userId = req.query.userid;
    const sqlSelect = `SELECT * FROM blog_fav left join blog_article on blog_fav.fav_article = blog_article.article_id where fav_user = ${userId}`;
    const [result] = await db.query(sqlSelect).catch((e) => console.log(e));
    res.json(result);
});

// render 當前 user 追蹤的作者
// blog.get('/follow/all', async (req,res)=>{
//     const
// });

// blog.get('/follow/');

module.exports = blog;
