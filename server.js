var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool= require('pg').Pool;

var config={
    user:'postgres',
    database:'postgres',
    host:'localhost',
    port:'5432',
    password:process.env.DB_PASSWORD
    
    
};
var app = express();
app.use(morgan('combined'));

var articles = {
   'article-one' :{
  title:'my hero academia',
  heading:'midoriya',
  content:`<p>
                he is the strongerst super heroews who is the best right now in my terms i like him alot he gives me a goosebumps         
            </p> <p>
                he is the strongerst super heroews who is the best right now in my terms i like him alot he gives me a goosebumps         
            </p> <p>
                he is the strongerst super heroews who is the best right now in my terms i like him alot he gives me a goosebumps         
            </p> <p>
                he is the strongerst super heroews who is the best right now in my terms i like him alot he gives me a goosebumps         
            </p> <p>
                he is the strongerst super heroews who is the best right now in my terms i like him alot he gives me a goosebumps         
            </p> <p>
                he is the strongerst super heroews who is the best right now in my terms i like him alot he gives me a goosebumps         
            </p>`
            
},
    'article-two':{title:'my hero academia',
  heading:'bakugo',
  content:`<p>
                he is the strongerst super heroews who is the best right now in my terms i like him alot he gives me a goosebumps         
            </p> <p>
                he is the strongerst super heroews who is the best right now in my terms i like him alot he gives me a goosebumps         
            </p> <p>
                he is the strongerst super heroews who is the best right now in my terms i like him alot he gives me a goosebumps         
            </p> <p>
                 
            </p>`}
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
var pool=new Pool(config);

app.get('/test-db',funtion (req,res){
//make a select request 
//return a response with the results
    pool.query('SELECT * from test',function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }
        else{
            res.send(JSON.stringify(result.rows));
        }
    });
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
var counter=0;
app.get('/counter',function(req,res){
counter=counter+1;
res.send(counter.toString());   
});
app.get('/heroacademia',function(req,res){
   res.sendFile(path.join(__dirname,'ui','heroacademia.html'));
});
var names=[];
app.get('/submit-name',function(req,res){
    var name=req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});
app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
