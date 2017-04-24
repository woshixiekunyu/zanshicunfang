
//引入http模块
var http = require('http');
// console.log(http)
//引入路由参数
var url = require('url');

var querystring = require('querystring')
//引入数据库模块
var mysql = require("mySQL");

var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'news'
})
connection.connect();
http.createServer(function(request,response){
	response.setHeader('Access-Control-Allow-Origin','*')
	// console.log(request)
	//获取路由参数
	var allparams = url.parse(request.url).query

	//截取属性和属性值片段
	var params = querystring.parse(allparams)
	// console.log(request)
	var pathname = url.parse(request.url).pathname;
	switch(pathname){

		//增
		case "/add":
			connection.query("insert into text (title,content,channel_id,channel) values('" + params.title + "','" + params.content + "','" + params.channel_id + "','" + params.channel + "')",function(err,data){
				if(err){
					throw err
				}else{
					connection.query("select * from text",function(err,data){
						if(err){
							throw err
						}else{
							// var news = {};

							//data => array
							var news = {};
							news.newlists = data;
							response.end(JSON.stringify(news));
							// console.log(data)
							// response.end(JSON.stringify(params))
						}
					})
				}
			})
			break;
		//查
		case "/select":
			connection.query("select * from text",function(err,data){
				if(err){
					throw err
				}else{
					// var news = {};

					//data => array
					var news = {};
					news.newlists = data;
					response.end(JSON.stringify(news));
					// console.log(data)
					// response.end(JSON.stringify(params))
				}
			})
			break;
		//删
		case "/delete":
			connection.query("delete from text where id = " + params.id,function(err,data){
				if(err){
					throw err
				}else{
					connection.query("select * from text",function(err,data){
						if(err){
							throw err
						}else{
							// var news = {};

							//data => array
							var news = {};
							news.newlists = data;
							response.end(JSON.stringify(news));
							// console.log(data)
							// response.end(JSON.stringify(params))
						}
					})
				}
			})
			break;
	}

}).listen(7654)
console.log('开启')