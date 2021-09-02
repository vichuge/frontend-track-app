import { combineReducers } from 'redux';

import listReducer from './list';
import userReducer from './user';
import formReducer from './form';
import recordReducer from './record';

const rootReducer = combineReducers({
  list: listReducer,
  user: userReducer,
  form: formReducer,
  record: recordReducer,
});

export default rootReducer;
