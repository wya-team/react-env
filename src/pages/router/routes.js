// import { redirectToLogin, redirectToIndex, redirectVerifyBelong } from './auth';
// import { tplConfig } from '../containers/__tpl__/App';
// import { tplPCConfig } from '../containers/__tpl__PC__/App';
import { loginConfig } from '../containers/Login/App';

export const routeConfig = [
	/**
	 * 模版部分
	 */
	// ...tplConfig,
	// ...tplPCConfig,
	// -- end --
	
	// 登录首页
	...loginConfig,
	// ...tplMobileConfig,
	// 授权回来后给后端发起请求
	{
		path: '/auth',
		// onEnter: redirectToIndex
	},
	// error
	{
		path: '*',
		onEnter: (nextState, replace) => replace('/login')
	}
];
