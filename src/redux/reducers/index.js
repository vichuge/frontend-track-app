import { combineReducers } from 'redux';

import listReducer from './list';
import userReducer from './user';

const rootReducer = combineReducers({
  list: listReducer,
  user: userReducer,
});

export default rootReducer;
