import axios from 'axios';
import { ALL_ELEMENTS, LOGIN, LOGOUT } from '../actionTypes';

export const login = (user) => ({ type: LOGIN, payload: user });
export const logout = () => ({ type: LOGOUT });
export const all = (all) => ({ type: ALL_ELEMENTS, payload: all });

export const getUser = (email, myPassword) => async (dispatch) => {
  const url = 'https://stormy-headland-20983.herokuapp.com/api/v1/login';
  axios.post(url, {
    username: email,
    password: myPassword,
  })
    .then((response) => {
      console.log(response);
      console.log(response.data);
      dispatch(login(response.data));
    })
    .catch((error) => {
      console.log(error);
      const data = {
        id: 0,
        username: 'error',
        token: 'error',
        status: false,
      };
      dispatch(login(data));
    });
};

export const getList = (token) => async (dispatch) => {
  const url = 'https://stormy-headland-20983.herokuapp.com/api/v1/lists';
  axios.get(url, {
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      console.log(response);
      console.log(response.data);
      dispatch(all(response.data));
    })
    .catch((error) => {
      console.log(error);
      const data = {
        elements: {},
        status: false,
      };
      dispatch(login(data));
      console.log(data);
    });
};
