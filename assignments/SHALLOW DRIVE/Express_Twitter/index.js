var express = require("express");
var bodyParser = require("body-parser");
var tweets = [
    {
        name: "digitizer",
        tweet: "This is a cool piece of information."
    },
    {
        name: "M0SH",
        tweet: "@digitizer I agree."
    }
]
var app = express();

var port = 3000;


app.use(bodyParser.urlencoded());
app.use(express.static('public'));

app.get('/getTweets' , function(req,res) {
    res.json(tweets);

});

app.post('/', function(req,res) {
    console.log(req.body);
    tweets.push(req.body);
    res.redirect('/')
})

app.listen(port);