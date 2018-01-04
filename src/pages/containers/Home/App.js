// import { redirectToLogin } from '../../router/auth';
export const homeConfig = [
	{ 
		path: 'home',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('./Modules/Home').default);
			});
		},
		// onEnter: redirectToLogin
	}	
];