import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import App from './components/app';
import reducers from './reducers';
import MovieList from './components/movie_list';
import MovieDetail from './components/movie_detail';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
//store contains the redux state
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
	<Provider store={store}>
  		<Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
  			<Route path="/" component={App}>
  			<IndexRoute component={MovieList} />
  				<Route path="/:id" component={MovieDetail} />
  			</Route>
  		</Router>
  </Provider>
  , document.querySelector('.container'));