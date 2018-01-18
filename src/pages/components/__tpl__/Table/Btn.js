import React, { Component } from 'react';
import { Modal, Button, message } from 'antd';
import * as types from '@constants/actions/__tpl__';
class Btn extends Component {
	constructor(props) {
		super(props);
		this.handleSelectAll = ::this.handleSelectAll;
		this.handleSelectCancel = ::this.handleSelectCancel;
		this.handleDel = ::this.handleDel;
	}
	componentWillMount() {}
	handleSelectAll(){
		this.props.actions.itemSelectAll();
	}
	handleSelectCancel(){
		this.props.actions.itemSelectCancel();
	}
	handleDel(){
		const { selectArr } = this.props;
		if (selectArr.length == 0 ){
			message.error('请先选择', 1.5);
			return;
		} 
		Modal.confirm({
			title: '你确定要删除这些内容么?',
			content: '提示',
			onOk: () => {
				let url = types.TPL_TABLE_ITEM_DELETE;
				let param = {
					selectArr
				};
				let params = {
					param: param,
					ajaxType: 'DELETE',
					onSuccess: (res) => {
					},
					onError: (res) => {
					}
				};
				this.props.actions.request(url, params, {});
			},
			onCancel: () => {
				console.log('Cancel');
			},
		});
	}
	render() {
		return (
			<div>
				<Button 
					type="primary"
					onClick={this.handleSelectAll}
				>全选</Button>&nbsp;
				<Button
					onClick={this.handleSelectCancel}
				>取消</Button>&nbsp;
				<Button 
					type="danger"
					onClick={this.handleDel}
				>批量删除</Button>
			</div>
		);	
	}
}

export default Btn;