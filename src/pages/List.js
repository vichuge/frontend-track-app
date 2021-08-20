import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getList } from '../redux/actions';
import NavBar from '../components/NavBar';

const List = ({
  getList,
  list,
}) => {
  const history = useHistory();
  if (localStorage.length === 0) history.push('/logout');
  if (list.status === false) getList(localStorage.getItem('token'));
  return (
    <>
      <NavBar />
      <p>List!</p>
      {list.elements.map((elem) => (
        <Link to={`/form/${elem.id}`} key={elem.id}>{elem.title}</Link>
      ))}
    </>
  );
};

List.propTypes = {
  getList: PropTypes.func.isRequired,
  list: PropTypes.shape({
    elements: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    status: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  list: state.list,
});

const mapDistpachToProps = {
  getList,
};

export default connect(mapStateToProps, mapDistpachToProps)(List);
