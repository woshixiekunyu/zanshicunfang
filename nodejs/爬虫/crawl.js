
//引入操作数据的模块
var fs = require('fs');

//引入数据库模块
var mysql = require('mysql');

//创建连接数据库
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'img'
})
connection.connect();
// console.log('连接成功')
//引入http创建服务器
var http = require('http');

//引入node的库模块
var cheerio = require('cheerio');

function downloadImag(url,callback){
	http.get(url,function(res){
		var data = '';
		res.on('data',function(chunk){
			data+=chunk;
		})
		res.on('end',function(){
			callback(data)
		})
	})
}

downloadImag('http://www.mzitu.com/12409',function(data){
	var $ = cheerio.load(data);

	var imgArr = [];
	$('img').each(function(index,ele){
		// console.log($(ele).attr('src'))

		// connection.query("insert into meinv (title,content) values ('"+$(ele).attr('src')+"','"+$(ele).attr('alt')+"')",function(){

		// })

		imgArr.push($(ele).attr('src'))
	})
	// console.log(imgArr)
	load(imgArr)
})
var i=0;
function load(imgArr){
	// var imgArr = imgArr;
	console.log(imgArr[i])
	var writeStream = fs.createWriteStream('./img/'+i+'.png')
	http.get(imgArr[i],function(res){
		res.pipe(writeStream)
		if(i<imgArr.length-1){
			i++;
			load(imgArr);
		}else{
			return;
		}
	})
}