import React from 'react';

const Form = () => {
  const validateTimes = (times) => {
    const re = /^[1-4][0-9]?$/;
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
    console.log('hi');
  };
  return (
    <>
      <div className="notification is-danger" id="form-notification-bad">
        It looks like we&apos;ve a problem with the API service
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
              <input onChange={changeTimes} className="input" type="number" id="times" placeholder="2" required min="1" max="49" />
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

export default Form;
