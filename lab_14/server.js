//server.js
//load the things we need
var express = require('express');
var app = express();

//set he view enjine to ejs
app.set('view engine','ejs');

//use res.render to load up an ejs viw fil
// index page
app.get('/',function(req, res){
    res.render('pages/index');
});

//about page 
app.get('/about',function(req, res){
    res.render('pages/about')
});

app.listen(8080);
console.log('8080 is the mgic port');