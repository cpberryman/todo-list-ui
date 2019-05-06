const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/app.js',
    output: {
      path: path.resolve('./src'),
      filename: "main.js",
    },
    devServer: {
      contentBase: './src',
      hot: true
    },
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
		path: __dirname + '/build'
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: __dirname + '/src/index.html',
			filename: 'index.html',
			inject: 'body'
		}),
	]
};
