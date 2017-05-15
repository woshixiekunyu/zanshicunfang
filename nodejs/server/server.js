
//引入http服务器
var http = require('http');
//引入fs模块
var fs = require('fs');

//引入路由参数
var url = require('url');

var querystring = require('querystring')


http.createServer(function(request,response){
	var paramsStr = url.parse(request.url).query;

	var pathName = url.parse(request.url).pathname;
	// console.log(pathName)
	var dir = './www/';
	var num = "123";
	fs.readFile(dir+pathName.substr(1),function(err,data){
		console.log(pathName.substr(1))
		if(pathName = "/favicon.ico"){
			response.end(data.toString())
		}else{
			// response.end(data.toString())
		}
		
	})
	
}).listen(44446)
console.log('开启')