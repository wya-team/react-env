import React, { Component, Fragment } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router';
import NavItem from '@components/Layout/TopNavItem';
class Nav extends Component {
	constructor(props){
		super(props);
	}
	render() {
		// 注意，这里的props是createNav中管理的
		const { collapsed, onToggle, onSignOut, pathname } = this.props;

		return (
			<Fragment>
				<NavItem
					label="TOP-NAV"
					icon="icon-task"
					router={'/tpl-pc/table'}
					pathname={pathname}
					show={true}
				/>
			</Fragment>
		);
	}
}

export default Nav;
