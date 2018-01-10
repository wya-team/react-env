import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router';
class Nav extends Component {
	constructor(props){
		super(props);
	}
	render() {
		// 注意，这里的props是createNav中管理的
		const { menuProps } = this.props;
		return (
			<Menu {...menuProps}>
				<Menu.Item key="/tpl-pc/main">
					<Link to={'/tpl-pc/main'}><Icon type="mobile" /><span className="_nav-text">TPL_MAIN</span></Link>
				</Menu.Item>
				<Menu.Item key="/tpl-pc/second">
					<Link to={'/tpl-pc/second'}><Icon type="mobile" /><span className="_nav-text">TPL_SECOND</span></Link>
				</Menu.Item>
				<Menu.SubMenu
					key="/tpl-pc/third"
					title={<span><Icon type="scan" /><span className="_nav-text">TPL_THIRD</span></span>}
				>
					<Menu.Item key="/tpl-pc/third/one"><Link to={'/tpl-pc/third/one'}>ONE</Link></Menu.Item>
					<Menu.Item key="/tpl-pc/third/two"><Link to={'/tpl-pc/third/two'}>TWO</Link></Menu.Item>
					<Menu.Item key="/tpl-pc/third/three"><Link to={'/tpl-pc/third/three'}>THREE</Link></Menu.Item>
				</Menu.SubMenu>
			</Menu>
		);
	}
}

export default Nav;
