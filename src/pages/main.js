import '../css/global.scss';
if ("production" !== process.env.NODE_ENV) {
	module.exports = require('./router/Router.dev');
} else {
	module.exports = require('./router/Router.dist');
}

