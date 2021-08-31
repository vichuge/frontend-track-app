import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { createUser, logout } from '../redux/actions';

const SignUp = () => {
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState('');
  const [emailClass, setEmailClass] = useState('input');
  const [emailIconClass, setEmailIconClass] = useState('');
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
    setErrorMessage('The email is actually subscribed, would you try anothe one?');
    setTimeout(() => {
      setErrorMessage('');
    }, 3000);
  };
  if (user.status === true && user.id === 0) showError();
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const submitForm = (e) => {
    setButton(<i className="fas fa-spinner fa-pulse" />);
    e.preventDefault();
    dispatch(createUser(email, password));
  };
  useEffect(() => {
    if (localStorage.getItem('token')) history.push('/list');
    if (user.status === true && user.id !== 0) history.push('/list');
    if (validateEmail(email)) {
      setEmailClass('input is-success');
      setEmailIconClass('fas fa-check green-validation');
    } else {
      setEmailClass('input is-danger');
      setEmailIconClass('fas fa-exclamation-triangle red-validation');
    }
    if (email === '') {
      setEmailClass('input');
      setEmailIconClass('');
    }
    if (password.length >= 3) {
      setPassClass('input is-success');
      setPassIconClass('fas fa-check green-validation');
    } else {
      setPassClass('input is-danger');
      setPassIconClass('fas fa-exclamation-triangle red-validation');
    }
    if (password === '') {
      setPassClass('input');
      setPassIconClass('');
    }
  });
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
                      <input onChange={(e) => setEmail(e.target.value)} className={emailClass} type="email" id="email" placeholder="Email" required />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope" />
                      </span>
                      <span className="icon is-small is-right">
                        <i className={emailIconClass} id="email-icon" />
                      </span>
                    </p>
                  </div>
                  <div className="field">
                    <p className="control has-icons-left has-icons-right">
                      <input onChange={(e) => setPassword(e.target.value)} className={passClass} type="password" id="password" placeholder="Password" required minLength="3" />
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
