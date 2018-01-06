import * as types from '../constants/actions/layout';
/**
 * 引入共用的action
 * ajax
 */
export { request } from './_common/request';

export const initHomeMain = () => {
	return {
		type: types.LOYOUT_HOME_MAIN_INIT
	};
};


