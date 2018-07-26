import * as types from '@constants/actions/__tpl__';
const initialState = {
	isFetching: 0,      // 是否已经获取 
	didInvalidate: 1    // 是否失效
};
export const tplSecond = (state = initialState, action) => {
	switch (action.type) {
		case types.TPL_SECOND_GET + '_ON':
			return state;
		case types.TPL_SECOND_GET + '_SUCCESS':
			return state;
		case types.TPL_SECOND_GET + '_ERROR':
			return state;
		default:
			return state;
	}
};