import { DEV_WITH_SERVER } from './constants';
import _common from './api/_common';
import test from './api/test';
import login from './api/login';
import home from './api/home';

const API = {
	..._common,
	...test,
	...login,
	...home,
};

















let baseUrl;
/* global __DEV__ */
if (__DEV__) {
	// 开发环境
	if (!DEV_WITH_SERVER) { // 开发环境-前端自模拟
		baseUrl = 'http://localhost:3000/api';
	} else { // 开发环境-后端数据
		baseUrl = `${location.orgin}/api`;
	}
} else {
	// 生产环境
	baseUrl = `${location.orgin}`;
}
for (let i in API) {
	API[i] = baseUrl + API[i];
}
export default API;
