import React, { Component, Fragment } from 'react';
import { Button, message, Input } from 'antd';
import { getHashUrl } from '@utils/utils';

class Filter extends Component {
	constructor(...params) {
		super(...params);
		this.handleSearch = ::this.handleSearch;
	}
	handleSearch (event) {
		const value = this.refs.input$.input.value;
		// init
		this.props.actions.emit('TPL_TABLE_SEARCH_INIT');
		// url
		let url = getHashUrl('/tpl-pc/table', { keyword: value });
		_global.history.push(url);
	}
	render() {
		const {
			filter,
			actions,
			keyword
		} = this.props;
		return (
			<div className="g-flex g-fa-sb g-pd-10">
				<Input
					ref="input$"
					defaultValue={keyword || ''}
					onPressEnter={this.handleSearch}
				/>
				<Button 
					htmlType="submit"
					type="primary"
					onClick={this.handleSearch}
				>搜索</Button>
			</div>
		);
	}
}

export default Filter;