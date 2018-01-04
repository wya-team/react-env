import { redirectUserToLogin, redirectUserToHome } from '../../router/auth';
export const loginConfig = [
	{
		path: '/login',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('./Modules/Login').default);
			});
		},
		onEnter: redirectUserToHome
	}
];