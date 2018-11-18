import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as creators from '@stores/actions';
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
			let url = 'TPL_TABLE_INFO_GET';
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
		const { locationBeforeTransitions: { query } } = this.props.routing;
		const { tplTable, actions } = this.props;
		return (
			<Fragment>
				<Filter actions={actions} query={query}/>
				<Content 
					listInfo={tplTable}
					actions={actions}
				/>
			</Fragment>
		);
	}
}

function mapStateToProps(state) {
	return {
		routing: state.routing,
		tplTable: state.tplTable,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(creators, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);