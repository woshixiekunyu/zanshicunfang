var express = require('express');

var mysql = require('mysql');

var bodyParse = require('body-parse')
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))

// var connection = mysql.createConnection({
// 	host:'localhost',
// 	user:'root',
// 	password:'',
// 	database:'news'
// });
// connection.connect();
// app.get('/',function(req,res){

// 	connection.query("select * from text",function(err,data){
// 		console.log(data)
// 	})
// 	res.send('初始页面')
// })
// app.get('/add',function(req,res){
// 	res.send('增加页面')
// })



app.post('/add/',function(req,res){
	res.append("Access-Control-Allow-Origin","*");
	// console.log(res.params)
	
	console.log(res.body)
	res.send('增加页面')

})
app.listen(4444)
console.log('成功')