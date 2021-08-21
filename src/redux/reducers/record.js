import { ADD_RECORD, ALL_RECORDS, ERROR_RECORDS } from '../actionTypes';

const initialState = {
  elements: [],
  status: false,
};

let newElement = '';

const list = (state = initialState, action) => {
  switch (action.type) {
    case ALL_RECORDS:
      return {
        elements: action.payload,
        status: true,
      };
    case ADD_RECORD:
      newElement = action.payload;
      return {
        elements: [...state.elements, newElement],
        status: false,
      };
    case ERROR_RECORDS:
      return state;
    default:
      return state;
  }
};

export default list;
