import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pureRender from 'pure-render-decorator';
@pureRender
class Content extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div>
				TPL_SECOND_HEADER
			</div>
		);
	}
}
Content.propTypes = {
};
export default Content;