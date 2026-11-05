import PropTypes from 'prop-types';
import logo from '../assets/images/logo-white.png';

/** Branded full-screen layout for the login and sign-up screens. */
const AuthLayout = ({ title, subtitle, children }) => (
  <div className="auth">
    <main className="auth__container">
      <header className="auth__brand">
        <img src={logo} alt="" className="auth__logo" width="88" height="137" />
        <h1 className="auth__title">{title}</h1>
        <p className="auth__subtitle">{subtitle}</p>
      </header>
      {children}
    </main>
  </div>
);

AuthLayout.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
