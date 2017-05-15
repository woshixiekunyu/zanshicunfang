
var fs = require('fs')

var data = '';

var readStream = fs.createReadStream('text.txt');

// readStream.setEncoding('UTF8')

// readStream.on('data',function(chunk){
// 	data += chunk;
// })

// readStream.on('end',function(){
// 	console.log(data)
// })
// readStream.on('error',function(err){
// 	console.log(err.stack)
// })

// var datas = '一个有资源有意义跨时代的网站：https://www.avav67.com/htm/index.htm''
var writeStream = fs.createWriteStream('news.bat');
	readStream.pipe(writeStream)
// writeStream.write(datas,'UTF8');

writeStream.on('finish',function(){
	console.log('成功写入')
})
