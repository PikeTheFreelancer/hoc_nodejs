const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const mysql = require('mysql');

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'pug');
app.set('views', './views');

var conn = mysql.createConnection({
    host :'localhost',
    user : 'root',
    password : 'nghia123',
    database: 'hoc_nodejs',
    charset : 'utf8mb4_general_ci'
 });

// var sql = "create table posts" +
// " (id int not null AUTO_INCREMENT," +
// " title varchar(225)," +
// " PRIMARY KEY (id) )";

conn.connect(function (err){
    if(err)
    {
        throw err.stack;
    }
    else
    console.log("connect success");
})

// conn.query(sql, function(err) {
//     if(err)
//     {
//         throw err;

//     }
//     else
//     console.log("Create table success");
// })

app.get('/', function(req, res){
    var sql='SELECT * FROM posts';
    conn.query(sql, function (err, data, fields) {
        res.render('index', {
            posts: data
        });
    });
})

app.get('/search', function(req, res){
    var id = parseInt(req.query.id);
    if (id) {
        var sql=`SELECT * FROM posts where id = '${id}'`;
    } else {
        var sql=`SELECT * FROM posts`;
    }
    conn.query(sql, function (err, data, fields) {
        res.render('index', {
            posts: data
        });
    });
})

app.get('/create', function(req, res){
    res.render('create', {
    });
})

app.post('/create', function (req, res) {
    // console.log(req.body)
    var params =req.body.title;
    var sql = `insert into posts(title) values('${params}');`;
    conn.query(sql, function (err, result) {
        if (err)    console.log(err);
        console.log("1 record inserted");
      });
    res.redirect('/');
 })

app.get('/edit', function (req, res) {
    var sql = `SELECT * FROM posts where id = '${req.query.id}'`;
    conn.query(sql, function (err, data, fields) {
        res.render('post-details', {
            posts: data
        });
    });
})

app.post('/edit', function (req, res) {
    var id = parseInt(req.body.id);
    var title = req.body.title;
    var sql = `update posts set title = '${title}' where id = ${id};`;
    conn.query(sql, function (err, data, fields) {
        if (err)    console.log(err);
        console.log("1 record inserted");
    });
    res.redirect('/')
})

app.get('/delete', function (req, res) {
    var post_id = parseInt(req.query.id);
    var sql = `DELETE FROM posts WHERE id = '${post_id}'`;
    conn.query(sql, function (err, data, fields) {
    });
    res.redirect('/');
})

app.listen(port, function(error){
    if (error) {
        console.log("Something went wrong");
    }
    console.log("server is running port:  " + port);
})