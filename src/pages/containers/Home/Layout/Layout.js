import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router';
import createLayout from '@components/Layout/Layout';
import { getRoutes } from './config';
let LeftNav = undefined;
let TopNav = undefined;
const Layout = createLayout({
	name: "首页",
	path: "index",
	getRoutes,
	footer: false
});

export default Layout(LeftNav, TopNav);
