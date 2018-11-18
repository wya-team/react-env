if ("production" !== process.env.NODE_ENV) {
	module.exports = require('./root.dev');
} else {
	module.exports = require('./root.dist');
}