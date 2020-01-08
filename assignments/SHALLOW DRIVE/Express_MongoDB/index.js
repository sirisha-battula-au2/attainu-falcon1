var express = require("express");
var bodyParser = require("body-parser");
var mongoClient = require('mongodb').MongoClient;

mongoClient.connect('mongodb://127.0.0.1:27017', function(err, client) {
    if (err) throw err;
    db = client.db('students');
})   


var app = express();

var port = 3000;


app.use(bodyParser.urlencoded());
app.use(express.static('public'));

app.get('/getTweets' , function(req,res) {
    db.collection('tweets').find().toArray(function(err,result) {
    res.json(result);
    })
});

app.post('/', function(req,res) {
    console.log(req.body);
    db.collection('tweets').insert(req.body, function(err, result) {
    res.redirect('/');
    });
})


app.listen(port);