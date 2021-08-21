import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { addRecord } from '../redux/actions';
import NavBar from '../components/NavBar';

const Form = ({ addRecord, form }) => {
  const history = useHistory();
  const { id } = useParams();
  if (form.status === true) {
    document.getElementById('form-notification-good').style.display = 'block';
    history.push('/records');
    // setTimeout(() => {}, 10000);
  }
  if (form.list === 'error') {
    document.getElementById('form-notification-bad').style.display = 'block';
    setTimeout(() => {
      document.getElementById('form-notification-bad').style.display = 'none';
    }, 3000);
  }
  if (localStorage.length === 0) useHistory().push('/logout');
  const validateTimes = (times) => {
    const re = /^[1-9][0-9]?$/;
    return re.test(times);
  };
  const changeTimes = (e) => {
    const times = document.getElementById('times');
    const timesIcon = document.getElementById('times-icon');
    if (validateTimes(e.target.value)) {
      times.className = 'input is-success';
      timesIcon.className = 'fas fa-check green-validation';
    } else {
      times.className = 'input is-danger';
      timesIcon.className = 'fas fa-exclamation-triangle red-validation';
    }
    if (e.target.value === '') {
      times.className = 'input';
      timesIcon.className = '';
    }
  };
  const submitForm = (e) => {
    e.preventDefault();
    const times = e.target.times.value;
    addRecord(id, times);
  };
  return (
    <>
      <NavBar />
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
      <form onSubmit={submitForm}>
        <div className="field">
          <label className="label" htmlFor="times">
            Cups/glass number you drink
            <p className="control has-icons-left has-icons-right">
              <input onChange={changeTimes} className="input" type="number" id="times" placeholder="2" required min="1" max="99" />
              <span className="icon is-small is-left">
                <i className="fas fa-glass-whiskey" />
              </span>
              <span className="icon is-small is-right">
                <i className="" id="times-icon" />
              </span>
            </p>
          </label>
        </div>
        <div className="field">
          <p className="control">
            <button type="submit" className="button is-success">
              Login
            </button>
          </p>
        </div>
      </form>
    </>
  );
};

Form.propTypes = {
  addRecord: PropTypes.func.isRequired,
  form: PropTypes.shape({
    id: PropTypes.number.isRequired,
    times: PropTypes.number.isRequired,
    list: PropTypes.string.isRequired,
    date_added: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  form: state.form,
});

const mapDistpachToProps = {
  addRecord,
};

export default connect(mapStateToProps, mapDistpachToProps)(Form);
