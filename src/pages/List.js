import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logout, getList } from '../redux/actions';

const List = ({
  logout,
  getList,
  list,
  user,
}) => {
  console.log(list.elements);
  const history = useHistory();
  if (user.status === false) history.push('/');
  if (list.status === false && user.status === true) getList(user.token);
  // getList(user.token);
  const logOut = () => {
    console.log('logout');
    logout();
  };
  return (
    <>
      <p>List!</p>
      {list.elements.map((elem) => (
        <p key={elem.id}>{elem.title}</p>
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
  user: state.user,
  list: state.list,
});

const mapDistpachToProps = {
  logout,
  getList,
};

export default connect(mapStateToProps, mapDistpachToProps)(List);
