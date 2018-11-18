import { initPage, initItem } from '@utils/utils';

const initialState = {
	...initPage,
	resetPage: 0,
};
export const tplTable = (state = initialState, action) => {
	let curPage, totalPage, items, id, selectArr;
	switch (action.type) {
		case 'TPL_TABLE_LIST_GET_ON':
			state = {
				...state,
				isEnd: 1
			};
			return state;
		
		case 'TPL_TABLE_LIST_GET_SUCCESS':
			curPage = action.param.page; // 当前页
			totalPage = action.data.totalPage; // 后端给的字段
			items = initItem(action.data.list, 'id');
			state = {
				...state,
				curPage,
				totalPage,
				itemArr: { ...state.itemArr, [curPage]: [...items.itemArr] },
				itemObj: { ...state.itemObj, ...items.itemObj },
				isEnd: 0,
				resetPage: curPage // 这里设置当前页
			};
			return state;
		case 'TPL_TABLE_LIST_GET_SETPAGE':
			curPage = action.param.page;
			state = {
				...state,
				curPage,
				resetPage: curPage // 这里设置当前页
			};
			return state;
		case 'TPL_TABLE_LIST_GET_ERROR':
			state = {
				...state,
				isEnd: 3
			};
			return state;
		/**
		 * 更新, 当前页刷新
		 */
		case 'TPL_TABLE_ITEM_PUT_SUCCESS':
			return {
				...initialState,
				resetPage: state.curPage
			};
		/**
		 * 搜索，修改, 删除, 回首页刷新
		 */
		case 'TPL_TABLE_SEARCH_INIT':
		case 'TPL_TABLE_ITEM_POST_SUCCESS':
		case 'TPL_TABLE_ITEM_DELETE_SUCCESS':
			return {
				...initialState
			};
		default:
			return state;
	}
};