import React, { Component } from 'react';
import PropTypes from 'prop-types';
// 业务组件
import Header from '@components/Test/Third/Two/Header';
class Container extends Component {
	render() {
		return (
			<div className="g-none-select">
				<Header />
			</div>
		);
	}
}

Container.propTypes = {};

export default Container;