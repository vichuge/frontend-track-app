import { useDispatch } from 'react-redux';
import { Link } from 'react-router';
import AuthForm from '../components/AuthForm';
import AuthLayout from '../components/AuthLayout';
import { signUp } from '../store/authSlice';

const SignUpPage = () => {
  const dispatch = useDispatch();
  return (
    <AuthLayout title="Create account" subtitle="Start tracking what you drink today.">
      <AuthForm
        submitLabel="Sign up"
        passwordAutoComplete="new-password"
        onSubmit={(credentials) => dispatch(signUp(credentials))}
      />
      <p className="auth__switch">
        Already have an account?
        {' '}
        <Link to="/">Log in</Link>
      </p>
    </AuthLayout>
  );
};

export default SignUpPage;
