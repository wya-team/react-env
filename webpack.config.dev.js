process.env.NODE_ENV = 'development';
const path = require('path');
const node_modules = path.resolve(__dirname, 'node_modules');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { commonConfig, localIp, localPort } = require('./webpack.config.common');

let webpackConfig = {
	plugins: [
		/**
		 * 输出html
		 */
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/static/index.tpl.html'),
			chunks: ['common', 'main'], // 当前路由所包含的模块，注意common引入方式
			inject: 'body',
			filename: './index.html'
		}),
		/**
		 * 开发环境
		 */
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
			__DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
		}),
		/**
		 * 友好提示
		 */
		new FriendlyErrorsWebpackPlugin({
			compilationSuccessInfo: {
				messages: [`Dev Server: http://${localIp}:${localPort}`],
				notes: [`Success!`]
			},
			onErrors: function (severity, errors) {
			},
			clearConsole: true,
			additionalFormatters: [],
			additionalTransformers: []
		})
		/**
		 * 热更新 同--hot
		 */
		// new webpack.HotModuleReplacementPlugin()
	]
};

module.exports = webpackMerge(
	commonConfig,
	webpackConfig
);