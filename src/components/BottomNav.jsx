import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router';
import { logout } from '../store/authSlice';
import Icon from './Icon';

const LINKS = [
  { to: '/list', label: 'Drinks', icon: 'fas fa-glass-water' },
  { to: '/records', label: 'Records', icon: 'fas fa-chart-simple' },
];

const BottomNav = () => {
  const dispatch = useDispatch();
  return (
    <nav className="bottom-nav" aria-label="Main">
      {LINKS.map(({ to, label, icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => `bottom-nav__item ${isActive ? 'is-active' : ''}`.trim()}
        >
          <Icon name={icon} className="bottom-nav__icon" />
          <span>{label}</span>
        </NavLink>
      ))}
      <button type="button" className="bottom-nav__item" onClick={() => dispatch(logout())}>
        <Icon name="fas fa-right-from-bracket" className="bottom-nav__icon" />
        <span>Log out</span>
      </button>
    </nav>
  );
};

export default BottomNav;
