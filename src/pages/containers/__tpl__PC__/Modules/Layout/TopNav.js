import React, { Component, Fragment } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router';
class Nav extends Component {
	constructor(props){
		super(props);
	}
	render() {
		// 注意，这里的props是createNav中管理的
		const { collapsed, onToggle, onSignOut } = this.props;
		return (
			<Fragment>
				<div className="g-col" style={{ marginLeft: -25 }}>
					<Icon
						className="trigger"
						type={collapsed ? 'menu-unfold' : 'menu-fold'}
						onClick={onToggle}
					/>
				</div>
				<div className="g-tr">
					<div onClick={onSignOut} className="g-blue g-cp">
						退出登录[TopNav]
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Nav;
