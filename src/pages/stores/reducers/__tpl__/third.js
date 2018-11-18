const initialState = {
	isFetching: 0,      // 是否已经获取 
	didInvalidate: 1    // 是否失效
};
export const tplThird = (state = initialState, action) => {
	switch (action.type) {
		case 'TPL_THIRD_ONE_GET_SUCCESS':
			return state;
		case 'TPL_THIRD_TWO_GET_SUCCESS':
			return state;
		case 'TPL_THIRD_THREE_GET_SUCCESS':
			return state;
		default:
			return state;
	}
};