import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../redux/actions';

const LogOut = ({ logout }) => {
  logout();
  const history = useHistory();
  history.push('/');
  return (
    <p>Log out!</p>
  );
};

LogOut.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapDistpachToProps = {
  logout,
};

export default connect(null, mapDistpachToProps)(LogOut);
