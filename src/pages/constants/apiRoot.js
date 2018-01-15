import { DEV_WITH_SERVER } from './constants';
import __tpl__ from './api/__tpl__';
import _common from './api/_common';
import login from './api/login';

const API = {
	...__tpl__,
	..._common,
	...login,
};

















let baseUrl;
/* global __DEV__ */
if (__DEV__) {
	// 开发环境
	if (!DEV_WITH_SERVER) { // 开发环境-前端自模拟
		baseUrl = 'http://localhost:3000/api';
	} else { // 开发环境-后端数据
		baseUrl = `${location.origin}/api`;
	}
} else {
	// 生产环境
	baseUrl = `${location.origin}`;
}
for (let i in API) {
	API[i] = baseUrl + API[i];
}
export default API;
