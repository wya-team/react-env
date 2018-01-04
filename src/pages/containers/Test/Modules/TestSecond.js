import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as creators from '@actions/test';
import * as types from '@constants/actions/test';
import Content from '@components/Test/Second/Content';
import SetTitle from '@components/_common/SetTitle/SetTitle';
class Container extends Component {
	componentDidMount() {
		if (this.props.testSecond.isFetching === 0) {
			let url = types.TEST_SECOND_GET;
			let param = {};

			let params = {
				param: param,
				ajaxType: 'GET',
				onSuccess: (res) => {
				},
				onError: (res) => {
				}
			};
			this.props.actions.request(url, params, {});
		}
	}
	render() {
		return (
			<div>
				<Content />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		testMain: state.testMain,
		testSecond: state.testSecond,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(creators, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);