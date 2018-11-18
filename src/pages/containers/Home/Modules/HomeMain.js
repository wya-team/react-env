import React, { Component, Fragment } from 'react'; ;
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as creators from '@stores/actions';
// 公用组件
// import SetTitle from '@components/_common/SetTitle/SetTitle';
// 业务组件

class Container extends Component {
	constructor(...params) {
		super(...params);
	}
	componentDidMount() {
		this.loadData(this.props);
	}
	loadData($props){
		return;
	}
	render() {
		return (
			<div>
				test
			</div>
		);
	}
};

Container.propTypes = {};

function mapStateToProps(state) {
	return {
		homeMain: state.homeMain,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(creators, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
