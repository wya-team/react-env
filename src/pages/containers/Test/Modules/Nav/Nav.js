import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router';
import createLayout from '@components/Layout/Layout';
@createLayout({ path: "test", footer: false })
class Nav extends Component {
	constructor(props){
		super(props);
	}
	render() {
		// 注意，这里的props是createNav中管理的
		const { menuProps } = this.props;
		return (
			<Menu {...menuProps}>
				<Menu.Item key="/test/main">
					<Link to={'/test/main'}><Icon type="mobile" /><span className="_nav-text">TEST_MAIN</span></Link>
				</Menu.Item>
				<Menu.Item key="/test/second">
					<Link to={'/test/second'}><Icon type="mobile" /><span className="_nav-text">TEST_SECOND</span></Link>
				</Menu.Item>
				<Menu.SubMenu
					key="/test/third"
					title={<span><Icon type="scan" /><span className="_nav-text">TEST_THIRD</span></span>}
				>
					<Menu.Item key="/test/third/one"><Link to={'/test/third/one'}>ONE</Link></Menu.Item>
					<Menu.Item key="/test/third/two"><Link to={'/test/third/two'}>TWO</Link></Menu.Item>
					<Menu.Item key="/test/third/three"><Link to={'/test/third/three'}>THREE</Link></Menu.Item>
				</Menu.SubMenu>
			</Menu>
		);
	}
}

export default Nav;

// 原方式，上面场景可能不适合全部人，可以用下面这种
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// class Nav extends Component {
// 	componentWillMount() {
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<div>我的导航</div>
// 				<div>{this.props.children}</div>
// 			</div>
// 		);
// 	}
// }

// Nav.propTypes = {};

// export default Nav;
