import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logout, getList } from '../redux/actions';

const List = ({
  logout,
  getList,
  list,
}) => {
  const history = useHistory();
  if (localStorage.length === 0) history.push('/logout');
  if (list.status === false) getList(localStorage.getItem('token'));
  const logOut = () => logout();
  return (
    <>
      <p>List!</p>
      {list.elements.map((elem) => (
        <Link to={`/form/${elem.id}`} key={elem.id}>{elem.title}</Link>
      ))}
      <Link to="/logout" onClick={logOut}>Logout</Link>
    </>
  );
};

List.propTypes = {
  logout: PropTypes.func.isRequired,
  getList: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    token: PropTypes.string,
    status: PropTypes.bool,
  }).isRequired,
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
  logout,
  getList,
};

export default connect(mapStateToProps, mapDistpachToProps)(List);
