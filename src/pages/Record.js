import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Moment from 'moment';
import { getRecords } from '../redux/actions';
import NavBar from '../components/NavBar';

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
      <NavBar />
      <p>Records!</p>
      {record.elements.slice(0).reverse().map((elem) => {
        if (day !== Moment(elem.date_added).format('MMMM DD')) {
          day = Moment(elem.date_added).format('MMMM DD');
          return (
            <>
              <p>{day}</p>
              <p key={`rec-${elem.id}`}>{`${elem.times} measures of ${elem.list} on ${Moment(elem.date_added).format('MMMM DD, LT')}`}</p>
            </>
          );
        }
        return (
          <>
            <p key={`rec-${elem.id}`}>{`${elem.times} measures of ${elem.list} on ${Moment(elem.date_added).format('MMMM DD, LT')}`}</p>
          </>
        );
      })}
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
