import { createStore, compose, applyMiddleware } from 'redux';
import { Router, Route, browserHistory, hashHistory, useRouterHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { persistState } from 'redux-devtools';
import DevTools from '@components/DevTools/DevTools';
import api from '../middleware/api';
import { DEBUG } from '../constants/constants';


const reduxRouterMiddleware = routerMiddleware(browserHistory);

function getDebugSessionKey() {
	const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
	return (matches && matches.length > 0) ? matches[1] : null;
}

let finalCreateStore = null;
if (DEBUG) {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
	if (composeEnhancers) {
		finalCreateStore = composeEnhancers(
			applyMiddleware(thunk, api, reduxRouterMiddleware),
			persistState(getDebugSessionKey())
		)(createStore);
	} else  {
		finalCreateStore = compose(
			applyMiddleware(thunk, api, reduxRouterMiddleware),
			DevTools.instrument(),
			persistState(getDebugSessionKey())
		)(createStore);
	}
} else {
	finalCreateStore = compose(
		applyMiddleware(thunk, api, reduxRouterMiddleware)
	)(createStore);
}

export default function configureStore(initialState) {
	const store = finalCreateStore(rootReducer, initialState);

	// 热替换选项
	if (module.hot) {
		module.hot.accept('../reducers/rootReducer', () => {
			const nextRootReducer = require('../reducers/rootReducer').default;
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
}
