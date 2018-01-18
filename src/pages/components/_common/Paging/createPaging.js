import React, { Component } from 'react';
import PagingAnt from './PagingAnt';

const getDisplayName = WrappedComponent => WrappedComponent.displayName || WrappedComponent.name || 'Component';
// decorator
export default (options = {}) => function createPaging(WrappedComponent) {
	return class CreatePagingDecorated extends Component {
		constructor() {
			super();
			this.displayName = `PagingAnt${getDisplayName(WrappedComponent)}`;
		}

		render() {
			return (
				<PagingAnt {...options} wrappedProps={this.props}>
					<WrappedComponent {...this.props} ref="WrappedComponent" />
				</PagingAnt>
			);
		}
	};
};
// options: {
// 	resetPrvScrollTop: PropTypes.bool,
// 	loadDataForPaging: PropTypes.func.isRequired,
// }
