import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import __tpl__ from './__tpl__/root';
import login from './login/root';

const rootReducer = combineReducers({
	routing: routerReducer,
	...__tpl__,
	...login,
});

export default rootReducer;
