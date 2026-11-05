import PropTypes from 'prop-types';
import Icon from './Icon';

/** Drink icon (Font Awesome class from the API) inside a tinted circle. */
const DrinkIcon = ({ icon, size = 'md' }) => (
  <span className={`drink-icon drink-icon--${size}`}>
    <Icon name={icon} />
  </span>
);

DrinkIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default DrinkIcon;
