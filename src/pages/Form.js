import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { addRecord } from '../redux/actions';
import NavBar from '../components/NavBar';
import Bar from '../components/Bar';

const Form = () => {
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const [count, setCount] = useState('');
  const [timesClass, setTimesClass] = useState('input');
  const [timesIconClass, setTimesIconClass] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();
  const { id } = useParams();
  if (form.list === 'error') {
    setErrorMessage('It looks like you\'ve a trouble with your credentials, would you try again?');
    setTimeout(() => {
      setErrorMessage('');
    }, 3000);
  }
  if (localStorage.length === 0 || localStorage.token === 'undefined') useHistory().push('/logout');
  const validateTimes = (times) => {
    const re = /^[1-9][0-9]?$/;
    return re.test(times);
  };
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addRecord(id, count));
  };
  useEffect(() => {
    if (form.status === true) history.push('/records');
    if (validateTimes(count)) {
      setTimesClass('input is-success');
      setTimesIconClass('fas fa-check green-validation');
    } else {
      setTimesClass('input is-danger');
      setTimesIconClass('fas fa-exclamation-triangle red-validation');
    }
    if (count === '') {
      setTimesClass('input');
      setTimesIconClass('');
    }
  });
  return (
    <>
      <div className="wrap">
        <Bar title="Add record" />
        <nav className="navbar nav-form">
          <h1 className="subtitle">How many cups did you drink?</h1>
        </nav>
        {errorMessage && (
          <div className="notification is-danger">
            {errorMessage}
          </div>
        )}
        <div className="columns is-mobile columns-form is-justify-content-center content-form">
          <div className="column is-half">
            <form onSubmit={submitForm}>
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input onChange={(e) => setCount(e.target.value)} className={timesClass} type="number" id="times" placeholder="2" required min="1" max="99" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-glass-whiskey" />
                  </span>
                  <span className="icon is-small is-right">
                    <i className={timesIconClass} id="times-icon" />
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
