import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LoginActions from '@actions/login';
// 组件
import Form from '@components/Login/Form';
import Header from '@components/Login/Header';

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
			<div>
				<Header />
				<Form actions={actions} />
			</div>
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