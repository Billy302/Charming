const express = require('express');
const db = require('./config/db');
const app = express();
const cors = require('cors');
const { response } = require('express');
const port = 7000;

app.use(express.json());

app.use(cors());

app.listen(port, () => {
    console.log(`RUN http://localhost:${port}`);
});

app.get('/article', (req, res) => {
    const sqlUpdate = 'SELECT * FROM `blog_article` WHERE 1 LIMIT 5';
    db.query(sqlUpdate, (err, result, fields) => {
        if (err) throw err;
        res.json(result); // 得到的結果丟給瀏覽器
    });
});

app.get('/article/:id', (req, res) => {
    const sqlUpdate = `SELECT * FROM blog_article WHERE article_id = ${req.params.id}`;
    db.query(sqlUpdate, (err, result, fields) => {
        if (err) throw err;
        res.json(result);
    });
});

app.get('/search/:desc', (req, res) => {
    const sqlUpdate = `SELECT * FROM blog_comments WHERE article_id = ${req.params.desc}`;
    db.query(sqlUpdate, (err, result, fields) => {
        if (err) throw err;
        res.json(result);
    });
});

app.get('/comment/:id', (req, res) => {
    const sqlUpdate = `SELECT * FROM blog_comments WHERE article_id = ${req.params.id}`;
    db.query(sqlUpdate, (err, result, fields) => {
        if (err) throw err;
        res.json(result);
    });
});

app.post('/insert/comment', (req, res) => {
    // const commentDesc = ;
    console.log(req.body);
    const sqlInsert = ` INSERT INTO blog_comments(comments_desc, article_id, user_id) VALUES ('${req.body.chatContext}',2,1)`;
    db.query(sqlInsert, (err, result, fields) => {
        if (err) throw err;
        res.json(result);
    });
    // res.send({ commentDesc });
});

// app.get('/')
