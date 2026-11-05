import PropTypes from 'prop-types';

/** Decorative Font Awesome icon. Always hidden from assistive technology. */
const Icon = ({ name, className = '' }) => (
  <i className={`${name} ${className}`.trim()} aria-hidden="true" />
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon;
