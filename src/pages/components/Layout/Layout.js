import React, { Component, Fragment } from 'react';
import { Layout, Menu, Icon, message } from 'antd';
import Aside from './Aside';
// redux 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LayoutActions from '@actions/layout';
import * as typesLogin from '@constants/actions/login';
import { delCookie } from '@utils/utils';
function mapStateToProps(state) {
	return {
		layoutMain: state.layoutMain
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(LayoutActions, dispatch)
	};
}

// decorator
export default (options = {}) => function createDecorator(LeftNav, TopNav) {
	class LayoutDecorator extends Component {
		constructor() {
			super();
			this.state = {
				// 是否折叠
				collapsed: false
			};
		}
		handleToggle = () => {
			this.setState({
				collapsed: !this.state.collapsed,
			});
		};
		handleSignOut = () => {
			message.destroy();
			message.loading('提交中...', 0);

			let url = typesLogin.LOGIN_OUT_POST;
			let param = {};

			let params = {
				param: param,
				ajaxType: 'DELETE',
				onSuccess: (res) => {
					message.destroy();
					delCookie('userManage');
					_global.history.push('/login');
				},
				onError: (res) => {
					message.destroy();
					message.error(res.msg, 1.5);
				}
			};
			// console.log(this.props.actions);
			this.props.actions.request(url, params, {});
		}
		render() {
			const { location: { pathname }, actions } = this.props;
			const { collapsed } = this.state;
			return (
				<div style={{ height: _global.innerHeight }}>
					<Layout className="ant-layout-has-sider g-ant-layout">
						<Aside path={pathname} collapsed={collapsed} component={LeftNav} actions={actions}/>
						<Layout className="g-ant-layout" id="contents">
							<Layout.Header className="g-flex g-bg-white g-ai-c g-pd" style={{ background: "white" }}>
								{ 
									TopNav 
										? (
											<TopNav 
												collapsed={collapsed}
												onToggle={this.handleToggle}
												onSignOut={this.handleSignOut}
											/>
										) 
										: (
											<Fragment>
												<div className="g-col" style={{ marginLeft: -25 }}>
													<Icon
														className="trigger"
														type={collapsed ? 'menu-unfold' : 'menu-fold'}
														onClick={this.handleToggle}
													/>
												</div>
												<div className="g-tr">
													<div onClick={this.handleSignOut} className="g-blue g-cp">
														退出登录
													</div>
												</div>
											</Fragment>
										)
								}
							</Layout.Header>
							<Layout.Content style={{ margin: '10px 10px 0 10px', overflow: 'initial', height: _global.innerHeight - 64, overflow: "auto" }}>
								{this.props.children}
							</Layout.Content>
						</Layout>
					</Layout>
				</div>
			);
		}
	};
	return connect(mapStateToProps, mapDispatchToProps)(LayoutDecorator);
};

