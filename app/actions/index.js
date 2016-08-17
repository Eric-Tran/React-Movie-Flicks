import axios from 'axios';
import { reset } from 'redux-form';
import YTSearch from 'youtube-api-search';
import config from '../../config';
import { browserHistory } from 'react-router';
import { 
	FETCH_MOVIES,
	FETCH_MOVIE_DETAIL,
	FETCH_YT_VIDEO
} from './types';

//Youtube API
const YT_ROOT_URL = config.yt_root_url;
const YT_API_KEY = config.yt_api_key;
//MOVIE API
const MOVIEAPI_ROOT_URL = config.movie_root_url;
const MOVIE_API_KEY = config.movie_api_key;

//Movie API Methods
export function fetchPopularMovies() {
	return function(dispatch) {
		axios.get('/api/popular')
		.then(response => {
			dispatch({
				type: FETCH_MOVIES,
				payload: response
			})
		})
	}
}

export function fetchTopMovies() {
	return function(dispatch) {
		axios.get('/api/top')
		.then(response => {
			dispatch({
				type: FETCH_MOVIES,
				payload: response
			})
		})
	}
}

export function fetchPlayingMovies() {
	return function(dispatch) {
		axios.get('/api/playing')
		.then(response => {
			dispatch({
				type: FETCH_MOVIES,
				payload: response
			})
		})
	}
}

export function fetchMovieDetail(id) {
	return function(dispatch) {
		axios.get(`/api/detail/${id}`)
		.then(response => {
			dispatch({
				type: FETCH_MOVIE_DETAIL,
				payload: response
			})
		})
	}
}
export function searchTitle(search) {
	return function(dispatch) {
		axios.get(`/api/search/${search}`)
		.then(response => {
			dispatch({
				type: FETCH_MOVIES,
				payload: response
			})
			dispatch(reset('movieForm'));
			browserHistory.push('/')
		})
	}
}

export function fetchPopularTv() {
	return function(dispatch) {
		axios.get('/api/tv/popular')
		.then(response => {
			dispatch({
				type: FETCH_MOVIES,
				payload: response
			})
		})
	}
}

export function fetchTopTv() {
	return function(dispatch) {
		axios.get('/api/tv/top')
		.then(response => {
			dispatch({
				type: FETCH_MOVIES,
				payload: response
			})
		})
	}
}

export function fetchPlayingTv() {
	return function(dispatch) {
		axios.get('/api/tv/playing')
		.then(response => {
			dispatch({
				type: FETCH_MOVIES,
				payload: response
			})
		})
	}
}
export function fetchTvDetail(id) {
	return function(dispatch) {
		axios.get(`/api/tv/detail/${id}`)
		.then(response => {
			dispatch({
				type: FETCH_MOVIE_DETAIL,
				payload: response
			})
		})
	}
}

//YOUTUBE API METHODS
export function fetchVideo(term) {
	return function(dispatch) {
		let params = {
			part: 'snippet',
			key: YT_API_KEY,
			q: term,
			type: 'video'
  };
		axios.get(YT_ROOT_URL, {params: params })
		.then(response => {
			dispatch({
				type: FETCH_YT_VIDEO,
				payload: response
			})
		})
	}
}

