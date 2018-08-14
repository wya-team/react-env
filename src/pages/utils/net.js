/**
 * ajax
 * @param  {[type]} url     地址
 * @param  {[type]} method  请求类型
 * @param  {[type]} body    请求的参数
 * @param  {Object} options 扩展
 *
 */
import { ajaxFn } from 'wya-fetch';
const loadingFn = (msg) => {
};
const loadedFn = () => {
};
const beforeFn = (_opts) => {
	return new Promise((resolve, reject) => {
		// let token = { 
		// 	access_token: localStorage.getItem('token') || ''
		// };
		// resolve({
		// 	..._opts,
		// 	headers: {
		// 		..._opts.headers,
		// 		...token
		// 	}
		// });
		resolve();
	});
};
/**
 * 拦截response
 * 请求后立即执行，可以对response其他操作或者改写
 */
const afterFn =  (res) => {
	return new Promise((resolve, reject) => {
		// if (res.state) {
		// 	if (res.state === 'SUCCESS') {
		// 		resolve({
		// 			status: 1,
		// 			data: {
		// 				...res
		// 			}
		// 		});
		// 	} else {
		// 		resolve({
		// 			status: 0,
		// 			msg: res.state,
		// 			...res
		// 		});
		// 	}
		// 	return;
		// }

		// if (res.status === 0) {
		// 	$Message.error(res.msg);
		// 	resolve(); // 业务层的catch可以继续操作
		// } else {
		// 	resolve(); // 如果你要修改参数的话
		// }
		resolve();
	});
};
/**
 * 不接受 0/false, 1/true 状态
 */
const otherFn = (res) => {
	switch (res.status) {
		case -1:
			return;
		case -2:
			return;
		default :
			return;	
	}
};

const defaultOptions = {
	// onLoading: loadingFn,
	// onLoaded: loadedFn,
	// onBefore: beforeFn,
	// onAfter: afterFn,
	// onOther: otherFn
};
const ajax = ajaxFn(defaultOptions);
let net = {
	ajax
};
export default net;
