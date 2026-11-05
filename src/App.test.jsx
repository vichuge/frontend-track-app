import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupStore } from './store';
import { login } from './store/authSlice';
import renderApp from './test/renderApp';

const loginAsDemo = async (user) => {
  await user.click(screen.getByRole('button', { name: 'Use demo account' }));
  await user.click(screen.getByRole('button', { name: 'Log in' }));
  return screen.findByRole('heading', { name: 'Drinks' });
};

describe('Track water app', () => {
  it('redirects anonymous users to the login screen', async () => {
    renderApp({ route: '/records' });
    expect(await screen.findByRole('heading', { name: 'Track water' })).toBeInTheDocument();
  });

  it('validates the login form before calling the API', async () => {
    const user = userEvent.setup();
    renderApp();
    await user.type(screen.getByLabelText('Username'), 'ab');
    await user.click(screen.getByRole('button', { name: 'Log in' }));
    expect(screen.getAllByText('Use at least 3 characters.')).toHaveLength(1);
    expect(screen.getByText('Use at least 6 characters.')).toBeInTheDocument();
  });

  it('shows the server error for wrong credentials', async () => {
    const user = userEvent.setup();
    renderApp();
    await user.type(screen.getByLabelText('Username'), 'vichuge@mail.com');
    await user.type(screen.getByLabelText('Password'), 'wrong-password');
    await user.click(screen.getByRole('button', { name: 'Log in' }));
    expect(await screen.findByRole('alert')).toHaveTextContent('Incorrect password');
  });

  it('logs in with the demo account, logs a drink and shows it in records', async () => {
    const user = userEvent.setup();
    renderApp();
    await loginAsDemo(user);

    await user.click(await screen.findByRole('link', { name: /Coffee/ }));
    expect(await screen.findByLabelText('How many cups of coffee did you drink?')).toHaveValue(1);
    await user.click(screen.getByRole('button', { name: 'One cup more' }));
    await user.click(screen.getByRole('button', { name: 'Save record' }));

    expect(await screen.findByText('Added 2 cups of coffee.')).toBeInTheDocument();
    const today = screen.getByRole('region', { name: 'Today' });
    expect(within(today).getAllByText('Coffee').length).toBeGreaterThan(0);
    expect(screen.getByRole('heading', { name: 'Water today' })).toBeInTheDocument();
  });

  it('signs up a new user and lands on the drinks screen', async () => {
    const user = userEvent.setup();
    renderApp({ route: '/signup' });
    await user.type(screen.getByLabelText('Username'), 'newbie');
    await user.type(screen.getByLabelText('Password'), 'secret123');
    await user.click(screen.getByRole('button', { name: 'Sign up' }));
    expect(await screen.findByRole('heading', { name: 'Drinks' })).toBeInTheDocument();

    await user.click(screen.getByRole('link', { name: 'Records' }));
    expect(await screen.findByText('No records yet')).toBeInTheDocument();
  });

  it('logs out from the bottom navigation', async () => {
    const user = userEvent.setup();
    renderApp();
    await loginAsDemo(user);
    await user.click(screen.getByRole('button', { name: 'Log out' }));
    expect(await screen.findByRole('heading', { name: 'Track water' })).toBeInTheDocument();
  });

  it('shows a friendly message for an unknown drink', async () => {
    const store = setupStore();
    await store.dispatch(login({ username: 'vichuge@mail.com', password: 'admin1234' }));
    renderApp({ route: '/form/999', preloadedState: { auth: store.getState().auth } });
    expect(await screen.findByText('Drink not found')).toBeInTheDocument();
  });
});
