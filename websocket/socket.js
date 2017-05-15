var http = require('http');

var socket = require('socket.io');

var server = http.createServer(function(req,res){
	res.end('start')
})
var io = socket(server);

io.on('connection',function(socket){
	socket.on('message',function(data){
		console.log(data)
		io.sockets.emit('abc',data)
	})
})

server.listen(8877)
console.log('ok')