import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router';
import createLayout from '@components/Layout/Layout';
@createLayout({ path: "home", footer: false })
class Nav extends Component {
	constructor(props){
		super(props);
	}
	handleInitList = (e) => {
		e.preventDefault();
		this.props.actions.initHomeMain();
		_global.history.replace("/p/home");
	}
	render() {
		// 注意，这里的props是createNav中管理的
		const { menuProps } = this.props;
		return (
			<Menu {...menuProps}>
				<Menu.Item key="/p/home">
					<Link to={'/p/home'} onClick={this.handleInitList}>
						<Icon type="switcher" />
						<span className="_nav-text">项目列表</span>
					</Link>
				</Menu.Item>
			</Menu>
		);
	}
}

export default Nav;