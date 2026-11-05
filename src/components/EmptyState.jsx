import PropTypes from 'prop-types';
import Icon from './Icon';

const EmptyState = ({
  icon, title, children = null, action = null,
}) => (
  <section className="empty-state">
    <span className="empty-state__icon"><Icon name={icon} /></span>
    <h2 className="empty-state__title">{title}</h2>
    {children && <p className="empty-state__text">{children}</p>}
    {action}
  </section>
);

EmptyState.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  action: PropTypes.node,
};

export default EmptyState;
