import { LOGIN, LOGOUT } from '../actionTypes';

const initialState = {
  id: 0,
  username: '',
  token: '',
  status: false,
};

const setTrue = (obj1) => {
  const t = {
    ...obj1,
    status: true,
  };
  return t;
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return setTrue(action.payload);
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default user;
