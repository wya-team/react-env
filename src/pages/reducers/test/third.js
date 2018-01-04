import * as types from '@constants/actions/test';
const initialState = {
	isFetching: 0,      // 是否已经获取 
	didInvalidate: 1    // 是否失效
};
export const testThird = (state = initialState, action) => {
	switch (action.type) {
		case types.TEST_THIRD_ONE_GET + '_SUCCESS':
			return state;
		case types.TEST_THIRD_TWO_GET + '_SUCCESS':
			return state;
		case types.TEST_THIRD_THREE_GET + '_SUCCESS':
			return state;
		default:
			return state;
	}
};