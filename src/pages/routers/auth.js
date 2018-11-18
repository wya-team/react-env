import { getItem, setItem, delItem } from '@utils/utils';
const UserLoggedIn = (nextState) => {
	let state = false; // 未登录
	let user = getItem(`user_${_global.version}`);
	if (user) {
		state = true;
	}
	return state;
};
export const redirectUserToLogin = (nextState, replace, callback) => {
	if (!UserLoggedIn(nextState)) { // 未登录
		replace('/login');
	}
	callback();
};
export const redirectUserToHome = (nextState, replace, callback) => {
	if (UserLoggedIn(nextState)) { // 已登录
		replace('/home');
	}
	callback();
};

/**
 * 设置登录状态，权限由各自模块单独管理
 * 1. 生成一个全局的用户信息_global
 * 2. 本地缓存LocalStorage登录user
 */

export const createLoginAuth = (data = {}, replace = true, opts = {}) => {
	_global.user = data;

	// 设置缓存
	replace && setItem(`user_${_global.version}`, data);
	// 页面跳转
	replace && _global.history.replace({ pathname: '/home' });
};
/**
 * 设置登录状态，权限由各自模块单独管理
 * 1. 清理_global
 * 2. 删除LocalStorage: user
 */
export const clearLoginAuth = (replace = true, opts = {}) => {
	_global.user = null;

	delItem(`user_${_global.version}`);

	// 页面跳转
	replace && _global.history.replace('/login');
};

