import { ALL_ELEMENTS } from '../actionTypes';

const list = (state = {}, action) => {
  switch (action.type) {
    case ALL_ELEMENTS:
      return action.payload;
    default:
      return state;
  }
};

export default list;
