import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { createUser, logout } from '../redux/actions';

const SignUp = () => {
  const user = useSelector((state) => state.user);
  const [username, setUsername] = useState('');
  const [usernameClass, setUsernameClass] = useState('input');
  const [usernameIconClass, setUsernameIconClass] = useState('');
  const [password, setPassword] = useState('');
  const [passClass, setPassClass] = useState('input');
  const [passIconClass, setPassIconClass] = useState('');
  const [button, setButton] = useState('Sign Up');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const showError = () => {
    dispatch(logout());
    setButton('Sign Up');
    setErrorMessage('The username is actually subscribed, would you try anothe one?');
    setTimeout(() => {
      setErrorMessage('');
    }, 3000);
  };
  const submitForm = (e) => {
    setButton(<i className="fas fa-spinner fa-pulse" />);
    e.preventDefault();
    dispatch(createUser(username, password));
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
              <h1 className="title login-title">
                Sign Up
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
              <Link to="/">
                <i className="fas fa-arrow-left fa-3x back-signup" />
                <p className="back-signup">back</p>
              </Link>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
