import React, { Component } from 'react';
import * as types from '@constants/actions/login';
import { createForm } from 'rc-form';
import VerificationCode from './VerificationCode'; 
@createForm()
class LoginForm extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div className="g-flex-cc g-bg-white g-fd-c g-jc-sb" style={{ height: 120 }}>
				<input type="text"/>
				<input type="password"/>
				<VerificationCode />
			</div>
		);
	}
}
export default LoginForm;