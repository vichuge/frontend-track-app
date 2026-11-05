import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthError, selectAuth } from '../store/authSlice';
import Alert from './Alert';
import Spinner from './Spinner';
import TextField from './TextField';

export const USERNAME_MIN = 3;
export const PASSWORD_MIN = 6;

export const validateCredentials = ({ username, password }) => ({
  username: username.trim().length < USERNAME_MIN
    ? `Use at least ${USERNAME_MIN} characters.` : null,
  password: password.length < PASSWORD_MIN
    ? `Use at least ${PASSWORD_MIN} characters.` : null,
});

/**
 * Username + password form shared by login and sign-up.
 * Errors appear after a field is left (or on submit), never while typing.
 * `prefill` lets the parent inject credentials (e.g. the demo account).
 */
const AuthForm = ({
  submitLabel, onSubmit, prefill = null, passwordAutoComplete,
}) => {
  const dispatch = useDispatch();
  const { status, error: serverError } = useSelector(selectAuth);
  const [values, setValues] = useState({ username: '', password: '' });
  const [touched, setTouched] = useState({ username: false, password: false });
  const loading = status === 'loading';

  useEffect(() => {
    if (prefill) {
      setValues(prefill);
      setTouched({ username: false, password: false });
    }
  }, [prefill]);

  // Do not carry a server error over from another screen.
  useEffect(() => () => { dispatch(clearAuthError()); }, [dispatch]);

  const errors = validateCredentials(values);
  const visibleError = (field) => (touched[field] ? errors[field] : null);

  const handleChange = ({ target }) => {
    setValues((current) => ({ ...current, [target.name]: target.value }));
    if (serverError) dispatch(clearAuthError());
  };

  const handleBlur = ({ target }) => {
    setTouched((current) => ({ ...current, [target.name]: true }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTouched({ username: true, password: true });
    if (errors.username || errors.password || loading) return;
    onSubmit(values);
  };

  return (
    <form className="card auth__card" onSubmit={handleSubmit} noValidate>
      {serverError && <Alert>{serverError}</Alert>}
      <TextField
        label="Username"
        name="username"
        icon="fas fa-user"
        autoComplete="username"
        autoCapitalize="none"
        spellCheck={false}
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        error={visibleError('username')}
        required
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        icon="fas fa-lock"
        autoComplete={passwordAutoComplete}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={visibleError('password')}
        hint={`At least ${PASSWORD_MIN} characters.`}
        required
      />
      <button type="submit" className="button button--primary button--block" disabled={loading} aria-busy={loading}>
        {loading ? <Spinner size="sm" label="Please wait" /> : submitLabel}
      </button>
    </form>
  );
};

AuthForm.propTypes = {
  submitLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  passwordAutoComplete: PropTypes.oneOf(['current-password', 'new-password']).isRequired,
  prefill: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
  }),
};

export default AuthForm;
