var fs = require('fs');

var zlib = require('zlib');

// var readStream = fs.createReadStream('vedio/kk 2017-04-17 14-06-21.avi');

// var writeStream = fs.createWriteStream('vedio/12.avi');
// readStream.pipe(writeStream)

// writeStream.on('finish',function(){
// 	console.log('完成')
// })

// fs.createReadStream('vedio/kk 2017-04-17 14-06-21.avi')
// .pipe(zlib.createGzip())
// .pipe(fs.createWriteStream('vedio/3.avi.gz'))

fs.createReadStream('text.txt')
// .pipe('news.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('test.txt.gz'))