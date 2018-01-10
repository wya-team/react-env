// import { redirectUserToLogin, redirectUserToHome } from '../../router/auth';
export const tplConfig = [
	{
		path: '/tpl',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('./Modules/Tpl').default);
			});
		}
	},
	{
		path: '/tpl/second',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('./Modules/TplSecond').default);
			});
		}
	},
	{
		path: '/tpl/third',
		childRoutes: [
			{
				path: 'one',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('./Modules/TplThirdOne').default);
					});
				}
			},
			{
				path: 'two',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('./Modules/TplThirdTwo').default);
					});
				}
			},
			{
				path: 'three',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('./Modules/TplThirdThree').default);
					});
				}
			},
		]
	},
	{
		path: '/tpl/*',
		onEnter: (nextState, replace) => replace('/tpl/main')
	}
];