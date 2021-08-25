import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { addRecord } from '../redux/actions';
import NavBar from '../components/NavBar';
import Bar from '../components/Bar';

const Form = () => {
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const history = useHistory();
  const { id } = useParams();
  if (form.list === 'error') {
    document.getElementById('form-notification-bad').style.display = 'block';
    setTimeout(() => {
      document.getElementById('form-notification-bad').style.display = 'none';
    }, 3000);
  }
  if (localStorage.length === 0 || localStorage.token === 'undefined') useHistory().push('/logout');
  const validateTimes = (times) => {
    const re = /^[1-9][0-9]?$/;
    return re.test(times);
  };
  const changeTimes = (e) => {
    setCount(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addRecord(id, count));
  };
  useEffect(() => {
    const times = document.getElementById('times');
    const timesIcon = document.getElementById('times-icon');
    if (validateTimes(count)) {
      times.className = 'input is-success';
      timesIcon.className = 'fas fa-check green-validation';
    } else {
      times.className = 'input is-danger';
      timesIcon.className = 'fas fa-exclamation-triangle red-validation';
    }
    if (count === 0) {
      times.className = 'input';
      timesIcon.className = '';
    }
    if (form.status === true) {
      document.getElementById('form-notification-good').style.display = 'block';
    }
    if (form.status === true) history.push('/records');
  });
  return (
    <>
      <div className="wrap">
        <Bar title="Add record" />
        <nav className="navbar nav-form">
          <h1 className="subtitle">How many cups did you drink?</h1>
        </nav>
        <div className="notification is-danger" id="form-notification-bad">
          It looks like we&apos;ve a problem with the API service&nbsp;
          <strong>
            would you try again?
          </strong>
        </div>
        <div className="notification is-success" id="form-notification-good">
          <strong>
            Successful!
          </strong>
        </div>
        <div className="columns is-mobile columns-form is-justify-content-center content-form">
          <div className="column is-half">
            <form onSubmit={submitForm}>
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input onChange={changeTimes} className="input" type="number" id="times" placeholder="2" required min="1" max="99" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-glass-whiskey" />
                  </span>
                  <span className="icon is-small is-right">
                    <i className="" id="times-icon" />
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <button type="submit" className="button is-success">
                    Create record
                  </button>
                </p>
              </div>
            </form>
            <Link to="/list">
              <i className="fas fa-arrow-left fa-3x back-form" />
              <p className="back-form">back</p>
            </Link>
          </div>
        </div>
      </div>
      <NavBar isSelect="list" />
    </>
  );
};

export default Form;
