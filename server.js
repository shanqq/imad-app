var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/NARUTO',function(req,res){
   res.send('NARUTO THE SEVENTH HOKAGE OF THE KONOHA VILLAGE'); 
});

app.get('/SASUKE',function(req,res){
    res.send('SASUKE THE ONLY UCHICHA ALIVE AFTER ITACHI KILLED ALL THE MEMBER OF THE UCHICHA');
});

app.get('/BORUTO',function(req,res){
  res.send('BORUTO THE SON OF THE SEVENTH HOKAGE OF KONOHA VILLAGE');
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
