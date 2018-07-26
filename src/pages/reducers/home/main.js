import * as types from '@constants/actions/home';
const initialState = {
	isFetching: 0, // 是否已经获取
	didInvalidate: 1, // 是否失效
};
export const homeMain = (state = initialState, action) => {
	switch (action.type) {
		case types.HOME_MAIN + '_GET':
			return state;
		default:
			return state;
	}
};
