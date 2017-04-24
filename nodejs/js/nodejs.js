
//引入http
var http = require('http');

//路由解析参数
var url = require('url');

//创建服务器
http.createServer(function(request,response){
	response.setHeader('Access-Control-Allow-Origin','*');
	var obj = {
		name:'wscats',
		age:88
	}
	response.end(JSON.stringify(obj))
}).listen(23456);
console.log('开启服务器')