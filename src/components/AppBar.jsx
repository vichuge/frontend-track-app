import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import Icon from './Icon';

/** Top bar of every authenticated screen. `backTo` renders a back button. */
const AppBar = ({ title, subtitle = null, backTo = null }) => {
  const navigate = useNavigate();
  return (
    <header className="app-bar">
      <div className="app-bar__inner">
        {backTo ? (
          <button type="button" className="icon-button app-bar__back" onClick={() => navigate(backTo)} aria-label="Go back">
            <Icon name="fas fa-arrow-left" />
          </button>
        ) : (
          <Icon name="fas fa-droplet" className="app-bar__logo" />
        )}
        <div>
          <h1 className="app-bar__title">{title}</h1>
          {subtitle && <p className="app-bar__subtitle">{subtitle}</p>}
        </div>
      </div>
    </header>
  );
};

AppBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  backTo: PropTypes.string,
};

export default AppBar;
