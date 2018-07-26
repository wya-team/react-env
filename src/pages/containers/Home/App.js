import { redirectUserToLogin, redirectUserToHome } from '@router/auth';
import Layout from './Layout/Layout';
export const homeConfig = [
	{
		path: '/home',
		component: Layout,
		childRoutes: [
			{
				path: 'main',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('./Modules/HomeMain').default);
					});
				},
				// onEnter: redirectUserToHome
			},
		]
	},
];
