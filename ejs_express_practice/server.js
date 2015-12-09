var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('pages/index');
})

app.get('/about', function(req, res){
    res.render('pages/about');
})

app.get('/pictures', function(req, res) {
    res.render('pages/pictures');
})
app.listen(8000);
console.log("Totes listening...");
