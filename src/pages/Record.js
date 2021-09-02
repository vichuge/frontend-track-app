import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Moment from 'moment';
import { getRecords } from '../redux/actions';
import NavBar from '../components/NavBar';
import Bar from '../components/Bar';

const Record = () => {
  const record = useSelector((state) => state.record);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecords());
  }, [record.status]);
  let day = 0;
  useEffect(() => {
    if (localStorage.length === 0 || localStorage.token === 'undefined') history.push('/logout');
    const loading = document.getElementById('loading-screen');
    loading.style.display = 'block';
    if (record.status === true) {
      const loading = document.getElementById('loading-screen');
      loading.style.display = 'none';
    }
  });
  return (
    <>
      <div className="wrap-record">
        <Bar title="Records" />
        <div id="loading-screen">
          <i className="fas fa-spinner fa-pulse fa-5x" id="loading-record" />
        </div>
        <div className="columns is-mobile is-multiline list-columns">
          {record.elements.slice(0).reverse().map((elem) => {
            let dayText = '';
            if (day !== Moment(elem.date_added).fromNow()) {
              day = Moment(elem.date_added).fromNow();
              dayText = <p className="text-record">{day}</p>;
            } else {
              dayText = '';
            }
            return (
              <div className="column is-full text-records" key={`day-${elem.id}`}>
                {dayText}
                <div className="card">
                  <div className="card-content">
                    <div className="content">
                      <div className="columns is-mobile is-justify-content-space-around record-card-text">
                        <div className="column">
                          <p>{Moment(elem.date_added).format('MMM DD HH:mm')}</p>
                        </div>
                        <div className="column is-half">
                          <p className="times-record">
                            {elem.times}
                            &nbsp;
                            <i className={elem.icon} />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <NavBar isSelect="records" />
    </>
  );
};

export default Record;
