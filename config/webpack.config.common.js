console.log(`NODE_ENV : ${process.env.NODE_ENV}`);
const APP_ROOT = process.cwd();
const ENV_IS_DEV = process.env.NODE_ENV === 'development';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const userConfig = require('./user.config.js') || {};

const localPort = ((addPath) => {
	if (ENV_IS_DEV) {
		return userConfig.port || 8088;
	} else {
		return 9098;
	}
})();
const localIp = (() => {
	let ips = [];
	let os = require('os');
	let ntwk = os.networkInterfaces();
	for (let k in ntwk) {
		for (let i = 0; i < ntwk[k].length; i++) {
			let _add = ntwk[k][i].address;
			if (_add && _add.split('.').length == 4 && !ntwk[k][i].internal && ntwk[k][i].family == 'IPv4') {
				ips.push(ntwk[k][i].address);
			}
		}
	}
	return ips[0] || 'localhost';
})();
const postcssLoader = {
	loader: 'postcss-loader',
	options: {
		config: {
			path: path.resolve(APP_ROOT, 'config/postcss.config.js')
		}
	}
};
const webpackConfig = {
	target: "web", // <=== 默认是 'web'，可省略
	resolve: {// 重定向路径
		mainFiles: ['index.web', 'index'],
		modules: [path.resolve(APP_ROOT, 'src'), 'node_modules'],
		extensions: ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.less', '.scss'],
		alias: {
			// 依赖
			'react/lib': path.resolve(APP_ROOT, 'node_modules/react/lib'),
			'react': path.resolve(APP_ROOT, 'node_modules/react/cjs/react.production.min.js'),
			'react-router': path.resolve(APP_ROOT, 'node_modules/react-router/umd/ReactRouter.min.js'),
			'react-dom/server': path.resolve(APP_ROOT, 'node_modules/react-dom/server'),
			'react-dom/cjs': path.resolve(APP_ROOT, 'node_modules/react-dom/cjs'),
			'react-dom': path.resolve(APP_ROOT, 'node_modules/react-dom/cjs/react-dom.production.min.js'),
			'react-redux': path.resolve(APP_ROOT, 'node_modules/react-redux/dist/react-redux.min.js'),
			'react-router-redux': path.resolve(APP_ROOT, 'node_modules/react-router-redux/dist/ReactRouterRedux.min.js'),
			'redux-thunk': path.resolve(APP_ROOT, 'node_modules/redux-thunk/dist/redux-thunk.min.js'),
			'rc-form/lib': path.resolve(APP_ROOT, 'node_modules/rc-form/lib'),
			'rc-form': path.resolve(APP_ROOT, 'node_modules/rc-form/dist/rc-form.min.js'),
			'redux/lib': path.resolve(APP_ROOT, 'node_modules/redux/lib'),
			'redux': path.resolve(APP_ROOT, 'node_modules/redux/dist/redux.min.js'),
			'immutable': path.resolve(APP_ROOT, 'node_modules/immutable/dist/immutable.min.js'),
			'babel-polyfill': path.resolve(APP_ROOT, 'node_modules/babel-polyfill/dist/polyfill.min.js'),
			'lrz': path.resolve(APP_ROOT, 'node_modules/lrz/dist/lrz.all.bundle.js'),
			// 其他
			'pure-render-decorator': path.resolve(APP_ROOT, 'src/pages/utils/pure-render-decorator'),
			// '@'								: path.resolve(APP_ROOT, 'src/pages'),
			'@common': path.resolve(APP_ROOT, 'src/pages/components/_common'),
			// 主端
			'@actions': path.resolve(APP_ROOT, 'src/pages/actions'),
			'@components': path.resolve(APP_ROOT, 'src/pages/components'),
			'@constants': path.resolve(APP_ROOT, 'src/pages/constants'),
			'@utils': path.resolve(APP_ROOT, 'src/pages/utils'),
		}
	},
	entry: {
		main: path.resolve(APP_ROOT, 'src/pages/main.js')
	},
	output: {
		path: path.resolve(APP_ROOT, 'dist'),
		filename: 'js/[name].[hash:8].bundle.js',  // 每个页面对应的主js的生成配置
		chunkFilename: 'js/[name].[hash:8].chunk.js',  // chunk生成的配置
		sourceMapFilename: 'js/[name].[hash:8].bundle.map',
		/**
		 * html引用路径
		 * publicPath: ENV_IS_DEV ? './' : 'https://cdn.example.com/'
		 */
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: [
					/**
					 * 在node_modules的文件不被babel理会
					 */
					path.resolve(APP_ROOT, 'node_modules'),
				],
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true // 启用编译缓存
						}
					}
				]
			},
			{
				test: /\.(css|scss)$/,
				use: ['style-loader', 'css-loader', postcssLoader, 'sass-loader'],
				include: [
					// 需要引入antd-mobile，后续可以等它支持2.x做修改
					path.resolve(APP_ROOT, "node_modules"),
					path.resolve(APP_ROOT, "")
				]
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					postcssLoader,
					{
						loader: "less-loader",
						options: {
							javascriptEnabled: true
						}
					}
				],

			},
			{
				test: /\.scss$/,
				include: [path.resolve(APP_ROOT, "src/css")],
				exclude: [path.resolve(APP_ROOT, "node_modules"), path.resolve(APP_ROOT, "src/pages")],
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', postcssLoader, 'sass-loader']
				})
			},
			{
				test: /\.(png|jpg|gif|eot|ttf|woff|woff2|svg)$/,
				loader: 'url-loader',
				options: {
					limit: 10000
				}
			},
			{
				test: /\.html$/i,
				use: 'html-loader'
			}
		]
	},
	optimization: {
		// 默认关闭压缩
		minimize: ENV_IS_DEV ? false : JSON.parse(process.env.UGLIFY_JS),
		// 原：NamedModulesPlugin()
		namedModules: true,
		// 原：NoEmitOnErrorsPlugin() - 异常继续执行
		noEmitOnErrors: true,
		// 原：ModuleConcatenationPlugin() - 模块串联 - dev模式下回影响antd（比如：Pagination, 和语言有关）
		concatenateModules: !ENV_IS_DEV,
		// 原：CommonsChunkPlugin()
		splitChunks: {
			name: true,
			cacheGroups: {
				commons: {
					test: chunk => {
						const modules = [
							'babel-polyfill',
							'react',
							'react-dom',
							'react-redux',
							'react-router',
							'react-router-redux',
							// 'react-fastclick',
							'redux',
							'redux-thunk',
							'classnames',
							'immutable',
							'lodash', // 这个用的地方偏多
						];
						// new RegExp(`([\\\\/]+)node_modules([\\\\/]+)`) -> /([\\\/]+)node_modules([\\\/]+)/
						let isInModules = modules.some(i => (new RegExp(`([\\\\/]+)node_modules([\\\\/_]+)${i}`)).test(chunk.resource));
						return chunk.resource
							&& /\.js$/.test(chunk.resource)
							&& isInModules;
					},
					name: 'common',
					chunks: 'all',
				}
			}
		},
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'css/initial.[name].[hash:8].css',
			allChunks: true
		}),
	]
};
const defaultConfig = {
	// cheap-module-eval-source-map 原始源码（仅限行）
	// cheap-eval-source-map 转换过的代码（仅限行）// 重构建比较好
	devtool: ENV_IS_DEV ? 'cheap-module-eval-source-map' : undefined,
	resolve: {
		extensions: ['.jsx', '.js']
	},
	devServer: {
		host: localIp,
		contentBase: "/",
		port: localPort,
		inline: true,
		// compress: true, // gzip
		stats: 'errors-only',
		historyApiFallback: true,
		watchOptions: {
			aggregateTimeout: 100,
			poll: 500,
			ignored: /node_modules/
		},
		// proxy: {
		// 	"/api": {
		// 		target: "http://test.com",
		// 		pathRewrite: {"^/api" : ""}
		// 	}
		// },
		hot: true, // 同--hot
	},
	node: {
		global: true,
		crypto: 'empty',
		__dirname: true,
		__filename: true,
		Buffer: true,
		clearImmediate: false,
		setImmediate: false
	},
	// 启用编译缓存
	cache: true,
};

module.exports = {
	APP_ROOT,
	localIp,
	localPort,
	commonConfig: webpackMerge(
		webpackConfig,
		defaultConfig
	)
};
