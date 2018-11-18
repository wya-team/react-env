/**
 * 根级别actions
 * 不在声明其他私有的actions
 */
export const navigator = () => {
	return {
		type: 'ROUTER_CHANGE'
	};
};

export const request = (apiName, params, opts = {}, requiredFields = []) => {
	return (dispatch, getState) => {
		let action = {
			'API': {
				apiName: apiName,
				params: params,
				opts: opts
			},
			type: 'API_REQUEST'
		};
		return dispatch(action);
	};
};

/**
 * 相当于dispath
 * 一律使用这个
 */
export const emit = (type, param = {}) => {
	if (!type) return console.error('必传type');
	return {
		...param,
		type
	};
};
