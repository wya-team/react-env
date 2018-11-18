import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as creators from '@stores/actions';
import Content from '@components/__tpl__/Second/Content';
import SetTitle from '@components/_common/SetTitle/SetTitle';
class Container extends Component {
	constructor(...params) {
		super(...params);
	}
	componentDidMount() {
		if (this.props.tplSecond.isFetching === 0) {
			let url = 'TPL_SECOND_GET';
			let param = {};

			let params = {
				param: param,
				ajaxType: 'GET',
				onSuccess: (res) => {
				},
				onError: (res) => {
				}
			};
			this.props.actions.request(url, params, {});
		}
	}
	render() {
		return (
			<Fragment>
				<Content />
			</Fragment>
		);
	}
}

function mapStateToProps(state) {
	return {
		tplMain: state.tplMain,
		tplSecond: state.tplSecond,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(creators, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);