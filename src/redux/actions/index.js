import axios from 'axios';
import {
  ALL_ELEMENTS,
  LOGIN,
  LOGOUT,
  ADD_RECORD,
  ERROR_RECORD,
  ALL_RECORDS,
  ERROR_RECORDS,
  FORM_TRUE,
  FORM_FALSE,
  ELEMENTS_FALSE,
} from '../actionTypes';

export const login = (user) => ({ type: LOGIN, payload: user });
export const logoutReducer = () => ({ type: LOGOUT });
export const all = (all) => ({ type: ALL_ELEMENTS, payload: all });
export const addRec = (record) => ({ type: ADD_RECORD, payload: record });
export const errorRec = (record) => ({ type: ERROR_RECORD, payload: record });
export const listRecords = (records) => ({ type: ALL_RECORDS, payload: records });
export const errorRecords = (records) => ({ type: ERROR_RECORDS, payload: records });
export const formTrue = () => ({ type: FORM_TRUE });
export const formFalse = () => ({ type: FORM_FALSE });
export const recordsFalse = () => ({ type: ELEMENTS_FALSE });

export const logout = () => (dispatch) => {
  dispatch(recordsFalse());
  dispatch(logoutReducer());
  localStorage.clear();
};

const url = 'https://back-end-track-app.onrender.com/api/v1/';
const urlSignUp = `${url}users`;
const urlLogin = `${url}authentication`;
const urlLists = `${url}lists`;
const urlRecords = `${url}records`;

export const getUser = (email, myPassword) => async (dispatch) => {
  axios.post(urlLogin, {
    username: email,
    password: myPassword,
  })
    .then((response) => {
      dispatch(login(response.data));
    })
    .catch(() => {
      const data = {
        id: 0,
        username: '',
        token: '',
        status: false,
      };
      dispatch(login(data));
    });
};

export const createUser = (email, myPassword) => async (dispatch) => {
  axios.post(urlSignUp, {
    user: {
      username: email,
      password: myPassword,
    },
  })
    .then((response) => {
      dispatch(login(response.data));
    })
    .catch(() => {
      /* console.log('catch error!');
      console.log(error);
      const data = {
        id: 0,
        username: '',
        token: '',
        status: false,
      }; */
      dispatch(getUser(email, myPassword));
    });
};

export const getList = (token) => async (dispatch) => {
  axios.get(urlLists, {
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      dispatch(all(response.data));
    })
    .catch(() => {
      const data = {
        id: 0,
        username: '',
        token: '',
        status: false,
      };
      localStorage.clear();
      dispatch(login(data));
    });
};

export const addRecord = (valListId, valTimes) => async (dispatch) => {
  const headersData = {
    Authorization: localStorage.getItem('token'),
  };
  const data = {
    times: valTimes,
    list_id: valListId,
    user_id: localStorage.getItem('id'),
  };
  axios.post(urlRecords, data, {
    headers: headersData,
  })
    .then((response) => {
      dispatch(addRec(response.data));
      dispatch(formTrue());
    })
    .catch(() => {
      const data = {
        id: 0,
        times: 0,
        list: 'error',
        date_added: '0000-00-00T00:00:00.0000',
        status: false,
      };
      dispatch(errorRec(data));
    });
};

export const getRecords = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  axios.get(urlRecords, {
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      dispatch(listRecords(response.data));
      dispatch(formFalse());
    })
    .catch(() => {
      localStorage.clear();
      const data = {
        elements: [],
        status: false,
      };
      dispatch(errorRecords(data));
    });
};
