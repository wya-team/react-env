import { redirectUserToLogin, redirectUserToHome } from '../../router/auth';
import Nav from './Modules/Nav/Nav';
export const testConfig = [
	{
		path: '/test',
		component: Nav,
		childRoutes: [
			{
				path: 'main',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('./Modules/Test').default);
					});
				}
			},
			{
				path: 'second',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('./Modules/TestSecond').default);
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
								cb(null, require('./Modules/TestThirdOne').default);
							});
						}
					},
					{
						path: 'two',
						getComponent: (nextState, cb) => {
							require.ensure([], (require) => {
								cb(null, require('./Modules/TestThirdTwo').default);
							});
						}
					},
					{
						path: 'three',
						getComponent: (nextState, cb) => {
							require.ensure([], (require) => {
								cb(null, require('./Modules/TestThirdThree').default);
							});
						}
					},
				]
			},
			{
				path: '*',
				onEnter: (nextState, replace) => replace('/test/main')
			}
		]
	}
];