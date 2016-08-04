import { FETCH_MOVIE_DETAIL } from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_MOVIE_DETAIL:
			return { ...state, data: action.payload.data };
	}
	return state
}