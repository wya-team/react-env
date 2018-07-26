import React, { Component, Fragment } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router';
import { getCookie, getItem } from '@utils/utils';
import { getRoutes } from './config';
class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			routes: getRoutes().config
		};
	}
	renderItem = (item = {}) => {
		// router和pathname必须以'/'开头
		const { icon, label, router, show } = item;
		const { pathname } = this.props;
		if (!show && router) return null;
		return (
			<Link
				key={router}
				className="g-flex-cc g-fs-16"
				style={{ padding: "0 30px", textDecoration: 'none' }}
				to={router}
				activeStyle={{ color: '#0d94ff' }}
			>
				<div
					className="g-blue"
					style={
						{
							position: 'relative'
						}
					}
				>
					<i className={`iconfont g-m-r-10 ${icon}`} style={{ marginRight: '10px' }} />
					<span>{label}</span>
					{
						(pathname && router && router.split('/')[1] === pathname.split('/')[1]) &&
						<div style={
							{
								height: '2px',
								width: '100%',
								background: '#0b76fe',
								backgroundImage: 'linear-gradient(to right, #16a3ff, #0b76fe)',
								position: 'absolute',
								bottom: '0',
								left: '0'
							}
						} />
					}
				</div>
			</Link>
		);
	}
	render() {
		const { routes } = this.state;
		const { collapsed, onToggle, onSignOut } = this.props;
		return (
			<Fragment>
				{
					routes.map((item, index) => {
						return this.renderItem(item);
					})
				}
			</Fragment>
		);
	}
}

export default Nav;
