webpackJsonp([0,3],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var a=n(1),o=r(a),l=n(31),i=r(l),u=n(165),c=n(172),f=n(193),s=n(254),p=r(s),d=n(255),v=r(d),m=n(346),h=r(m),y=n(342),b=r(y),E=n(350),_=r(E),O=n(353),g=r(O),w=(0,c.applyMiddleware)(p["default"])(c.createStore),j=w(h["default"]);i["default"].render(o["default"].createElement(u.Provider,{store:j},o["default"].createElement(f.Router,{onUpdate:function(){return window.scrollTo(0,0)},history:f.browserHistory},o["default"].createElement(f.Route,{path:"/",component:v["default"]},o["default"].createElement(f.IndexRoute,{component:b["default"]}),o["default"].createElement(f.Route,{path:"/:id",component:_["default"]}),o["default"].createElement(f.Route,{path:"/tv/:id",component:g["default"]})))),document.querySelector(".container"))},255:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=r(u),f=n(256),s=r(f),p=n(257),d=(r(p),n(342)),v=(r(d),function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){return c["default"].createElement("div",null,c["default"].createElement(s["default"],null),this.props.children)}}]),t}(u.Component));t["default"]=v},256:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),f=a(c),s=n(165),p=n(193),d=n(257),v=a(d),m=n(303),h=r(m),y=function(e){function t(){return o(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),u(t,[{key:"popularMovies",value:function(){this.props.fetchPopularMovies()}},{key:"topMovies",value:function(){this.props.fetchTopMovies()}},{key:"playingMovies",value:function(){this.props.fetchPlayingMovies()}},{key:"popularTv",value:function(){this.props.fetchPopularTv()}},{key:"topTv",value:function(){this.props.fetchTopTv()}},{key:"playingTv",value:function(){this.props.fetchPlayingTv()}},{key:"render",value:function(){return f["default"].createElement("div",{className:"header"},f["default"].createElement("nav",{className:"navbar"},f["default"].createElement("div",{className:"container"},f["default"].createElement("div",{className:"navbar-header"},f["default"].createElement(p.Link,{to:"/",className:"navbar-brand"},"Movie Flicks"),f["default"].createElement("ul",{className:"nav navbar-nav"},f["default"].createElement("li",{className:"nav-item"},f["default"].createElement(p.Link,{className:"nav-link nav-movie",to:"/",onClick:this.popularMovies.bind(this)},"Movies"),f["default"].createElement("ul",{className:"movie-links"},f["default"].createElement("li",{className:"nav-item"},f["default"].createElement(p.Link,{className:"nav-link",to:"/",onClick:this.popularMovies.bind(this)},"Popular")),f["default"].createElement("li",{className:"nav-item"},f["default"].createElement(p.Link,{className:"nav-link",to:"/",onClick:this.topMovies.bind(this)},"Top Rated")),f["default"].createElement("li",{className:"nav-item"},f["default"].createElement(p.Link,{className:"nav-link",to:"/",onClick:this.playingMovies.bind(this)},"Now Playing")))),f["default"].createElement("li",{className:"nav-item"},f["default"].createElement(p.Link,{className:"nav-link nav-tv",to:"/",onClick:this.popularTv.bind(this)},"TV Shows"),f["default"].createElement("ul",{className:"tv-links"},f["default"].createElement("li",{className:"nav-item"},f["default"].createElement(p.Link,{className:"nav-link",to:"/",onClick:this.popularTv.bind(this)},"Popular")),f["default"].createElement("li",{className:"nav-item"},f["default"].createElement(p.Link,{className:"nav-link",to:"/",onClick:this.topTv.bind(this)},"Top Rated")),f["default"].createElement("li",{className:"nav-item"},f["default"].createElement(p.Link,{className:"nav-link",to:"/",onClick:this.playingTv.bind(this)},"On TV")))),f["default"].createElement("li",{className:"nav-item"},f["default"].createElement(p.Link,{className:"nav-link",to:"/"},"All")))))),f["default"].createElement(v["default"],null))}}]),t}(c.Component);t["default"]=y,t["default"]=(0,s.connect)(null,h)(y)},257:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),s=a(f),p=n(258),d=(n(165),n(303)),v=r(d),m=function(e){function t(){return o(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),c(t,[{key:"handleFormSubmit",value:function(e){this.props.searchTitle(e.search)}},{key:"render",value:function(){var e=this.props,t=e.handleSubmit,n=e.fields.search;return s["default"].createElement("div",{className:"searchbar"},s["default"].createElement("form",{onSubmit:t(this.handleFormSubmit.bind(this))},s["default"].createElement("fieldset",{className:"form-group"},s["default"].createElement("input",u({className:"form-control searchbar-input",type:"text",placeholder:"Search for a movie or tv show..."},n)))))}}]),t}(f.Component);t["default"]=(0,p.reduxForm)({form:"movieForm",fields:["search"]},null,v)(m)},303:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(){return function(e){m["default"].get("/api/popular").then(function(t){e({type:O.FETCH_MOVIES,payload:t})})}}function o(){return function(e){m["default"].get("/api/top").then(function(t){e({type:O.FETCH_MOVIES,payload:t})})}}function l(){return function(e){m["default"].get("/api/playing").then(function(t){e({type:O.FETCH_MOVIES,payload:t})})}}function i(e){return function(t){m["default"].get("/api/detail/"+e).then(function(e){t({type:O.FETCH_MOVIE_DETAIL,payload:e})})}}function u(e){return function(t){m["default"].get("/api/search/"+e).then(function(e){t({type:O.FETCH_MOVIES,payload:e}),t((0,h.reset)("movieForm")),_.browserHistory.push("/")})}}function c(){return function(e){m["default"].get("/api/tv/popular").then(function(t){e({type:O.FETCH_MOVIES,payload:t})})}}function f(){return function(e){m["default"].get("/api/tv/top").then(function(t){e({type:O.FETCH_MOVIES,payload:t})})}}function s(){return function(e){m["default"].get("/api/tv/playing").then(function(t){e({type:O.FETCH_MOVIES,payload:t})})}}function p(e){return function(t){m["default"].get("/api/tv/detail/"+e).then(function(e){t({type:O.FETCH_MOVIE_DETAIL,payload:e})})}}function d(e){return function(t){var n={part:"snippet",key:w,q:e,type:"video"};m["default"].get(g,{params:n}).then(function(e){t({type:O.FETCH_YT_VIDEO,payload:e})})}}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchPopularMovies=a,t.fetchTopMovies=o,t.fetchPlayingMovies=l,t.fetchMovieDetail=i,t.searchTitle=u,t.fetchPopularTv=c,t.fetchTopTv=f,t.fetchPlayingTv=s,t.fetchTvDetail=p,t.fetchVideo=d;var v=n(304),m=r(v),h=n(258),y=n(326),b=(r(y),n(340)),E=r(b),_=n(193),O=n(341),g=E["default"].yt_root_url,w=E["default"].yt_api_key;E["default"].movie_root_url,E["default"].movie_api_key},340:function(e,t){e.exports={movie_root_url:"https://api.themoviedb.org/3",movie_api_key:"6cb8d1dbda0f4077648f28b2c46a20cd",yt_api_key:"AIzaSyDLI1PT8oiax7uQpacna-jYXdsMN7SX9p0",yt_root_url:"https://www.googleapis.com/youtube/v3/search"}},341:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SEARCH_TITLE="search_title",t.FETCH_MOVIES="fetch_popular",t.FETCH_MOVIE_DETAIL="fetch_movie_detail",t.FETCH_YT_VIDEO="fetch_youtube_video"},342:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{movies:e.movies.data}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),s=a(f),p=n(165),d=n(303),v=r(d),m=n(343),h=a(m),y=function(e){function t(e){o(this,t);var n=l(this,Object.getPrototypeOf(t).call(this,e));return n.state={showData:!1},n}return i(t,e),c(t,[{key:"componentWillMount",value:function(){this.props.movies||this.props.fetchPopularMovies()}}]),c(t,[{key:"showMovieDetail",value:function(e){this.context.router.push("/"+e)}},{key:"showTvDetail",value:function(e){this.context.router.push("/tv/"+e)}},{key:"renderMovieListItems",value:function(){var e=this;if(this.props.movies)return this.props.movies.map(function(t){return void 0!==t.release_date&&null!==t.release_date?s["default"].createElement(h["default"],{onClick:e.showMovieDetail.bind(e,t.id),key:t.id,data:t}):s["default"].createElement(h["default"],{onClick:e.showTvDetail.bind(e,t.id),key:t.id,data:t})})}},{key:"render",value:function(){return this.props.movies?s["default"].createElement("div",{className:"content-list"},s["default"].createElement("ul",null,this.renderMovieListItems())):s["default"].createElement("div",{className:"content-list"},s["default"].createElement("h2",null,"Loading..."))}}]),t}(f.Component);y.contextTypes={router:f.PropTypes.object},t["default"]=(0,p.connect)(u,v)(y)},343:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=r(u),f=n(344),s=r(f),p=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={hover:!1},n}return l(t,e),i(t,[{key:"toggleHover",value:function(){this.setState({hover:!this.state.hover})}},{key:"render",value:function(){var e=this.props.data,t=void 0;return this.state.hover&&(t={boxShadow:"10px 4px 12px rgba(0,0,0,1),0 2px #fff"}),void 0!==e.release_date&&null!==e.release_date?c["default"].createElement("li",{onClick:this.props.onClick,style:t,onMouseEnter:this.toggleHover.bind(this),onMouseLeave:this.toggleHover.bind(this)},c["default"].createElement("img",{src:"https://image.tmdb.org/t/p/w185"+e.poster_path}),c["default"].createElement(s["default"],{name:e.title,starCount:5,value:e.vote_average/2,editing:!1}),c["default"].createElement("p",null,e.title)):c["default"].createElement("li",{onClick:this.props.onClick,style:t,onMouseEnter:this.toggleHover.bind(this),onMouseLeave:this.toggleHover.bind(this)},c["default"].createElement("img",{src:"https://image.tmdb.org/t/p/w185"+e.poster_path}),c["default"].createElement(s["default"],{name:e.name,starCount:5,value:e.vote_average/2,editing:!1}),c["default"].createElement("p",null,e.name))}}]),t}(u.Component);t["default"]=p},346:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(172),o=n(258),l=n(347),i=r(l),u=n(348),c=r(u),f=n(349),s=r(f),p=(0,a.combineReducers)({form:o.reducer,detail:s["default"],movies:i["default"],video:c["default"]});t["default"]=p},347:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t["default"]=function(){var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],t=arguments[1];switch(t.type){case a.FETCH_MOVIES:return r({},e,{data:t.payload.data.results})}return e};var a=n(341)},348:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t["default"]=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];switch(t.type){case a.FETCH_YT_VIDEO:return r({},e,{data:t.payload.data.items})}return e};var a=n(341)},349:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t["default"]=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];switch(t.type){case a.FETCH_MOVIE_DETAIL:return r({},e,{data:t.payload.data})}return e};var a=n(341)},350:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{data:e.detail.data}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),s=a(f),p=n(165),d=n(303),v=r(d),m=n(351),h=a(m),y=n(344),b=a(y),E=n(352),_=a(E),O=function(e){function t(){return o(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),c(t,[{key:"componentWillMount",value:function(){this.props.fetchMovieDetail(this.props.params.id)}},{key:"render",value:function(){var e=this.props.data;return null==this.props.data?s["default"].createElement("div",null,"Loading..."):s["default"].createElement("div",{className:"content-detail"},s["default"].createElement("div",{className:"row"},s["default"].createElement("div",{className:"col-md-4"},s["default"].createElement("img",{src:"http://image.tmdb.org/t/p/w300"+e.poster_path,alt:"img"})),s["default"].createElement("div",{className:"col-md-8"},s["default"].createElement("h1",null,e.title," ",s["default"].createElement("span",null,"(",e.year,")")),s["default"].createElement(b["default"],{name:e.title,starCount:5,value:e.vote_average/1.8,editing:!1}),s["default"].createElement("h2",null,e.tagline),s["default"].createElement("p",null,e.overview),s["default"].createElement("hr",null),s["default"].createElement("div",{className:"movie-info"},s["default"].createElement("p",null,"Release Date: ",e.release_date),s["default"].createElement("p",null,"Runtime: ",e.runtime," minutes"),s["default"].createElement("p",null,"Budget: ",s["default"].createElement(_["default"],{value:e.budget,displayType:"text",thousandSeperator:!0,prefix:"$"})),s["default"].createElement("p",null,"Revenue: ",s["default"].createElement(_["default"],{value:e.revenue,displayType:"text",thousandSeperator:!0,prefix:"$"}))))),s["default"].createElement("div",{className:"content-detail-bottom"},s["default"].createElement(h["default"],{title:e.title+" "+e.year+" official trailer"})))}}]),t}(f.Component);t["default"]=(0,p.connect)(u,v)(O)},351:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{video:e.video.data}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),s=a(f),p=n(165),d=n(303),v=r(d),m=function(e){function t(){return o(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),c(t,[{key:"componentWillMount",value:function(){this.props.fetchVideo(this.props.title)}},{key:"componentWillReceiveProps",value:function(e){e.title!==this.props.title&&this.props.fetchVideo(e.title)}},{key:"render",value:function(){if(null==this.props.video)return s["default"].createElement("div",null,"Loading...");var e=this.props.video[0],t=e.id.videoId,n="https://www.youtube.com/embed/"+t;return s["default"].createElement("div",{className:"video-detail"},s["default"].createElement("div",{className:"embed-responsive embed-responsive-16by9"},s["default"].createElement("iframe",{className:"embed-responsive-item",src:n})),s["default"].createElement("div",{className:"details"}))}}]),t}(f.Component);t["default"]=(0,p.connect)(u,v)(m)},353:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return console.log("tv detail data",e.detail.data),{tvData:e.detail.data}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),s=a(f),p=n(165),d=n(303),v=r(d),m=n(351),h=a(m),y=n(344),b=a(y),E=function(e){function t(){return o(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),c(t,[{key:"componentWillMount",value:function(){this.props.fetchTvDetail(this.props.params.id)}},{key:"render",value:function(){var e=this.props.tvData;return null==e?s["default"].createElement("div",null,"Loading..."):s["default"].createElement("div",{className:"content-detail"},s["default"].createElement("div",{className:"row"},s["default"].createElement("div",{className:"col-md-4"},s["default"].createElement("img",{src:"http://image.tmdb.org/t/p/w300"+e.poster_path,alt:"img"})),s["default"].createElement("div",{className:"col-md-8"},s["default"].createElement("h1",null,e.name," ",s["default"].createElement("span",null,"(",e.year,")")),s["default"].createElement(b["default"],{name:e.name,starCount:5,value:e.vote_average/1.8,editing:!1}),s["default"].createElement("h2",null,"Overview"),s["default"].createElement("p",null,e.overview),s["default"].createElement("hr",null),s["default"].createElement("div",{className:"movie-info"},s["default"].createElement("p",null,"Release Date: ",e.first_air_date),s["default"].createElement("p",null,"Original Language: ",e.original_language),s["default"].createElement("p",null,"Seasons: ",e.number_of_seasons),s["default"].createElement("p",null,"Episodes: ",e.number_of_episodes)))),s["default"].createElement("div",{className:"content-detail-bottom"},s["default"].createElement(h["default"],{title:e.name+" "+e.year+" official trailer"})))}}]),t}(f.Component);t["default"]=(0,p.connect)(u,v)(E)}});