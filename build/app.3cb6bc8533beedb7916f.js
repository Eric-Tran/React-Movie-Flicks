webpackJsonp([0,3],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(1),u=r(o),l=n(29),a=r(l),c=n(161),i=n(168),f=n(187),s=r(f),d=n(188),p=r(d),b=(0,i.applyMiddleware)()(i.createStore);a["default"].render(u["default"].createElement(c.Provider,{store:b(p["default"])},u["default"].createElement(s["default"],null)),document.querySelector(".container"))},187:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),i=r(c),f=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),a(t,[{key:"render",value:function(){return i["default"].createElement("div",null,"Hello world!")}}]),t}(c.Component);t["default"]=f},188:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(168),o=(0,r.combineReducers)({state:function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];return e}});t["default"]=o}});