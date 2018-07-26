import * as types from '@constants/actions/__tpl__';
import { initPage, initItem } from '@utils/utils';

// export const initPage = {
// 	curPage: 0, //当前页数
// 	totalPage: 1, //总页数
// 	pageSize: 10, //条数
// 	isEnd: 0, //是否正在加载 0 上拉加载，1为加载中，2为已全部加载,3数据异常
// 	itemArr: {},
// 	itemObj: {},
// };
const initialState = {
	...initPage,
	selectArr: [],
	keyword: '',
	info: {
		isFetching: 0
	}
	
};
export const tplTable = (state = initialState, action) => {
	let curPage, totalPage, items, id, selectArr;
	switch (action.type) {
		case types.TPL_TABLE_LIST_GET + '_ON':
			state = {
				...state,
				// keyword: action.param.keyword,
				isEnd: 1
			};
			return state;
		
		case types.TPL_TABLE_LIST_GET + '_SUCCESS':
			curPage = action.param.page; // 当前页
			totalPage = action.data.totalPage; // 后端给的字段
			items = initItem(action.data.list, 'id');
			state = {
				...state,
				curPage,
				totalPage,
				itemArr: { ...state.itemArr, [curPage]: [...items.itemArr] },
				itemObj: { ...state.itemObj, ...items.itemObj },
				selectArr: [], // 初始化选择
				isEnd: 0
			};
			return state;
		case types.TPL_TABLE_LIST_GET + '_SETPAGE':
			state = {
				...state,
				curPage: action.param.page,
				selectArr: []
			};
			return state;
		case types.TPL_TABLE_LIST_GET + '_ERROR':
			state = {
				...state,
				isEnd: 3
			};
			return state;
		/**
		 * 选择
		 */
		case types.TPL_TABLE_ITEM_SELECT:
			id = action.id;
			if (state.selectArr.includes(id)){
				selectArr = state.selectArr.filter(item => item != action.id);
			} else {
				selectArr = [...state.selectArr, action.id];
			}
			state = {
				...state,
				selectArr: [...selectArr]
			};
			return state;
		case types.TPL_TABLE_ITEM_SELECT_ALL:
			curPage = state.curPage;
			state = {
				...state,
				selectArr: state.itemArr[curPage]
			};	
			return state;
		case types.TPL_TABLE_ITEM_SELECT_CANCEL:
			state = {
				...state,
				selectArr: []
			};	
			return state;
		/**
		 * 更新
		 */
		case types.TPL_TABLE_ITEM_EDIT_PUT + '_SUCCESS':
			// to do ...
			// return state;
		/**
		 * 修改
		 */
		case types.TPL_TABLE_ITEM_EDIT_POST + '_SUCCESS':
			// to do ...
			// return state;
		/**
		 * 搜索，删除
		 * @type {[type]}
		 */
		case types.TPL_TABLE_SEARCH_INIT:
			return {
				...initialState,
				keyword: action.keyword
			};
		case types.TPL_TABLE_ITEM_DELETE + '_SUCCESS':
			return {
				...initialState
			};
		default:
			return state;
	}
};