import PropTypes from 'prop-types';

const Spinner = ({ label = 'Loading', size = 'md' }) => (
  <span className={`spinner spinner--${size}`} role="status">
    <span className="visually-hidden">{label}</span>
  </span>
);

Spinner.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default Spinner;
