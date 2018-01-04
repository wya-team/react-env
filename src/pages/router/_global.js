/**
 * 全部变量初始化及使用
 */
import ReactDOM from 'react-dom';
import { getItem, setItem, delItem, getCookie, getDevice, parseUrl, getUrlParam, defineProperty } from '../utils/utils';
typeof window === "object" ? window.BROWSER = true : window.BROWSER = false;
/**
 * 主要目的是禁止随意操作全局对象
 */
let GLOBAL_OBJECT = new Proxy({}, {
	get: (obj, key) => {
		if (!(key in obj)) {
			throw new Error(`${key} isn't in _global`);
		}
		return obj[key];
	},
	set: (obj, key, value) => {
		console.log(key);
		if (key in obj){
			obj[key] = value;
			return true;
		};
		throw new Error(`_global had inited, so you can't add key with '${key}'`);
	}
});
BROWSER ? window._global = GLOBAL_OBJECT : this._global = GLOBAL_OBJECT;
BROWSER ? window.__DEV__ = process.env.NODE_ENV : this.__DEV__ = process.env.NODE_ENV;
/**
 * hack
 * 移动端的延迟 location
 */
defineProperty(_global, 'tag', false);
/**
 * 环境
 */
defineProperty(_global, 'env', process.env.NODE_ENV);
/**
 * 缩放比例
 */
defineProperty(_global, 'scale', 1);
/**
 * 全局状态
 */
defineProperty(_global, 'config', {});
/**
 * 用于缓存的版本的管理
 */
defineProperty(_global, 'version', '1.0');
/**
 * 记忆滚动
 */
defineProperty(_global, 'scroll', {});
/**
 * ios中微信支付的坑
 * 获取第一次加载的页面pathname值
 */
defineProperty(_global, 'landingPage', location.pathname);
/**
 * ios中微信分享的坑
 * 已修复，可以无视
 */
defineProperty(_global, 'landingSharePage', `${location.origin}${location.pathname}${location.search}`);
/**
 * GUID
 */
defineProperty(_global, 'GUID', location.host.split(".")[0]);
/**
 * APIS组件的清理
 * @return {}     
 */

defineProperty(_global, 'APIS', {});

/**
 * 设备信息状态
 */
defineProperty(_global, 'device', getDevice());
defineProperty(_global, 'innerWidth', BROWSER ? window.innerWidth : 0);
defineProperty(_global, 'innerHeight', BROWSER ? window.innerHeight : 0);
defineProperty(_global, 'initApis', () => {
	for (let i in _global.APIS) {
		// console.log('remove apis:'+i);
		if (_global.APIS[i] && _global.APIS.hasOwnProperty(i)) {
			ReactDOM.unmountComponentAtNode(_global.APIS[i]);
			document.body.removeChild(_global.APIS[i]);
			delete _global.APIS[i];
		}
	}
});

/**
 * 如果带#号键，用hashchange
 */
window.addEventListener('popstate', function(e) {
	/**
	 *清理缓存
	 */
	delItem('sku_goods');
	delItem('sku_selected');
	// 页面初始化，卸载组件，同样不使得存在内存中；
	_global.initApis();
}, false);


