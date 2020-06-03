
import { combineReducers } from 'redux';
import tab from './tab';
import data from './data';

const rootReducer = combineReducers({
  tab,
  data
});

export default rootReducer;