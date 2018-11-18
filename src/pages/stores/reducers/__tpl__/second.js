const initialState = {
	isFetching: 0,      // 是否已经获取 
	didInvalidate: 1    // 是否失效
};
export const tplSecond = (state = initialState, action) => {
	switch (action.type) {
		case 'TPL_SECOND_GET_ON':
			return state;
		case 'TPL_SECOND_GET_SUCCESS':
			return state;
		case 'TPL_SECOND_GET_ERROR':
			return state;
		default:
			return state;
	}
};