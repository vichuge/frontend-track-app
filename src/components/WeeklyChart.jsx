import PropTypes from 'prop-types';
import { formatDayLabel, formatNarrowWeekday } from '../utils/dates';
import { pluralize } from '../utils/text';

/**
 * Single-series bar chart of cups per day (last 7 days).
 * Bars are focusable with a tooltip; a visually hidden table mirrors the data.
 */
const WeeklyChart = ({ days }) => {
  const max = Math.max(...days.map((day) => day.total), 1);
  const lastIndex = days.length - 1;
  return (
    <section className="card chart" aria-labelledby="chart-title">
      <h2 className="section-title" id="chart-title">Last 7 days</h2>
      <ol className="chart__bars" aria-hidden="true">
        {days.map((day, index) => {
          const label = `${formatDayLabel(day.date)}: ${pluralize(day.total, 'cup')}`;
          return (
            <li key={day.key} className={`chart__col ${index === lastIndex ? 'is-today' : ''}`.trim()}>
              <span className="chart__plot">
                {index === lastIndex && <span className="chart__label">{day.total}</span>}
                <span
                  className="chart__bar"
                  style={{ height: `${(day.total / max) * 100}%` }}
                  data-tooltip={label}
                />
              </span>
              <span className="chart__day">{formatNarrowWeekday(day.date)}</span>
            </li>
          );
        })}
      </ol>
      <table className="visually-hidden">
        <caption>Cups per day, last 7 days</caption>
        <thead><tr><th scope="col">Day</th><th scope="col">Cups</th></tr></thead>
        <tbody>
          {days.map((day) => (
            <tr key={day.key}>
              <th scope="row">{formatDayLabel(day.date)}</th>
              <td>{day.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

WeeklyChart.propTypes = {
  days: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    total: PropTypes.number.isRequired,
  })).isRequired,
};

export default WeeklyChart;
