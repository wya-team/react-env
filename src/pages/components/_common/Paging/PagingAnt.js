import React, { Component } from 'react';
import PropTypes from 'prop-types';
class CreatePaging extends Component {
	static propTypes = {
		resetPrvScrollTop: PropTypes.bool,
		loadDataForPaging: PropTypes.func.isRequired,
		wrappedProps: PropTypes.shape({
			listInfo: PropTypes.shape({
				isEnd: PropTypes.number.isRequired,
			})
		})
	}

	constructor(...params) {
		super(...params);
		this.wrapper = props.wrapper || '#contents';
		this.handleChange = ::this.handleChange;
		this.firstReq = ::this.firstReq;
	}
	componentWillMount() {
		this.firstReq(this.props);
	}
	componentDidMount() {
		this.scrollContainer = document.querySelector(this.wrapper);
	}
	componentWillReceiveProps(nextProps) {
		const _listInfo = this.props.wrappedProps.listInfo;
		const $listInfo = nextProps.wrappedProps.listInfo;
		if (this.props.resetPrvScrollTop && _listInfo.curPage != $listInfo.curPage) {
			this.prvScrollTop = 0;
			this.scrollContainer.scrollTop = 0; // 置顶
		}
		this.firstReq(nextProps);
	}
	handleChange(value) {
		const { wrappedProps } = this.props;
		this.props.loadDataForPaging(value.current, wrappedProps);
	}
	firstReq($props = {}) { // 第一次请求
		const { loadDataForPaging, wrappedProps } = $props;
		const $listInfo = wrappedProps.listInfo;
		const { isEnd, curPage } = $listInfo;
		if (isEnd > 0) { // 禁用，加载完成或者加载中无视
			return false;
		}
		if (curPage == 0) {
			// 这里使用this.props.curPage
			const _listInfo = this.props.wrappedProps.listInfo;
			const nextPage = _listInfo.resetPage == $listInfo.resetPage 
				? _listInfo.curPage 
				: 1;
			this.props.loadDataForPaging(nextPage, wrappedProps);
		}
	}
	render() {
		const { wrappedProps: { listInfo: { itemArr, curPage, totalCount, pageSize, isEnd } } } = this.props;
		return React.cloneElement(React.Children.only(this.props.children), {
			loading: isEnd == 1,
			changeCb: this.handleChange,
			dataSource: itemArr[curPage] || [],
			pagination: {
				current: curPage,
				total: totalCount,
				pageSize: pageSize
			}
		});
	}
}
export default CreatePaging;