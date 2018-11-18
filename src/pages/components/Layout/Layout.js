import React, { Component, Fragment } from 'react';
import { Layout, Menu, Icon, message } from 'antd';
import Aside from './Aside';
// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as creators from '@stores/actions';
import { delCookie } from '@utils/utils';
import Top from './TopNav';
import Left from './LeftNav';
const asideStyle = {
	overflowY: 'auto',
	background: '#001529',
	marginRight: 8,
	boxShadow: `0 10px 6px rgba(0,0,0,.1)`,
	position: 'fixed',
	top: 0,
	bottom: 0,
	left: 0,
	zIndex: 4,
};

const headerStyle = { 
	background: "white",
	position: 'fixed', 
	top: 0, 
	left: 210, 
	right: 0,
	zIndex: 10
};

const contentStyle = {
	paddingRight: 10,
	paddingLeft: 210,
	paddingTop: 66
};

// decorator
export default (opts = {}) => (LeftNav = Left, TopNav = Top) => {
	const { id, path, footer, getRoutes } = opts;
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
				<div className="g-reset-antd g-reset">
					<Layout className="ant-layout-has-sider g-ant-layout">
						<Aside 
							path={pathname} 
							collapsed={collapsed} 
							component={LeftNav} 
							actions={actions} 
							getRoutes={getRoutes}
							style={asideStyle}
						/>
						<Layout className="g-ant-layout" id="contents">
							<Layout.Header className="g-flex g-bg-white g-ai-c g-pd"  style={headerStyle}>
								{
									TopNav
										? (
											<TopNav
												collapsed={collapsed}
												onToggle={this.handleToggle}
												onSignOut={this.handleSignOut}
												pathname={pathname}
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
							<Layout.Content style={contentStyle}>
								{this.props.children}
							</Layout.Content>
						</Layout>
					</Layout>
				</div>
			);
		}
	};
	return connect(
		state => state.layoutMain, 
		dispatch => ({ actions: bindActionCreators(creators, dispatch) })
	)(LayoutDecorator);
};

