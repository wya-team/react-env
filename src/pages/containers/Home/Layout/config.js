export const getRoutes = () => {
	let config = [];
	let indexRoute = '/home/main';
	config = [
		{
			label: '首页',
			icon: 'icon-persons',
			router: '/home/main',
			show: true,
		},

	];
	return {
		indexRoute,
		config
	};
};
