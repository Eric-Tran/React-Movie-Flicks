webpackJsonp([0,3],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var a=n(1),o=r(a),l=n(31),i=r(l),u=n(165),c=n(172),s=n(193),f=n(254),p=r(f),d=n(255),m=r(d),v=n(346),h=r(v),y=n(342),b=r(y),_=n(350),E=r(_),O=(0,c.applyMiddleware)(p["default"])(c.createStore),w=O(h["default"]);i["default"].render(o["default"].createElement(u.Provider,{store:w},o["default"].createElement(s.Router,{history:s.browserHistory},o["default"].createElement(s.Route,{path:"/",component:m["default"]},o["default"].createElement(s.IndexRoute,{component:b["default"]}),o["default"].createElement(s.Route,{path:"/:id",component:E["default"]})))),document.querySelector(".container"))},255:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=r(u),s=n(256),f=r(s),p=n(257),d=(r(p),n(342)),m=(r(d),function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){return c["default"].createElement("div",null,c["default"].createElement(f["default"],null),this.props.children)}}]),t}(u.Component));t["default"]=m},256:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=r(u),s=n(193),f=n(257),p=r(f),d=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:"header"},c["default"].createElement("nav",{className:"navbar"},c["default"].createElement("div",{className:"container"},c["default"].createElement("div",{className:"navbar-header"},c["default"].createElement(s.Link,{to:"/",className:"navbar-brand"},"Movie Time"),c["default"].createElement("ul",{className:"nav navbar-nav"},c["default"].createElement("li",{className:"nav-item"},c["default"].createElement(s.Link,{className:"nav-link nav-movie",to:"/movies"},"Movies"),c["default"].createElement("ul",{className:"movie-links"},c["default"].createElement("li",{className:"nav-item"},c["default"].createElement(s.Link,{className:"nav-link",to:"/movies"},"Popular")),c["default"].createElement("li",{className:"nav-item"},c["default"].createElement(s.Link,{className:"nav-link",to:"/movies"},"Top Rated")),c["default"].createElement("li",{className:"nav-item"},c["default"].createElement(s.Link,{className:"nav-link",to:"/movies"},"Now Playing")))),c["default"].createElement("li",{className:"nav-item"},c["default"].createElement(s.Link,{className:"nav-link nav-tv",to:"/tv"},"TV Shows"),c["default"].createElement("ul",{className:"tv-links"},c["default"].createElement("li",{className:"nav-item"},c["default"].createElement(s.Link,{className:"nav-link",to:"/tv"},"Popular")),c["default"].createElement("li",{className:"nav-item"},c["default"].createElement(s.Link,{className:"nav-link",to:"/tv"},"Top Rated")),c["default"].createElement("li",{className:"nav-item"},c["default"].createElement(s.Link,{className:"nav-link",to:"/tv"},"On Tv")))),c["default"].createElement("li",{className:"nav-item"},c["default"].createElement(s.Link,{className:"nav-link",to:"/all"},"All")))))),c["default"].createElement(p["default"],null))}}]),t}(u.Component);t["default"]=d},257:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),f=a(s),p=n(258),d=(n(165),n(303)),m=r(d),v=function(e){function t(){return o(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),c(t,[{key:"handleFormSubmit",value:function(e){var t=e.search;this.props.searchTitle({search:t})}},{key:"render",value:function(){var e=this.props,t=e.handleSubmit,n=e.fields.search;return f["default"].createElement("div",{className:"searchbar"},f["default"].createElement("form",{onSubmit:t(this.handleFormSubmit.bind(this))},f["default"].createElement("fieldset",{className:"form-group"},f["default"].createElement("input",u({className:"form-control searchbar-input",type:"text",placeholder:"Search for a movie or tv show..."},n)))))}}]),t}(s.Component);t["default"]=(0,p.reduxForm)({form:"movieForm",fields:["search"]},null,m)(v)},303:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(){return function(e){u["default"].get("http://localhost:5000/api/popular").then(function(t){console.log("this is the response",t),e({type:p.FETCH_POPULAR,payload:t})})}}function o(e){return function(t){u["default"].get(v+"/"+e+"?api_key="+h).then(function(e){t({type:p.FETCH_MOVIE_DETAIL,payload:e})})}}function l(e){return function(t){var n={part:"snippet",key:d,q:e,type:"video"};u["default"].get(m,{params:n}).then(function(e){t({type:p.FETCH_YT_VIDEO,payload:e})})}}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchPopular=a,t.fetchMovieDetail=o,t.fetchVideo=l;var i=n(304),u=r(i),c=(n(258),n(326)),s=(r(c),n(340)),f=r(s),p=n(341),d="AIzaSyDLI1PT8oiax7uQpacna-jYXdsMN7SX9p0",m="https://www.googleapis.com/youtube/v3/search",v="https://api.themoviedb.org/3/movie",h=f["default"].movie_api_key},340:function(e,t){e.exports={movie_api_key:"6cb8d1dbda0f4077648f28b2c46a20cd"}},341:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SEARCH_TITLE="search_title",t.FETCH_POPULAR="fetch_popular",t.FETCH_MOVIE_DETAIL="fetch_movie_detail",t.FETCH_YT_VIDEO="fetch_youtube_video"},342:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{movies:e.movies.data}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),f=a(s),p=n(165),d=n(303),m=r(d),v=n(343),h=a(v),y=function(e){function t(e){o(this,t);var n=l(this,Object.getPrototypeOf(t).call(this,e));return n.state={showData:!1},n}return i(t,e),c(t,[{key:"componentWillMount",value:function(){this.props.fetchPopular()}}]),c(t,[{key:"showMovieDetail",value:function(e){console.log("this is the data",e),this.context.router.push("/"+e)}},{key:"renderMovieListItems",value:function(){var e=this;if(this.props.movies)return this.props.movies.map(function(t){return f["default"].createElement(h["default"],{onClick:e.showMovieDetail.bind(e,t.id),key:t.id,data:t})})}},{key:"render",value:function(){return this.props.movies?f["default"].createElement("div",{className:"content-list"},f["default"].createElement("ul",null,this.renderMovieListItems())):f["default"].createElement("div",{className:"content-list"},f["default"].createElement("h2",null,"Loading..."))}}]),t}(s.Component);y.contextTypes={router:s.PropTypes.object},t["default"]=(0,p.connect)(u,m)(y)},343:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=r(u),s=n(344),f=r(s),p=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={hover:!1},n}return l(t,e),i(t,[{key:"toggleHover",value:function(){this.setState({hover:!this.state.hover})}},{key:"render",value:function(){var e=void 0;return this.state.hover&&(e={boxShadow:"10px 4px 12px rgba(0,0,0,1),0 2px #fff"}),c["default"].createElement("li",{onClick:this.props.onClick,style:e,onMouseEnter:this.toggleHover.bind(this),onMouseLeave:this.toggleHover.bind(this)},c["default"].createElement("img",{src:"http://image.tmdb.org/t/p/w185"+this.props.data.poster_path}),c["default"].createElement(f["default"],{name:this.props.data.title,starCount:5,value:this.props.data.vote_average/2,editing:!1}),c["default"].createElement("p",null,this.props.data.title))}}]),t}(u.Component);t["default"]=p},346:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(172),o=n(258),l=n(347),i=r(l),u=n(348),c=r(u),s=n(349),f=r(s),p=(0,a.combineReducers)({form:o.reducer,detail:f["default"],movies:i["default"],video:c["default"]});t["default"]=p},347:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t["default"]=function(){var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],t=arguments[1];switch(t.type){case a.FETCH_POPULAR:return r({},e,{data:t.payload.data.results})}return e};var a=n(341)},348:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t["default"]=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];switch(t.type){case a.FETCH_YT_VIDEO:return r({},e,{data:t.payload.data.items})}return e};var a=n(341)},349:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t["default"]=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];switch(t.type){case a.FETCH_MOVIE_DETAIL:return r({},e,{data:t.payload.data})}return e};var a=n(341)},350:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{data:e.detail.data}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),f=a(s),p=n(165),d=n(303),m=r(d),v=n(351),h=a(v),y=n(344),b=a(y),_=n(352),E=a(_),O=function(e){function t(){return o(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),c(t,[{key:"componentWillMount",value:function(){this.props.fetchMovieDetail(this.props.params.id)}},{key:"render",value:function(){if(null==this.props.data)return f["default"].createElement("div",null,"Loading...");var e=this.props.data,t=e.release_date.substring(0,4);({backgroundImage:"url(http://image.tmdb.org/t/p/w1280"+e.poster_path+")"});return f["default"].createElement("div",{className:"content-detail"},f["default"].createElement("div",{className:"row"},f["default"].createElement("div",{className:"col-md-4"},f["default"].createElement("img",{src:"http://image.tmdb.org/t/p/w300"+e.poster_path,alt:"img"})),f["default"].createElement("div",{className:"col-md-8"},f["default"].createElement("h1",null,e.title," ",f["default"].createElement("span",null,"(",t,")")),f["default"].createElement(b["default"],{name:e.title,starCount:5,value:e.vote_average/1.8,editing:!1}),f["default"].createElement("h2",null,e.tagline),f["default"].createElement("p",null,e.overview),f["default"].createElement("hr",null),f["default"].createElement("div",{className:"movie-info"},f["default"].createElement("p",null,"Release Date: ",e.release_date),f["default"].createElement("p",null,"Runtime: ",e.runtime," minutes"),f["default"].createElement("p",null,"Budget: ",f["default"].createElement(E["default"],{value:e.budget,displayType:"text",thousandSeperator:!0,prefix:"$"})),f["default"].createElement("p",null,"Revenue: ",f["default"].createElement(E["default"],{value:e.revenue,displayType:"text",thousandSeperator:!0,prefix:"$"}))))),f["default"].createElement("div",{className:"content-detail-bottom"},f["default"].createElement(h["default"],{title:e.title+" official trailer"})))}}]),t}(s.Component);t["default"]=(0,p.connect)(u,m)(O)},351:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return console.log("this is the state video",e),{video:e.video.data}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),f=a(s),p=n(165),d=n(303),m=r(d),v=function(e){function t(){var e,n,r,a;o(this,t);for(var i=arguments.length,u=Array(i),c=0;c<i;c++)u[c]=arguments[c];return n=r=l(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.state={title:r.props.title},a=n,l(r,a)}return i(t,e),c(t,[{key:"componentWillMount",value:function(){this.props.fetchVideo(this.props.title)}},{key:"componentWillReceiveProps",value:function(e){console.log("im being run!!!"),e.title!==this.props.title&&this.props.fetchVideo(e.title)}},{key:"render",value:function(){if(null==this.props.video)return f["default"].createElement("div",null,"Loading...");var e=this.props.video[0],t=e.id.videoId,n="https://www.youtube.com/embed/"+t;return f["default"].createElement("div",{className:"video-detail"},f["default"].createElement("div",{className:"embed-responsive embed-responsive-16by9"},f["default"].createElement("iframe",{className:"embed-responsive-item",src:n})),f["default"].createElement("div",{className:"details"}))}}]),t}(s.Component);t["default"]=(0,p.connect)(u,m)(v)}});