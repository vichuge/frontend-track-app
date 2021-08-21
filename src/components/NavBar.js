import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = ({ isSelect }) => {
  console.log(isSelect);
  const options = [
    {
      id: 'list',
      to: '/list',
      className: 'column is-one-third footer-column',
      iClassName: 'fas fa-cocktail fa-2x footer-icon',
    },
    {
      id: 'records',
      to: '/records',
      className: 'column is-one-third footer-column',
      iClassName: 'fas fa-list-alt fa-2x footer-icon',
    },
    {
      id: 'logout',
      to: '/logout',
      className: 'column is-one-third footer-column',
      iClassName: 'fas fa-door-open fa-2x footer-icon',
    },
  ];
  return (
    <footer>
      <div className="columns is-mobile">
        {options.map((elem) => {
          if (isSelect === elem.id) {
            return (
              <Link key={elem.to} to={elem.to} className={`${elem.className} selected-footer`}>
                <i className={`${elem.iClassName} selected-footer`} />
                <br />
                List
              </Link>
            );
          }
          return (
            <Link key={elem.to} to={elem.to} className={elem.className}>
              <i className={elem.iClassName} />
              <br />
              List
            </Link>
          );
        })}

      </div>
    </footer>
  );
};

NavBar.propTypes = {
  isSelect: PropTypes.string.isRequired,
};

export default NavBar;
