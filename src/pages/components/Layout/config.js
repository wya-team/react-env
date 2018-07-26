export const getRoutes = () => {
	let indexRoute = '/404';
	let config = [];
	config = [
		{
			label: '首页',
			icon: 'icon-home',
			router: '/home',
			show: true
		}
	];
	return {
		config
	};
};
