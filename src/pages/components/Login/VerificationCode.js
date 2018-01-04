import React, { Component } from 'react';
import * as types from '@constants/actions/login';
import apiRoot from '@constants/apiRoot';
import net from '@utils/net';
const Style = {
	width: 75,
	height: 32,
	float: 'right',
	fontSize: 20,
	textAlign: 'center',
	border: '1px solid #ccc',
	userSelect: 'none'
};
function createVCode() {
	let codeString = '0,1,2,3,4,5,6,7,8,9';
	codeString += ',a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,t,z';
	let codeArr = codeString.split(',');
	let codeData = [];
	let codeLength = 4;
	for (let i = 0; i < codeLength; i++) {
		codeData = [
			...codeData,
			codeArr[Math.ceil(Math.random() * 36) - 1]
		];
	}
	let StringCodeData = codeData.join('');
	return StringCodeData;
}
class Verification extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			verify_code: ""
		};
		this.handleClick = ::this.handleClick;
	}
	componentWillMount(){
		this.getVerifyImg();
	}
	handleClick(){
		this.getVerifyImg();
	}
	getVerifyImg() {
		let verify_code = createVCode();
		this.setState({
			...this.state,
			verify_code: verify_code
		});
	}
	render() {
		const {
			verify_code
		} = this.state;
		return (
			<span style={Style} onClick={this.handleClick}>{verify_code}</span>
		);
	}
}
export default Verification;