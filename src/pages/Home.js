import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import logo from '../images/logo-white.png';
import { getUser } from '../redux/actions';

const Home = ({ getUser, user }) => {
  const showError = () => {
    document.getElementById('login-notification-bad').style.display = 'block';
    setTimeout(() => {
      document.getElementById('login-notification-bad').style.display = 'none';
    }, 3000);
  };
  if (user.status === true && user.id === 0) showError();
  const history = useHistory();
  if (user.status === true && user.id !== 0) history.push('/list');
  console.log(user);
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
  };
  const submitForm = (e) => {
    console.log('enterUser');
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    e.preventDefault();
    const loginInfo = getUser(e.target.email.value, e.target.password.value);
    console.log(loginInfo);
  };
  return (
    <div className="columns login">
      <div className="column is-flex is-justify-content-center">
        <section className="section">
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
                  <button type="submit" className="button is-success">
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

Home.propTypes = {
  getUser: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    token: PropTypes.string,
    status: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDistpachToProps = {
  getUser,
};

export default connect(mapStateToProps, mapDistpachToProps)(Home);
