const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'pug');
app.set('views', './views');

var posts = [
    {id:1, title: 'Nodejs cơ bản'},
    {id:2, title: 'Học vuejs'},
    {id:3, title: 'Javascrip'}
]
app.get('/', function(req, res){
    res.render('index', { posts: posts });
    console.log(1111);
})

app.get('/search', function(req, res){
    var id = req.query.id;
	var data = posts.filter(function(item){
        return item.id === parseInt(id)
    });
	res.render('index', {
		posts: data
    });
})

app.listen(port, function(error){
    if (error) {
        console.log("Something went wrong");
    }
    console.log("server is running port:  " + port);
})