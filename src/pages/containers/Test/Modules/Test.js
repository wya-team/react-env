import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TestActions from '@actions/test';
import * as types from '@constants/actions/test';
// 公用组件
import SetTitle from '@components/_common/SetTitle/SetTitle';
// 业务组件
import  Header from '@components/Test/Header';

class Test extends Component {
	componentDidMount() {
		if (this.props.testMain.isFetching === 0) {
			let url = types.TEST_MAIN_GET;
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
				<Header />
			</div>
		);
	}
}

Test.propTypes = {};


function mapStateToProps(state) {
	return {
		testMain: state.testMain,
		testSecond: state.testSecond,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(TestActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);