import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import logo from '../images/logo-white.png';
import { getUser, logout } from '../redux/actions';

const Home = () => {
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const showError = () => {
    dispatch(logout());
    const btn = document.getElementById('login-button');
    btn.innerHTML = 'Login';
    const badNotif = document.getElementById('login-notification-bad');
    badNotif.style.display = 'block';
    setTimeout(() => {
      if (badNotif) badNotif.style.display = 'none';
    }, 3000);
  };
  if (user.status === true && user.id === 0) showError();
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const changeEmail = (e) => {
    const email = document.getElementById('email');
    const emailIcon = document.getElementById('email-icon');
    if (validateEmail(e.target.value)) {
      email.className = 'input is-success';
      emailIcon.className = 'fas fa-check green-validation';
    } else {
      email.className = 'input is-danger';
      emailIcon.className = 'fas fa-exclamation-triangle red-validation';
    }
    if (e.target.value === '') {
      email.className = 'input';
      emailIcon.className = '';
    }
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    const password = document.getElementById('password');
    const passIcon = document.getElementById('password-icon');
    if (e.target.value.length >= 3) {
      password.className = 'input is-success';
      passIcon.className = 'fas fa-check green-validation';
    } else {
      password.className = 'input is-danger';
      passIcon.className = 'fas fa-exclamation-triangle red-validation';
    }
    if (e.target.value === '') {
      password.className = 'input';
      passIcon.className = '';
    }
    setPassword(e.target.value);
  };
  const submitForm = (e) => {
    const i = document.createElement('i');
    i.classList.add('fas');
    i.classList.add('fa-spinner');
    i.classList.add('fa-pulse');
    const btn = document.getElementById('login-button');
    btn.innerHTML = '';
    btn.appendChild(i);
    e.preventDefault();
    dispatch(getUser(email, password));
  };
  useEffect(() => {
    if (localStorage.getItem('token')) history.push('/list');
    if (user.status === true && user.id !== 0) history.push('/list');
  });
  return (
    <>
      <div className="rows login">
        <div className="row">
          <div className="notification is-danger" id="login-notification-bad">
            It looks like you&apos;ve a trouble with your credentials,
            <strong>
              would you try again?
            </strong>
          </div>
          <div className="notification is-success" id="login-notification-good">
            <strong>
              Done!
            </strong>
          </div>
        </div>
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
                      <input onChange={changeEmail} className="input" type="email" id="email" placeholder="Email" required />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope" />
                      </span>
                      <span className="icon is-small is-right">
                        <i className="" id="email-icon" />
                      </span>
                    </p>
                  </div>
                  <div className="field">
                    <p className="control has-icons-left has-icons-right">
                      <input onChange={changePassword} className="input" type="password" id="password" placeholder="Password" required minLength="3" />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock" />
                      </span>
                      <span className="icon is-small is-right">
                        <i className="" id="password-icon" />
                      </span>
                    </p>
                  </div>
                  <div className="field">
                    <p className="control">
                      <button type="submit" className="button is-success" id="login-button">
                        Login
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
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
