import mockRequest from './mockServer';
import { createToken } from './mockToken';

const login = () => mockRequest('POST', '/authentication', {
  body: { username: 'vichuge@mail.com', password: 'admin1234' },
});

describe('mock API (mirrors backend-track-app /api/v1)', () => {
  it('logs in the demo user and returns { id, username, token }', async () => {
    const { status, data } = await login();
    expect(status).toBe(201);
    expect(data).toEqual({ id: 1, username: 'vichuge@mail.com', token: expect.any(String) });
  });

  it('login is case-insensitive on the username', async () => {
    const { data } = await mockRequest('POST', '/authentication', {
      body: { username: '  VICHUGE@mail.com ', password: 'admin1234' },
    });
    expect(data.id).toBe(1);
  });

  it('rejects unknown users and wrong passwords with 401', async () => {
    await expect(mockRequest('POST', '/authentication', { body: { username: 'nobody', password: 'x' } }))
      .rejects.toMatchObject({ status: 401, message: 'No such user' });
    await expect(mockRequest('POST', '/authentication', { body: { username: 'vichuge@mail.com', password: 'nope' } }))
      .rejects.toMatchObject({ status: 401, message: 'Incorrect password' });
  });

  it('registers new users and validates them like the Rails model', async () => {
    const { status, data } = await mockRequest('POST', '/users', { body: { user: { username: 'ana', password: 'secret1' } } });
    expect(status).toBe(201);
    expect(data).toMatchObject({ id: 2, username: 'ana' });

    await expect(mockRequest('POST', '/users', { body: { user: { username: 'ana', password: 'secret1' } } }))
      .rejects.toMatchObject({ status: 422, message: 'Username has already been taken' });
    await expect(mockRequest('POST', '/users', { body: { user: { username: 'al', password: 'secret1' } } }))
      .rejects.toMatchObject({ status: 422 });
    await expect(mockRequest('POST', '/users', { body: { user: { username: 'carla', password: '123' } } }))
      .rejects.toMatchObject({ status: 422, message: 'Password is too short (minimum is 6 characters)' });
  });

  it('protects lists and records behind the Authorization header', async () => {
    await expect(mockRequest('GET', '/lists')).rejects.toMatchObject({ status: 401 });
    await expect(mockRequest('GET', '/records', { headers: { Authorization: 'garbage' } }))
      .rejects.toMatchObject({ status: 401 });
    const expired = createToken(1, Date.now() - 2 * 24 * 60 * 60 * 1000);
    await expect(mockRequest('GET', '/records', { headers: { Authorization: expired } }))
      .rejects.toMatchObject({ status: 401 });
  });

  it('returns lists as { id, title, icon }', async () => {
    const { data: { token } } = await login();
    const { data } = await mockRequest('GET', '/lists', { headers: { Authorization: token } });
    expect(data.length).toBeGreaterThan(0);
    data.forEach((list) => expect(Object.keys(list).sort()).toEqual(['icon', 'id', 'title']));
  });

  it('creates and returns records with the RecordRepresenter shape', async () => {
    const { data: { token } } = await login();
    const headers = { Authorization: token };
    const before = (await mockRequest('GET', '/records', { headers })).data;

    const { status, data } = await mockRequest('POST', '/records', { headers, body: { times: 3, list_id: 2 } });
    expect(status).toBe(201);
    expect(data).toEqual({
      id: expect.any(Number),
      times: 3,
      list: 'coffee',
      icon: 'fas fa-mug-hot',
      date_added: expect.any(String),
      user_id: 1,
    });

    const after = (await mockRequest('GET', '/records', { headers })).data;
    expect(after).toHaveLength(before.length + 1);
    after.forEach((record) => expect(new Date(record.date_added).getTime()).toBeLessThanOrEqual(Date.now()));
  });

  it('rejects invalid records with 422', async () => {
    const { data: { token } } = await login();
    const headers = { Authorization: token };
    await expect(mockRequest('POST', '/records', { headers, body: { times: 0, list_id: 1 } }))
      .rejects.toMatchObject({ status: 422 });
    await expect(mockRequest('POST', '/records', { headers, body: { times: 1, list_id: 999 } }))
      .rejects.toMatchObject({ status: 422, message: 'List must exist' });
  });

  it('answers 404 for unknown routes', async () => {
    await expect(mockRequest('DELETE', '/everything')).rejects.toMatchObject({ status: 404 });
  });
});
