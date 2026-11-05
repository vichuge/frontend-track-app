import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router';
import { isMockApi } from '../api/client';
import { resetDb } from '../api/mockDb';
import Alert from '../components/Alert';
import AuthForm from '../components/AuthForm';
import AuthLayout from '../components/AuthLayout';
import Icon from '../components/Icon';
import seedUsers from '../mocks/users.json';
import { login } from '../store/authSlice';

const [demoUser] = seedUsers;
export const DEMO_CREDENTIALS = { username: demoUser.username, password: demoUser.password };

const LoginPage = () => {
  const dispatch = useDispatch();
  const [prefill, setPrefill] = useState(null);
  const [resetDone, setResetDone] = useState(false);

  const handleReset = () => {
    resetDb();
    setResetDone(true);
  };

  return (
    <AuthLayout title="Track water" subtitle="Stay hydrated, one cup at a time.">
      <AuthForm
        submitLabel="Log in"
        passwordAutoComplete="current-password"
        prefill={prefill}
        onSubmit={(credentials) => dispatch(login(credentials))}
      />

      <p className="auth__switch">
        New here?
        {' '}
        <Link to="/signup">Create an account</Link>
      </p>

      {isMockApi && (
        <aside className="demo-box" aria-labelledby="demo-title">
          <h2 className="demo-box__title" id="demo-title">
            <Icon name="fas fa-flask" />
            {' '}
            Demo mode
          </h2>
          <p>
            Everything runs in your browser. Log in as
            {' '}
            <strong>{DEMO_CREDENTIALS.username}</strong>
            {' / '}
            <strong>{DEMO_CREDENTIALS.password}</strong>
            .
          </p>
          <div className="demo-box__actions">
            <button type="button" className="button button--light" onClick={() => setPrefill({ ...DEMO_CREDENTIALS })}>
              Use demo account
            </button>
            <button type="button" className="button button--ghost" onClick={handleReset}>
              Reset demo data
            </button>
          </div>
          {resetDone && (
            <Alert variant="success" onDismiss={() => setResetDone(false)}>
              Demo data restored.
            </Alert>
          )}
        </aside>
      )}
    </AuthLayout>
  );
};

export default LoginPage;
