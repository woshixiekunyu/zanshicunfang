console.log('start');

var a=1;
function cb(callback){
	a=2;
	callback(a)
	console.log('c')
}

cb(function(){
	console.log(a)
})

