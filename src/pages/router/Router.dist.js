import 'babel-polyfill';
// 不兼容antd-mpbile, cdn引入fastclick
// import initReactFastclick from 'react-fastclick';
// initReactFastclick();
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configureStore from '../stores/configureStore';
import { initialState } from '../stores/stores';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, IndexRoute, Route, browserHistory, useRouterHistory, hashHistory } from 'react-router';
import { defineProperty } from '../utils/utils';

/**
 * 暴露唯一全局的量
 */
import './_global.js';

/**
 * pages
 */
import { routeConfig } from './routes.js';

const store = configureStore();

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
				<div>
					<Router history={_global.history} routes={routeConfig} />
				</div>
			</Provider>
		);
	}
}
render(<Root />, document.getElementById('pages'));


