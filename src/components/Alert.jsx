import PropTypes from 'prop-types';
import Icon from './Icon';

const ICONS = {
  error: 'fas fa-circle-exclamation',
  info: 'fas fa-circle-info',
  success: 'fas fa-circle-check',
};

/** Inline message. Errors are announced immediately (`role="alert"`). */
const Alert = ({
  variant = 'error', children, action = null, onDismiss = null,
}) => (
  <div className={`alert alert--${variant}`} role={variant === 'error' ? 'alert' : 'status'}>
    <Icon name={ICONS[variant]} className="alert__icon" />
    <div className="alert__body">{children}</div>
    {action}
    {onDismiss && (
      <button type="button" className="icon-button alert__dismiss" onClick={onDismiss} aria-label="Dismiss">
        <Icon name="fas fa-xmark" />
      </button>
    )}
  </div>
);

Alert.propTypes = {
  variant: PropTypes.oneOf(['error', 'info', 'success']),
  children: PropTypes.node.isRequired,
  action: PropTypes.node,
  onDismiss: PropTypes.func,
};

export default Alert;
