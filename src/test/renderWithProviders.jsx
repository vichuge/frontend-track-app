import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { AppRoutes } from '../App';
import { setupStore } from '../store';

/** Renders the full route tree at `route` with a fresh store. */
const renderApp = ({ route = '/', preloadedState } = {}) => {
  const store = setupStore(preloadedState);
  const utils = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        <AppRoutes />
      </MemoryRouter>
    </Provider>,
  );
  return { store, ...utils };
};

export default renderApp;
