// import { redirectToLogin, redirectToIndex, redirectVerifyBelong } from './auth';
import Nav from '../components/Nav/Nav';
import { testConfig } from '../containers/Test/App';
import { homeConfig } from '../containers/Home/App';

export const routeConfig = [
	// 首页
	...testConfig,
	// 主站页面
	{ 
		path: '/p/',
		// onEnter: (nextState, replace) => replace('/login'),
		component: Nav,
		childRoutes: [
			// 
			...homeConfig,
		]

	},
	// 授权回来后给后端发起请求
	{
		path: '/auth',
		// onEnter: redirectToIndex
	},
	// error
	{
		path: '*',
		onEnter: (nextState, replace) => replace('/p/home')
	}
];
