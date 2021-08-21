import React from 'react';
import PropTypes from 'prop-types';

const Bar = ({ title }) => (
  <nav className="navbar">
    <h1 className="title">{title}</h1>
  </nav>
);

Bar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Bar;
