webpackJsonp([1],{217:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){return{testMain:e.testMain,testSecond:e.testSecond}}function l(e){return{actions:(0,d.bindActionCreators)(_,e)}}Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),p=o(s),y=n(1),d=(o(y),n(18)),b=n(40),h=n(224),_=r(h),v=n(39),O=r(v),w=n(223),m=(o(w),n(225)),j=o(m),P=function(e){function t(){return u(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),f(t,[{key:"componentDidMount",value:function(){if(0===this.props.testMain.isFetching){var e=O.TEST_MAIN_GET,t={},n={param:t,ajaxType:"GET",onSuccess:function(e){},onError:function(e){}};this.props.actions.request(e,n,{})}}},{key:"render",value:function(){return p.default.createElement("div",null,p.default.createElement(j.default,null))}}]),t}(s.Component);P.propTypes={},t.default=(0,b.connect)(c,l)(P)},223:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(0),s=r(f),p=n(1),y=r(p),d=(n(19),n(89)),b=r(d),h=(0,b.default)(a=function(e){function t(e){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),l(t,[{key:"componentDidMount",value:function(){this.setTitle()}},{key:"componentDidUpdate",value:function(){this.setTitle()}},{key:"componentWillUnmount",value:function(){}},{key:"setTitle",value:function(){var e=this.props.title;e!=document.title&&(document.title=e||"系统")}},{key:"hackForSetTitle",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.style,r=e.isShow,o=r?{}:{display:"none"};return s.default.createElement("div",{className:t,style:c({},n,o)},this.props.children)}}]),t}(f.Component))||a;h.propTypes={title:y.default.string,className:y.default.string,style:y.default.object,isShow:y.default.number,wrapper:y.default.string},h.defaultProps={wrapper:"window",isShow:1},t.default=h},224:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.request=void 0;var r=n(90);Object.defineProperty(t,"request",{enumerable:!0,get:function(){return r.request}});var o=n(39);!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(o)},225:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),f=r(l),s=n(1),p=(r(s),n(89)),y=r(p),d=(0,y.default)(a=function(e){function t(e,n){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n))}return i(t,e),c(t,[{key:"render",value:function(){return f.default.createElement("div",null,"TEST_MAIN_HEADER")}}]),t}(l.Component))||a;d.propTypes={},t.default=d}});