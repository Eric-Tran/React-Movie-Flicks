import axios from 'axios';
import { reset } from 'redux-form';
import YTSearch from 'youtube-api-search';
import { 
	SEARCH_TITLE,
	FETCH_POPULAR,
	FETCH_MOVIE_DETAIL,
	FETCH_YT_VIDEO
} from './types';

//Movie Data API
const MOVIEAPI_ROOT_URL = 'https://api.themoviedb.org/3/movie';
const MOVIE_API_KEY = '6cb8d1dbda0f4077648f28b2c46a20cd';

//Youtube API
const YT_API_KEY = 'AIzaSyDLI1PT8oiax7uQpacna-jYXdsMN7SX9p0';
const YT_ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

//MOVIE API METHODS
export function fetchPopular() {
	return function(dispatch) {
		axios.get(`${MOVIEAPI_ROOT_URL}/popular/?api_key=${MOVIE_API_KEY}`)
		.then(response => {
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

