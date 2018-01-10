import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as creators from '@actions/__tpl__';
import * as types from '@constants/actions/__tpl__';
// 公用组件
import SetTitle from '@components/_common/SetTitle/SetTitle';
// 业务组件
import  Header from '@components/__tpl__/Header';

class Container extends Component {
	constructor(...params) {
		super(...params);
	}
	componentDidMount() {
		if (this.props.tplMain.isFetching === 0) {
			let url = types.TPL_MAIN_GET;
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
			<Fragment>
				<Header />
			</Fragment>
		);
	}
}

Container.propTypes = {};


function mapStateToProps(state) {
	return {
		tplMain: state.tplMain,
		tplSecond: state.tplSecond,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(creators, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);