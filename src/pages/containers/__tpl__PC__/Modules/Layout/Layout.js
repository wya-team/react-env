import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router';
import createLayout from '@components/Layout/Layout';
import LeftNav from './LeftNav';
import TopNav from './TopNav';
const Layout = createLayout({ 
	path: "tpl-pc", 
	footer: false 
});

export default Layout(LeftNav, TopNav);
