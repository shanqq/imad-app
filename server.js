var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var NARUTO={
    title:'NARUTO STORY',
    heading:'NARUTO THE SEVENTH HOKAGE OF THE KONOHA VILLAGE',
    image:'https://i.pinimg.com/736x/0d/0a/e2/0d0ae232516060efe6b2fd463dafd151--naruto-uzumaki-anime-naruto.jpg',
    content:`<p>
                Naruto Uzumaki (うずまきナルト, Uzumaki Naruto) is a shinobi of Konohagakure. He became the jinchūriki of the Nine-Tails on the day of his birth — a fate that caused him to be shunned by most of Konoha throughout his childhood . AfterjoiningTeamKakashi, Naruto worked hard to gain the village's acknowledgement all the while chasing his dream  to become Hokage. In thefollowing years, through many hardships and ordeals, he became a capable ninja regarded as a  heroboth by the villagers,and soon after, the rest of the world, becoming known as the Hero of the Hidden Leaf (木ノ葉隠れの英雄, Konohagakure noEiyū, Literally meaning: Hero of the Hidden Tree Leaves). He soon proved to be one ofthe  main factors in winning the Fourth Shinobi World War, leading him to achieve his dream and become the village's Seventh Hokage (七代目火影,NanadaimHokage, Literally meaning: Seventh Fire Shadow).
            </p> `
};
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

app.get('/heroacademia',function(req,res){
   res.send(createTemplate(NARUTO)); 
});

app.get('/SASUKE',function(req,res){
    res.sendFle(path.join(__dirname,'ui','SASUKE.html'));
});

app.get('/BORUTO',function(req,res){
  res.sendFile(path.join(__dirname,'ui','BORUTO.html'));
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
