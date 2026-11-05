import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router';
import Alert from '../components/Alert';
import AppBar from '../components/AppBar';
import DrinkIcon from '../components/DrinkIcon';
import EmptyState from '../components/EmptyState';
import HydrationSummary from '../components/HydrationSummary';
import Spinner from '../components/Spinner';
import WeeklyChart from '../components/WeeklyChart';
import { fetchRecords, selectRecordsState, selectSortedRecords } from '../store/recordsSlice';
import { formatDayLabel, formatTime, isSameDay } from '../utils/dates';
import {
  groupRecordsByDay, lastDaysTotals, sumCups, totalsByDrink,
} from '../utils/records';
import { capitalize, pluralize } from '../utils/text';

const RecordsPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { status, error } = useSelector(selectRecordsState);
  const records = useSelector(selectSortedRecords);
  // Confirmation passed by AddRecordPage; kept locally so a refresh won't repeat it.
  const [added, setAdded] = useState(location.state?.added ?? null);

  useEffect(() => {
    dispatch(fetchRecords());
  }, [dispatch]);

  useEffect(() => {
    if (location.state?.added) navigate(location.pathname, { replace: true, state: null });
  }, [location, navigate]);

  useEffect(() => {
    if (!added) return undefined;
    const timer = setTimeout(() => setAdded(null), 4000);
    return () => clearTimeout(timer);
  }, [added]);

  const stats = useMemo(() => {
    const now = new Date();
    const today = records.filter((record) => isSameDay(record.date_added, now));
    return {
      groups: groupRecordsByDay(records),
      week: lastDaysTotals(records, 7, now),
      totalToday: sumCups(today),
      todayByDrink: totalsByDrink(today),
      waterToday: sumCups(today.filter((record) => record.list === 'water')),
    };
  }, [records]);

  const firstLoad = status === 'loading' && records.length === 0;

  return (
    <>
      <AppBar title="Records" subtitle="Your drinking history" />
      <div className="page">
        {added && (
          <div className="toast" role="status">
            <Alert variant="success" onDismiss={() => setAdded(null)}>{added.message}</Alert>
          </div>
        )}

        {status === 'failed' && (
          <Alert action={<button type="button" className="button button--small" onClick={() => dispatch(fetchRecords())}>Retry</button>}>
            {error}
          </Alert>
        )}

        {firstLoad && <div className="page--center"><Spinner size="lg" label="Loading records" /></div>}

        {status === 'succeeded' && records.length === 0 && (
          <EmptyState
            icon="fas fa-glass-water"
            title="No records yet"
            action={<Link to="/list" className="button button--primary">Log your first drink</Link>}
          >
            Every cup you log shows up here, grouped by day.
          </EmptyState>
        )}

        {records.length > 0 && (
          <>
            <HydrationSummary
              waterToday={stats.waterToday}
              totalToday={stats.totalToday}
              breakdown={stats.todayByDrink}
            />
            <WeeklyChart days={stats.week} />

            {stats.groups.map((group) => (
              <section key={group.key} className="day-group" aria-labelledby={`day-${group.key}`}>
                <header className="day-group__header">
                  <h2 className="section-title" id={`day-${group.key}`}>{formatDayLabel(group.date)}</h2>
                  <span className="day-group__total">{pluralize(group.total, 'cup')}</span>
                </header>
                <ul className="card record-list">
                  {group.records.map((record) => (
                    <li key={record.id} className={`record-item ${added?.id === record.id ? 'is-new' : ''}`.trim()}>
                      <DrinkIcon icon={record.icon} size="sm" />
                      <span className="record-item__name">{capitalize(record.list)}</span>
                      <time className="record-item__time" dateTime={record.date_added}>{formatTime(record.date_added)}</time>
                      <span className="record-item__cups">{`× ${record.times}`}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default RecordsPage;
