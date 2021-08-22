import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Moment from 'moment';
import { getRecords } from '../redux/actions';
import NavBar from '../components/NavBar';
import Bar from '../components/Bar';

const Record = ({
  getRecords,
  record,
}) => {
  const history = useHistory();
  if (localStorage.length === 0) history.push('/logout');
  if (record.status === false) getRecords();
  let day = 0;
  return (
    <>
      <div className="wrap">
        <Bar title="Records" />
        <div className="columns is-mobile is-multiline list-columns">
          {record.elements.slice(0).reverse().map((elem) => {
            if (day !== Moment(elem.date_added).fromNow()) {
              day = Moment(elem.date_added).fromNow();
              return (
                <>
                  <p className="text-record">{day}</p>
                  <div className="column is-full column-record" key={elem.id}>
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
                </>
              );
            }
            return (
              <div className="column is-full" key={elem.id}>
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
        <NavBar isSelect="records" />
      </div>
    </>
  );
};

Record.propTypes = {
  getRecords: PropTypes.func.isRequired,
  record: PropTypes.shape({
    elements: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    status: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  record: state.record,
});

const mapDistpachToProps = {
  getRecords,
};

export default connect(mapStateToProps, mapDistpachToProps)(Record);
