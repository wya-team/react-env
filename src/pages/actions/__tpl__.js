import * as types from '../constants/actions/__tpl__';
/**
 * 引入共用的action
 * ajax
 */
export { request } from './_common/request';

export const itemSearch = (keyword) => {
	return {
		type: types.TPL_TABLE_SEARCH_INIT,
		keyword
	};
};
export const itemSelect = (id) => {
	return {
		type: types.TPL_TABLE_ITEM_SELECT,
		id
	};
};
export const itemSelectAll = () => {
	return {
		type: types.TPL_TABLE_ITEM_SELECT_ALL,
	};
};
export const itemSelectCancel = () => {
	return {
		type: types.TPL_TABLE_ITEM_SELECT_CANCEL,
	};
};


