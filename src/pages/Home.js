import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import logo from '../images/logo-white.png';
import { getUser, logout } from '../redux/actions';

const Home = () => {
  const user = useSelector((state) => state.user);
  const [username, setUsername] = useState('');
  const [usernameClass, setUsernameClass] = useState('input');
  const [usernameIconClass, setUsernameIconClass] = useState('');
  const [password, setPassword] = useState('');
  const [passClass, setPassClass] = useState('input');
  const [passIconClass, setPassIconClass] = useState('');
  const [button, setButton] = useState('Login');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const showError = () => {
    setButton('Login');
    dispatch(logout());
    setErrorMessage('It looks like you\'ve a trouble with your credentials, would you try again?');
    setTimeout(() => {
      setErrorMessage('');
    }, 3000);
  };
  const submitForm = (e) => {
    setButton(<i className="fas fa-spinner fa-pulse" />);
    e.preventDefault();
    dispatch(getUser(username, password));
  };
  useEffect(() => {
    if (user.status === true && user.id === 0) showError();
    if (localStorage.getItem('token')) history.push('/list');
    if (user.status === true && user.id !== 0) history.push('/list');
  }, [user.status]);
  useEffect(() => {
    if (username.length >= 3) {
      setUsernameClass('input is-success');
      setUsernameIconClass('fas fa-check green-validation');
    } else if (username.length <= 0) {
      setUsernameClass('input');
      setUsernameIconClass('');
    } else {
      setUsernameClass('input is-danger');
      setUsernameIconClass('fas fa-exclamation-triangle red-validation');
    }
  }, [username]);
  useEffect(() => {
    if (password.length >= 6) {
      setPassClass('input is-success');
      setPassIconClass('fas fa-check green-validation');
    } else if (password.length <= 0) {
      setPassClass('input');
      setPassIconClass('');
    } else {
      setPassClass('input is-danger');
      setPassIconClass('fas fa-exclamation-triangle red-validation');
    }
  }, [password]);
  return (
    <>
      <div className="rows login">
        {errorMessage && (
          <div className="row">
            <div className="notification is-danger">
              {errorMessage}
            </div>
          </div>
        )}
        <div className="row">
          <div className="column is-flex is-justify-content-center">
            <section className="section">
              <img src={logo} alt="logo" className="login-logo" />
              <h1 className="title login-title">
                Track water
              </h1>
              <div className="container">
                <form onSubmit={submitForm}>
                  <div className="field">
                    <p className="control has-icons-left has-icons-right">
                      <input onChange={(e) => setUsername(e.target.value)} className={usernameClass} type="text" placeholder="Username" required minLength="3" />
                      <span className="icon is-small is-left">
                        <i className="fas fa-user" />
                      </span>
                      <span className="icon is-small is-right">
                        <i className={usernameIconClass} />
                      </span>
                    </p>
                  </div>
                  <div className="field">
                    <p className="control has-icons-left has-icons-right">
                      <input onChange={(e) => setPassword(e.target.value)} className={passClass} type="password" id="password" placeholder="Password" required minLength="6" />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock" />
                      </span>
                      <span className="icon is-small is-right">
                        <i className={passIconClass} id="password-icon" />
                      </span>
                    </p>
                  </div>
                  <div className="field">
                    <p className="control">
                      <button type="submit" className="button is-success" id="login-button">
                        {button}
                      </button>
                    </p>
                  </div>
                </form>
              </div>
              <div className="container home-info">
                <p>Credentials:</p>
                <p>vichuge@mail.com</p>
                <p>admin1234</p>
              </div>
              <button type="button" onClick={() => history.push('/signup')} className="button is-large is-fullwidth is-success btn-signup">
                Sign Up
              </button>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
