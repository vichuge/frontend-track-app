import {
  ALL_ELEMENTS,
  ADD_ELEMENT,
  LOGIN,
  LOGOUT,
  ADD_RECORD,
  ERROR_RECORD,
  ALL_RECORDS,
  ERROR_RECORDS,
  FORM_FALSE,
  FORM_TRUE,
} from '../redux/actionTypes';

describe('Return different elements', () => {
  it('return ALL_ELEMENTS', () => {
    expect(ALL_ELEMENTS).toEqual('ALL_ELEMENTS');
  });
  it('return ADD_ELEMENT', () => {
    expect(ADD_ELEMENT).toEqual('ADD_ELEMENT');
  });
  it('return LOGIN', () => {
    expect(LOGIN).toEqual('LOGIN');
  });
  it('return LOGOUT', () => {
    expect(LOGOUT).toEqual('LOGOUT');
  });
  it('return ADD_RECORD', () => {
    expect(ADD_RECORD).toEqual('ADD_RECORD');
  });
  it('return ERROR_RECORD', () => {
    expect(ERROR_RECORD).toEqual('ERROR_RECORD');
  });
  it('return ALL_RECORDS', () => {
    expect(ALL_RECORDS).toEqual('ALL_RECORDS');
  });
  it('return ERROR_RECORDS', () => {
    expect(ERROR_RECORDS).toEqual('ERROR_RECORDS');
  });
  it('return FORM_FALSE', () => {
    expect(FORM_FALSE).toEqual('FORM_FALSE');
  });
  it('return FORM_TRUE', () => {
    expect(FORM_TRUE).toEqual('FORM_TRUE');
  });
});
