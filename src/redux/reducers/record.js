import { ALL_RECORDS, ERROR_RECORDS } from '../actionTypes';

const initialState = {
  elements: [],
  status: false,
};

const list = (state = initialState, action) => {
  switch (action.type) {
    case ALL_RECORDS:
      return {
        elements: action.payload,
        status: true,
      };
    case ERROR_RECORDS:
      return state;
    default:
      return state;
  }
};

export default list;
