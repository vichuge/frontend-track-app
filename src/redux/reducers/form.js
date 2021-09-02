import { FORM_FALSE, ERROR_RECORD, FORM_TRUE } from '../actionTypes';

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

const form = (state = initialState, action) => {
  switch (action.type) {
    case FORM_FALSE:
      return initialState;
    case ERROR_RECORD:
      return action.payload;
    case FORM_TRUE:
      return setTrue(initialState);
    default:
      return state;
  }
};

export default form;
