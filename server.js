var express = require('express');//to create the web server//
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));//send the content of the file//
});



app.get('/article-one',function(req,res){        //adding url handling fn//
     res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));//article one page is requested here//
});

app.get('/article-two',function(req,res){
    res.send('article-two requested and served here');
});


app.get('/article-three',function(req,res){
    res.send('article three requested and served here');
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
                               