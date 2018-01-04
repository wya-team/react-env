import React, { Component } from 'react';
import {
	Form,
	Input,
	Button,
	message,
	Icon,
	Checkbox,
} from 'antd';
import * as types from '@constants/actions/login';
import { setCookie, dataValidity } from '@utils/utils';
import { createForm } from 'rc-form';
import './Form.scss';
import Verification from './VerificationCode';

const FormItem = Form.Item;
const formItemLayout = {
	labelCol: {
		xs: {
			span: 24
		},
		sm: {
			span: 6
		},
	},
	wrapperCol: {
		xs: {
			span: 24
		},
		sm: {
			span: 14
		},
	},
};
const tailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0,
		},
		sm: {
			span: 14,
			offset: 6,
		},
	},
};
const formStyle = {
	width: 400,
	margin: '0 auto'
};
@createForm()
class LoginForm extends Component {
	constructor(props, context) {
		super(props, context);
		this.handleSubmit = ::this.handleSubmit;
	}
	handleSubmit(event) {
		event.preventDefault();
		const { validateFields } = this.props.form;
		validateFields((err, values) => {
			if (!err) {
				const password = values.password;
				const userName = values.userName;
				const verification = values.verification;
				
				message.destroy();
				message.loading('提交中...', 0);

				let url = types.LOGIN_MAIN_POST;
				let param = {
					name: userName,
					password: password
				};

				let params = {
					param: param,
					ajaxType: 'POST',
					onSuccess: (res) => {
						message.destroy();
						setCookie('userManage', { token: param.name });
						_global.history.push('/home/list');
					},
					onError: (res) => {
						message.destroy();
						message.error(res.msg, 1.5);
					}
				};
				this.props.actions.request(url, params, {});

			} else {
				for (let key in err){
					message.error(err[key].errors[0].message, 1.5);
					break;
				}
			}
		});
	}
	render() {
		const { getFieldProps, getFieldError } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit} className="v-login-form" style={formStyle}>
				<FormItem {...formItemLayout}>
					<Input placeholder="账号"
						style={{ marginLeft: '37%' }}
						{...getFieldProps('userName', {
							initialValue: '',
							rules: [
								{
									required: true,
									name: "账号",
									validator: dataValidity
								}
							]
						})}
						prefix={<Icon type="user" style={{ fontSize: 13 }} />}
						
					/>
				</FormItem>
				<div>
					<FormItem {...formItemLayout}>
						<Input 
							style={{ marginLeft: '37%' }}
							{...getFieldProps('password', {
								initialValue: '',
								rules: [
									{
										required: true,
										name: "密码",
										validator: dataValidity
									}
								]
							})} 
							type="password" 
							placeholder="密码"
							prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
						/>
						
					</FormItem>
				</div>
				


				<FormItem {...tailFormItemLayout} style={{ textAlign: 'center' }}>
					<Button 
						type="primary" 
						htmlType="submit" 
						className="login-form-button" 
						style={{ width: '100%', background: "#404040", border: "none", marginLeft: '-13%' }}
					>登录</Button>
					
				</FormItem>
				
			</Form>
		);
	}
}
export default LoginForm;