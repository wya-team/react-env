import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as creators from '@actions/__tpl__';
import * as types from '@constants/actions/__tpl__';
import Content from '@components/__tpl__/Table/Content';
import Filter from '@components/__tpl__/Table/Filter';
import SetTitle from '@components/_common/SetTitle/SetTitle';
class Container extends Component {
	constructor(...params) {
		super(...params);
	}
	componentDidMount() {
		this.loadData(this.props);
	}
	loadData($props){
		return;
		const { tplTable: { info } } = $props; 
		if (info.isFetching === 0) {
			let url = types.TPL_TABLE_INFO_GET;
			let param = {};

			let params = {
				param: param,
				ajaxType: 'GET',
				onSuccess: (res) => {
				},
				onError: (res) => {
				}
			};
			$props.actions.request(url, params, {});
		}
	}
	render() {
		// const { 
		// 	locationBeforeTransitions: { 
		// 		locationBeforeTransitions: { query } 
		// 	} } = this.props.routing;
		const { resetPage, tplTable, actions, location: { query } } = this.props;
		const { info, keyword, ...listInfo } = tplTable || {};
		const _keyword = keyword || query.keyword;

		console.log(listInfo);
		return (
			<Fragment>
				<Filter actions={actions} keyword={_keyword}/>
				<Content 
					listInfo={listInfo}
					keyword={_keyword}
					actions={actions}
					resetPage={resetPage}
				/>
			</Fragment>
		);
	}
}

function mapStateToProps(state) {
	return {
		tplMain: state.tplMain,
		tplTable: state.tplTable,
		// routing: state.routing,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(creators, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);