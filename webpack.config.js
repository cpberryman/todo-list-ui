var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/src/main/index.html',
	filename: 'index.html',
	inject: 'body'
});
module.exports = {
	entry: __dirname + '/src/main/index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude : /node_modules/,
				use: 'babel-loader'
			}
		]
	},
	output: {
		filename: 'app.js',
		path: __dirname + '/src/main/built'
	},
	plugins: [HTMLWebpackPluginConfig]
};
