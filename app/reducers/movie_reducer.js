import { FETCH_POPULAR, FETCH_MOVIE_DETAIL } from '../actions/types';

const INITIAL_STATE = { data: [], detail: null };
export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_POPULAR:
			return { ...state, data: action.payload.data.results };
		case FETCH_MOVIE_DETAIL:
			return { ...state, detail: action.payload.data };
	}
	return state
}