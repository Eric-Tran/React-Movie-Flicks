import { FETCH_MOVIES } from '../actions/types';


export default function(state = [], action) {
	switch (action.type) {
		case FETCH_MOVIES:
			return { ...state, data: action.payload.data.results };
	}
	return state
}