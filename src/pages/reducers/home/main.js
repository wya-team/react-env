import * as types from '../../constants/actions/home';
import { ROUTER_CHANGE } from '@constants/actions/_common';
const initialState = {
	isFetching: 0,      // 是否已经获取
	hasLoadOnce: 0, 	// 是否加载过一次
};
export const homeMain = (state = initialState, action) => {
	switch (action.type) {
		case types.HOME_MAIN_GET + '_SUCCESS':
			return {
				...state,
				isFetching: 1,
				hasLoadOnce: 1,
				...action.data
			};
		default:
			return state;
	}
};
