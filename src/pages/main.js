import '../css/global.scss';
if ("production" !== process.env.NODE_ENV) {
	module.exports = require('./routers/Router.dev');
} else {
	module.exports = require('./routers/Router.dist');
}