import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router';
import { selectIsAuthenticated } from '../store/authSlice';

/** Renders child routes only for logged-in users. */
export const RequireAuth = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const location = useLocation();
  if (!isAuthenticated) return <Navigate to="/" replace state={{ from: location.pathname }} />;
  return <Outlet />;
};

/** Login / sign-up screens: logged-in users go straight to the app. */
export const RedirectIfAuthenticated = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const location = useLocation();
  if (isAuthenticated) return <Navigate to={location.state?.from ?? '/list'} replace />;
  return <Outlet />;
};
