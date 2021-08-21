import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <footer>
    <div className="columns is-mobile">
      <Link to="/list" className="column is-one-third footer-column">
        <i className="fas fa-cocktail fa-2x footer-icon" />
        <br />
        List
      </Link>
      <Link to="/records" className="column is-one-third footer-column">
        <i className="fas fa-list-alt fa-2x footer-icon" />
        <br />
        Progress
      </Link>
      <Link to="/logout" className="column is-one-third footer-column">
        <i className="fas fa-door-open fa-2x footer-icon" />
        <br />
        Logout
      </Link>
    </div>
  </footer>
);

export default NavBar;
