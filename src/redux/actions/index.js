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
} from '../actionTypes';

export const login = (user) => ({ type: LOGIN, payload: user });
export const logout = () => ({ type: LOGOUT });
export const all = (all) => ({ type: ALL_ELEMENTS, payload: all });
export const addRec = (record) => ({ type: ADD_RECORD, payload: record });
export const errorRec = (record) => ({ type: ERROR_RECORD, payload: record });
export const listRecords = (records) => ({ type: ALL_RECORDS, payload: records });
export const errorRecords = (records) => ({ type: ERROR_RECORDS, payload: records });
export const formTrue = () => ({ type: FORM_TRUE });
export const formFalse = () => ({ type: FORM_FALSE });

export const getUser = (email, myPassword) => async (dispatch) => {
  const url = 'https://stormy-headland-20983.herokuapp.com/api/v1/login';
  axios.post(url, {
    username: email,
    password: myPassword,
  })
    .then((response) => {
      dispatch(login(response.data));
    })
    .catch(() => {
      const data = {
        id: 0,
        username: 'error',
        token: '',
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
      dispatch(all(response.data));
    })
    .catch(() => {
      const data = {
        elements: {},
        status: false,
      };
      localStorage.clear();
      dispatch(login(data));
    });
};

export const addRecord = (valListId, valTimes) => async (dispatch) => {
  const url = 'https://stormy-headland-20983.herokuapp.com/api/v1/records';
  const headersData = {
    Authorization: localStorage.getItem('token'),
  };
  const data = {
    times: valTimes,
    list_id: valListId,
    user_id: localStorage.getItem('id'),
  };
  axios.post(url, data, {
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
  const url = 'https://stormy-headland-20983.herokuapp.com/api/v1/records';
  const token = localStorage.getItem('token');
  axios.get(url, {
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
