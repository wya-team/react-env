import net from '../utils/net';
import API_ROOT from '../constants/apiRoot';
const middlewareApi = store => next => action => {
	let API_OPT = action['API'];

	if (!API_OPT) {
		return next(action);
	}

	let ACTION_TYPE = action['type'];
	let { apiName, params = {}, opts = {} } = API_OPT;
	/**
	 * 如果有传递localData，就不会触发ajax了，直接触发_success
	 * 当前也可以传其他参数
	 */
	let { 
		localData,
		requestOnStop, // 是否需要出发请求_ON
		setPage,
		noLoading,
		pullToRefresh,
		redirectActionType // 重定向actionType
	} = opts;
	let {
		onSuccess,
		onError,
		onProgress,
		ajaxType = 'GET',
		param
	} = params;
	// 触发下一个action
	let nextAction = function(type, param, opts) {
		action['type'] = type;
		action['opts'] = opts;
		delete param['onSuccess'];
		delete param['onError'];
		const nextRequestAction = Object.assign({}, action, param);
		return nextRequestAction;
	};

	params = {
		...params,
		data: null
	};
	let result;
	// 触发正在请求的action
	if (setPage){
		return next(nextAction(`${redirectActionType || apiName}_SETPAGE`, params, opts));
	}
	if (!pullToRefresh && !requestOnStop) { // 下拉刷新和禁止_ON跳过
		result = next(nextAction(apiName + '_ON', params, opts));
	};
	result = net.ajax({
		url: API_ROOT[apiName],
		type: ajaxType,
		param,
		localData, 
		noLoading: param.page === undefined ? noLoading : true
	}).then(data => {
		params = { // 由于后端格式是status:1,data:{}
			...params,
			data: data.data
		};
		//  触发请求成功的action
		pullToRefresh 
			? next(nextAction(`${redirectActionType || apiName}_REFRESH`, params, opts))
			: next(nextAction(`${redirectActionType || apiName}_SUCCESS`, params, opts));
		onSuccess && onSuccess(data);
	}).catch(data => {
		next(nextAction(`${redirectActionType || apiName}_ERROR`, params, opts));
		onError && onError(data);
	});
	return result;
};

export default middlewareApi;