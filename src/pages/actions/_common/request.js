import * as types from '../../constants/actions/_common';
/**
 * api->ajax
 * @param   apiName        触发action的type（actionType）
 * @param   params         传给服务器的参数
 * @param   opts           本地数据：一：前端使用。二：如果传递localData就不会发起ajax了
 * @param   requiredFields 
 * @return                 next
 */
export function request(apiName, params, opts = {}, requiredFields = []) {
	return (dispatch, getState) => {
		let action = {
			'API': {
				apiName: apiName,
				params: params,
				opts: opts
			},
			type: types.API_REQUEST
		};
		return dispatch(action);
	};
}
// export const request = (apiName, params, opts = {}, requiredFields = []) => {
// 	return {
// 		'API': {
// 			apiName: apiName,
// 			params: params,
// 			opts: opts
// 		},
// 		type: types.API_REQUEST
// 	};
// };
