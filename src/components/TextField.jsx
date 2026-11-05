import { useId, useState } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

/**
 * Labelled input with optional leading icon, hint and validation error.
 * Password fields get a show/hide toggle.
 */
const TextField = ({
  label, type = 'text', icon = null, hint = null, error = null, ...inputProps
}) => {
  const id = useId();
  const [visible, setVisible] = useState(false);
  const isPassword = type === 'password';
  const describedBy = error ? `${id}-error` : (hint && `${id}-hint`) || undefined;

  return (
    <div className={`field ${error ? 'field--invalid' : ''}`.trim()}>
      <label className="field__label" htmlFor={id}>{label}</label>
      <div className="field__control">
        {icon && <Icon name={icon} className="field__icon" />}
        <input
          id={id}
          className={`field__input ${icon ? 'field__input--with-icon' : ''}`.trim()}
          type={isPassword && visible ? 'text' : type}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          {...inputProps}
        />
        {isPassword && (
          <button
            type="button"
            className="icon-button field__toggle"
            onClick={() => setVisible((value) => !value)}
            aria-label={visible ? 'Hide password' : 'Show password'}
            aria-pressed={visible}
          >
            <Icon name={visible ? 'fas fa-eye-slash' : 'fas fa-eye'} />
          </button>
        )}
      </div>
      {error && <p className="field__error" id={`${id}-error`}>{error}</p>}
      {!error && hint && <p className="field__hint" id={`${id}-hint`}>{hint}</p>}
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  icon: PropTypes.string,
  hint: PropTypes.string,
  error: PropTypes.string,
};

export default TextField;
