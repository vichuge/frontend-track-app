import PropTypes from 'prop-types';
import { DAILY_GOAL_CUPS } from '../utils/records';
import { capitalize } from '../utils/text';
import Icon from './Icon';
import { pluralize } from '../utils/text';

const RADIUS = 34;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/** Progress ring: water cups today vs the daily goal. */
const HydrationSummary = ({ waterToday, totalToday, breakdown }) => {
  const progress = Math.min(waterToday / DAILY_GOAL_CUPS, 1);
  const remaining = Math.max(DAILY_GOAL_CUPS - waterToday, 0);
  return (
    <section className="card summary" aria-labelledby="summary-title">
      <svg className="summary__ring" viewBox="0 0 80 80" role="img" aria-label={`${waterToday} of ${DAILY_GOAL_CUPS} cups of water today`}>
        <circle className="summary__track" cx="40" cy="40" r={RADIUS} />
        <circle
          className="summary__progress"
          cx="40"
          cy="40"
          r={RADIUS}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
        />
        <text x="40" y="38" className="summary__value">{waterToday}</text>
        <text x="40" y="53" className="summary__unit">{`of ${DAILY_GOAL_CUPS}`}</text>
      </svg>
      <div>
        <h2 className="summary__title" id="summary-title">Water today</h2>
        <p className="summary__text">
          {remaining > 0
            ? `${pluralize(remaining, 'cup')} to reach your goal.`
            : 'Daily goal reached. Nice work!'}
        </p>
        <p className="summary__meta">{`${pluralize(totalToday, 'cup')} of all drinks today`}</p>
        {breakdown.length > 0 && (
          <ul className="summary__breakdown" aria-label="Today by drink">
            {breakdown.map(({ list, icon, total }) => (
              <li key={list} className="summary__pill">
                <Icon name={icon} />
                <span className="visually-hidden">{capitalize(list)}</span>
                {total}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

HydrationSummary.propTypes = {
  waterToday: PropTypes.number.isRequired,
  totalToday: PropTypes.number.isRequired,
  breakdown: PropTypes.arrayOf(PropTypes.shape({
    list: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
  })).isRequired,
};

export default HydrationSummary;
