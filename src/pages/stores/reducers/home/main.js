const initialState = {
	isFetching: 0, // 是否已经获取
	didInvalidate: 1, // 是否失效
};
export const homeMain = (state = initialState, action) => {
	switch (action.type) {
		case 'HOME_MAIN_GET_SUCCESS':
			return state;
		default:
			return state;
	}
};
