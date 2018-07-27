import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router';
class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			routes: props.getRoutes().config
		};
	}
	renderItem = (item = {}) => {
		const {
			label,
			icon,
			router,
			show
		} = item;
		if (!show) return null;
		return (
			<Menu.Item key={router}>
				<Link to={router}>
					<i className={`iconfont g-fs-16 g-m-r-10 ${icon}`} />
					<span className="_nav-text">{label}</span>
				</Link>
			</Menu.Item>
		);
	}
	render() {
		const { routes } = this.state;
		// 注意，这里的props是createNav中管理的
		const { menuProps } = this.props;

		return (
			<Menu {...menuProps}>
				{
					routes.map((item, index) => {
						const {
							label,
							icon,
							router,
							children,
							show
						} = item;
						if (!show) return null;
						if (!children) return this.renderItem(item);
						return (
							<Menu.SubMenu
								key={router}
								title={
									<div>
										<i className={`iconfont g-fs-16 g-m-r-10 ${icon}`} />
										<span className="_nav-text">{label}</span>
									</div>
								}
							>
								{
									children.map((_item) => {
										return this.renderItem(_item);
									})
								}
							</Menu.SubMenu>
						);
					})
				}
			</Menu>
		);
	}
}

export default Nav;
