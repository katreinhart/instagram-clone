import { combineReducers } from 'redux';
import like from './like';
import comment from './comments';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  like,
  comment
});

export default rootReducer;
