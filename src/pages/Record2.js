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
        <Bar title="Progress" />
        <div className="columns is-mobile is-justify-content-center">
          <div className="column">
            <table className="table">
              <thead>
                <tr>
                  <th>Cups No.</th>
                  <th>drink</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Cups No.</th>
                  <th>drink</th>
                  <th>Time</th>
                </tr>
              </tfoot>
              <tbody>
                {record.elements.slice(0).reverse().map((elem) => {
                  if (day !== Moment(elem.date_added).format('MMMM DD')) {
                    day = Moment(elem.date_added).format('MMMM DD');
                    return (
                      <>
                        <tr>
                          <td>{day}</td>
                          <td>--</td>
                          <td>--</td>
                        </tr>
                        <tr>
                          <td>{elem.times}</td>
                          <td>{elem.list}</td>
                          <td>{Moment(elem.date_added).format('MMMM DD, LT')}</td>
                        </tr>
                      </>
                    );
                  }
                  return (
                    <tr key={elem.id}>
                      <td>{elem.times}</td>
                      <td>{elem.list}</td>
                      <td>{Moment(elem.date_added).format('MMMM DD, LT')}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <NavBar />
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
