import { ADD_FORM, ERROR_RECORD } from '../actionTypes';

const initialState = {
  id: 0,
  times: 0,
  list: '',
  date_added: '0000-00-00T00:00:00.0000',
  status: false,
};

const setTrue = (obj1) => {
  const t = {
    ...obj1,
    status: true,
  };
  return t;
};

const list = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FORM:
      return setTrue(action.payload);
    case ERROR_RECORD:
      return action.payload;
    default:
      return state;
  }
};

export default list;
