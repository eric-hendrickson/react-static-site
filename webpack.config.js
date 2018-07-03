const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const data = require('./data');
const path = require('path');

module.exports = {
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
		libraryTarget: 'umd',
		globalObject: "typeof self !== 'undefined' ? self : this",
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader',
                	'css-loader', 
                	'sass-loader',
				],
			},
			{ 
				test: /\.js$/,
				use: [
					'babel-loader',
				],
			},
			{ 
				test: /\.jsx$/, 
				use: [
					'babel-loader'
				],
			},
		],
	},
	plugins: [
		new StaticSiteGeneratorPlugin('main', data.routes, data),
		new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['build'] }
		}),
	]
}