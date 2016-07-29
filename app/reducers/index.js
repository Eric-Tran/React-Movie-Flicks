import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import movieReducer from './movie_reducer';
import videoReducer from './video_reducer';

const rootReducer = combineReducers({
  form,
  movies: movieReducer,
  video: videoReducer
});

export default rootReducer;