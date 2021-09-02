import { ADD_RECORD, ALL_RECORDS, ERROR_RECORDS } from '../../redux/actionTypes';
import record from '../../redux/reducers/record';

describe('record data', () => {
  it('return user ADD_RECORD', () => {
    const f = record({
      elements: [],
      status: false,
    }, {
      type: ADD_RECORD,
      payload: 'recordTest',
    });
    expect(f.status).toBe(false);
  });
  it('return user ALL_RECORDS', () => {
    const f = record({
      elements: [],
      status: false,
    }, {
      type: ALL_RECORDS,
      payload: 'recordTest',
    });
    expect(f.status).toBe(true);
  });
  it('return user ERROR_RECORDS', () => {
    const f = record({
      elements: [],
      status: false,
    }, {
      type: ERROR_RECORDS,
    });
    expect(f.status).toBe(false);
  });
});
