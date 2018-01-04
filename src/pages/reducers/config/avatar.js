import * as types from '@constants/actions/config';

const initialState = {
	isFetching: 0,
	avatar: ""
};
export const configAvatar = (state = initialState, action) => {
	switch (action.type) {
		case types.CONFIG_AVATAR_GET + '_SUCCESS':
			state = {
				...state,
				isFetching: 1,
				avatar: ''
			};
			return state;
		case types.CONFIG_AVATAR_POST + '_SUCCESS':
			state = {
				...state,
				avatar: ''
			};
			return state;
		default:
			return state;
	}
};