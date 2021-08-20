import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <>
    <h1 className="navbar">Navbar</h1>
    <Link to="/list">List</Link>
    <Link to="/records">Progress</Link>
    <Link to="/logout">Logout</Link>
  </>
);

export default NavBar;
