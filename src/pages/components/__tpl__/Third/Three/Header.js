import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pureRender from 'pure-render-decorator';
@pureRender
class Header extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div>
				TPL_THIRD_THREE_HEADER
			</div>
		);
	}
}
Header.propTypes = {
};
export default Header;