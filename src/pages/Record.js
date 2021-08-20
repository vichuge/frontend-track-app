import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getRecords } from '../redux/actions';
import NavBar from '../components/NavBar';

const Record = ({
  getRecords,
  record,
}) => {
  const history = useHistory();
  if (localStorage.length === 0) history.push('/logout');
  if (record.status === false) getRecords();
  console.log(record);
  return (
    <>
      <NavBar />
      <p>Records!</p>
      {record.elements.map((elem) => (
        <p key={elem.id}>{`${elem.times} cups of ${elem.list} on ${elem.date_added}`}</p>
      ))}
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
