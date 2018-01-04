import * as types from '@constants/actions/test';
const initialState = {
	isFetching: 0,      // 是否已经获取 
	didInvalidate: 1    // 是否失效
};
export const testMain = (state = initialState, action) => {
	switch (action.type) {
		case types.TEST_MAIN_GET + '_ON':
			return state;
		case types.TEST_MAIN_GET + '_SUCCESS':
			return state;
		case types.TEST_MAIN_GET + '_ERROR':
			return state;
		default:
			return state;
	}
};