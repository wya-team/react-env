import React, { Component } from 'react';
import { Modal, Button, message, Input } from 'antd';
import * as types from '@constants/actions/__tpl__';
// 置顶
// 类目名称
// 类目级数
// 素材数
// 图片数
// 更新时间
// 操作

const keywordStyle = { color: "red", fontWeight: 'normal' };

class Item extends Component {
	constructor(props) {
		super(props);
		this.handleDel = ::this.handleDel;
		this.handleEdit = ::this.handleEdit;
		this.handlePut = ::this.handlePut;
		this.handleSelect = ::this.handleSelect;
	}
	componentWillMount() {}
	
	handleDel(){
		Modal.confirm({
			title: '你确定要删除这些内容么?',
			content: '',
			iconType: "",
			onOk: () => {
				let url = types.TPL_TABLE_ITEM_DELETE;
				let param = {};
				let params = {
					param: param,
					ajaxType: 'DELETE',
					onSuccess: (res) => {
					},
					onError: (res) => {
						message.error(res.msg, 1.5);
					}
				};
				this.props.actions.request(url, params, {});
			},
			onCancel: () => {
				// console.log('Cancel');
			},
		});
	}
	handleEdit(){
		Modal.confirm({
			title: '你确定要编辑这些内容么?',
			content: '',
			iconType: "",
			onOk: () => {
				let url = types.TPL_TABLE_ITEM_POST;
				let param = {};
				let params = {
					param: param,
					ajaxType: 'POST',
					onSuccess: (res) => {
					},
					onError: (res) => {
						message.error(res.msg, 1.5);
					}
				};
				this.props.actions.request(url, params, {});
			},
			onCancel: () => {
				// console.log('Cancel');
			},
		});
	}
	handlePut(){
		Modal.confirm({
			title: '你确定要更新这些内容么?',
			content: '',
			iconType: "",
			onOk: () => {
				let url = types.TPL_TABLE_ITEM_PUT;
				let param = {};
				let params = {
					param: param,
					ajaxType: 'PUT',
					onSuccess: (res) => {
					},
					onError: (res) => {
					}
				};
				this.props.actions.request(url, params, {});
			},
			onCancel: () => {
				// console.log('Cancel');
			},
		});
	}
	handleSelect() {
		const { itemData } = this.props;
		const { id } = itemData;
		this.props.actions.itemSelect(id);
	}
	render() {
		const { itemData = {}, actions, keyword, selectArr = [] } = this.props;
		const { id } = itemData;
		return (
			<tr>
				<td>
					<input 
						type="checkbox" 
						checked = {selectArr.includes(id)}
						onChange = {this.handleSelect}
					/>
				</td>
				<td>2</td>
				<td>3</td>
				<td>4</td>
				<td>5</td>
				<td>6</td>
				<td>
					<Button
						style={{ margin: 10 }}
						onClick={this.handleEdit}
					>编辑</Button>
					<Button
						style={{ margin: 10 }}
						onClick={this.handlePut}
					>更新</Button>
					<Button
						style={{ margin: 10 }}
						onClick={this.handleDel}
					>删除</Button>
				</td>
			</tr>
		);
	}
}

export default Item;