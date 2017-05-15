//引入
//require();
//导出
//module.exports;
module.exports = {
	//入口文件 最好指向根目录下的一个js文件
	entry: "./main.js",
	//导出文件
	output: {
		//导出文件的路径
		path: __dirname + "/public",
		//将要导出文件的名字
		filename: "bundle.js"
	},
	//加载器
	//loader 用来转换文件的格式
	module: {
		loaders: [{
			//匹配js后缀的文件，把它转化为JS等格式
			//npm install --save-dev babel-loader
			//npm install --save-dev babel-core babel-preset-es2015 //安装babel  实现 ES6 到 ES5
			test: /\.js$/,
			loader: "babel-loader"
		}, {
			test: /\.css$/,
			loader: "css-loader"
		}, {
			test: /\.html$/,
			loader: "html-loader"
		}]
	},
	//vue2.0加上这句，然后暴露全局的vue函数
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js',
		}
	},
	//配置服务器 实现热更新
	//cnpm install -g webpack-dev-server
	devServer:{
		//wampp  www
		//xampp htdocs
		contentBase:"./public",//服务器要加载页面的路径
		// port: 12345,
		inline: true//实时更新
	}
	//执行命令webpack-dev-server打开服务器
}