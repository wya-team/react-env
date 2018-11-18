import 'babel-polyfill';
// 不兼容antd-mobile, 换cdn的fastclick
// import initReactFastclick from 'react-fastclick';
// initReactFastclick();
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from '../stores/root';
import { initialState } from '../stores/state';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, IndexRoute, Route, browserHistory, useRouterHistory, hashHistory } from 'react-router';
import { defineProperty } from '../utils/utils';

/**
 * 暴露唯一全局的量
 */
import './_global.js';

/**
 * Dev
 */
import DevTools from '@components/DevTools/DevTools';
import { DEBUG } from '../constants/constants';

/**
 * pages
 */
import { routeConfig } from './routes.js';

const store = createStore(initialState);

defineProperty(_global, 'history', syncHistoryWithStore(browserHistory, store));

class Root extends Component {
	constructor(props, context) {
		super(props, context);
	}
	componentDidCatch(error, info) {
		console.log(error, info);
	}
	render() {
		return (
			<Provider store={store}>
				<Fragment>
					<Router history={_global.history} routes={routeConfig} />
					{(DEBUG) ? <DevTools /> : null}
				</Fragment>
			</Provider>
		);
	}
}
render(<Root />, document.getElementById('pages'));

if (module.hot) { // 启用热更新
	module.hot.accept('./routes.js', () => {
		console.log('[HRM] routes.js Callback');
	});
}


