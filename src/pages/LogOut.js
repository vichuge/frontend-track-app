import React from 'react';
import { useHistory } from 'react-router-dom';

const LogOut = () => {
  const history = useHistory();
  history.push('/');
  return (
    <p>Log out!</p>
  );
};

export default LogOut;
