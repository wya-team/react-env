import React, { Component } from 'react';
import PropTypes from 'prop-types';
// redux相关
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as creators from '@actions/home';
import * as types from '@constants/actions/home';
// 公用组件

import SetTitle from '@common/SetTitle/SetTitle';

// 业务组件
// import Content from '@components/Home/Content';

// @createEcharts({})
class Container extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount() {
		if (this.props.homeMain.isFetching === 0) {
			let url = types.HOME_MAIN_GET;
			let param = {};
			let params = {
				param: param,
				ajaxType: 'GET',
				onSuccess: (res) => {
				},
				onError: (res) => {
					Toasts.info(res.msg, 1.5);
				}
			};
			// this.props.actions.request(url, params, {});
		}
	}
	componentWillUnmount() {
		// this.props.actions.navigator();
	}
	render() {
		const { homeMain, actions } = this.props;
		return (
			<SetTitle>
				test
			</SetTitle>
		);
	}
}

Container.propTypes = {};

function mapStateToProps(state) {
	return {
		homeMain: state.homeMain
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(creators, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
