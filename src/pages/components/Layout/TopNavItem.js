/**
 * 顶部导航栏Item
 */
import React, { PureComponent } from 'react';
import { Link } from 'react-router';

class TopNavItem extends PureComponent {
	render() {
		// router和pathname必须以'/'开头
		const { icon, label, pathname, router, show } = this.props;
		if (!show && router) return null;
		return (
			<Link 
				className="g-flex-cc g-fs-16 g-c-dark"
				style={
					{
						padding: "0 30px",
					}
				} 
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
						(pathname && router && router.split('/')[2] === pathname.split('/')[2]) && 
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
							}/>
					}
				</div>
			</Link>
		);
	}
}

export default TopNavItem;
