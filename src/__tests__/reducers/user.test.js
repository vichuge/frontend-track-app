import { LOGIN, LOGOUT } from '../../redux/actionTypes';
import user from '../../redux/reducers/user';

describe('user data', () => {
  it('return user LOGIN', () => {
    const f = user(null, {
      type: LOGIN,
      payload: 'userTest',
    });
    expect(f.status).toBe(true);
  });
  it('return user LOGOUT', () => {
    const f = user(null, {
      type: LOGOUT,
      payload: 'userTest',
    });
    expect(f.status).toBe(false);
  });
});