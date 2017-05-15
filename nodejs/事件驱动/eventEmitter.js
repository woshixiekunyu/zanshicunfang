
//引入事件驱动模块
var events = require('events');

//创建数据驱动函数

var eventEmitter = new events.EventEmitter();

//事件驱动
eventEmitter.on('event1',function(){
	setTimeout(function(){
		console.log(1)
		eventEmitter.emit('event2')
	},1000)
});
eventEmitter.on('event2',function(){
	console.log(2)
	eventEmitter.emit('event3')
});
eventEmitter.on('event3',function(){
	setTimeout(function(){
		console.log(3)
		
	},500)
});
eventEmitter.emit('event1')