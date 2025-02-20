//server.js
//load the things we need
var express = require('express');
var app = express();

//set he view enjine to ejs
app.set('view engine','ejs');

//use res.render to load up an ejs viw fil
// index page
//app.get('/',function(req, res){
 //   res.render('pages/index');
//});
app.get('/', function(req,res){
    var drinks= [
        {name: 'Bloody Mary', drunknes:3},
        {name: 'Martini', drunknes:5},
        {name: 'Scotch', drunknes:10},
    ]
    var tagline= "any code of your own that you havent looked at for six or mre months might as well have been written by someone else.";

    res.render('lab-14/index',{
        drinks: drinks,
        tagline: tagline
    });
});

//about page 
app.get('/about',function(req, res){
    res.render('lab-14/about')
});

app.listen(8080);
console.log('8080 is the magic port');