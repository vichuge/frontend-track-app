import axios from 'axios';
import { LOGIN } from '../actionTypes';

export const login = (user) => ({ type: LOGIN, payload: user });

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
