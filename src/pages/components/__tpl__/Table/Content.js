import React, { Component } from 'react';
import { Button, Pagination } from 'antd';
import * as types from '@constants/actions/__tpl__';
import { Paging } from 'wya-rc';
import Item from './Item';

const title = [
	'选择',
	'编号',
	'标题',
	'封面图',
	'更新时间',
	'类目',
	'操作'
];
class Content extends Component {
	constructor(...params) {
		super(...params);
		this.loadDataForPaging = this.loadDataForPaging.bind(this); // 加载数据
	}
	loadDataForPaging(page) {
		const { listInfo, keyword } = this.props;
		const { itemArr } = listInfo;
		if (listInfo.isEnd > 0) { // 只有状态为0时才可以加载数据
			return false;
		}
		let url = types.TPL_TABLE_LIST_GET;
		let param = {
			page: page || 1,
			keyword
		};
		let params = {
			param: param,
			ajaxType: 'GET',
			onSuccess: (res) => {
			},
			onError: (res) => {
			}
		};
		this.props.actions.request(url, params, { setPage: itemArr[page] });
	}
	render() {
		const { listInfo, actions, resetPage, keyword } = this.props;
		const { isEnd, curPage, totalPage, itemArr, itemObj } = listInfo;

		const rowSelection = {
			
		};
		return (
			<Paging 
				title={title}
				isEnd={isEnd}
				curPage={curPage}
				totalPage={totalPage}
				dataSource={{ itemArr, itemObj }}
				actions={actions}
				keyword={keyword}
				loadDataForPaging={this.loadDataForPaging}
				resetPrvScrollTop={curPage}
				resetPage={resetPage}
				// renderRow={Item}
				renderRow={(props) => <Item {...props}/>}

				// 多选框
				rowSelection={{
					getCheckboxProps: (record) => ({
						disabled: record.id === 1,
						checked: record.id === 1,
					}),
					onChange: (selectedRowKeys, selectedRows) => { console.log(selectedRowKeys, selectedRows); }
				}}
			/>
		);
	}
}

export default Content;