const initialState = {
	isFetching: 0,
	avatar: ""
};
export const configAvatar = (state = initialState, action) => {
	switch (action.type) {
		case 'CONFIG_AVATAR_GET_SUCCESS':
			state = {
				...state,
				isFetching: 1,
				avatar: ''
			};
			return state;
		case 'CONFIG_AVATAR_POST_SUCCESS':
			state = {
				...state,
				avatar: ''
			};
			return state;
		default:
			return state;
	}
};