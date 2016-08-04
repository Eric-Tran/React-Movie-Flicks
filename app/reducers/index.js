import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import movieReducer from './movie_reducer';
import videoReducer from './video_reducer';
import detailReducer from './detail_reducer';

const rootReducer = combineReducers({
  form,
  detail: detailReducer,
  movies: movieReducer,
  video: videoReducer
});

export default rootReducer;