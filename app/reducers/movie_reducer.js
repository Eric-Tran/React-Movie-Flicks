import { FETCH_POPULAR } from '../actions/types';


export default function(state = [], action) {
	switch (action.type) {
		case FETCH_POPULAR:
			return { ...state, data: action.payload.data.results };
	}
	return state
}