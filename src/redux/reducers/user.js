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
      if (action.payload.id !== 0) {
        localStorage.setItem('id', action.payload.id);
        localStorage.setItem('token', action.payload.token);
      }
      return setTrue(action.payload);
    case LOGOUT:
      localStorage.clear();
      return initialState;
    default:
      return state;
  }
};

export default user;
