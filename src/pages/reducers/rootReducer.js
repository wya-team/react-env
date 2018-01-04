import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import test from './test/root';
import login from './login/root';
import home from './home/root';

const rootReducer = combineReducers({
	routing: routerReducer,
	...test,
	...login,
	...home,
});

export default rootReducer;
