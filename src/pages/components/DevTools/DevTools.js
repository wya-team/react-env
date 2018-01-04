import React from 'react';

// Exported from redux-devtools
import {
	createDevTools
} from 'redux-devtools';

// Monitors are separate packages, and you can make a custom one
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

// createDevTools takes a monitor and produces a DevTools component
const DevTools = createDevTools(
	// Monitors are individually adjustable with props.
	// Consult their repositories to learn about those props.
	// Here, we put LogMonitor inside a DockMonitor.
	<DockMonitor defaultIsVisible={!1} toggleVisibilityKey="q" changePositionKey="w" defaultPosition="right" defaultSize={0.3}>
		<LogMonitor theme="tomorrow"/>
	</DockMonitor>
);
// 目前在开发环境可以使用Redux Devtools。可以在src/page/xxx/constatns/constants.js中的DEBUG里控制开关，true表示开启，false表示关闭。

// q进行切换
// h切换位置
// 其它命令:可以调defaultSize设置自己喜欢的大小。目前默认设置在底部，占30%的屏幕大小。
export default DevTools;