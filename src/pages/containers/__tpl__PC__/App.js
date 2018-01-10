// import { redirectUserToLogin, redirectUserToHome } from '../../router/auth';
import Layout from './Modules/Layout/Layout';
export const tplPCConfig = [
	{
		path: '/tpl-pc',
		component: Layout,
		childRoutes: [
			{
				path: 'main',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('./Modules/Tpl').default);
					});
				}
			},
			{
				path: 'second',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('./Modules/TplSecond').default);
					});
				}
			},
			{
				path: 'third',
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
				path: '*',
				onEnter: (nextState, replace) => replace('/tpl/main')
			}
		]
	}
];