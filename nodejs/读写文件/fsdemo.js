

//引入模fs块
var fs = require('fs');

console.log('start');

// fs.readFile('text.txt',function(err,data){
// 	console.log(err,data.toString())
// });
var res = fs.readFileSync('text.txt');
console.log(res.toString())
