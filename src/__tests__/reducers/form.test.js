import { FORM_FALSE, ERROR_RECORD, FORM_TRUE } from '../../redux/actionTypes';
import form from '../../redux/reducers/form';

describe('form data', () => {
  it('return form FORM_FALSE', () => {
    const f = form(null, {
      type: FORM_FALSE,
    });
    expect(f.status).toBe(false);
  });
  it('return form FORM_TRUE', () => {
    const f = form(null, {
      type: FORM_TRUE,
    });
    expect(f.status).toBe(true);
  });
  it('return form ERROR_RECORD', () => {
    const f = form(null, {
      type: ERROR_RECORD,
      payload: 'Error'
    });
    expect(f).toBe('Error');
  });
});