import { FETCH_YT_VIDEO } from '../actions/types';

export default function(state = {} , action) {
	switch (action.type) {
		case FETCH_YT_VIDEO:
			return { ...state, data: action.payload.data.items }
	}
	return state
}