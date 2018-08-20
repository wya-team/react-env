import React, { Component } from 'react';
import * as types from '@constants/actions/login';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { createLoginAuth } from '@router/auth';
import { hot } from 'react-hot-loader';
@Form.create()
class Login extends React.Component {
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				createLoginAuth(values);
			}
		});
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit} className="login-form">
				<Form.Item>
					{
						getFieldDecorator('userName', {
							rules: [
								{
									required: true,
									message: '请输入你的用户名!'
								}
							],
						})(
							<Input
								prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
								placeholder="请输入你的用户名"
							/>
						)
					}
				</Form.Item>
				<Form.Item>
					{
						getFieldDecorator('password', {
							rules: [
								{
									required: true,
									message: '请输入你的密码!'
								}
							],
						})(
							<Input
								prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
								type="password"
								placeholder="请输入你的密码"
							/>
						)
					}
				</Form.Item>
				{
					// <Form.Item>
					// 	{
					// 		getFieldDecorator('remember', {
					// 			valuePropName: 'checked',
					// 			initialValue: true,
					// 		})(
					// 			<Checkbox>记住登录</Checkbox>
					// 		)
					// 	}
					// 	<a className="login-form-forgot" href="">忘记密码？</a> 或 <a href="">注册!</a>
					// </Form.Item>
				}
				<Button type="primary" htmlType="submit" className="login-form-button">
					登录
				</Button>
			</Form>
		);
	}
}
export default hot(module)(Login);
