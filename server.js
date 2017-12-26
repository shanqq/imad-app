var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


 function createTemplate(data){
    var title=data.title;
     var heading=data.heading;
     var content=data.content;
var htmltemplate=`
<html>
    <head>
        <title>
        ${title}   
        </title>
    <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container"> 
        <div>
            <a href="/"> HOME </a>
        </div>
        <hr/>
        <div >
            <h3>
              ${heading}
            </h3>
            <img src="https://i.pinimg.com/736x/0d/0a/e2/0d0ae232516060efe6b2fd463dafd151--naruto-uzumaki-anime-naruto.jpg">
        </div>
        <div>
            ${content}
        </div>    
        </div>
    </body>
</html>


`;
return htmltemplate;
}   

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/articletwo',function(req,res){
    res.sendFile(path.join(__dirname,'ui','articletwo.html'));
});
app.get('/articleone',function(req,res){
   res.sendFile(path.join(__dirname,'ui','articleone.html'));
});

app.get('/heroacademia',function(req,res){
   res.sendFile(path.join(__dirname,'ui','heroacademia.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
