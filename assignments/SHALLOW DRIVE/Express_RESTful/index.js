var express = require("express");
var bodyParser  =  require("body-parser");
var app = express();

app.use(bodyParser.json());

// add numbers
app.post('/add',function(req,res){
	console.log(req.body.num1);
	res.json({
		"num1" : req.body.num1,
		"num2": req.body.num2,
		"result": parseFloat(req.body.num1) + parseFloat(req.body.num2)

	});
	})


// subtract numbers
app.post('/subtract',function(req,res){
	console.log(req.body.num1);
	res.json({
		"num1" : req.body.num1,
		"num2": req.body.num2,
		"result": parseFloat(req.body.num1) - parseFloat(req.body.num2)

	});
	})

// multiply numbers

app.post('/multiply',function(req,res){
	console.log(req.body.num1);
	res.json({
		"num1" : req.body.num1,
		"num2": req.body.num2,
		"result": parseFloat(req.body.num1) * parseFloat(req.body.num2)

	});
	})


// divide numbers
app.post('/divide',function(req,res){
	console.log(req.body.num1);
	res.json({
		"num1" : req.body.num1,
		"num2": req.body.num2,
		"result": parseFloat(req.body.num1) / parseFloat(req.body.num2)

	});
	})



app.listen(3000);