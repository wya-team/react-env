import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// 业务组件
import Header from '@components/__tpl__/Third/One/Header';
class Container extends Component {
	constructor(...params) {
		super(...params);
	}
	render() {
		return (
			<Fragment>
				<Header />
			</Fragment>
		);
	}
}

Container.propTypes = {};

export default Container;