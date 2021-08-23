import {
  login,
  logout,
  all,
  addRec,
  errorRec,
  listRecords,
  errorRecords,
  formTrue,
  formFalse,
} from '../redux/actions';

describe('Actions', () => {
  it('return login function', () => {
    expect(login('userTest')).toEqual({ payload: 'userTest', type: 'LOGIN' });
  });
  it('return logout function', () => {
    expect(logout()).toEqual({ type: 'LOGOUT' });
  });
  it('return all function', () => {
    expect(all('allTest')).toEqual({ payload: 'allTest', type: 'ALL_ELEMENTS' });
  });
  it('return addRec function', () => {
    expect(addRec('addRecTest')).toEqual({ payload: 'addRecTest', type: 'ADD_RECORD' });
  });
  it('return errorRec function', () => {
    expect(errorRec('errorRecTest')).toEqual({ payload: 'errorRecTest', type: 'ERROR_RECORD' });
  });
  it('return listRecords function', () => {
    expect(listRecords('listRecordsTest')).toEqual({ payload: 'listRecordsTest', type: 'ALL_RECORDS' });
  });
  it('return errorRecords function', () => {
    expect(errorRecords('errorRecordsTest')).toEqual({ payload: 'errorRecordsTest', type: 'ERROR_RECORDS' });
  });
  it('return formTrue function', () => {
    expect(formTrue()).toEqual({ type: 'FORM_TRUE' });
  });
  it('return formFalse function', () => {
    expect(formFalse()).toEqual({ type: 'FORM_FALSE' });
  });
});
