import axios from 'axios';
import { reset } from 'redux-form';
import YTSearch from 'youtube-api-search';
import config from '../../config';
import { 
	SEARCH_TITLE,
	FETCH_POPULAR,
	FETCH_MOVIE_DETAIL,
	FETCH_YT_VIDEO
} from './types';

//Youtube API
const YT_ROOT_URL = config.yt_root_url;
const YT_API_KEY = config.yt_api_key;
//MOVIE API
const MOVIEAPI_ROOT_URL = config.movie_root_url;
const MOVIE_API_KEY = config.movie_api_key;

export function fetchPopular() {
	return function(dispatch) {
		axios.get('https://reactmovieflicks.herokuapp.com/api/popular')
		.then(response => {
			console.log('this is the response', response);
			dispatch({
				type: FETCH_POPULAR,
				payload: response
			})
		})
	}
}

export function fetchMovieDetail(id) {
	return function(dispatch) {
		axios.get(`${MOVIEAPI_ROOT_URL}/${id}?api_key=${MOVIE_API_KEY}`)
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

