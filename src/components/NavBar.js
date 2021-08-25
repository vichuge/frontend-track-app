import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../redux/actions';

const NavBar = ({ isSelect }) => {
  const options = [
    {
      id: 'list',
      to: '/list',
      className: 'column is-one-third footer-column',
      iClassName: 'fas fa-cocktail fa-2x footer-icon',
      action: '',
    },
    {
      id: 'records',
      to: '/records',
      className: 'column is-one-third footer-column',
      iClassName: 'fas fa-list-alt fa-2x footer-icon',
      action: '',
    },
    {
      id: 'logout',
      to: '/',
      className: 'column is-one-third footer-column',
      iClassName: 'fas fa-door-open fa-2x footer-icon',
      action: 'logout',
    },
  ];
  const dispatch = useDispatch();
  const clickOption = (action) => {
    if (action === 'logout') dispatch(logout());
  };
  return (
    <footer>
      <div className="columns is-mobile">
        {options.map((elem) => (
          <Link onClick={() => clickOption(elem.action)} to={elem.to} key={elem.to} className={`${elem.className} ${(isSelect === elem.id) ? 'selected-footer' : ''}`}>
            <i className={`${elem.iClassName} ${(isSelect === elem.id) ? 'selected-footer' : ''}`} />
            <br />
            {elem.id}
          </Link>
        ))}
      </div>
    </footer>
  );
};

NavBar.propTypes = {
  isSelect: PropTypes.string.isRequired,
};

export default NavBar;
