import React, { Component } from 'react';
import { Modal, Button, message, Input, Checkbox } from 'antd';
// 置顶
// 类目名称
// 类目级数
// 素材数
// 图片数
// 更新时间
// 操作

const keywordStyle = { color: "red", fontWeight: 'normal' };

class Item extends Component {
	constructor(...params) {
		super(...params);
	}
	componentWillMount() {}
	
	handleDel = () => {
		Modal.confirm({
			title: '你确定要删除这些内容么?',
			content: '',
			iconType: "",
			onOk: () => {
				let url = 'TPL_TABLE_ITEM_DELETE';
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
	handleEdit = () => {
		Modal.confirm({
			title: '你确定要编辑这些内容么?',
			content: '',
			iconType: "",
			onOk: () => {
				let url = 'TPL_TABLE_ITEM_POST';
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
	handlePut = () => {
		Modal.confirm({
			title: '你确定要更新这些内容么?',
			content: '',
			iconType: "",
			onOk: () => {
				let url = 'TPL_TABLE_ITEM_PUT';
				let param = {};
				let params = {
					param: param,
					ajaxType: 'PUT',
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
	render() {
		const { itemData = {}, actions, keyword, selectArr = [], rowSelection } = this.props;
		const { id } = itemData;
		return (
			<tr>
				{rowSelection &&
					<td>
						<Checkbox
							disabled={rowSelection.disabled}
							checked={rowSelection.checked}
							onChange={rowSelection.onChange}
						/>
					</td>
				}
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