var http = require('http');

var socket = require('socket.io');

var server = http.createServer(function(req,res){
	res.end('start')
})
var io = socket(server);
var text;
io.on('connection',function(socket){
	socket.on('message',function(data){
		console.log(data)
		io.sockets.emit('ret',data)
	})
	socket.on('isonce',function(data){
		io.sockets.emit('ret',data)
	})
	socket.on('clear',function(data){
		console.log(data)
		io.sockets.emit('clear','clear')
	})
	socket.on('ask',function(data){
		console.log(data)
		text = data;
	})
	socket.on('answer',function(data){
		console.log(data)
		if(data == text){
			io.sockets.emit('answer','right')
		}else{
			io.sockets.emit('answer','wrong')
		}
	})
	socket.on('vals',function(data){
		io.sockets.emit('vals',data)
	})
})

server.listen(8765);
console.log('开启成功')