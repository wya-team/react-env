import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LoginActions from '@actions/login';
// 组件
import Form from '@components/Login/Form';
import Header from '@components/Login/Header';
import SetTitle from '@components/_common/SetTitle/SetTitle';
class App extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		const {
			login,
			actions
		} = this.props;
		return (
			<SetTitle title="登录" className="g-flex-cc g-fd-c" style={{ height: `100vh` }}>
				<Header />
				<Form actions={actions} />
			</SetTitle>
		);
	}
}

function mapStateToProps(state) {
	return {
		login: state.login
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(LoginActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);